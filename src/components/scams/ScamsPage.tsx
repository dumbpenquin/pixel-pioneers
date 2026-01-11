import { useState } from "react";
import idScamImg from "./images/id-scam.jpeg";
import deepfakeImg from "./images/deepfake.jpeg";
import customerCareImg from "./images/customer-care.jpeg";
import jobScamImg from "./images/job-scam.jpeg";
import shoppingScamImg from "./images/shopping-scam.jpeg";
import investmentImg from "./images/investment.jpeg";
import loanAppImg from "./images/loan-app.jpeg";
import lotteryImg from "./images/lottery.jpeg";
import marketplaceImg from "./images/marketplace.jpeg";
import taskScamImg from "./images/task-scam.jpeg";
import otpKycImg from "./images/otp-kyc.jpeg";
import phishingImg from "./images/phishing.jpeg";
import remoteAccessImg from "./images/remote-access.jpeg";
import rentScamImg from "./images/rent-scam.jpeg";
import romanceImg from "./images/romance.jpeg";
import simSwapImg from "./images/sim-swap.jpeg";
import socialHackImg from "./images/social-hack.jpeg";
import upiQrImg from "./images/upi-qr.jpeg";

interface Scam {
  id: number;
  name: string;
  category: string;
  details: string;
  reportSteps: string;
  riskLevel: "High" | "Medium" | "Low";
  bgImage: string;
  reportWebsite: string;
  contactNumber: string;
}

