export interface AgentTemplate {
  id: number;
  title: string;
  creator: string;
  category: string;
  description: string;
  price: number;
  imageUrl: string;
  complianceScore: number;
}

export interface ComplianceReport {
  score: number;
  biasSummary: string;
  privacySummary: string;
  ipSummary: string;
  overallSummary: string;
}

export interface PublishedAgent extends Omit<AgentTemplate, 'creator' | 'description' | 'price' | 'imageUrl'> {
  earnings: {
    total: number;
    mrr: number;
  };
  status: 'Published' | 'In Review';
}
