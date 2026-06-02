<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# EthiAI Verify: Compliant AI Agent & Template Marketplace

## Project Intent and Context

EthiAI Verify addresses a critical problem space in modern artificial intelligence deployment: **Trust and Compliance**. As AI agents become more prevalent, the risks associated with deploying them—including demographic bias, data privacy violations (GDPR/CCPA), and intellectual property infringement—have grown significantly.

This repository provides a marketplace frontend that not only lists AI agents and templates but integrates an automated compliance auditing solution. By leveraging Google's **Gemini 2.5 Flash** model (via the GenAI SDK), the platform generates real-time compliance reports for AI agent descriptions, ensuring that any agent deployed through the marketplace meets strict ethical standards.

### Problem Spaces Emphasized
*   **Untrusted AI Agents:** Lack of transparency in how agents handle logic and data.
*   **Demographic Bias Risks:** Potential for discriminatory behavior in agent decision-making.
*   **Privacy & IP Risks:** Mishandling user data or incorporating copyrighted materials.

### Solutions Implemented
*   **Automated Compliance Auditing:** Seamless integration with Gemini 2.5 Flash to vet agent descriptions.
*   **Transparent Scoring:** Generating an actionable "Compliance Score" alongside detailed summaries for Bias, Privacy, and IP.

---

## 0xCARTO Documentation Synthesis

This repository has been mapped and analyzed using the 0xCARTO Mycelial Ingestion Protocol. For an in-depth ontological and architectural breakdown, please refer to the synthesis document:

👉 **[Read the 0xCARTO Synthesis Report](./docs/0xCARTO_SYNTHESIS.md)**

---

## Run Locally

**Prerequisites:** Node.js (v18+)

1. **Clone and Install dependencies:**
   `npm install`

2. **Environment Configuration:**
   Copy the example environment file and set your Gemini API key.
   `cp .env.example .env.local`
   *Note: Edit `.env.local` and set `GEMINI_API_KEY` to your valid Google Gemini API Key. If left blank, the application will gracefully degrade and use mock data for compliance reports.*

3. **Run the development server:**
   `npm run dev`

View your app in AI Studio: https://ai.studio/apps/drive/17IXE5sFhB7JDpcHgHpPxr5t8dGnwcb2t
