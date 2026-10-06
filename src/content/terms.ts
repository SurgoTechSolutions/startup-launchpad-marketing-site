// Generated from design/terms.txt by scripts/build-legal-content.mjs. Edit the text and regenerate.
import { ROUTES } from "@/config/site";
import type { LegalDocumentContent, LegalPageContent, PageMeta } from "@/types";
import { LAUNCHPAD_HEADER } from "./launchpad";
import { FOOTER } from "./site";

export const TERMS_DOCUMENT = {
  "title": "Terms and Conditions",
  "version": "Version 1.1, in force from 4 October 2026. Startup Launchpad is supplied to UK business customers, sole traders and freelancers included, and not to consumers.",
  "summary": {
    "title": "At a glance",
    "paragraphs": [
      [
        "This summary is for orientation only; the numbered clauses below are what binds us. In short: Startup Launchpad is an automated code scanner sold for work use in the UK at £20 a month, payable by card or bank transfer, with no VAT to add at present and no minimum term. You do not need to be a limited company to subscribe, but you do need to be using it for your trade or profession rather than as a consumer (clause 2). If your first scan raises nothing above the lowest severity, you can claim that first month back (clause 10). The Service finds some problems in your code, not all of them, and it never makes your software secure or compliant on its own; that stays your responsibility (clause 5). You keep your code and your findings, and we keep the platform (clause 12). You can cancel any time from the billing portal, effective at the end of the month you have paid for (clause 11)."
      ],
      [
        "Two clauses limit what you can recover from us, so they are worth reading in full before you subscribe: clause 5 sets out what the Service is not, and clause 16 caps our liability at the fees you have paid us in the last 12 months. Clause 17.1 also asks you to cover us if you connect a repository you were not authorised to connect. How we handle personal data is set out separately in our ",
        {
          "link": {
            "label": "privacy policy",
            "href": "/startup-launchpad/privacy"
          }
        },
        "."
      ]
    ]
  },
  "sections": [
    {
      "number": "1",
      "title": "Who we are and what these terms do",
      "clauses": [
        {
          "number": "1.1",
          "text": [
            "Startup Launchpad (the \"Service\") is operated by SurgoTech Solutions Ltd, a company registered in England and Wales under company number 16857943, whose registered office is 8 Rockingham Drive, Washington, United Kingdom, NE38 8BF (\"we\", \"us\", \"our\"). We are not currently registered for VAT."
          ]
        },
        {
          "number": "1.2",
          "text": [
            "You can reach us at ",
            {
              "link": {
                "label": "info@surgotechsolutions.co.uk",
                "href": "mailto:info@surgotechsolutions.co.uk"
              }
            },
            ", whether the question is about these terms, about your subscription or about the Service itself. That is also the address for any notice you have to give us under this contract."
          ]
        },
        {
          "number": "1.3",
          "text": [
            "These terms, together with our ",
            {
              "link": {
                "label": "privacy policy",
                "href": "/startup-launchpad/privacy"
              }
            },
            " and any order confirmation issued through our checkout, form the contract between us and the business that subscribes to the Service (\"you\", \"your\", the \"Customer\"), whether that business is a company, a partnership or a self-employed individual. You accept these terms by ticking to confirm that you accept them, and in doing so you confirm that, where you are subscribing for an organisation, you have authority to bind it. These terms govern your use of the Service from that moment, including any period before your first payment. Your paid subscription itself begins as set out in clause 1.6."
          ]
        },
        {
          "number": "1.4",
          "text": [
            "We may update these terms from time to time under clause 18. The version in force is the one published on this page at the date shown at the top of it."
          ]
        },
        {
          "number": "1.5",
          "text": [
            "If these terms, our ",
            {
              "link": {
                "label": "privacy policy",
                "href": "/startup-launchpad/privacy"
              }
            },
            " and an order confirmation conflict, these terms prevail, except that an order confirmation prevails on the commercial terms it actually states (such as the fee and the Subscription Period), and the ",
            {
              "link": {
                "label": "privacy policy",
                "href": "/startup-launchpad/privacy"
              }
            },
            " prevails on how we handle personal data for which we are the controller."
          ]
        },
        {
          "number": "1.6",
          "text": [
            "You conclude the contract by completing our online checkout: entering your details, ticking to confirm that you accept these terms and are subscribing for business purposes, and either submitting payment or asking us to invoice you. You can go back and correct anything you have typed at any point before you submit. Your subscription is formed when we email you an order confirmation, and the contract is concluded in English. We do not file a copy for you, so keep that email; the version of these terms in force is always the one published on this page."
          ]
        },
        {
          "number": "1.7",
          "text": [
            "Because we are both acting as businesses rather than consumers, we agree that regulations 9(1) and 11(1) of the Electronic Commerce (EC Directive) Regulations 2002 do not apply to this contract."
          ]
        }
      ]
    },
    {
      "number": "2",
      "title": "Business customers in the United Kingdom only",
      "clauses": [
        {
          "number": "2.1",
          "text": [
            "The Service is offered only to customers in the United Kingdom who are using it for work. It is not offered to consumers, and it is not offered to customers outside the United Kingdom."
          ]
        },
        {
          "number": "2.2",
          "text": [
            "You do not need to be a limited company. Sole traders, freelancers, contractors and partnerships are all welcome, and so is an individual developer scanning code they write in the course of their own trade or profession. What matters is that you are using the Service for business purposes rather than as a private consumer."
          ]
        },
        {
          "number": "2.3",
          "text": [
            "By subscribing you represent and warrant that:"
          ],
          "list": [
            [
              "you are subscribing wholly or mainly for the purposes of a trade, business, craft or profession, and not as a consumer;"
            ],
            [
              "you are based in the United Kingdom; and"
            ],
            [
              "you are subscribing on your own behalf or for an organisation you are authorised to bind, and not as agent for a consumer."
            ]
          ]
        },
        {
          "number": "2.4",
          "text": [
            "We do not ask you for a postal address. We rely on the confirmation you give under clause 2.3 when you subscribe, together with the billing country your card provider gives us or, where you pay by bank transfer, the United Kingdom bank account the payment comes from, to establish that this contract is with a UK business customer."
          ]
        },
        {
          "number": "2.5",
          "text": [
            "Because this is a business-to-business contract, the Consumer Rights Act 2015, the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013 and other consumer protection legislation do not apply to it. In particular, you have no statutory 14-day right to cancel; your cancellation rights are those set out in clause 11, and the money-back guarantee in clause 10 is offered voluntarily rather than because the law requires it."
          ]
        },
        {
          "number": "2.6",
          "text": [
            "If it turns out that you are a consumer, or that you are not based in the United Kingdom, we may terminate your subscription immediately on notice and refund the fees you have paid for the unused balance of the then-current billing period."
          ]
        }
      ]
    },
    {
      "number": "3",
      "title": "Definitions",
      "clauses": [
        {
          "number": "3.1",
          "text": [
            "In these terms:"
          ],
          "list": [
            [
              "\"Account\" means the billable workspace you create on the Service, to which one or more Users belong."
            ],
            [
              "\"Customer Data\" means data you or your Users submit to the Service, and the outputs the Service derives from your repositories, including scan reports, findings and the finding ledger."
            ],
            [
              "\"Findings\" means the issues the Service reports against a Connected Repository, whether produced by the deterministic scan battery or by the AI discovery layer."
            ],
            [
              "\"Severity\" means the label the dashboard gives a Finding, being one of \"critical\", \"high\", \"medium\", \"low\" or \"info\", in descending order of seriousness. A Finding of \"low severity or above\" is one labelled low, medium, high or critical."
            ],
            [
              "\"Connected Repository\" means a source code repository you authorise the Service to read through our GitHub App."
            ],
            [
              "\"Subscription Period\" means the period for which you have paid, beginning on the day your subscription starts and renewing at the end of each period. It is monthly unless your order confirmation says otherwise."
            ],
            [
              "\"User\" means an individual you authorise to access the Account, whether as an Owner or a Member."
            ]
          ]
        }
      ]
    },
    {
      "number": "4",
      "title": "The Service",
      "clauses": [
        {
          "number": "4.1",
          "text": [
            "The Service reads the source code of your Connected Repositories on a recurring schedule and presents the results in a hosted dashboard as red, amber and green scores with plain-English findings and suggested fix prompts, across areas including security, accessibility, SEO, reliability and housekeeping."
          ]
        },
        {
          "number": "4.2",
          "text": [
            "Findings are produced by two distinct layers, which the dashboard labels separately:"
          ],
          "list": [
            [
              "a deterministic battery of open-source and first-party analysis tools, which produces the same result for the same input; and"
            ],
            [
              "an AI discovery layer, which uses a large language model to derive an architecture view of your application and to reason about threats against it. Output from this layer is labelled \"AI-generated\" wherever it appears."
            ]
          ]
        },
        {
          "number": "4.3",
          "text": [
            "Subject to these terms and to your payment of the fees, we grant you a non-exclusive, non-transferable, revocable right for the duration of your subscription to access and use the Service for your own internal business purposes."
          ]
        },
        {
          "number": "4.4",
          "text": [
            "We may change, add to or remove features of the Service. We will not make a change that materially degrades its core functionality without giving you reasonable notice."
          ]
        },
        {
          "number": "4.5",
          "text": [
            "Scans run on a scheduled sweep. We do not promise a particular scan frequency, a particular time of day, or that a scan will complete on any given day."
          ]
        },
        {
          "number": "4.6",
          "text": [
            "If you give us the address of a live site for a Connected Repository, the Service also audits that site on a recurring schedule, by requesting its public pages and testing its TLS configuration. Clause 7.9 applies to those audits."
          ]
        },
        {
          "number": "4.7",
          "text": [
            "We also offer a Free plan, for which we make no charge. An Account on the Free plan may connect one repository and receives a single scan of it, made up of one run of the deterministic battery and one run of the AI discovery layer, presented on the dashboard as scores and a count of what the AI discovery layer raised. If either run starts but does not complete, it is not run again. The Free plan does not include the individual findings or their fix prompts, any further scan, or site audits. Clauses 9 and 10 do not apply to an Account while it is on the Free plan, and the right in clause 4.3 is granted to it without payment. We may change or withdraw the Free plan at any time. In every other respect these terms apply to it in full."
          ]
        }
      ]
    },
    {
      "number": "5",
      "title": "What the Service is not",
      "clauses": [
        {
          "number": "5.1",
          "text": [
            "This clause 5 is important, and the rest of this contract is priced on the basis of it."
          ]
        },
        {
          "number": "5.2",
          "text": [
            "The Service is an automated code analysis tool. It is not a penetration test, a security audit, a certification, an assurance engagement, or professional, legal or regulatory advice. It does not make your software secure, accessible, compliant or fit for any purpose."
          ]
        },
        {
          "number": "5.3",
          "text": [
            "We do not warrant that the Service will identify every vulnerability, defect or issue in your code, and it will not. Automated analysis of any kind produces both false negatives (real problems it does not report) and false positives (reported problems that are not real). A green score means only that the checks we ran did not raise a finding; it is not a statement that your software is secure or correct."
          ]
        },
        {
          "number": "5.4",
          "text": [
            "Output from the AI discovery layer is generated by a large language model and may be incomplete, mistaken or misleading. It must be reviewed by a competent person before it is relied on or acted upon."
          ]
        },
        {
          "number": "5.5",
          "text": [
            "Fix prompts and suggested remediations are suggestions only. You are responsible for reviewing, testing and deciding whether to apply any change to your code, and for the consequences of doing so."
          ]
        },
        {
          "number": "5.6",
          "text": [
            "You remain solely responsible for the security, accessibility, legal compliance and operation of your own software and systems, and for your own obligations to your customers and to regulators. Nothing in the Service transfers any of that responsibility to us."
          ]
        }
      ]
    },
    {
      "number": "6",
      "title": "Accounts, Users and access",
      "clauses": [
        {
          "number": "6.1",
          "text": [
            "You sign in by a single-use link sent to your email address. You are responsible for keeping access to that mailbox secure, and for all activity that takes place under your Account."
          ]
        },
        {
          "number": "6.2",
          "text": [
            "An Account has two roles. An Owner may manage billing, connect and disconnect repositories, invite and remove Users, and delete the Account. A Member may view findings, change target branches, accept and reopen risks, and trigger a scan."
          ]
        },
        {
          "number": "6.3",
          "text": [
            "Invitations are sent by email, may be used once, and expire after 7 days. Removing a User ends that person's access to the Account immediately."
          ]
        },
        {
          "number": "6.4",
          "text": [
            "You must tell us promptly if you believe an unauthorised person has gained access to your Account."
          ]
        },
        {
          "number": "6.5",
          "text": [
            "You are responsible for your Users' acts and omissions in connection with the Service as if they were your own."
          ]
        }
      ]
    },
    {
      "number": "7",
      "title": "Your repositories and the permissions you give us",
      "clauses": [
        {
          "number": "7.1",
          "text": [
            "You connect repositories by installing our GitHub App. The App requests read access to repository contents and metadata. It does not request write access, and we do not modify your code."
          ]
        },
        {
          "number": "7.2",
          "text": [
            "You grant us a non-exclusive licence to access, copy, analyse and process the contents of your Connected Repositories, and to store the resulting Findings and reports, in each case only so far as necessary to provide the Service to you."
          ]
        },
        {
          "number": "7.3",
          "text": [
            "You represent and warrant that you own each Connected Repository or are otherwise authorised to grant us that access, including where the repository belongs to a client of yours or to a third party. If you connect a repository on behalf of a client, you confirm that you have their authority to do so."
          ]
        },
        {
          "number": "7.4",
          "text": [
            "The AI discovery layer analyses extracts of your code using a large language model that runs inside our own hosting environment in the United Kingdom. Your code is not sent to a separate model provider, and it is not used to train any model."
          ]
        },
        {
          "number": "7.5",
          "text": [
            "You should not store secrets, credentials, personal data or other sensitive material in your source code. Where the Service detects them it reports them as findings identifying the location and a masked form of the value. The secret detection in a scan of a Connected Repository never stores the detected value in full. An AI-generated Finding may quote a short fragment of code as it appears in the repository."
          ]
        },
        {
          "number": "7.6",
          "text": [
            "You warrant that you are entitled to have any third-party or open-source code in your Connected Repositories read and analysed as part of the Service."
          ]
        },
        {
          "number": "7.7",
          "text": [
            "Your use of the GitHub integration is also subject to your own agreement with GitHub. We use the data the GitHub App gives us only to provide the Service to you, and we do not collect it on GitHub's behalf."
          ]
        },
        {
          "number": "7.8",
          "text": [
            "To scan a Connected Repository the Service takes a temporary copy of it, which is destroyed when the scan ends. We do not keep a copy of your source code: what we store is the Findings and the other results of the scan."
          ]
        },
        {
          "number": "7.9",
          "text": [
            "Site audits run only against the address you enter. By entering it you represent and warrant that you own that site or are otherwise entitled to have it tested, and you must remove the address if that stops being true."
          ]
        },
        {
          "number": "7.10",
          "text": [
            "You may withdraw the access in clause 7.1 at any time from your GitHub settings, by removing a repository from our GitHub App or uninstalling it. Scanning of the repositories affected then stops. Withdrawing access does not cancel your subscription, which you do under clause 11, and Findings already produced are kept as clause 11.5 describes."
          ]
        },
        {
          "number": "7.11",
          "text": [
            "To check your dependencies for known vulnerabilities, a scan looks up the names and versions of the third-party packages your repository depends on in public vulnerability databases. Those lookups carry package names and versions only, never your source code, and those databases may answer them from outside the United Kingdom."
          ]
        }
      ]
    },
    {
      "number": "8",
      "title": "Acceptable use",
      "clauses": [
        {
          "number": "8.1",
          "text": [
            "You must not:"
          ],
          "list": [
            [
              "connect a repository you do not own and are not authorised to have scanned;"
            ],
            [
              "give us the address of a site you do not own and are not entitled to have tested;"
            ],
            [
              "use the Service to analyse software in order to attack it, or otherwise for any unlawful purpose;"
            ],
            [
              "resell, sublicense, rent or otherwise make the Service available to any third party, except that you may share findings for a repository with the client that owns it;"
            ],
            [
              "copy, modify, reverse engineer or attempt to derive the source code of the Service, except so far as that restriction is prohibited by law;"
            ],
            [
              "use the Service to build a competing product, or publish benchmarking or comparison results about it without our written consent;"
            ],
            [
              "circumvent or attempt to circumvent any usage limit, access control or rate limit; or"
            ],
            [
              "introduce malicious code into the Service or otherwise interfere with its operation or security."
            ]
          ]
        },
        {
          "number": "8.2",
          "text": [
            "We may suspend your access immediately if we reasonably believe you have breached this clause 8, or that suspension is necessary to protect the Service, another customer or a third party. We will tell you when we do, and where it is practicable and does not increase the risk we will give you a chance to put the problem right. If you do so promptly we will restore access; if you do not, we may cancel under clause 11, and no refund is due for a suspension or cancellation under this clause."
          ]
        }
      ]
    },
    {
      "number": "9",
      "title": "Charges and payment",
      "clauses": [
        {
          "number": "9.1",
          "text": [
            "The subscription fee is £20 per Account per month, exclusive of VAT. We are not currently registered for VAT, so no VAT is added at present and £20 is what you pay. If we become registered for VAT, VAT will be added at the prevailing rate and payable in addition to the fee. There is no setup fee, and the Free plan described in clause 4.7 is not charged for."
          ]
        },
        {
          "number": "9.2",
          "text": [
            "The fee is payable in advance, and you can pay in either of two ways:"
          ],
          "list": [
            [
              "by card, taken automatically at the start of each Subscription Period through our payment processor, Stripe. Your card details are handled by Stripe and are never held by us; we store only the customer and subscription identifiers Stripe gives us, and card payments are also subject to Stripe's own terms; or"
            ],
            [
              "by bank transfer, against an invoice we issue before the Subscription Period it covers, payable within 14 days of the invoice date to the account and reference shown on it."
            ]
          ]
        },
        {
          "number": "9.3",
          "text": [
            "If you pay by bank transfer, scanning starts once we have received cleared funds, and we issue each renewal invoice before the Subscription Period it covers so that there is no gap in service."
          ]
        },
        {
          "number": "9.4",
          "text": [
            "Apart from the money-back guarantee in clause 10, fees are non-refundable and we do not refund part-periods. Cancelling stops the next payment or invoice; it does not refund the Subscription Period you are in."
          ]
        },
        {
          "number": "9.5",
          "text": [
            "If a card payment fails, or an invoice is not paid by its due date, we will keep your dashboard readable but pause new scans, and we will email you. If a payment is reversed or charged back we may also suspend the Account until the position is resolved. If the position is not resolved we may cancel the subscription under clause 11."
          ]
        },
        {
          "number": "9.6",
          "text": [
            "Where an invoice is overdue we may claim interest and fixed-sum compensation on it under the Late Payment of Commercial Debts (Interest) Act 1998. We will email you before we do."
          ]
        },
        {
          "number": "9.7",
          "text": [
            "We may change the fee. We will give you at least 30 days' notice by email, and the new fee applies from your next Subscription Period after that notice. If you do not accept the change you may cancel under clause 11 before it takes effect."
          ]
        },
        {
          "number": "9.8",
          "text": [
            "All sums payable under this contract are payable in pounds sterling and are exclusive of VAT and any other applicable tax, which you pay in addition. We will tell you before we begin charging VAT, but adding VAT on registration is not a fee change and clause 9.7 does not apply to it."
          ]
        }
      ]
    },
    {
      "number": "10",
      "title": "Money-back guarantee on your first scan",
      "clauses": [
        {
          "number": "10.1",
          "text": [
            "If your first scan finds nothing, you should not pay for it. This clause sets out exactly when that applies."
          ]
        },
        {
          "number": "10.2",
          "text": [
            "You may claim a full refund of your first month's subscription fee if the first scan of your first Connected Repository completes and reports no Findings of \"low\" severity or above. Findings labelled \"info\" are informational and do not count against the guarantee. If you have paid for a longer period in advance, the refund is the equivalent of one month of that fee."
          ]
        },
        {
          "number": "10.3",
          "text": [
            "To claim, email us at ",
            {
              "link": {
                "label": "info@surgotechsolutions.co.uk",
                "href": "mailto:info@surgotechsolutions.co.uk"
              }
            },
            " within 14 days of that first scan completing. We will refund it by the method you used to pay, normally within 14 days."
          ]
        },
        {
          "number": "10.4",
          "text": [
            "The guarantee may be claimed once per Account, applies only to the first month's fee, and is not available where a scan did not complete, where the repository connected contained no code the Service was able to analyse, or where the Account is one you have previously held and cancelled."
          ]
        },
        {
          "number": "10.5",
          "text": [
            "Claiming the refund does not end your subscription. If you do not want the Service to continue, cancel it under clause 11 as well."
          ]
        },
        {
          "number": "10.6",
          "text": [
            "For the avoidance of doubt, a scan that reports no Findings of low severity or above means only that the checks we ran did not raise one. It is not a statement that your software is secure or correct, and clause 5 applies to it in full."
          ]
        }
      ]
    },
    {
      "number": "11",
      "title": "Term, cancellation and what happens after",
      "clauses": [
        {
          "number": "11.1",
          "text": [
            "The subscription runs for the Subscription Period stated in your order confirmation, which is monthly unless we have agreed otherwise, and renews automatically at the end of each Subscription Period until it is cancelled."
          ]
        },
        {
          "number": "11.2",
          "text": [
            "You may cancel at any time from the billing portal in your Account or, if you pay by bank transfer, by emailing us at ",
            {
              "link": {
                "label": "info@surgotechsolutions.co.uk",
                "href": "mailto:info@surgotechsolutions.co.uk"
              }
            },
            ". Cancellation takes effect at the end of the Subscription Period you have already paid for, and the Service remains available until then."
          ]
        },
        {
          "number": "11.3",
          "text": [
            "We may terminate this contract on 30 days' written notice, or immediately if you materially breach these terms and, where the breach can be put right, do not put it right within 14 days of us asking you to."
          ]
        },
        {
          "number": "11.4",
          "text": [
            "When a subscription is cancelled, scanning stops."
          ]
        },
        {
          "number": "11.5",
          "text": [
            "Your Findings, reports and finding ledger are retained for 30 days after cancellation, so that you can resubscribe or export them, and are then deleted along with the rest of your Account data. Export your data before that period ends if you need it."
          ]
        },
        {
          "number": "11.6",
          "text": [
            "Clauses which by their nature are intended to survive termination do so, including clauses 5, 10, 12, 13, 15, 16, 17, 19 and 20."
          ]
        }
      ]
    },
    {
      "number": "12",
      "title": "Data, intellectual property and data protection",
      "clauses": [
        {
          "number": "12.1",
          "text": [
            "You own your Customer Data, including your source code and the Findings derived from it. We claim no ownership of it."
          ]
        },
        {
          "number": "12.2",
          "text": [
            "We own the Service, including its software, scan engine, rules, scoring, dashboard, documentation and branding, and all intellectual property rights in them. Nothing in these terms transfers any of those rights to you."
          ]
        },
        {
          "number": "12.3",
          "text": [
            "We may use aggregated and anonymised statistics about how the Service is used (counts, timings, rule hit rates) to operate and improve it. Such statistics will never identify you, your Users or your code."
          ]
        },
        {
          "number": "12.4",
          "text": [
            "The Service is hosted on Amazon Web Services in the London (eu-west-2) region, and Customer Data is stored there. The AI discovery layer runs in that same region, so your code is analysed inside our own environment and never goes to a separate model provider. Operational logs are retained for 30 days."
          ]
        },
        {
          "number": "12.5",
          "text": [
            "Each party will comply with the UK GDPR and the Data Protection Act 2018. In relation to any personal data contained in Customer Data, you are the controller and we are the processor. We will process that personal data only on your documented instructions (of which these terms and your use of the Service are the initial instructions), ensure that our personnel are subject to a duty of confidence, implement appropriate technical and organisational security measures, assist you with data subject requests and with your obligations under Articles 32 to 36 of the UK GDPR so far as is reasonable, delete or return the personal data at the end of the contract in accordance with clause 11.5, and make available the information reasonably necessary to demonstrate compliance with Article 28."
          ]
        },
        {
          "number": "12.6",
          "text": [
            "For the purposes of Article 28(3) of the UK GDPR, the subject matter of the processing is the provision of the Service; its duration is your subscription plus the retention period in clause 11.5; its nature and purpose is the automated reading and analysis of your Connected Repositories and the generation of Findings; the personal data processed is whatever personal data is incidentally present in your source code; and the data subjects are the individuals to whom that data relates."
          ]
        },
        {
          "number": "12.7",
          "text": [
            "We will notify you without undue delay after becoming aware of a personal data breach affecting Customer Data, and give you the information you reasonably need to meet your own obligations under Articles 33 and 34 of the UK GDPR. We will also tell you without undue delay about any other security incident that materially affects the confidentiality, integrity or availability of your Customer Data, whether or not personal data is involved."
          ]
        },
        {
          "number": "12.8",
          "text": [
            "If we consider that an instruction you give us infringes the UK GDPR or other data protection law, we will tell you, and we may pause the processing concerned until you withdraw or confirm the instruction."
          ]
        },
        {
          "number": "12.9",
          "text": [
            "You may audit our compliance with this clause 12 once in any 12-month period, on 30 days' written notice, during business hours, at your own cost and subject to confidentiality, and more often if a supervisory authority requires it or following a personal data breach affecting your Customer Data. We may answer an audit with a current third-party report or certification where that reasonably addresses what you have asked."
          ]
        },
        {
          "number": "12.10",
          "text": [
            "At the end of the contract you may choose whether we return your Customer Data to you or delete it. The dashboard export is available throughout the retention period in clause 11.5, and unless you tell us otherwise before that period ends we will delete the data."
          ]
        },
        {
          "number": "12.11",
          "text": [
            "You give us general authorisation to appoint sub-processors, which at the date of these terms are Amazon Web Services (hosting, scanning, storage, email and AI analysis) and Neon (the database and sign-in service). We will give you at least 30 days' notice before adding or replacing a sub-processor, and you may object on reasonable data protection grounds; if we cannot resolve your objection you may cancel under clause 11. We impose on every sub-processor, by written contract, data protection obligations equivalent to those in this clause 12, and we remain fully liable to you for the acts and omissions of our sub-processors. Stripe and GitHub are not sub-processors: Stripe handles payment data only, and we send no Customer Data to GitHub, where your repositories already sit under your own agreement with it."
          ]
        },
        {
          "number": "12.12",
          "text": [
            "Customer Data is stored and processed in the United Kingdom, and we do not transfer it abroad. The package lookups in clause 7.11 may be answered from outside the United Kingdom, but they carry no source code and no personal data. If that changes we will tell you beforehand and put in place an appropriate transfer mechanism, such as the UK International Data Transfer Agreement or the UK Addendum to the EU Standard Contractual Clauses, supported by a transfer risk assessment."
          ]
        },
        {
          "number": "12.13",
          "text": [
            "Our ",
            {
              "link": {
                "label": "privacy policy",
                "href": "/startup-launchpad/privacy"
              }
            },
            " explains how we handle personal data for which we are the controller, such as the account and billing details of your Users."
          ]
        }
      ]
    },
    {
      "number": "13",
      "title": "Confidentiality",
      "clauses": [
        {
          "number": "13.1",
          "text": [
            "Each party will keep the other's confidential information confidential, use it only to perform this contract, and disclose it only to those of its personnel, advisers and, in our case, sub-processors appointed under clause 12.11 who need it and who are bound by equivalent obligations. Your source code and your Findings are your confidential information."
          ]
        },
        {
          "number": "13.2",
          "text": [
            "These obligations do not apply to information that is or becomes public through no breach of this clause, that the receiving party already held without a duty of confidence, or that it is required to disclose by law or by a regulator, in which case it will tell the other party first where it is lawfully able to."
          ]
        }
      ]
    },
    {
      "number": "14",
      "title": "Availability and support",
      "clauses": [
        {
          "number": "14.1",
          "text": [
            "We will use reasonable endeavours to keep the Service available, but we do not commit to any service level, uptime percentage or support response time, and we do not offer service credits."
          ]
        },
        {
          "number": "14.2",
          "text": [
            "The Service may be unavailable during planned maintenance, which we will try to schedule outside UK business hours, and during unplanned outages, including those caused by third parties such as Amazon Web Services, GitHub or Stripe."
          ]
        },
        {
          "number": "14.3",
          "text": [
            "Support is provided by email during UK business hours, on a reasonable endeavours basis."
          ]
        }
      ]
    },
    {
      "number": "15",
      "title": "Warranties",
      "clauses": [
        {
          "number": "15.1",
          "text": [
            "We warrant that we will provide the Service with reasonable care and skill."
          ]
        },
        {
          "number": "15.2",
          "text": [
            "Except as expressly set out in these terms, and to the fullest extent permitted by law, all warranties, conditions and other terms implied by statute or common law are excluded from this contract. In particular, and without limiting clause 5, we do not warrant that the Service will be uninterrupted or error-free, that it will detect any particular issue, or that it is fit for any purpose you have in mind unless we have agreed that purpose in writing."
          ]
        }
      ]
    },
    {
      "number": "16",
      "title": "Liability",
      "clauses": [
        {
          "number": "16.1",
          "text": [
            "Nothing in these terms limits or excludes either party's liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, or for anything else that cannot lawfully be limited or excluded."
          ]
        },
        {
          "number": "16.2",
          "text": [
            "Subject to clause 16.1, we are not liable to you, whether in contract, tort (including negligence), breach of statutory duty or otherwise, for:"
          ],
          "list": [
            [
              "loss of profit, revenue, business, anticipated savings, goodwill or reputation;"
            ],
            [
              "loss or corruption of data, other than our cost of restoring it from our own backups;"
            ],
            [
              "any security incident, breach, defect or non-compliance in your own software or systems, and its consequences for you or for your customers, except so far as it results from our failure to meet clause 15.1;"
            ],
            [
              "any action you take or do not take on the basis of a Finding or a suggested fix; or"
            ],
            [
              "any indirect or consequential loss."
            ]
          ]
        },
        {
          "number": "16.3",
          "text": [
            "Subject to clause 16.1, our total liability arising out of or in connection with this contract in any 12-month period is limited to the total fees you paid us in the 12 months immediately before the first event giving rise to the claim."
          ]
        },
        {
          "number": "16.4",
          "text": [
            "You acknowledge that the fee for the Service is set on the basis of the allocation of risk in clauses 5 and 16, that the Service is an automated tool sold at a low fixed monthly price, and that a separately negotiated contract or your own insurance is available to you if you need a different allocation. Both parties consider these limits reasonable in the circumstances known to them when this contract was made."
          ]
        },
        {
          "number": "16.5",
          "text": [
            "You must bring any claim under this contract within 12 months of the date on which you first became aware, or ought reasonably to have become aware, of the facts giving rise to it."
          ]
        }
      ]
    },
    {
      "number": "17",
      "title": "Indemnity",
      "clauses": [
        {
          "number": "17.1",
          "text": [
            "You will indemnify us against all losses, damages, costs and expenses (including reasonable legal fees) we incur arising out of a third-party claim that a Connected Repository was connected to the Service without the authority you warranted in clause 7.3. This is the only indemnity you give us; a breach of clause 8 is dealt with by suspension under clause 8.2 and termination under clause 11.3."
          ]
        },
        {
          "number": "17.2",
          "text": [
            "We will defend you against any claim that your permitted use of the Service infringes a third party's UK intellectual property rights, and pay any amounts finally awarded against you or agreed in settlement by us, provided that you tell us promptly, do not admit liability or attempt to settle, let us control the defence and any settlement, and give us reasonable assistance at our cost."
          ]
        },
        {
          "number": "17.3",
          "text": [
            "If such a claim is made, or we reasonably expect one, we may at our own cost obtain the right for you to continue using the Service, or modify or replace it so that it no longer infringes. If neither is reasonably achievable, we may terminate this contract on notice and refund the fees you have paid for the unused balance of the Subscription Period."
          ]
        },
        {
          "number": "17.4",
          "text": [
            "Clause 17.2 does not apply to a claim arising from your own code or Customer Data, from your breach of these terms, or from use of the Service other than as permitted by them."
          ]
        },
        {
          "number": "17.5",
          "text": [
            "Our total liability under clause 17.2 is limited to £25,000, in place of the cap in clause 16.3."
          ]
        }
      ]
    },
    {
      "number": "18",
      "title": "Changes to these terms",
      "clauses": [
        {
          "number": "18.1",
          "text": [
            "We may change these terms, for example to reflect changes to the Service, to our sub-processors or to the law."
          ]
        },
        {
          "number": "18.2",
          "text": [
            "For any change that is materially adverse to you, we will give at least 30 days' notice by email to your Account Owners and by publishing the new version on this page. The change takes effect at the start of your next Subscription Period after that notice, and if you do not accept it you may cancel under clause 11 before it takes effect. Continuing to use the Service after the change takes effect means you accept it."
          ]
        },
        {
          "number": "18.3",
          "text": [
            "Minor changes that do not adversely affect you, such as corrections, clarifications and updated contact details, take effect when published."
          ]
        }
      ]
    },
    {
      "number": "19",
      "title": "General",
      "clauses": [
        {
          "number": "19.1",
          "text": [
            "You may not assign or transfer this contract without our written consent. We may assign it to a successor to our business, or subcontract any of our obligations, but we remain responsible to you for anything a subcontractor does."
          ]
        },
        {
          "number": "19.2",
          "text": [
            "These terms, our ",
            {
              "link": {
                "label": "privacy policy",
                "href": "/startup-launchpad/privacy"
              }
            },
            " and your order confirmation are the entire agreement between us about the Service, and replace anything said or written beforehand. Neither party relies on any statement not set out in them, though nothing limits liability for fraudulent misrepresentation."
          ]
        },
        {
          "number": "19.3",
          "text": [
            "A person who is not a party to this contract has no right to enforce it under the Contracts (Rights of Third Parties) Act 1999."
          ]
        },
        {
          "number": "19.4",
          "text": [
            "If a term is found to be unenforceable it is severed, and the rest of the contract continues in force."
          ]
        },
        {
          "number": "19.5",
          "text": [
            "A delay in enforcing a right is not a waiver of it, and waiving one breach does not waive another."
          ]
        },
        {
          "number": "19.6",
          "text": [
            "Neither party is liable for a failure to perform caused by an event beyond its reasonable control, provided it tells the other party and tries to resume performance. If such an event continues for more than 30 days, either party may terminate on notice."
          ]
        },
        {
          "number": "19.7",
          "text": [
            "Notices to us must be sent to ",
            {
              "link": {
                "label": "info@surgotechsolutions.co.uk",
                "href": "mailto:info@surgotechsolutions.co.uk"
              }
            },
            ". Notices to you are sent to the email addresses of your Account Owners, and are treated as received on the day they are sent unless the sender receives a delivery failure."
          ]
        },
        {
          "number": "19.8",
          "text": [
            "Nothing in these terms creates a partnership, joint venture or employment relationship between us."
          ]
        }
      ]
    },
    {
      "number": "20",
      "title": "Governing law and jurisdiction",
      "clauses": [
        {
          "number": "20.1",
          "text": [
            "This contract, and any dispute or claim arising out of or in connection with it or its subject matter (including non-contractual disputes and claims), is governed by the law of England and Wales."
          ]
        },
        {
          "number": "20.2",
          "text": [
            "The courts of England and Wales have exclusive jurisdiction to settle any such dispute or claim."
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

export const TERMS_META = {
  title: "Terms and Conditions",
  description: "Startup Launchpad is an automated code scanner sold for work use in the UK at £20 a month, with no minimum term. You keep your code and your findings, and you can cancel any time.",
  path: ROUTES.terms,
} as const satisfies PageMeta;

export const TERMS_PAGE = {
  header: LAUNCHPAD_HEADER,
  document: TERMS_DOCUMENT,
  footer: FOOTER,
} as const satisfies LegalPageContent;
