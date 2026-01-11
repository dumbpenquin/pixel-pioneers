export type Question = {
  type: "mcq" | "truefalse";
  question: string;
  options?: string[];
  answer: string;
};

export type LessonItem =
  | { kind: "card"; title: string; content: string }
  | { kind: "question"; data: Question };

export type Course = {
  id: string;
  title: string;
  icon: string;
  lessons: LessonItem[];
};

export const courses: Course[] = [
  {
  id: "phone",
  title: "Phone Call Scams",
  icon: "📞",
  lessons: [

    // ===== INTRO =====
    { kind: "card", title: "Why Phone Calls Are Dangerous", content: "Phone calls are a favorite tool for scammers because they allow direct, personal interaction. Scammers can build trust quickly, apply emotional pressure, and manipulate victims into making hasty decisions without time to think or verify." },

    { kind: "card", title: "How They Control You", content: "Scammers use psychological tactics: they speak with authority and confidence, instill fear or urgency, create a sense of obligation, and rush you to act before you can consult others or check facts." },

    // ===== SCENARIO 1 =====
    { kind: "card", title: "Scenario: Bank Call", content: "You receive a call from someone claiming to be from your bank, like SBI. They say: 'Your account is at risk of being blocked immediately. To secure it, I need you to provide your OTP right now.'" },

    {
      kind: "question",
      data: {
        type: "mcq",
        question: "What should you do?",
        options: [
          "Share OTP quickly",
          "Ask them to repeat",
          "Cut call and contact bank yourself",
          "Trust because they know your name"
        ],
        answer: "Cut call and contact bank yourself"
      }
    },

    { kind: "card", title: "Why This Is a Scam", content: "Legitimate banks never ask for OTPs over the phone. They understand that OTPs are sensitive security codes that should only be entered directly into official banking apps or websites. Scammers use fear tactics to bypass your caution." },

    // ===== OTP =====
    { kind: "card", title: "OTP Is Your Key", content: "An OTP (One-Time Password) is a unique, temporary code that grants access to your bank account or financial transactions. Sharing it with anyone, even if they sound official, can lead to immediate theft of your funds." },

    {
      kind: "question",
      data: {
        type: "truefalse",
        question: "OTP can be shared if caller sounds professional.",
        options: ["Yes, it's safe to share", "No, never share OTPs"],
        answer: "No, never share OTPs"
      }
    },

    { kind: "card", title: "Golden Rule", content: "No genuine bank employee or representative will ever ask you to share your OTP over the phone, via text, or through any unofficial channel. If someone does, it's a scam." },

    // ===== SCENARIO 2 =====
    { kind: "card", title: "Scenario: Police Threat", content: "A caller identifies themselves as a police officer or government official and claims: 'We've detected illegal activity linked to your Aadhaar card. You must pay a fine immediately or face arrest and legal action.'" },

    {
      kind: "question",
      data: {
        type: "mcq",
        question: "Best action?",
        options: [
          "Pay immediately",
          "Argue loudly",
          "Disconnect and call real police or family",
          "Share Aadhaar number"
        ],
        answer: "Disconnect and call real police or family"
      }
    },

    { kind: "card", title: "Authority Scam", content: "Scammers impersonate police, CBI agents, court officials, or other authorities to intimidate victims. Real officials never demand immediate payments over the phone or threaten arrest without proper legal procedures." },

    // ===== REFUND =====
    { kind: "card", title: "Refund Scam", content: "Scammers promise refunds for overpaid bills, taxes, or services. They may ask you to install remote access apps, share verification codes, or provide personal information to 'process' the refund." },

    {
      kind: "question",
      data: {
        type: "truefalse",
        question: "Refund requires OTP or remote access.",
        options: ["Yes, refunds need OTP/remote access", "No, legitimate refunds don't require this"],
        answer: "No, legitimate refunds don't require this"
      }
    },

    // ===== SCREEN SHARING =====
    { kind: "card", title: "Screen Sharing Danger", content: "Scammers request you to install apps like AnyDesk, TeamViewer, or similar remote desktop tools, claiming it's necessary for them to assist you. Once installed, they can see everything on your screen, including sensitive information and passwords." },

    // ===== CALLER ID =====
    { kind: "card", title: "Fake Caller ID", content: "Modern technology allows scammers to spoof caller IDs, making their numbers appear as if they're calling from legitimate banks, government offices, or known contacts. Never rely solely on the displayed number." },

    {
      kind: "question",
      data: {
        type: "truefalse",
        question: "Caller ID always shows real person.",
        options: ["Yes, caller ID is always accurate", "No, caller ID can be faked"],
        answer: "No, caller ID can be faked"
      }
    },

    // ===== EMOTIONAL MANIPULATION =====
    { kind: "card", title: "Emotional Pressure", content: "Scammers exploit emotions like fear (account blocking, legal trouble), respect for authority, urgency (time-sensitive offers), or greed (unexpected refunds) to manipulate your decision-making process." },

    // ===== SAFETY HABITS =====
    { kind: "card", title: "Safe Habits", content: "Always hang up on suspicious calls. Verify claims by calling official numbers from the organization's website. Consult family or trusted advisors before taking any action. Remember: if it sounds too urgent or threatening, it's likely a scam." },

    // ===== MINI TEST =====
    { kind: "card", title: "Mini Test", content: "Answer these to check your understanding." },

    {
      kind: "question",
      data: {
        type: "mcq",
        question: "Bank asks OTP on call. You should?",
        options: [
          "Share it",
          "Cut call",
          "Delay",
          "Ask reason"
        ],
        answer: "Cut call"
      }
    },

    {
      kind: "question",
      data: {
        type: "truefalse",
        question: "Police collect fines through phone calls.",
        options: ["Yes, police collect fines by phone", "No, police don't collect fines this way"],
        answer: "No, police don't collect fines this way"
      }
    },

    {
      kind: "question",
      data: {
        type: "mcq",
        question: "Safest habit?",
        options: [
          "Trust caller",
          "Stay calm and verify independently",
          "Follow instructions quickly",
          "Hide information"
        ],
        answer: "Stay calm and verify independently"
      }
    },

    { kind: "card", title: "You Are Now Safer", content: "You can now protect yourself from phone call scams." }
  ]
}
,

  {
  id: "sms",
  title: "SMS & WhatsApp Scams",
  icon: "💬",
  lessons: [

    // ===== INTRO =====
    { kind: "card", title: "Why Messages Are Dangerous", content: "SMS and WhatsApp scams are increasingly common because messages feel more personal and trustworthy than unsolicited calls. Scammers can send messages that appear to come from known contacts or official sources, making them harder to spot." },

    { kind: "card", title: "How Scammers Think", content: "Scammers design messages to trigger immediate emotional responses: urgency to act quickly, fear of losing something important, excitement about winning prizes, or concern for loved ones. This prevents victims from taking time to verify the message's authenticity." },

    // ===== SCENARIO 1 =====
    { kind: "card", title: "Scenario: Bank Alert", content: "You receive a message that reads: 'URGENT: Your bank account will be suspended in 2 hours due to suspicious activity. Click this link to verify your account and prevent blocking.'" },

    {
      kind: "question",
      data: {
        type: "mcq",
        question: "What should you do?",
        options: [
          "Click the link immediately",
          "Reply asking for details",
          "Call the bank using official number",
          "Forward message to family"
        ],
        answer: "Call the bank using official number"
      }
    },

    { kind: "card", title: "Why This Is a Scam", content: "Legitimate banks never send urgent alerts with clickable links, especially not for account verification. They communicate through official apps, emails, or direct calls from known numbers. Scammers use fear and time pressure to make you click malicious links." },

    // ===== LINKS =====
    { kind: "card", title: "Dangerous Links", content: "Malicious links in messages can lead to phishing websites that steal your login credentials, install malware on your device, or trick you into downloading harmful apps that compromise your security." },

    {
      kind: "question",
      data: {
        type: "truefalse",
        question: "Links from unknown numbers are safe if they look official.",
        options: ["Yes, official-looking links are safe", "No, never click unknown links"],
        answer: "No, never click unknown links"
      }
    },

    { kind: "card", title: "Rule", content: "Never click on links from unsolicited messages, even if they appear to be from trusted sources. Always type official website addresses manually into your browser instead." },

    // ===== OTP =====
    { kind: "card", title: "OTP Trap", content: "Scammers send messages claiming there's an issue with your account and request you to reply with your OTP 'to secure your account' or 'verify your identity.' This is a direct attempt to steal your one-time password." },

    {
      kind: "question",
      data: {
        type: "truefalse",
        question: "OTP should be shared on WhatsApp if message looks real.",
        options: ["Yes, share if message looks real", "No, never share OTPs via messages"],
        answer: "No, never share OTPs via messages"
      }
    },

    { kind: "card", title: "Memory Rule", content: "Treat your OTP like your ATM PIN or credit card details - it's a secret code that should never be shared through messages, calls, or any unofficial channels, no matter how convincing the request appears." },

    // ===== SCENARIO 2 =====
    { kind: "card", title: "Scenario: Family Emergency", content: "You get a WhatsApp message from what appears to be your child's number: 'Mom/Dad, I lost my phone and need money urgently. Please send ₹10,000 to this account number right away for an emergency.'" },

    {
      kind: "question",
      data: {
        type: "mcq",
        question: "Best response?",
        options: [
          "Send money immediately",
          "Reply to message",
          "Call your real son/daughter",
          "Ignore"
        ],
        answer: "Call your real son/daughter"
      }
    },

    { kind: "card", title: "Emotional Scams", content: "Scammers exploit strong emotions like parental love, fear for family safety, or concern for children's well-being. They may use stolen contact information to make messages appear genuine." },

    // ===== FAKE SUPPORT =====
    { kind: "card", title: "Fake Customer Support", content: "Scammers impersonate customer support from banks, e-commerce sites like Amazon, utility companies, or government services. They offer 'help' with issues that don't exist." },

    { kind: "card", title: "Real Support Rule", content: "Always contact companies or services using phone numbers and websites found on official documents, not from messages. Look up contact information independently." },

    // ===== QR =====
    { kind: "card", title: "QR Code Scam", content: "Messages may contain QR codes promising refunds, prizes, or payments. Scanning these can automatically transfer money from your account or install malicious software." },

    // ===== JOB =====
    { kind: "card", title: "Fake Job Messages", content: "Messages advertise 'easy work from home' opportunities with promises of high daily earnings. They often require you to pay 'registration fees' or provide personal information first." },

    // ===== INVESTMENT =====
    { kind: "card", title: "Fake Investment Groups", content: "WhatsApp groups promise 'guaranteed returns' on investments or cryptocurrencies. These are often Ponzi schemes where early members profit from new recruits' investments." },

    // ===== GOLDEN RULES =====
    { kind: "card", title: "Golden Safety Rules", content: "Never click suspicious links. Never share OTPs through messages. Always verify claims through official channels. Stay calm and think before responding to urgent requests." },

    // ===== MINI TEST =====
    { kind: "card", title: "Mini Test", content: "Answer these to check your understanding." },

    {
      kind: "question",
      data: {
        type: "mcq",
        question: "You receive prize message. What is safest?",
        options: [
          "Click link",
          "Ignore and delete",
          "Reply asking proof",
          "Forward to friends"
        ],
        answer: "Ignore and delete"
      }
    },

    {
      kind: "question",
      data: {
        type: "truefalse",
        question: "Banks send OTP requests through WhatsApp.",
        options: ["Yes, banks use WhatsApp for OTP", "No, banks never request OTP via WhatsApp"],
        answer: "No, banks never request OTP via WhatsApp"
      }
    },

    {
      kind: "question",
      data: {
        type: "mcq",
        question: "Best way to verify a message?",
        options: [
          "Reply to message",
          "Call using official number",
          "Trust profile photo",
          "Ask stranger"
        ],
        answer: "Call using official number"
      }
    },

    { kind: "card", title: "You Are Now Safer", content: "You can now identify and avoid SMS & WhatsApp scams." }
  ]
},
  {
  id: "upi",
  title: "UPI & Payment Scams",
  icon: "💳",
  lessons: [

    // ===== INTRO =====
    { kind: "card", title: "Why UPI Scams Are Common", content: "UPI (Unified Payments Interface) enables instant money transfers in India. Once money is sent, it can be extremely difficult to reverse the transaction, making it an attractive target for scammers who want quick, irreversible theft." },

    { kind: "card", title: "How Scammers Trick You", content: "Scammers use confusing technical jargon, create false urgency, and exploit your trust in the UPI system. They may pose as customer support or use social engineering to convince you to send money willingly." },

    // ===== SCENARIO 1 =====
    { kind: "card", title: "Scenario: Refund Offer", content: "A caller claims to be from your bank or payment app support and says: 'You've been selected for a refund. I'm sending you a UPI payment request right now. Please approve it to receive your money.'" },

    {
      kind: "question",
      data: {
        type: "mcq",
        question: "What should you do?",
        options: [
          "Approve request",
          "Share UPI PIN",
          "Reject and disconnect",
          "Ask them to send again"
        ],
        answer: "Reject and disconnect"
      }
    },

    { kind: "card", title: "Truth About Requests", content: "In UPI, receiving money doesn't require your approval - money appears in your account automatically. However, approving a 'request' actually means you're sending money to someone else. Scammers exploit this confusion." },

    // ===== REQUEST TRICK =====
    { kind: "card", title: "The Request Money Trick", content: "Scammers send UPI payment requests disguised as refunds, prizes, or reimbursements. They pressure you to approve these requests, which transfers money from your account to theirs." },

    {
      kind: "question",
      data: {
        type: "truefalse",
        question: "You must approve request to receive money.",
        options: ["Yes, approve to receive money", "No, receiving doesn't require approval"],
        answer: "No, receiving doesn't require approval"
      }
    },

    // ===== QR SCAM =====
    { kind: "card", title: "QR Code Scam", content: "Scammers send QR codes via messages or calls, claiming 'Scan this to receive your refund' or 'Verify your account.' Scanning these QR codes often initiates payments to the scammer's account." },

    {
      kind: "question",
      data: {
        type: "mcq",
        question: "Scanning QR code usually means?",
        options: [
          "Receiving money",
          "Sending money",
          "Checking balance",
          "Verifying account"
        ],
        answer: "Sending money"
      }
    },

    // ===== SCREEN SHARING =====
    { kind: "card", title: "Screen Sharing Scam", content: "Scammers convince you to install remote access software like AnyDesk or TeamViewer, claiming it's needed to 'process your refund' or 'fix a technical issue' with your payment app." },

    { kind: "card", title: "What Happens Then", content: "Once they have remote access to your screen, scammers can see your UPI app, read OTPs as they arrive, and transfer money from your account while you watch helplessly." },

    // ===== FAKE SUPPORT =====
    { kind: "card", title: "Fake Customer Care", content: "Scammers impersonate support staff from popular UPI apps like Paytm, Google Pay, PhonePe, or Amazon Pay. They may claim there's an issue with your account that requires immediate action." },

    {
      kind: "question",
      data: {
        type: "truefalse",
        question: "Customer support asks for UPI PIN.",
        options: ["Yes, support needs UPI PIN", "No, legitimate support never asks for PIN"],
        answer: "No, legitimate support never asks for PIN"
      }
    },

    // ===== SMALL AMOUNT TRICK =====
    { kind: "card", title: "Small Amount Trick", content: "Scammers first send you a small amount (₹1-₹10) to build trust and demonstrate that 'refunds work.' Once you believe them, they convince you to send larger amounts back or approve bigger requests." },

    // ===== SAFE HABITS =====
    { kind: "card", title: "Safe Payment Habits", content: "Never share your UPI PIN with anyone. Never approve payment requests from unknown sources. Never allow screen sharing with strangers. Always verify through official apps only." },

    // ===== SCENARIO 2 =====
    { kind: "card", title: "Scenario: Electricity Bill Refund", content: "A caller from 'electricity department support' says: 'Your bill was overcharged. Scan this QR code to receive an instant refund of ₹500.' They provide what looks like an official QR code." },

    {
      kind: "question",
      data: {
        type: "mcq",
        question: "Correct action?",
        options: [
          "Scan QR code",
          "Share UPI PIN",
          "Reject and contact company officially",
          "Install their app"
        ],
        answer: "Reject and contact company officially"
      }
    },

    // ===== MINI TEST =====
    { kind: "card", title: "Mini Test", content: "Check your understanding." },

    {
      kind: "question",
      data: {
        type: "mcq",
        question: "To receive money you must?",
        options: [
          "Approve request",
          "Share PIN",
          "Do nothing",
          "Scan QR"
        ],
        answer: "Do nothing"
      }
    },

    {
      kind: "question",
      data: {
        type: "truefalse",
        question: "UPI PIN is like ATM PIN.",
        options: ["Yes, UPI PIN is like ATM PIN", "No, they are different"],
        answer: "Yes, UPI PIN is like ATM PIN"
      }
    },

    {
      kind: "question",
      data: {
        type: "mcq",
        question: "Safest habit?",
        options: [
          "Trust callers",
          "Approve refunds",
          "Verify using official app/number",
          "Share OTP"
        ],
        answer: "Verify using official app/number"
      }
    },

    { kind: "card", title: "You Are Now Safer", content: "You can now avoid UPI & digital payment scams." }
  ]
}
,
  {
  id: "identity",
  title: "Identity & Document Scams",
  icon: "🪪",
  lessons: [

    // ===== INTRO =====
    { kind: "card", title: "What Is Identity Fraud?", content: "Identity theft occurs when scammers steal your personal documents like Aadhaar, PAN card, passport, or bank details. They use this information to open fraudulent accounts, take loans in your name, make unauthorized transactions, or commit other crimes that damage your financial standing and credit score." },

    { kind: "card", title: "Why Elders Are Targeted", content: "Scammers often target older adults because they may have more trust in authority figures and be less familiar with modern digital verification processes. Elders might also have accumulated assets that make them attractive targets for large-scale fraud." },

    // ===== SCENARIO 1 =====
    { kind: "card", title: "Scenario: KYC Update Call", content: "You receive a call from someone claiming to be from UIDAI or your bank: 'Your Aadhaar KYC verification is incomplete and will expire soon. Send a clear photo of your Aadhaar card right now via WhatsApp, or your pension and benefits will be stopped immediately.'" },

    {
      kind: "question",
      data: {
        type: "mcq",
        question: "What should you do?",
        options: [
          "Send Aadhaar photo",
          "Ask for WhatsApp details",
          "Hang up and verify through official office",
          "Share OTP"
        ],
        answer: "Hang up and verify through official office"
      }
    },

    { kind: "card", title: "Why This Is a Scam", content: "Government agencies and banks never request sensitive documents like Aadhaar photos through phone calls or messaging apps. All official KYC processes happen in person at designated centers or through secure, official portals." },

    // ===== DOCUMENT MISUSE =====
    { kind: "card", title: "How Documents Are Misused", content: "Once scammers have your identity documents, they can use them to apply for credit cards, loans, or new bank accounts in your name. They might also commit tax fraud, apply for government benefits, or even impersonate you in legal matters." },

    {
      kind: "question",
      data: {
        type: "truefalse",
        question: "Sharing Aadhaar on WhatsApp is safe.",
        options: ["Yes, it's safe to share Aadhaar", "No, never share Aadhaar via WhatsApp"],
        answer: "No, never share Aadhaar via WhatsApp"
      }
    },

    // ===== FAKE FORMS =====
    { kind: "card", title: "Fake Online Forms", content: "Scammers create convincing fake websites that look like official government or bank portals. They send links asking you to 'update' your information by uploading scanned copies of your documents, which they then use for fraudulent activities." },

    // ===== SCENARIO 2 =====
    { kind: "card", title: "Scenario: SIM Block Message", content: "You receive an SMS or WhatsApp message that appears to be from your telecom provider: 'Your SIM card registration is incomplete. Upload your Aadhaar card to continue service, or your number will be blocked permanently.'" },

    {
      kind: "question",
      data: {
        type: "mcq",
        question: "Correct action?",
        options: [
          "Upload Aadhaar",
          "Reply to message",
          "Visit telecom store or official website",
          "Share OTP"
        ],
        answer: "Visit telecom store or official website"
      }
    },

    { kind: "card", title: "SIM Swap Fraud", content: "In SIM swap fraud, scammers use your personal information to convince your telecom provider to transfer your phone number to a new SIM card they control. This allows them to intercept your SMS OTPs and two-factor authentication codes." },

    // ===== FAKE JOBS =====
    { kind: "card", title: "Fake Job & Pension Forms", content: "Scammers pose as government employment agencies or pension offices, promising job opportunities or additional pension benefits. They request personal documents 'for verification' or ask for 'processing fees' that are actually scams." },

    {
      kind: "question",
      data: {
        type: "truefalse",
        question: "Government schemes require WhatsApp document submission.",
        options: ["Yes, government uses WhatsApp", "No, official schemes don't require WhatsApp submission"],
        answer: "No, official schemes don't require WhatsApp submission"
      }
    },

    // ===== DEEPFAKE =====
    { kind: "card", title: "Photo & Video Misuse", content: "Your photographs can be manipulated using AI technology to create deepfake videos or images. Scammers might use these to impersonate you in video calls or create fake social media profiles for fraudulent activities." },

    // ===== SAFE STORAGE =====
    { kind: "card", title: "Safe Document Storage", content: "Keep physical documents in locked cabinets or safes. For digital copies, use encrypted storage and avoid storing sensitive documents on shared devices. Only share documents when absolutely necessary and only through official, secure channels." },

    // ===== WARNING SIGNS =====
    { kind: "card", title: "Warning Signs", content: "Be alert for urgent demands, threats of service disconnection, requests for immediate action, unofficial contact methods, poor grammar or spelling in communications, and promises of benefits that sound too good to be true." },

    // ===== MINI TEST =====
    { kind: "card", title: "Mini Test", content: "Check your understanding." },

    {
      kind: "question",
      data: {
        type: "mcq",
        question: "Who should receive your Aadhaar copy?",
        options: [
          "WhatsApp caller",
          "Unknown website",
          "Official office only",
          "SMS sender"
        ],
        answer: "Official office only"
      }
    },

    {
      kind: "question",
      data: {
        type: "truefalse",
        question: "SIM can be taken over using Aadhaar details.",
        options: ["Yes, Aadhaar can be used for SIM takeover", "No, Aadhaar details don't allow SIM takeover"],
        answer: "Yes, Aadhaar can be used for SIM takeover"
      }
    },

    {
      kind: "question",
      data: {
        type: "mcq",
        question: "Safest habit?",
        options: [
          "Share quickly",
          "Trust caller",
          "Verify in person or official site",
          "Ignore everything"
        ],
        answer: "Verify in person or official site"
      }
    },

    { kind: "card", title: "You Are Now Safer", content: "You can now protect your identity and documents." }
  ]
}

];
