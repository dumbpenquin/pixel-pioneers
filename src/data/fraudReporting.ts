// Fraud Reporting Authority Contacts and Information

export interface AuthorityContact {
  name: string;
  type: 'helpline' | 'website' | 'email' | 'app';
  contact: string;
  description?: string;
}

export interface FraudCategory {
  category: string;
  description: string;
  authorities: AuthorityContact[];
  steps: string[];
}

export const fraudReportingData: Record<string, FraudCategory> = {
  cybercrime: {
    category: 'Cybercrime & Online Fraud',
    description: 'Report cybercrimes, online fraud, phishing, hacking, and internet-related crimes',
    authorities: [
      {
        name: 'National Cyber Crime Reporting Portal',
        type: 'website',
        contact: 'https://www.cybercrime.gov.in',
        description: 'Official government portal for reporting all types of cybercrimes'
      },
      {
        name: 'Cyber Crime Helpline',
        type: 'helpline',
        contact: '1930',
        description: 'National helpline for cybercrime complaints (toll-free)'
      },
      {
        name: 'Cyber Crime Email',
        type: 'email',
        contact: 'helpline@cybercrime.gov.in',
        description: 'Email for cybercrime complaints'
      }
    ],
    steps: [
      'Visit cybercrime.gov.in or call 1930',
      'Click on "Report & Track" section',
      'Select the type of cybercrime',
      'Fill in the complaint form with all details',
      'Submit screenshots, call recordings, or transaction IDs as evidence',
      'Note your complaint number for tracking'
    ]
  },
  banking: {
    category: 'Banking Fraud',
    description: 'Report banking fraud, unauthorized transactions, UPI scams, and ATM fraud',
    authorities: [
      {
        name: 'Your Bank\'s Helpline',
        type: 'helpline',
        contact: 'Contact your bank immediately',
        description: 'Call your bank\'s 24/7 customer care number first'
      },
      {
        name: 'RBI Banking Ombudsman',
        type: 'website',
        contact: 'https://rbi.org.in/Scripts/Complaints.aspx',
        description: 'Reserve Bank of India complaint portal'
      },
      {
        name: 'NPCI UPI Fraud',
        type: 'website',
        contact: 'https://www.npci.org.in/what-we-do/upi/product-ecosystem/complaints',
        description: 'National Payments Corporation of India - UPI fraud complaints'
      }
    ],
    steps: [
      'Immediately block your card/UPI through bank app or call bank',
      'Contact your bank\'s fraud department within 24 hours',
      'File a police complaint (FIR) at your local police station',
      'Report to RBI Banking Ombudsman if bank doesn\'t resolve',
      'Keep all transaction IDs, screenshots, and call recordings',
      'Monitor your account for any unauthorized transactions'
    ]
  },
  phone: {
    category: 'Phone Call Scams',
    description: 'Report fake calls, vishing, impersonation, and phone-based fraud',
    authorities: [
      {
        name: 'DoT Telecom Consumer Complaints',
        type: 'website',
        contact: 'https://sancharsaathi.gov.in/',
        description: 'Department of Telecommunications complaint portal'
      },
      {
        name: 'TRAI Complaint Portal',
        type: 'website',
        contact: 'https://www.trai.gov.in/consumers/complaint',
        description: 'Telecom Regulatory Authority of India'
      },
      {
        name: 'Local Police Station',
        type: 'helpline',
        contact: '100',
        description: 'Emergency police helpline for immediate threats'
      }
    ],
    steps: [
      'Note down the phone number that called you',
      'Take screenshots of call logs and any messages received',
      'File a complaint on Sanchar Saathi portal',
      'Report to your local police if money was transferred',
      'Block the number and report as spam',
      'If threat involved, call police helpline 100 immediately'
    ]
  },
  identity: {
    category: 'Identity Theft & Document Fraud',
    description: 'Report identity theft, fake Aadhaar usage, document misuse, and SIM card fraud',
    authorities: [
      {
        name: 'UIDAI Aadhaar Fraud',
        type: 'website',
        contact: 'https://uidai.gov.in/en/contact-support/email-support.html',
        description: 'Unique Identification Authority of India - Aadhaar fraud reporting'
      },
      {
        name: 'UIDAI Helpline',
        type: 'helpline',
        contact: '1947',
        description: 'Toll-free helpline for Aadhaar-related issues'
      },
      {
        name: 'Cyber Crime Portal',
        type: 'website',
        contact: 'https://www.cybercrime.gov.in',
        description: 'Report identity theft and document fraud'
      }
    ],
    steps: [
      'Lock your Aadhaar biometrics on myaadhaar.uidai.gov.in',
      'Check if any loans or accounts were opened in your name',
      'Report to UIDAI via email or call 1947',
      'File FIR at local police station',
      'Monitor your credit report regularly',
      'Update your documents if compromised'
    ]
  },
  online: {
    category: 'Online Shopping & E-commerce Fraud',
    description: 'Report online shopping fraud, fake websites, delivery scams, and refund fraud',
    authorities: [
      {
        name: 'Consumer Helpline',
        type: 'helpline',
        contact: '1915',
        description: 'National Consumer Helpline'
      },
      {
        name: 'Consumer Portal',
        type: 'website',
        contact: 'https://consumerhelpline.gov.in/',
        description: 'Official consumer complaint portal'
      },
      {
        name: 'Cyber Crime Portal',
        type: 'website',
        contact: 'https://www.cybercrime.gov.in',
        description: 'Report online fraud and fake websites'
      }
    ],
    steps: [
      'Stop all communication with the fraudulent seller',
      'Take screenshots of product pages, conversations, and transactions',
      'Contact your bank/payment gateway to dispute the transaction',
      'File complaint on consumerhelpline.gov.in',
      'Report fake websites to cybercrime.gov.in',
      'Review and rate the seller if platform allows'
    ]
  },
  investment: {
    category: 'Investment & Financial Scams',
    description: 'Report investment fraud, Ponzi schemes, fake investment opportunities, and crypto scams',
    authorities: [
      {
        name: 'SEBI Complaint',
        type: 'website',
        contact: 'https://scores.gov.in/scores/Welcome.html',
        description: 'Securities and Exchange Board of India complaint portal'
      },
      {
        name: 'SEBI Helpline',
        type: 'helpline',
        contact: '1800 266 7575',
        description: 'SEBI investor helpline'
      },
      {
        name: 'Cyber Crime Portal',
        type: 'website',
        contact: 'https://www.cybercrime.gov.in',
        description: 'Report online investment fraud'
      }
    ],
    steps: [
      'Stop all investments immediately',
      'Collect all transaction receipts and communication',
      'Verify if the company is registered with SEBI/RBI',
      'File complaint with SEBI if it\'s a registered entity',
      'Report to cybercrime portal for online scams',
      'File FIR if significant money is involved'
    ]
  }
};

