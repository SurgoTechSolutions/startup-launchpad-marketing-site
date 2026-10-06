// Generated from the policy text by scripts/build-privacy-content.mjs. Edit the text and regenerate.
import { ROUTES } from "@/config/site";
import type { LegalDocumentContent, LegalPageContent, PageMeta } from "@/types";
import { LAUNCHPAD_HEADER } from "./launchpad";
import { FOOTER } from "./site";

export const PRIVACY_POLICY = {
  "title": "Privacy Policy",
  "version": "Version 1.1, in force from 4 October 2026.",
  "summary": {
    "title": "The short version",
    "paragraphs": [
      [
        "We hold very little about you: an email address to sign you in, a billing record, and logs to keep the Service secure. We never see your card number. We read your source code to scan it, and the AI analysis runs inside our own environment rather than going out to a model provider. Nothing is used to train an AI model, nothing is sold, and there are no advertising or analytics cookies. Your data stays in the United Kingdom."
      ],
      [
        "One distinction runs through this policy and decides who you should ask about what: we are the controller for your account and billing data, but only the processor for personal data that happens to sit inside a customer's source code. Section 2 explains the difference."
      ]
    ]
  },
  "sections": [
    {
      "number": "1",
      "title": "Who we are",
      "clauses": [
        {
          "number": "1.1",
          "text": [
            "Startup Launchpad is operated by SurgoTech Solutions Ltd, a company registered in England and Wales under company number 16857943, whose registered office is 8 Rockingham Drive, Washington, United Kingdom, NE38 8BF. This policy explains what we do with personal data when you use the Service."
          ]
        },
        {
          "number": "1.2",
          "text": [
            "You can reach us about anything in this policy at ",
            {
              "link": {
                "label": "info@surgotechsolutions.co.uk",
                "href": "mailto:info@surgotechsolutions.co.uk"
              }
            },
            ". We have no separate data protection officer, because we are not required to appoint one; that address reaches the people who decide how personal data is handled here."
          ]
        },
        {
          "number": "1.3",
          "text": [
            "This policy sits alongside our terms of service. Where the two documents deal with the same thing, the terms say that this policy prevails on how we handle personal data for which we are the controller."
          ]
        }
      ]
    },
    {
      "number": "2",
      "title": "The two roles we play, and why it matters to you",
      "clauses": [
        {
          "number": "2.1",
          "text": [
            "Data protection law splits responsibility between the party that decides why personal data is used (the controller) and the party that only acts on instructions (the processor). We are both, for different data, and the difference decides who you ask when you want something changed or deleted."
          ]
        },
        {
          "number": "2.2",
          "text": [
            "We are the controller for the personal data that comes from running an account: the names and email addresses of the people who sign in, billing records, support conversations and security logs. Sections 3 to 6 cover that data, and your rights in section 11 apply to us directly."
          ]
        },
        {
          "number": "2.3",
          "text": [
            "We are the processor for personal data that happens to sit inside the source code we scan. We did not choose to collect it and we do not decide what it is for; the business whose repository it is remains the controller. Section 7 covers that data."
          ]
        },
        {
          "number": "2.4",
          "text": [
            "So if you are an individual whose personal data appears in someone else's source code, we are not the right people to ask. Contact the business that owns the repository, and we will support them in answering you."
          ]
        }
      ]
    },
    {
      "number": "3",
      "title": "What we collect about you",
      "clauses": [
        {
          "number": "3.1",
          "text": [
            "As controller, we collect:"
          ],
          "list": [
            [
              "account data: your name if you give one, your email address, the account you belong to and your role in it, and the invitations you send or accept. When you create a free account we also keep a fingerprint (a cryptographic hash) of your email address, which lets us recognise another spelling of the same address and so limit each person to one free account. We keep the fingerprint rather than a second copy of the address, although someone who already knew your address could match it to the fingerprint. It is deleted with the account;"
            ],
            [
              "sign-in data: the single-use links we email you, the sessions they create, and the time and IP address a sign-in came from;"
            ],
            [
              "billing data: your subscription status, invoices, and the customer and subscription identifiers our payment processor gives us. We never see or hold your full card number;"
            ],
            [
              "repository metadata: which repositories you have connected, their names, branches and commit references, and who connected them;"
            ],
            [
              "site addresses: the URL of any live site you ask us to audit;"
            ],
            [
              "support data: the emails you send us and our replies; and"
            ],
            [
              "technical logs: records of requests to the Service, errors and security events."
            ]
          ]
        },
        {
          "number": "3.2",
          "text": [
            "We do not ask you for a postal address, a date of birth, or any special category data such as health, ethnicity or political opinions. Please do not send us any."
          ]
        },
        {
          "number": "3.3",
          "text": [
            "We do not buy personal data from anyone, and we do not sell yours."
          ]
        }
      ]
    },
    {
      "number": "4",
      "title": "Where we get it from",
      "clauses": [
        {
          "number": "4.1",
          "text": [
            "Most of it comes from you, when you sign up, connect a repository or email us."
          ]
        },
        {
          "number": "4.2",
          "text": [
            "Some comes from GitHub, when you install our GitHub App: the repositories you authorised, their metadata and their contents. We only ever receive what you or your organisation's owner allowed."
          ]
        },
        {
          "number": "4.3",
          "text": [
            "Some comes from Stripe, when you pay: whether a payment succeeded, the country your card or bank account is registered in, and the identifiers we use to recognise your subscription."
          ]
        },
        {
          "number": "4.4",
          "text": [
            "If a colleague invites you to an account, we will have your email address from them before you have given us anything yourself."
          ]
        }
      ]
    },
    {
      "number": "5",
      "title": "Why we use it, and our lawful basis",
      "clauses": [
        {
          "number": "5.1",
          "text": [
            "We use personal data for the following purposes, on the following lawful bases under Article 6 of the UK GDPR:"
          ],
          "list": [
            [
              "to provide the Service, run scans and show you findings. Where you are the subscriber, our basis is performance of our contract with you. Where you use the Service as a member of a subscribing organisation, our basis is our legitimate interest in delivering the service that organisation has bought;"
            ],
            [
              "to sign you in and keep your account secure. Our basis is performance of the contract, and our legitimate interest in preventing unauthorised access;"
            ],
            [
              "to take payment and chase unpaid invoices. Our basis is performance of the contract;"
            ],
            [
              "to keep accounting and tax records. Our basis is compliance with a legal obligation;"
            ],
            [
              "to protect the Service against abuse, fraud and attack, and to investigate incidents. Our basis is our legitimate interest in keeping the Service safe for everyone using it;"
            ],
            [
              "to answer your support questions. Our basis is performance of the contract and our legitimate interest in running a service people can get help with;"
            ],
            [
              "to understand how the Service is used and improve it, using aggregated statistics that do not identify anyone. Our basis is our legitimate interest in improving the product; and"
            ],
            [
              "to send you service messages about scans, billing and changes to these documents. Our basis is performance of the contract. These are not marketing, and you cannot opt out of them while you hold an account."
            ]
          ]
        },
        {
          "number": "5.2",
          "text": [
            "Where we rely on legitimate interests, we have considered whether our interest is overridden by your rights, and concluded it is not, because the processing is what you would expect from a tool your business has chosen and is limited to what running it requires. You can ask us for that assessment, and you can object under section 11."
          ]
        },
        {
          "number": "5.3",
          "text": [
            "We do not send marketing emails unless you have asked for them, and every marketing email we ever send will have a working unsubscribe link."
          ]
        }
      ]
    },
    {
      "number": "6",
      "title": "Who we share it with",
      "clauses": [
        {
          "number": "6.1",
          "text": [
            "We share personal data with the suppliers that run the Service for us, each of which processes it only on our instructions:"
          ],
          "list": [
            [
              "Amazon Web Services, which hosts the Service, runs the scans and the AI analysis, stores their results and sends our email, in the London (eu-west-2) region; and"
            ],
            [
              "Neon, which hosts our database and sign-in service, in the same region."
            ]
          ]
        },
        {
          "number": "6.2",
          "text": [
            "We put a written contract in place with each of them imposing data protection obligations equivalent to our own, and we stay responsible to you for what they do with your data. We will publish notice before we add or replace any of them."
          ]
        },
        {
          "number": "6.3",
          "text": [
            "Two other companies handle personal data under their own terms rather than on our instructions:"
          ],
          "list": [
            [
              "Stripe, which takes payments and holds card details so that we do not have to. It receives payment data only, never your code or findings; and"
            ],
            [
              "GitHub, which already holds your repositories under your own agreement with it. We read from GitHub through our GitHub App and send it none of your code, findings or account data."
            ]
          ]
        },
        {
          "number": "6.4",
          "text": [
            "We also share personal data with our professional advisers where they need it, and with law enforcement, a regulator or a court where the law requires it. If we are ever asked for your data by an authority, we will tell you unless we are legally prevented from doing so."
          ]
        },
        {
          "number": "6.5",
          "text": [
            "If our business is sold or transferred, personal data may pass to the buyer, who would be bound by this policy until they told you otherwise."
          ]
        },
        {
          "number": "6.6",
          "text": [
            "We do not share personal data with advertisers or data brokers, and we do not use it to train any AI model."
          ]
        }
      ]
    },
    {
      "number": "7",
      "title": "Personal data inside your repositories",
      "clauses": [
        {
          "number": "7.1",
          "text": [
            "Source code sometimes contains personal data: an email address in a configuration file, a name in a comment, real data in a test fixture, or credentials that identify a person. When we scan a repository we read whatever is there."
          ]
        },
        {
          "number": "7.2",
          "text": [
            "To scan a connected repository we take a temporary copy of it, history included, in the London (eu-west-2) region. The copy exists only for the length of that one scan and is destroyed when the scan ends. We do not keep a copy of your source code."
          ]
        },
        {
          "number": "7.3",
          "text": [
            "What we keep is the result of the scan: the findings, which name the file and line a problem is in and describe it, the scores, and the scanning tools' own reports with the matched source lines removed. They are stored in the London (eu-west-2) region. AI-generated findings describe a problem in the model's own words and may quote a short fragment of the code they refer to, quoted as it appears in the repository."
          ]
        },
        {
          "number": "7.4",
          "text": [
            "We do not go looking for personal data, and we do not extract it beyond what the scan needs. Where a scan detects secrets or credentials, the dashboard shows only a partial, masked form of the value: enough to identify which credential to rotate, never enough to use. The secret detection in a scan of a connected repository never stores the full value. We treat those findings as confidential."
          ]
        },
        {
          "number": "7.5",
          "text": [
            "The AI analysis sends extracts of code to a large language model that runs inside our own hosting environment in the London (eu-west-2) region, and a request cannot be routed to another region. Code is not sent to a separate model provider, and it is not used to train any model."
          ]
        },
        {
          "number": "7.6",
          "text": [
            "To check your dependencies for known vulnerabilities, a scan looks up the names and versions of the third-party packages your repository depends on in public vulnerability databases. Those lookups carry package names and versions only, never your source code."
          ]
        },
        {
          "number": "7.7",
          "text": [
            "If you give us the address of a live site, we audit it regularly from the London (eu-west-2) region by requesting its public pages and testing its TLS configuration, as any visitor's browser could. The audits run only against the address you enter, and by entering it you confirm that you are entitled to have that site tested. The reports describe what the site serves publicly."
          ]
        },
        {
          "number": "7.8",
          "text": [
            "You should not keep personal data or live credentials in source code. If you do, the safest fix is to remove them from the repository and rotate the credentials, which also clears them from future scans."
          ]
        }
      ]
    },
    {
      "number": "8",
      "title": "Where your data is stored",
      "clauses": [
        {
          "number": "8.1",
          "text": [
            "The Service runs on Amazon Web Services in the London (eu-west-2) region, and that is where your data is stored and analysed."
          ]
        },
        {
          "number": "8.2",
          "text": [
            "That region is in the United Kingdom, so your data does not leave the country and there is no international transfer to justify. We do not use an overseas region, and the AI analysis cannot be routed to one."
          ]
        },
        {
          "number": "8.3",
          "text": [
            "The package lookups described in section 7 go to public services that may answer from outside the United Kingdom. They carry the names and versions of third-party packages, not personal data and not your code."
          ]
        },
        {
          "number": "8.4",
          "text": [
            "Neon, Stripe and GitHub are established outside the United Kingdom. Neon holds our database in the London region. Stripe and GitHub may process the limited personal data they handle, payment details and your GitHub account, elsewhere. Where they do, an approved transfer mechanism applies, and we will tell you before we move any part of the Service itself outside the United Kingdom."
          ]
        }
      ]
    },
    {
      "number": "9",
      "title": "How long we keep it",
      "clauses": [
        {
          "number": "9.1",
          "text": [
            "We keep personal data only for as long as we have a reason to:"
          ],
          "list": [
            [
              "sign-in links expire after 15 minutes and are stored hashed, never in a form we could read back;"
            ],
            [
              "sessions expire after 30 days, and end immediately if you are removed from an account;"
            ],
            [
              "technical and security logs are kept for 30 days;"
            ],
            [
              "the temporary copy of a repository made for a scan is destroyed when that scan ends, and is never kept;"
            ],
            [
              "the scanning tools' own reports are deleted 30 days after the scan that wrote them, and a stored result that a later scan replaces is deleted 30 days after it was replaced;"
            ],
            [
              "findings, reports and the finding ledger are kept for 30 days after a subscription is cancelled, so that you can export them or come back, and are then deleted with the rest of the account;"
            ],
            [
              "billing and accounting records are kept for 6 years after the end of the accounting period they belong to, because tax law requires it; and"
            ],
            [
              "support emails are kept for about 2 years so that we can pick up a thread you started."
            ]
          ]
        },
        {
          "number": "9.2",
          "text": [
            "When a retention period ends we delete the data or, where deletion is not immediately possible in a backup, we put it beyond use and delete it on the normal backup cycle."
          ]
        },
        {
          "number": "9.3",
          "text": [
            "You can ask us to delete your account at any time, and we will, subject only to the records we are legally required to keep."
          ]
        }
      ]
    },
    {
      "number": "10",
      "title": "How we protect it",
      "clauses": [
        {
          "number": "10.1",
          "text": [
            "Data is encrypted in transit and at rest. Access to production systems is limited to the people who need it, and every query for account data is scoped so that one customer cannot reach another's."
          ]
        },
        {
          "number": "10.2",
          "text": [
            "We sign you in with single-use links rather than passwords, so there is no password of yours for us to lose or for anyone to reuse elsewhere."
          ]
        },
        {
          "number": "10.3",
          "text": [
            "Our GitHub App asks only for read access to repository contents and metadata. It cannot write to your code."
          ]
        },
        {
          "number": "10.4",
          "text": [
            "You can withdraw that access at any time from your GitHub settings, by removing a repository from our GitHub App or uninstalling it. Scanning of the repositories affected then stops. Findings already produced stay in your account until they are deleted under section 9."
          ]
        },
        {
          "number": "10.5",
          "text": [
            "Each scan can reach only the repository it is scanning and that repository's results, never another customer's."
          ]
        },
        {
          "number": "10.6",
          "text": [
            "No system is perfectly secure. If a personal data breach affects your data and is likely to be a risk to you, we will tell you and the Information Commissioner's Office as the law requires, and we will tell the affected business without undue delay."
          ]
        }
      ]
    },
    {
      "number": "11",
      "title": "Your rights",
      "clauses": [
        {
          "number": "11.1",
          "text": [
            "For personal data we hold as controller, you have the right to:"
          ],
          "list": [
            [
              "ask for a copy of it, and for information about how we use it;"
            ],
            [
              "have inaccurate data corrected, and incomplete data completed;"
            ],
            [
              "have it deleted, where we no longer need it and no legal duty makes us keep it;"
            ],
            [
              "have its use restricted while a dispute about it is resolved;"
            ],
            [
              "receive it in a portable, machine-readable form, or have it sent to another provider, where we hold it on the basis of your contract;"
            ],
            [
              "object to processing we carry out on the basis of legitimate interests, including any profiling; and"
            ],
            [
              "withdraw consent at any time, where we relied on consent, without affecting anything we did beforehand."
            ]
          ]
        },
        {
          "number": "11.2",
          "text": [
            "To use any of these rights, email ",
            {
              "link": {
                "label": "info@surgotechsolutions.co.uk",
                "href": "mailto:info@surgotechsolutions.co.uk"
              }
            },
            ". We will respond within one month, and will tell you if we need longer because the request is complex. Using these rights is free unless a request is manifestly unfounded or excessive."
          ]
        },
        {
          "number": "11.3",
          "text": [
            "We may need to confirm who you are before we act, which normally means replying from the email address on the account."
          ]
        },
        {
          "number": "11.4",
          "text": [
            "For personal data inside a customer's source code we act as processor, so please make your request to the business that owns the repository. If you send it to us, we will pass it on rather than act on it ourselves."
          ]
        }
      ]
    },
    {
      "number": "12",
      "title": "Complaints",
      "clauses": [
        {
          "number": "12.1",
          "text": [
            "If you are unhappy with how we have handled your personal data, tell us first at ",
            {
              "link": {
                "label": "info@surgotechsolutions.co.uk",
                "href": "mailto:info@surgotechsolutions.co.uk"
              }
            },
            ". We will acknowledge your complaint within 30 days of receiving it and tell you what we are doing about it."
          ]
        },
        {
          "number": "12.2",
          "text": [
            "If you are still unhappy, you can complain to the Information Commissioner's Office, the United Kingdom's data protection regulator, at ",
            {
              "link": {
                "label": "ico.org.uk",
                "href": "https://ico.org.uk"
              }
            },
            " or on ",
            {
              "link": {
                "label": "0303 123 1113",
                "href": "tel:+443031231113"
              }
            },
            ". You do not have to complain to us first, but it is usually quicker."
          ]
        }
      ]
    },
    {
      "number": "13",
      "title": "Cookies",
      "clauses": [
        {
          "number": "13.1",
          "text": [
            "The dashboard sets only the cookies it needs to work: one that keeps you signed in, and one that remembers preferences such as whether you are viewing findings in plain English or in technical detail."
          ]
        },
        {
          "number": "13.2",
          "text": [
            "These are strictly necessary cookies, so the Privacy and Electronic Communications Regulations do not require us to ask your consent for them, and there is no cookie banner."
          ]
        },
        {
          "number": "13.3",
          "text": [
            "We do not use advertising cookies, tracking pixels or third-party analytics. If we ever add analytics, we will ask for your consent first and update this section before we do."
          ]
        }
      ]
    },
    {
      "number": "14",
      "title": "Automated decisions",
      "clauses": [
        {
          "number": "14.1",
          "text": [
            "The Service is automated: it analyses code and produces findings and scores without a person reviewing each one, and some of that analysis uses AI."
          ]
        },
        {
          "number": "14.2",
          "text": [
            "Those decisions are about software, not about people. We do not make automated decisions that produce legal effects for you or similarly significantly affect you, so the UK GDPR's rules on solely automated decision-making do not arise."
          ]
        }
      ]
    },
    {
      "number": "15",
      "title": "Changes to this policy",
      "clauses": [
        {
          "number": "15.1",
          "text": [
            "We will update this policy when what we do with personal data changes, and the version and date at the top of the page will always tell you which version you are reading."
          ]
        },
        {
          "number": "15.2",
          "text": [
            "If a change materially affects you, such as adding a supplier or a new purpose, we will email the account owners before it takes effect."
          ]
        }
      ]
    }
  ],
  "details": {
    "title": "Company details",
    "lines": [
      [
        "SurgoTech Solutions Ltd"
      ],
      [
        "Registered in England and Wales, company number 16857943"
      ],
      [
        "Registered office: 8 Rockingham Drive, Washington, United Kingdom, NE38 8BF"
      ],
      [
        "Not registered for VAT"
      ],
      [
        "Email: ",
        {
          "link": {
            "label": "info@surgotechsolutions.co.uk",
            "href": "mailto:info@surgotechsolutions.co.uk"
          }
        }
      ]
    ]
  }
} as const satisfies LegalDocumentContent;

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