const scamsData: Scam[] = [
  {
    id: 1,
    name: "Aadhaar / PAN Misuse",
    category: "Identity",
    details: "Fake verification messages asking for Aadhaar or PAN details.",
    reportSteps: "Do not share documents. Report scam.",
    riskLevel: "High",
    bgImage: idScamImg,
    reportWebsite: "https://resident.uidai.gov.in",
    contactNumber: "1947"
  },
  {
    id: 2,
    name: "Deepfake / AI Voice Call Scam",
    category: "Social",
    details: "AI-generated calls impersonating relatives or officials.",
    reportSteps: "Verify identity before sending money.",
    riskLevel: "High",
    bgImage: deepfakeImg,
    reportWebsite: "https://www.cert-in.org.in",
    contactNumber: "1800114949"
  },
  {
    id: 3,
    name: "Fake Customer Care Scam",
    category: "Financial",
    details: "Fraudsters pose as customer care executives and steal money.",
    reportSteps: "Disconnect call and report fake number.",
    riskLevel: "High",
    bgImage: customerCareImg,
    reportWebsite: "https://www.cert-in.org.in",
    contactNumber: "1800114949"
  },
  {
    id: 4,
    name: "Fake Job Offer",
    category: "Job",
    details: "High salary job offers with no interview, asking for registration or processing fees.",
    reportSteps: "Do not pay fees. Report to cybercrime portal.",
    riskLevel: "Medium",
    bgImage: jobScamImg,
    reportWebsite: "https://www.ncs.gov.in",
    contactNumber: "18004251514"
  },
  {
    id: 5,
    name: "Fake Online Shopping Website",
    category: "Shopping",
    details: "Websites offering huge discounts but never deliver products.",
    reportSteps: "Report website and contact bank.",
    riskLevel: "Medium",
    bgImage: shoppingScamImg,
    reportWebsite: "https://consumerhelpline.gov.in",
    contactNumber: "1915"
  },
  {
    id: 6,
    name: "Investment / Trading Scam",
    category: "Investment",
    details: "Fake crypto, stock trading tips promising guaranteed returns.",
    reportSteps: "Do not invest. Report platform.",
    riskLevel: "High",
    bgImage: investmentImg,
    reportWebsite: "https://www.sebi.gov.in",
    contactNumber: "1800227575"
  },
  {
    id: 7,
    name: "Loan App Scam",
    category: "Investment",
    details: "Fake instant loan apps that access contacts and blackmail users.",
    reportSteps: "Uninstall app and report immediately.",
    riskLevel: "High",
    bgImage: loanAppImg,
    reportWebsite: "https://www.rbi.org.in",
    contactNumber: "1800224400"
  },
  {
    id: 8,
    name: "Lottery / Prize Winning Scam",
    category: "Identity",
    details: "Messages claiming you won a prize and asking for fees.",
    reportSteps: "Ignore messages and report.",
    riskLevel: "High",
    bgImage: lotteryImg,
    reportWebsite: "https://www.mha.gov.in",
    contactNumber: "1800117777"
  },
  {
    id: 9,
    name: "OLX / Marketplace Scam",
    category: "Shopping",
    details: "Fake buyers send payment links or QR codes to steal money.",
    reportSteps: "Do not scan QR codes. Report seller/buyer.",
    riskLevel: "High",
    bgImage: marketplaceImg,
    reportWebsite: "https://www.olx.in/support",
    contactNumber: "18001234567"
  },
  {
    id: 10,
    name: "Online Task / Like & Earn Scam",
    category: "Job",
    details: "Small initial payments, later demands investment to continue earning.",
    reportSteps: "Stop communication and report.",
    riskLevel: "High",
    bgImage: taskScamImg,
    reportWebsite: "https://www.cybercrime.gov.in",
    contactNumber: "1930"
  },
  {
    id: 11,
    name: "OTP & KYC Fraud",
    category: "Financial",
    details: "Scammers ask for OTP, CVV, or fake KYC updates to access bank accounts.",
    reportSteps: "Never share OTP. Inform bank and report.",
    riskLevel: "High",
    bgImage: otpKycImg,
    reportWebsite: "https://www.rbi.org.in",
    contactNumber: "1800224400"
  },
  {
    id: 12,
    name: "Phishing Scam",
    category: "Financial",
    details: "Fake emails, SMS, or WhatsApp messages pretending to be banks or government bodies.",
    reportSteps: "Do not click links. Inform your bank.",
    riskLevel: "High",
    bgImage: phishingImg,
    reportWebsite: "https://www.cert-in.org.in",
    contactNumber: "1800114949"
  },
  {
    id: 13,
    name: "Remote Access App Scam",
    category: "Social",
    details: "Scammers ask users to install AnyDesk or TeamViewer.",
    reportSteps: "Uninstall app and contact bank.",
    riskLevel: "High",
    bgImage: remoteAccessImg,
    reportWebsite: "https://www.cert-in.org.in",
    contactNumber: "1800114949"
  },
  {
    id: 14,
    name: "Rental / PG Scam",
    category: "Shopping",
    details: "Fake property listings asking advance payments.",
    reportSteps: "Avoid advance payments. Report listing.",
    riskLevel: "Medium",
    bgImage: rentScamImg,
    reportWebsite: "https://www.consumerhelpline.gov.in",
    contactNumber: "1915"
  },
  {
    id: 15,
    name: "Romance / Dating Scam",
    category: "Social",
    details: "Emotional manipulation through dating apps to extract money.",
    reportSteps: "Block user and report.",
    riskLevel: "Medium",
    bgImage: romanceImg,
    reportWebsite: "https://www.cybercrime.gov.in",
    contactNumber: "1930"
  },
  {
    id: 16,
    name: "SIM Swap Fraud",
    category: "Identity",
    details: "SIM is deactivated to gain access to bank accounts.",
    reportSteps: "Contact mobile operator and bank immediately.",
    riskLevel: "High",
    bgImage: simSwapImg,
    reportWebsite: "https://www.dot.gov.in",
    contactNumber: "1800110420"
  },
  {
    id: 17,
    name: "Social Media Account Hacking",
    category: "Social",
    details: "Fake login links used to hijack accounts.",
    reportSteps: "Change password and enable 2FA.",
    riskLevel: "Medium",
    bgImage: socialHackImg,
    reportWebsite: "https://www.cybercrime.gov.in",
    contactNumber: "1930"
  },
  {
    id: 18,
    name: "UPI / QR Code Scam",
    category: "Financial",
    details: "Fake 'receive money' requests or QR codes that debit money.",
    reportSteps: "Block transaction immediately and contact bank.",
    riskLevel: "High",
    bgImage: upiQrImg,
    reportWebsite: "https://www.npci.org.in",
    contactNumber: "1800222226"
  }
];

