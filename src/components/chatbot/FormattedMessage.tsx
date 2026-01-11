import React from 'react';

interface FormattedMessageProps {
  text: string;
}

export default function FormattedMessage({ text }: FormattedMessageProps) {
  // Split text into parts and format them
  const formatContent = (content: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = [];
    
    // Split by double newlines for paragraphs
    const paragraphs = content.split(/\n\n+/);
    
    paragraphs.forEach((paragraph, pIndex) => {
      if (!paragraph.trim()) {
        parts.push(<div key={`spacer-${pIndex}`} className="h-2" />);
        return;
      }
      
      // Check for headings (lines starting with **)
      if (paragraph.match(/^\*\*[^*]+\*\*/)) {
        const heading = paragraph.replace(/\*\*/g, '').trim();
        parts.push(
          <div key={`heading-${pIndex}`} className="mt-4 mb-2 first:mt-0">
            <div className="text-yellow-400 font-bold text-base flex items-center gap-2">
              <span>{heading}</span>
            </div>
          </div>
        );
        return;
      }
      
      // Process each line
      const lines = paragraph.split('\n');
      lines.forEach((line, lIndex) => {
        if (!line.trim()) {
          parts.push(<div key={`line-spacer-${pIndex}-${lIndex}`} className="h-1" />);
          return;
        }
        
        // Numbered list item
        const numberedMatch = line.match(/^(\d+)\.\s+(.+)$/);
        if (numberedMatch) {
          const formattedLine = formatInlineText(numberedMatch[2], `num-${pIndex}-${lIndex}`);
          parts.push(
            <div key={`numbered-${pIndex}-${lIndex}`} className="flex gap-3 my-1.5">
              <span className="text-blue-400 font-bold flex-shrink-0 min-w-[24px]">{numberedMatch[1]}.</span>
              <span className="flex-1 leading-relaxed">{formattedLine}</span>
            </div>
          );
          return;
        }
        
        // Bullet point
        const bulletMatch = line.match(/^[•\-\*]\s+(.+)$/);
        if (bulletMatch) {
          const formattedLine = formatInlineText(bulletMatch[1], `bullet-${pIndex}-${lIndex}`);
          parts.push(
            <div key={`bullet-${pIndex}-${lIndex}`} className="flex gap-3 my-1.5">
              <span className="text-blue-400 font-bold flex-shrink-0">•</span>
              <span className="flex-1 leading-relaxed">{formattedLine}</span>
            </div>
          );
          return;
        }
        
        // Regular text line
        const formattedLine = formatInlineText(line, `text-${pIndex}-${lIndex}`);
        parts.push(
          <div key={`text-${pIndex}-${lIndex}`} className="my-1.5 leading-relaxed">
            {formattedLine}
          </div>
        );
      });
    });
    
    return parts;
  };
  
  // Format inline text with highlights for phone numbers, URLs, emails
  const formatInlineText = (text: string, keyPrefix: string): React.ReactNode => {
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    
    // Emergency phone numbers (common Indian helplines)
    const emergencyPhones = /\b(100|1930|1947|1915|1091|1098|1800[- ]?\d{4})\b/g;
    // Regular phone numbers
    const phonePattern = /(\+?91[- ]?)?[6-9]\d{9}|\d{3,4}([- ]?\d{3,4}){2,3}/g;
    // URLs
    const urlPattern = /(https?:\/\/[^\s<>]+|www\.[^\s<>]+|[a-z0-9-]+\.[a-z]{2,}(?:\/[^\s<>]*)?)/gi;
    // Emails
    const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    
    const matches: Array<{ start: number; end: number; type: string; content: string }> = [];
    
    // Collect all matches
    [emergencyPhones, phonePattern, urlPattern, emailPattern].forEach((pattern, patternIndex) => {
      const types = ['emergency-phone', 'phone', 'url', 'email'];
      let match;
      while ((match = pattern.exec(text)) !== null) {
        matches.push({
          start: match.index,
          end: match.index + match[0].length,
          type: types[patternIndex],
          content: match[0]
        });
      }
      pattern.lastIndex = 0;
    });
    
    // Sort by position
    matches.sort((a, b) => a.start - b.start);
    
    // Remove overlaps (keep first match)
    const filteredMatches: typeof matches = [];
    for (const match of matches) {
      const overlaps = filteredMatches.some(m => 
        (match.start >= m.start && match.start < m.end) ||
        (match.end > m.start && match.end <= m.end)
      );
      if (!overlaps) {
        filteredMatches.push(match);
      }
    }
    
    // Build formatted content
    filteredMatches.forEach((match, index) => {
      // Add text before match
      if (match.start > lastIndex) {
        const beforeText = text.substring(lastIndex, match.start);
        if (beforeText) {
          parts.push(<span key={`${keyPrefix}-before-${index}`}>{beforeText}</span>);
        }
      }
      
      // Add highlighted match
      if (match.type === 'emergency-phone' || match.type === 'phone') {
        parts.push(
          <span
            key={`${keyPrefix}-phone-${index}`}
            className="inline-flex items-center gap-1 px-2 py-0.5 mx-0.5 bg-blue-500/25 text-blue-200 font-semibold rounded border border-blue-400/40 whitespace-nowrap"
          >
            📞 {match.content}
          </span>
        );
      } else if (match.type === 'url') {
        const url = match.content.startsWith('http') ? match.content : `https://${match.content}`;
        parts.push(
          <a
            key={`${keyPrefix}-url-${index}`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2 py-0.5 mx-0.5 bg-green-500/25 text-green-200 font-semibold rounded border border-green-400/40 hover:bg-green-500/35 transition-colors break-all underline"
          >
            🔗 {match.content}
          </a>
        );
      } else if (match.type === 'email') {
        parts.push(
          <a
            key={`${keyPrefix}-email-${index}`}
            href={`mailto:${match.content}`}
            className="inline-flex items-center gap-1 px-2 py-0.5 mx-0.5 bg-purple-500/25 text-purple-200 font-semibold rounded border border-purple-400/40 hover:bg-purple-500/35 transition-colors underline"
          >
            ✉️ {match.content}
          </a>
        );
      }
      
      lastIndex = match.end;
    });
    
    // Add remaining text
    if (lastIndex < text.length) {
      const remaining = text.substring(lastIndex);
      if (remaining) {
        parts.push(<span key={`${keyPrefix}-after`}>{remaining}</span>);
      }
    }
    
    return parts.length > 0 ? parts : <span>{text}</span>;
  };
  
  return (
    <div className="formatted-message text-sm">
      {formatContent(text)}
    </div>
  );
}
