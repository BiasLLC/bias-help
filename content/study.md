# BIAS Study — Beta Guide

Study is in **TestFlight**, not an App Store release. This guide’s AI and privacy details refer to the supplied **1.4 (15)** build handoff and staging service. Check the version in TestFlight; later builds may differ.

## Build your own question banks first

Create a CSV question bank from your own material, then import it into Study. Local CSV import and quizzes work without online AI and require no BIAS account.

[Download the CSV template](https://bias.pub/downloads/bias-study-question-template.csv). Keep its header and follow the examples. Save as CSV rather than a spreadsheet workbook. Keep a separate copy of your question banks.

## Turn PDFs or photos into questions

Optional AI-assisted import can turn extracted PDF text or text recognized in a photo into quiz questions. Review the generated questions and answers against your source before relying on them. AI can make mistakes.

In build 15, PDF text extraction and photo OCR occur on-device. When you proceed with AI import, extracted text is sent for processing; the original PDF or photograph is not uploaded. See the [build-specific privacy policy](https://bias.pub/study/privacy) for request contents and retention.

## Quiz and review

Choose your question bank and use the quiz controls to answer questions and review results. Your banks and progress stay on the device. Study does not currently synchronize its libraries or progress through iCloud.

Online AI is optional. If you decline it or are not eligible, local study remains available. Ordinary CSV import does not send your study material to an AI provider.

## Optional explanations and age confirmation

Build 15 uses Anthropic Claude for online AI. Bundled requests go through BIAS’s Cloudflare service. Study asks for approval and an eligible Apple Declared Age Range result before online AI use. It does not ask for your date of birth or Apple password.

Unavailable or ineligible age results leave local tools available. The staging service supports eligible teens with additional filtering; production availability and regional rules are separate. The App Store content rating is not an AI eligibility check.

## Voice

Reading aloud uses Apple’s on-device speech synthesis. Supported spoken answers require on-device recognition, with no automatic cloud fallback. Use tap or typed answers if on-device recognition is unavailable. Device permissions can be managed in Apple settings.

## AI access and purchases

The approved planned retail offer provides one sample of five successful explanations and one successful AI import, then optional Pro AI at $3.99 per month for up to 2,000 explanations and 20 imports monthly. Local tools remain free. These are planned retail terms, not a promise of a live App Store offer or the exact purchase behavior of every beta build.

There is no separate Voice subscription or 14-day subscription trial in that offer. Check Apple’s displayed terms before any purchase. [Subscription, cancellation, and refund help](https://bias.pub/subscriptions).

## Personal Claude keys

Personal-key access requires Apple confirmation of adulthood. Your key is stored in device-only Keychain. Requests go directly from the device to Anthropic, which bills your API account separately. A Claude chat subscription is separate from API billing.

Keep keys private. Revoke a key through Anthropic to stop its use; do not assume uninstalling Study deletes Keychain entries. [Personal-key guide](https://bias.pub/study/claude-key).

## Privacy and reports

BIAS does not retain ordinary AI study content in the build-15 backend, but retains operational integrity, allowance, subscription, rate-limit, and spending records. Anthropic has separate retention rules. “No content storage by BIAS” does not mean no data is processed or retained by any provider.

AI reports are optional. Review the exact contents before confirming a report. Build-15 reports normally remain for up to 90 days with daily cleanup, subject to legal preservation; earlier deletion is available through Study Settings. [Full privacy details](https://bias.pub/study/privacy).

## Troubleshooting and feedback

If CSV import fails, compare the header and data with the template and confirm the file is a CSV. If AI is unavailable, check your connection, consent, age eligibility, and allowance; local study remains usable.

Send beta feedback through TestFlight or email [support@bias.pub](mailto:support@bias.pub). Include version, device, and steps, without sending API keys or sensitive source material.