export default function ScamsPage() {
  const [selectedScam, setSelectedScam] = useState<Scam | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [riskFilter, setRiskFilter] = useState("All");
  const [sortBy, setSortBy] = useState("name-asc");

  const categories = ["All", ...Array.from(new Set(scamsData.map(s => s.category)))];
  const riskLevels = ["All", "High", "Medium", "Low"];

  // Filter and sort scams
  let filteredScams = scamsData.filter(scam => {
    const matchesSearch = scam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scam.details.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "All" || scam.category === categoryFilter;
    const matchesRisk = riskFilter === "All" || scam.riskLevel === riskFilter;
    return matchesSearch && matchesCategory && matchesRisk;
  });

  // Sort scams
  filteredScams.sort((a, b) => {
    switch (sortBy) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "risk-high-low":
        const riskOrder = { High: 3, Medium: 2, Low: 1 };
        return riskOrder[b.riskLevel] - riskOrder[a.riskLevel];
      case "risk-low-high":
        const riskOrderReverse = { High: 3, Medium: 2, Low: 1 };
        return riskOrderReverse[a.riskLevel] - riskOrderReverse[b.riskLevel];
      default:
        return 0;
    }
  });

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "High":
        return "bg-red-500/20 text-red-400 border-red-500/50";
      case "Medium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50";
      case "Low":
        return "bg-green-500/20 text-green-400 border-green-500/50";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/50";
    }
  };

  return (
    <div className="min-h-screen p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600 mb-4">
            COMMON FRAUDS & SCAMS
          </h1>
          <p className="text-gray-300 text-lg">Learn about the most common scams and how to protect yourself</p>
        </div>

        {/* Filters */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Search scam..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-[#1C1F2A] border border-[#2A2E3B] rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none"
          />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="bg-[#1C1F2A] border border-[#2A2E3B] rounded-lg px-4 py-2 text-white focus:border-red-500 focus:outline-none"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <select
            value={riskFilter}
            onChange={(e) => setRiskFilter(e.target.value)}
            className="bg-[#1C1F2A] border border-[#2A2E3B] rounded-lg px-4 py-2 text-white focus:border-red-500 focus:outline-none"
          >
            {riskLevels.map(risk => (
              <option key={risk} value={risk}>{risk}</option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#1C1F2A] border border-[#2A2E3B] rounded-lg px-4 py-2 text-white focus:border-red-500 focus:outline-none"
          >
            <option value="name-asc">Name (A–Z)</option>
            <option value="name-desc">Name (Z–A)</option>
            <option value="risk-high-low">Risk (High → Low)</option>
            <option value="risk-low-high">Risk (Low → High)</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Scams List */}
          <div className="space-y-4 max-h-[70vh] overflow-y-auto">
            {filteredScams.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                No scams found matching your filters.
              </div>
            ) : (
              filteredScams.map(scam => (
                <div
                  key={scam.id}
                  onClick={() => setSelectedScam(scam)}
                  className={`bg-[#1C1F2A] border-2 rounded-lg p-4 cursor-pointer transition-all ${selectedScam?.id === scam.id
                      ? "border-red-500 shadow-lg shadow-red-500/20"
                      : "border-[#2A2E3B] hover:border-red-500/50"
                    }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-white">{scam.name}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-semibold border ${getRiskColor(scam.riskLevel)}`}>
                      {scam.riskLevel}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{scam.details}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="px-2 py-1 bg-[#141821] rounded">{scam.category}</span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Scam Details */}
          <div className="bg-[#1C1F2A] border border-[#2A2E3B] rounded-lg p-6 sticky top-4 max-h-[70vh] overflow-y-auto">
            {selectedScam ? (
              <div>
                <img
                  src={selectedScam.bgImage}
                  alt={selectedScam.name}
                  className="w-full h-48 object-cover rounded-lg mb-4 border border-[#2A2E3B] shadow-lg"
                />
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-white">{selectedScam.name}</h2>
                  <span className={`px-3 py-1 rounded text-sm font-semibold border ${getRiskColor(selectedScam.riskLevel)}`}>
                    {selectedScam.riskLevel} Risk
                  </span>
                </div>

                <div className="mb-4">
                  <span className="px-3 py-1 bg-[#141821] rounded text-sm text-gray-300">
                    {selectedScam.category}
                  </span>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-red-400 mb-2">What is it?</h3>
                  <p className="text-gray-300 mb-4">{selectedScam.details}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">What to do?</h3>
                  <p className="text-gray-300">{selectedScam.reportSteps}</p>
                </div>

                <div className="border-t border-[#2A2E3B] pt-4">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Report This Scam</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Website:</p>
                      <a
                        href={selectedScam.reportWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 underline break-all"
                      >
                        {selectedScam.reportWebsite}
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Helpline:</p>
                      <a
                        href={`tel:${selectedScam.contactNumber}`}
                        className="text-blue-400 hover:text-blue-300 underline"
                      >
                        📞 {selectedScam.contactNumber}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-400">
                <p className="text-lg mb-2">Click a scam to see details</p>
                <p className="text-sm">Select any scam from the list to learn more about it</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
