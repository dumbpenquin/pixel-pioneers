function initiateScan() {
    const input = document.getElementById('scan-query').value;
    if (!input) return;

    // UI elements
    const terminal = document.getElementById('scan-terminal');
    const line2 = document.getElementById('line-2');
    const final = document.getElementById('final-result');
    const vTitle = document.getElementById('verdict-title');
    const vDesc = document.getElementById('verdict-desc');

    // Show terminal and reset
    terminal.classList.remove('hidden');
    line2.classList.add('hidden');
    final.classList.add('hidden');

    // Step 1: Log line 1 (Already visible)
    setTimeout(() => {
        // Step 2: Show log line 2
        line2.classList.remove('hidden');
        
        setTimeout(() => {
            // Step 3: Heuristic Check
            const redFlags = ['bit.ly', 'secure', 'bank', 'login', 'win', '00', '+1','+269', '+675', '+247', '+232', '+242'];
            const isScam = redFlags.some(flag => input.toLowerCase().includes(flag));

            final.classList.remove('hidden');
            if (isScam) {
                vTitle.innerText = "CRITICAL THREAT DETECTED";
                vTitle.style.color = "#FF4D00";
                vDesc.innerText = "Heuristic match found for suspicious redirect patterns. Do not engage.";
            } else {
                vTitle.innerText = "SYSTEM SECURE";
                vTitle.style.color = "#00FF87";
                vDesc.innerText = "No immediate threats identified in Redlight database. Standard caution advised.";
            }
        }, 1200);
    }, 800);
}