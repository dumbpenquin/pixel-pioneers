const quizData = [
    { q: "SMS: 'Your electricity will be cut in 1 hour. Pay immediately via this link: bit.ly/power-pay'", isScam: true },
    { q: "Email: 'Amazon Order #1029 delayed. Update your billing address at portal-amazon.net'", isScam: true },
    { q: "WhatsApp: 'Hello, this is your bank. We noticed suspicious activity. Please share your OTP for verification.'", isScam: true },
    { q: "The website URL starts with 'HTTPS' and has a verified security certificate lock icon.", isScam: false },
    { q: "Call: 'You won a lottery prize of $50,000! Just pay a $100 processing fee to claim it now.'", isScam: true },
    { q: "Video Call: 'POlice Officer claiming online arrest'", isScam: true},
    { q: "Notifications from the official banking app", isScam: false}
];

let currentIdx = 0;
let score = 0;

function loadQuestion() {
    if (currentIdx < quizData.length) {
        document.getElementById('feedback').classList.add('hidden');
        document.getElementById('next-btn').classList.add('hidden');
        
        document.getElementById('question-text').innerText = quizData[currentIdx].q;
        
        const displayNum = (currentIdx + 1).toString().padStart(2, '0');
        document.getElementById('q-number').innerText = displayNum;
        
        const progress = ((currentIdx + 1) / quizData.length) * 100;
        document.getElementById('progress-fill').style.width = progress + "%";
    } else {
        showResults();
    }
}

function checkAnswer(userSaidScam) {
    const isCorrect = userSaidScam === quizData[currentIdx].isScam;
    const feedbackEl = document.getElementById('feedback');
    
    feedbackEl.classList.remove('hidden');
    
    if (isCorrect) {
        score++;
        feedbackEl.innerText = "✓ THREAT IDENTIFIED / SYSTEM SECURE";
        feedbackEl.style.color = "#00ff87";
    } else {
        feedbackEl.innerText = "✗ SECURITY BREACH / VULNERABILITY DETECTED";
        feedbackEl.style.color = "#ff4d00";
    }

    document.getElementById('next-btn').classList.remove('hidden');
    currentIdx++;
}

// ... existing quizData and currentIdx variables ...

function showResults() {
    const card = document.querySelector('.quiz-card');
    
    // Calculate performance message
    let analysisText = score > 5 
        ? "EXCELLENT: Your cyber-defense levels are within safe parameters." 
        : "WARNING: High vulnerability detected. Review security protocols.";

    card.innerHTML = `
        <div class="scanline"></div>
        <div class="card-header">
            <div class="q-meta">
                <span class="number-label">STATUS:</span>
                <span class="number">END</span>
            </div>
        </div>
        
        <h1 class="main-title">DIAGNOSTICS COMPLETE</h1>
        
        <div class="question-container">
            <div class="corner-tl"></div><div class="corner-tr"></div>
            <div class="corner-bl"></div><div class="corner-br"></div>
            
            <div class="alert-header">
                <span class="pulse-dot"></span>
                <span class="alert-text">FINAL SECURITY SCORE</span>
            </div>
            <p id="question-text" style="font-size: 32px; color: var(--accent);">
                ${score} / ${quizData.length}
            </p>
            <p style="font-size: 14px; color: var(--text-med); margin-top: 10px;">
                ${analysisText}
            </p>
        </div>

        <div class="button-group" style="grid-template-columns: 1fr;">
            <button class="btn btn-scam" onclick="location.reload()" style="margin-bottom: 15px;">
                <span class="btn-inner">RE-RUN ANALYSIS</span>
            </button>
            
            <button class="btn btn-safe" onclick="window.location.href='index.html'">
                <span class="btn-inner">RETURN TO DASHBOARD</span>
            </button>
        </div>
    `;
}

// Logic for the Abort button (Optional: adds a confirmation)
function abortAnalysis() {
    if(confirm("Are you sure you want to terminate the current session? progress will be lost.")) {
        window.location.href = 'index.html';
    }
}

loadQuestion();