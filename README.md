# 🧑‍💻 Code of Duty – Hackathon Submission

> **Instructions:**  
> Please edit this README by filling in the required details.  
> Do **not** remove section headings.

---

## 📌 Team Information

- **Team Name:**  
- **Team Members:**  
  - Rubeba Nourin – Register No  
  - Saniya George – Register No  
  - Shivapriyya P S – Register No  
  - Yunus Kumar – Register No (if applicable)

- **Problem Domain:**  Cyber Fraud and Digital Scams
- **Selected Problem Statement:**  The rise of online transactions has led to an increase in cyber fraud and digital scams, especially impacting first-time and less-aware internet users.Limited digital literacy and lack of awareness about common fraud patterns make users vulnerable to online financial and identity-related risks.

---

## 🧩 Problem Description

Many internet users, especially first-time and less-aware users, lack practical knowledge to identify and handle cyber fraud. They struggle to recognize scam messages, fake links, and fraudulent calls, and are unable to assess the risk of suspicious URLs, phone numbers, or SMS in real time. Information about different scam types, their warning signs, and official reporting channels is fragmented and difficult to understand. Additionally, users lack immediate guidance when they face a potential scam, increasing the chances of financial and identity-related losses.

---

## 💡 Proposed Solution

To address the lack of cyber fraud awareness and real-time guidance, we developed an integrated cyber safety platform focused on education, prevention, and support. The core idea is to help users understand how scams work, identify risks quickly, and know what actions to take—all in one place.

The platform includes interactive quizzes based on real-life scam scenarios, a Duolingo-style guided tutor with short lessons on different scam types, and a risk scanner to check URLs, phone numbers, or messages for potential threats. It also features a scam information directory explaining common frauds, warning signs, and official reporting channels, along with a chatbot that offers instant help and guidance.

By combining awareness, real-time risk detection, and clear guidance, the solution reduces user vulnerability to cyber fraud and promotes safer digital behavior.

---

# CyberSafe - Project Documentation

A React-based cybersecurity education platform helping users learn about fraud prevention and report scams.

## Features

- 📚 **Interactive Courses**: Learn about phone scams, SMS/WhatsApp fraud, UPI scams, and identity theft
- 🤖 **AI Chatbot (Gemini AI)**: Get instant help with cybersecurity questions and fraud reporting guidance
- 📞 **Fraud Reporting**: Comprehensive guide with authority contacts, phone numbers, and websites
- 🎯 **Interactive Quizzes**: Test your knowledge with scenario-based questions

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development
- **Tailwind CSS v4** for styling
- **Google Gemini AI** for intelligent chatbot assistance
- **React Router** for navigation

## Setup & Installation

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Gemini AI API Key

The chatbot uses Google Gemini AI for intelligent responses. To enable it:

1. Get your Gemini API key from: https://aistudio.google.com/app/apikey
2. Create a `.env` file in the `cybersafe` directory:
   ```bash
   cp .env.example .env
   ```
3. Add your API key to `.env`:
   ```
   VITE_GEMINI_API_KEY=your_actual_api_key_here
   ```

**Note**: The chatbot will work with enhanced fallback responses even without an API key, but Gemini AI provides better, more contextual answers.

### 3. Run Development Server

```bash
npm run dev
```

Or from the root directory:
```bash
cd .. && npm run dev
```

### 4. Build for Production

```bash
npm run build
```

## Chatbot Features

The AI chatbot (CyberGuard) can:

- ✅ Answer cybersecurity questions
- ✅ Help identify scams and fraud attempts
- ✅ **Guide users on reporting fraud** with specific authority contacts
- ✅ Provide phone numbers, websites, and email addresses for relevant authorities
- ✅ Give step-by-step reporting procedures

### Supported Fraud Reporting Types

- 🏦 **Banking Fraud** (UPI, card fraud, unauthorized transactions)
- 📞 **Phone Call Scams** (Vishing, impersonation)
- 🆔 **Identity Theft** (Aadhaar, document fraud, SIM swap)
- 🛒 **Online Shopping Fraud** (Fake websites, delivery scams)
- 💰 **Investment Scams** (Ponzi schemes, crypto fraud)

### Emergency Contacts Included

- Police Emergency: **100**
- Cyber Crime Helpline: **1930**
- Women Helpline: **1091**
- Child Helpline: **1098**

## Project Structure

```
cybersafe/
├── src/
│   ├── components/
│   │   ├── chatbot/          # AI chatbot with Gemini integration
│   │   ├── tutor/            # Course lessons and quizzes
│   │   └── ui/               # UI components
│   ├── data/
│   │   ├── courses.ts        # Course content
│   │   └── fraudReporting.ts # Fraud reporting authority data
│   └── App.tsx               # Main application
├── .env.example              # Environment variables template
└── package.json
```

## Environment Variables

See `.env.example` for required environment variables:

- `VITE_GEMINI_API_KEY`: Google Gemini AI API key (optional but recommended)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

This is a cybersecurity education platform. Contributions to improve fraud awareness and reporting guidance are welcome.

