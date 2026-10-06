// Turns the plain-text legal documents in design/ into typed content in src/content/.
// Usage: node scripts/build-legal-content.mjs
//
// Text format: line 1 title, line 2 version, line 3 summary heading, then summary paragraphs.
// "N. Heading" starts a section, "N.NText" starts a clause, "- item" adds to the clause's list,
// and "Company details" starts the closing block.
import { readFileSync, writeFileSync } from "node:fs";

const CONTACT_LINKS = [
  { match: "info@surgotechsolutions.co.uk", href: "mailto:info@surgotechsolutions.co.uk" },
  { match: "ico.org.uk", href: "https://ico.org.uk" },
  { match: "0303 123 1113", href: "tel:+443031231113" },
];

const DOCUMENTS = [
  {
    source: "design/privacy-policy.txt",
    output: "src/content/privacy.ts",
    name: "PRIVACY",
    route: "privacy",
    description:
      "We hold very little about you: an email address to sign you in, a billing record, and logs to keep the Service secure. Your data stays in the United Kingdom.",
    links: [{ match: "terms of service", href: "/startup-launchpad/terms" }],
  },
  {
    source: "design/terms.txt",
    output: "src/content/terms.ts",
    name: "TERMS",
    route: "terms",
    description:
      "Startup Launchpad is an automated code scanner sold for work use in the UK at £20 a month, with no minimum term. You keep your code and your findings, and you can cancel any time.",
    links: [{ match: "privacy policy", href: "/startup-launchpad/privacy" }],
  },
];

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function richText(text, links) {
  const pattern = new RegExp(links.map((l) => escapeRegExp(l.match)).join("|"), "g");
  const out = [];
  let last = 0;
  for (const m of text.matchAll(pattern)) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const link = links.find((l) => l.match === m[0]);
    out.push({ link: { label: m[0], href: link.href } });
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function parse(source, links) {
  const lines = readFileSync(source, "utf8").split("\n").map((l) => l.trim()).filter(Boolean);
  const rich = (text) => richText(text, links);
  const [title, version, summaryTitle, ...rest] = lines;
  const summary = [];
  const sections = [];
  const details = { title: "", lines: [] };
  let mode = "summary";

  for (const line of rest) {
    const section = /^(\d+)\. (.+)$/.exec(line);
    const clause = /^(\d+\.\d+)(.+)$/.exec(line);
    if (line === "Company details") {
      mode = "details";
      details.title = line;
    } else if (mode === "details") {
      details.lines.push(rich(line));
    } else if (section) {
      mode = "sections";
      sections.push({ number: section[1], title: section[2], clauses: [] });
    } else if (clause && mode === "sections") {
      sections.at(-1).clauses.push({ number: clause[1], text: rich(clause[2]) });
    } else if (line.startsWith("- ") && mode === "sections") {
      const current = sections.at(-1).clauses.at(-1);
      (current.list ??= []).push(rich(line.slice(2)));
    } else if (mode === "summary") {
      summary.push(rich(line));
    } else {
      throw new Error(`${source}: unrecognised line: ${line}`);
    }
  }

  if (/\u2014/.test(JSON.stringify({ title, version, summary, sections, details }))) {
    throw new Error(`${source}: contains an em dash`);
  }
  return { title, version, summary: { title: summaryTitle, paragraphs: summary }, sections, details };
}

for (const doc of DOCUMENTS) {
  const document = parse(doc.source, [...CONTACT_LINKS, ...doc.links]);
  const ts = `// Generated from ${doc.source} by scripts/build-legal-content.mjs. Edit the text and regenerate.
import { ROUTES } from "@/config/site";
import type { LegalDocumentContent, LegalPageContent, PageMeta } from "@/types";
import { LAUNCHPAD_HEADER } from "./launchpad";
import { FOOTER } from "./site";

export const ${doc.name}_DOCUMENT = ${JSON.stringify(document, null, 2)} as const satisfies LegalDocumentContent;

export const ${doc.name}_META = {
  title: ${JSON.stringify(document.title)},
  description: ${JSON.stringify(doc.description)},
  path: ROUTES.${doc.route},
} as const satisfies PageMeta;

export const ${doc.name}_PAGE = {
  header: LAUNCHPAD_HEADER,
  document: ${doc.name}_DOCUMENT,
  footer: FOOTER,
} as const satisfies LegalPageContent;
`;
  writeFileSync(doc.output, ts);
  const clauses = document.sections.reduce((n, s) => n + s.clauses.length, 0);
  const items = document.sections.reduce((n, s) => n + s.clauses.reduce((m, c) => m + (c.list?.length ?? 0), 0), 0);
  console.log(`${doc.output}: ${document.sections.length} sections, ${clauses} clauses, ${items} list items`);
}