export const emergencyContacts = {
  police: { name: 'Police Emergency', number: '100', description: 'Emergency helpline for immediate threats' },
  cybercrime: { name: 'Cyber Crime Helpline', number: '1930', description: 'National cybercrime reporting helpline' },
  women: { name: 'Women Helpline', number: '1091', description: 'Emergency helpline for women' },
  child: { name: 'Child Helpline', number: '1098', description: 'Emergency helpline for children' }
};

export function getReportingInfo(keywords: string[]): FraudCategory | null {
  const lowerKeywords = keywords.map(k => k.toLowerCase());
  
  for (const [, data] of Object.entries(fraudReportingData)) {
    const categoryLower = data.category.toLowerCase();
    if (lowerKeywords.some(k => categoryLower.includes(k)) || 
        lowerKeywords.some(k => data.description.toLowerCase().includes(k))) {
      return data;
    }
  }
  
  // Match specific keywords
  if (lowerKeywords.some(k => ['bank', 'upi', 'payment', 'transaction'].includes(k))) {
    return fraudReportingData.banking;
  }
  if (lowerKeywords.some(k => ['phone', 'call', 'vishing'].includes(k))) {
    return fraudReportingData.phone;
  }
  if (lowerKeywords.some(k => ['aadhaar', 'identity', 'document', 'pan'].includes(k))) {
    return fraudReportingData.identity;
  }
  if (lowerKeywords.some(k => ['online', 'shopping', 'ecommerce', 'website'].includes(k))) {
    return fraudReportingData.online;
  }
  if (lowerKeywords.some(k => ['investment', 'crypto', 'stock', 'ponzi'].includes(k))) {
    return fraudReportingData.investment;
  }
  
  return null;
}