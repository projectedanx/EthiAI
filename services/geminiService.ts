
import { GoogleGenAI, Type } from "@google/genai";
import type { ComplianceReport } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY environment variable not set. Mock data will be used.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const MOCK_REPORT: ComplianceReport = {
    score: 92,
    biasSummary: "The agent's logic shows low risk of demographic bias. Recommendation: Continuously monitor performance with diverse test datasets to ensure fairness over time.",
    privacySummary: "Handles user data responsibly, with no apparent GDPR/CCPA violations. Recommendation: Ensure data minimization principles are strictly followed and provide clear user consent language.",
    ipSummary: "No direct evidence of incorporating protected content. The model's outputs are original. Recommendation: Implement a final human review for high-stakes content to mitigate unforeseen IP risks.",
    overallSummary: "This AI agent demonstrates a strong commitment to ethical standards and compliance. It is well-prepared for deployment in a commercial environment with minimal risk."
};

export const generateComplianceReport = async (agentDescription: string): Promise<ComplianceReport> => {
  if (!API_KEY) {
    console.log("Using mock compliance report due to missing API key.");
    return new Promise(resolve => setTimeout(() => resolve(MOCK_REPORT), 2000));
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are an AI ethics and compliance auditor. Based on the following description of an AI agent, generate a mock compliance report. The report should include:
      1. An overall compliance score (an integer between 70 and 100).
      2. A Bias Detection summary (mentioning potential for demographic bias and suggesting mitigation).
      3. A Data Privacy Compliance summary (checking for GDPR/CCPA-like risks and recommendations).
      4. An Intellectual Property Vetting summary (checking for potential use of copyrighted material).
      5. A brief, encouraging overall summary.

      The output MUST be in a valid JSON format. Do not include any markdown formatting like \`\`\`json.

      AI Agent Description:
      "${agentDescription}"`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.INTEGER, description: "Overall compliance score (70-100)." },
            biasSummary: { type: Type.STRING, description: "Summary of bias detection analysis." },
            privacySummary: { type: Type.STRING, description: "Summary of data privacy compliance." },
            ipSummary: { type: Type.STRING, description: "Summary of intellectual property vetting." },
            overallSummary: { type: Type.STRING, description: "A final, encouraging summary." },
          },
          required: ["score", "biasSummary", "privacySummary", "ipSummary", "overallSummary"],
        },
      },
    });

    const reportJsonString = response.text;
    const report = JSON.parse(reportJsonString) as ComplianceReport;
    return report;

  } catch (error) {
    console.error("Error generating compliance report:", error);
    // Fallback to mock data in case of API error
    return MOCK_REPORT;
  }
};
