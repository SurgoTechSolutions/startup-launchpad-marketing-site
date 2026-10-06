// Turns the plain-text privacy policy into typed content for src/content/privacy.ts.
// Usage: node scripts/build-privacy-content.mjs design/privacy-policy.txt
import { readFileSync, writeFileSync } from "node:fs";

const source = process.argv[2];
if (source === undefined) throw new Error("Pass the path to the policy text file.");
const lines = readFileSync(source, "utf8").split("\n").map((l) => l.trim()).filter(Boolean);

// Contact details become links wherever they appear.
const LINKS = [
  { match: "info@surgotechsolutions.co.uk", href: "mailto:info@surgotechsolutions.co.uk" },
  { match: "ico.org.uk", href: "https://ico.org.uk" },
  { match: "0303 123 1113", href: "tel:+443031231113" },
];

function rich(text) {
  const pattern = new RegExp(LINKS.map((l) => l.match.replace(/[.]/g, "\\.")).join("|"), "g");
  const out = [];
  let last = 0;
  for (const m of text.matchAll(pattern)) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const link = LINKS.find((l) => l.match === m[0]);
    out.push({ link: { label: m[0], href: link.href } });
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

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
    throw new Error(`Unrecognised line: ${line}`);
  }
}

const document = { title, version, summary: { title: summaryTitle, paragraphs: summary }, sections, details };

const ts = `// Generated from the policy text by scripts/build-privacy-content.mjs. Edit the text and regenerate.
import { ROUTES } from "@/config/site";
import type { LegalDocumentContent, LegalPageContent, PageMeta } from "@/types";
import { LAUNCHPAD_HEADER } from "./launchpad";
import { FOOTER } from "./site";

export const PRIVACY_POLICY = ${JSON.stringify(document, null, 2)} as const satisfies LegalDocumentContent;

export const PRIVACY_META = {
  title: "Privacy Policy",
  description:
    "We hold very little about you: an email address to sign you in, a billing record, and logs to keep the Service secure. Your data stays in the United Kingdom.",
  path: ROUTES.privacy,
} as const satisfies PageMeta;

export const PRIVACY_PAGE = {
  header: LAUNCHPAD_HEADER,
  document: PRIVACY_POLICY,
  footer: FOOTER,
} as const satisfies LegalPageContent;
`;
writeFileSync("src/content/privacy.ts", ts);
console.log(`${sections.length} sections, ${sections.reduce((n, s) => n + s.clauses.length, 0)} clauses, ${summary.length} summary paragraphs, ${details.lines.length} detail lines`);
