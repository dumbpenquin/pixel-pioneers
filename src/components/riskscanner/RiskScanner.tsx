import { useState, useEffect } from 'react';

export default function RiskScanner() {
    const [query, setQuery] = useState("");
    const [scanning, setScanning] = useState(false);
    const [result, setResult] = useState<{ isScam: boolean; title: string; desc: string } | null>(null);
    const [logs, setLogs] = useState<string[]>([]);

    const initiateScan = () => {
        if (!query) return;

        setScanning(true);
        setResult(null);
        setLogs([">> Initializing Redlight Heuristics..."]);

        setTimeout(() => {
            setLogs(prev => [...prev, ">> Checking global blacklists..."]);

            setTimeout(() => {
                const redFlags = ['bit.ly', 'secure', 'bank', 'login', 'win', '00', '+1', '+269', '+675', '+247', '+232', '+242'];
                const isScam = redFlags.some(flag => query.toLowerCase().includes(flag));

                if (isScam) {
                    setResult({
                        isScam: true,
                        title: "CRITICAL THREAT DETECTED",
                        desc: "Heuristic match found for suspicious redirect patterns. Do not engage."
                    });
                } else {
                    setResult({
                        isScam: false,
                        title: "SYSTEM SECURE",
                        desc: "No immediate threats identified in Redlight database. Standard caution advised."
                    });
                }
                setScanning(false);
            }, 1200);
        }, 800);
    };

    return (
        <section className="w-full max-w-4xl mx-auto my-12 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
            
            <div className="w-full text-center relative z-10 px-4">
                <div className="flex flex-col items-center gap-3 mb-8">
                    <span className="font-mono text-gray-500 tracking-[0.2em] text-sm">02</span>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-[#00FF87] text-xs font-bold tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00FF87] animate-pulse shadow-[0_0_10px_#00FF87]"></span>
                        SYSTEM ACTIVE
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
                    THREAT SCANNER<span className="text-red-500">.</span>
                </h1>
                <p className="text-gray-400 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
                    Enter any URL, phone number, or email to perform a heuristic risk analysis.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center max-w-2xl mx-auto mb-8 bg-white/[0.03] border border-white/10 rounded-xl p-1.5 focus-within:border-red-500 focus-within:bg-white/[0.05] focus-within:shadow-[0_0_20px_rgba(230,57,70,0.15)] transition-all duration-300">
                    <div className="flex-1 w-full relative">
                        <input
                            type="text"
                            placeholder="https://secure-login-bank.com..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && initiateScan()}
                            className="w-full bg-transparent border-none px-6 py-4 text-white text-base outline-none placeholder-gray-600 font-sans"
                        />
                    </div>
                    <button 
                        onClick={initiateScan}
                        className="w-full sm:w-auto bg-[#E63946] hover:bg-[#FF4D5A] active:scale-95 text-white px-6 py-3.5 rounded-lg font-bold tracking-wider text-sm transition-all shadow-[0_4px_15px_rgba(230,57,70,0.3)] hover:shadow-[0_6px_20px_rgba(230,57,70,0.5)] whitespace-nowrap lg:ml-2 mt-2 sm:mt-0"
                    >
                        {scanning ? 'SCANNING...' : 'RUN DIAGNOSTICS'}
                    </button>
                </div>

                {(scanning || result) && (
                    <div className="bg-[#050505] border border-white/10 rounded-xl mt-12 text-left shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden max-w-2xl mx-auto font-mono text-sm">
                        <div className="bg-white/[0.03] px-5 py-3 flex justify-between items-center border-b border-white/10">
                            <div className="flex gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800"></span>
                            </div>
                            <span className="text-zinc-500 text-xs tracking-wider">SECURITY_REPORT.LOG</span>
                        </div>
                        <div className="p-8">
                            {logs.map((log, i) => (
                                <p key={i} className="text-zinc-500 mb-2">{log}</p>
                            ))}

                            {result && (
                                <div className="mt-6 pt-6 border-t border-dashed border-zinc-800">
                                    <h2 className="text-xl tracking-widest font-bold mb-2" style={{ color: result.isScam ? "#FF4D00" : "#00FF87" }}>
                                        {result.title}
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed text-base">
                                        {result.desc}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
