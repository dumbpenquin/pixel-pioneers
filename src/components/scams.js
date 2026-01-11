const scams = [
  {
    id: 1,
    name: "Aadhaar / PAN Misuse",
    category: "Identity",
    details: "Fake verification messages asking for Aadhaar or PAN details.",
    reportSteps: "Do not share documents. Report scam.",
    helpline: "1930",
    riskLevel: "High",
    bgImage: "images/id-scam.jpeg"
  },
  {
    id: 2,
    name: "Deepfake / AI Voice Call Scam",
    category: "Social",
    details: "AI-generated calls impersonating relatives or officials.",
    reportSteps: "Verify identity before sending money.",
    helpline: "1930",
    riskLevel: "High",
    bgImage: "images/deepfake.jpg"
  },
  {
    id: 3,
    name: "Fake Customer Care Scam",
    category: "Financial",
    details: "Fraudsters pose as customer care executives and steal money.",
    reportSteps: "Disconnect call and report fake number.",
    helpline: "1930",
    riskLevel: "High",
    bgImage: "images/customer-care.jpg"
  },
  {
    id: 4,
    name: "Fake Job Offer",
    category: "Job",
    details: "High salary job offers with no interview, asking for registration or processing fees.",
    reportSteps: "Do not pay fees. Report to cybercrime portal.",
    helpline: "1930",
    riskLevel: "Medium",
    bgImage: "images/job-scam.jpg"
  },
  {
    id: 5,
    name: "Fake Online Shopping Website",
    category: "Shopping",
    details: "Websites offering huge discounts but never deliver products.",
    reportSteps: "Report website and contact bank.",
    helpline: "1930",
    riskLevel: "Medium",
    bgImage: "images/shopping-scam.jpg"
  },
  {
    id: 6,
    name: "Investment / Trading Scam",
    category: "Investment",
    details: "Fake crypto, stock trading tips promising guaranteed returns.",
    reportSteps: "Do not invest. Report platform.",
    helpline: "1930",
    riskLevel: "High",
    bgImage: "images/investment.jpg"
  },
  {
    id: 7,
    name: "Loan App Scam",
    category: "Investment",
    details: "Fake instant loan apps that access contacts and blackmail users.",
    reportSteps: "Uninstall app and report immediately.",
    helpline: "1930",
    riskLevel: "High",
    bgImage: "images/loan-app.jpg"
  },
  {
    id: 8,
    name: "Lottery / Prize Winning Scam",
    category: "Identity",
    details: "Messages claiming you won a prize and asking for fees.",
    reportSteps: "Ignore messages and report.",
    helpline: "1930",
    riskLevel: "High",
    bgImage: "images/lottery.jpg"
  },
  {
    id: 9,
    name: "OLX / Marketplace Scam",
    category: "Shopping",
    details: "Fake buyers send payment links or QR codes to steal money.",
    reportSteps: "Do not scan QR codes. Report seller/buyer.",
    helpline: "1930",
    riskLevel: "High",
    bgImage: "images/marketplace.jpg"
  },
  {
    id: 10,
    name: "Online Task / Like & Earn Scam",
    category: "Job",
    details: "Small initial payments, later demands investment to continue earning.",
    reportSteps: "Stop communication and report.",
    helpline: "1930",
    riskLevel: "High",
    bgImage: "images/task-scam.jpg"
  },
  {
    id: 11,
    name: "OTP & KYC Fraud",
    category: "Financial",
    details: "Scammers ask for OTP, CVV, or fake KYC updates to access bank accounts.",
    reportSteps: "Never share OTP. Inform bank and report.",
    helpline: "1930",
    riskLevel: "High",
    bgImage: "images/otp-kyc.jpg"
  },
  {
    id: 12,
    name: "Phishing Scam",
    category: "Financial",
    details: "Fake emails, SMS, or WhatsApp messages pretending to be banks or government bodies.",
    reportSteps: "Do not click links. Inform your bank.",
    helpline: "1930",
    riskLevel: "High",
    bgImage: "images/phishing.jpg"
  },
  {
    id: 13,
    name: "Remote Access App Scam",
    category: "Social",
    details: "Scammers ask users to install AnyDesk or TeamViewer.",
    reportSteps: "Uninstall app and contact bank.",
    helpline: "1930",
    riskLevel: "High",
    bgImage: "images/remote-access.jpg"
  },
  {
    id: 14,
    name: "Rental / PG Scam",
    category: "Shopping",
    details: "Fake property listings asking advance payments.",
    reportSteps: "Avoid advance payments. Report listing.",
    helpline: "1930",
    riskLevel: "Medium",
    bgImage: "images/rent-scam.jpg"
  },
  {
    id: 15,
    name: "Romance / Dating Scam",
    category: "Social",
    details: "Emotional manipulation through dating apps to extract money.",
    reportSteps: "Block user and report.",
    helpline: "1930",
    riskLevel: "Medium",
    bgImage: "images/romance.jpg"
  },
  {
    id: 16,
    name: "SIM Swap Fraud",
    category: "Identity",
    details: "SIM is deactivated to gain access to bank accounts.",
    reportSteps: "Contact mobile operator and bank immediately.",
    helpline: "1930",
    riskLevel: "High",
    bgImage: "images/sim-swap.jpg"
  },
  {
    id: 17,
    name: "Social Media Account Hacking",
    category: "Social",
    details: "Fake login links used to hijack accounts.",
    reportSteps: "Change password and enable 2FA.",
    helpline: "1930",
    riskLevel: "Medium",
    bgImage: "images/social-hack.jpg"
  },
  {
    id: 18,
    name: "UPI / QR Code Scam",
    category: "Financial",
    details: "Fake ‘receive money’ requests or QR codes that debit money.",
    reportSteps: "Block transaction immediately and contact bank.",
    helpline: "1930",
    riskLevel: "High",
    bgImage: "images/upi-qr.jpg"
  }
];
