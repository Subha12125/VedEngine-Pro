import React, { useEffect } from 'react';

/**
 * DocumentPreviewModal Component - Quick Document & Snippet Inspector
 * ======================================================================
 * Renders an interactive modal dialog allowing users to preview full
 * document content, metadata, vector score match, and search term highlights.
 *
 * @param {object} props
 * @param {boolean} props.isOpen - Controls visibility of the modal dialog
 * @param {function} props.onClose - Callback function to close the modal
 * @param {object} props.result - Selected document search result item
 */
export default function DocumentPreviewModal({ isOpen, onClose, result }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !result) return null;

  const title = result.title || result.documentTitle || result.filename || result.fileName || 'Untitled Document';
  const content = result.content || result.text || result.snippet || result.chunk || 'No preview content available.';
  const score = result.score || result.similarity || result.relevanceScore;
  const createdAt = result.createdAt || result.timestamp;
  const documentId = result.documentId || result.id;
  const fileName = result.fileName || result.filename;
  const fileType = result.fileType;

  const backendBase = import.meta.env.VITE_API_URL
    ? import.meta.env.VITE_API_URL.replace('/api/v1', '')
    : 'http://localhost:3000';

  const targetUrl =
    result.url ||
    result.link ||
    result.fileUrl ||
    (fileName ? `${backendBase}/uploads/${fileName}` : `${backendBase}/api/v1/documents/${documentId}`);

  let domain = 'vedengine.com';
  try {
    if (targetUrl.startsWith('http://') || targetUrl.startsWith('https://')) {
      domain = new URL(targetUrl).hostname;
    }
  } catch (e) {
    domain = 'vedengine.com';
  }

  const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
  const scorePercentage = typeof score === 'number' ? Math.round(score * 100) : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#faf4ec] border border-[#ebdcc9] rounded-3xl shadow-2xl overflow-hidden text-[#2d2721] max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-5 bg-[#fcf8f2] border-b border-[#ebdcc9] shrink-0">
          <div className="flex items-center gap-3 overflow-hidden pr-4">
            <div className="w-8 h-8 rounded-xl bg-[#f4ebd9] flex items-center justify-center overflow-hidden shrink-0 border border-[#ebdcc9]">
              <img
                src={faviconUrl}
                alt=""
                onError={(e) => { e.target.style.display = 'none'; }}
                className="w-5 h-5 object-contain"
              />
            </div>
            <div className="overflow-hidden">
              <h3 className="text-lg font-extrabold text-[#2d2721] font-serif truncate">
                {title}
              </h3>
              <p className="text-xs text-[#786b5e] truncate font-mono">
                {targetUrl}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#786b5e] hover:text-[#2d2721] hover:bg-[#ebdcc9]/50 rounded-xl transition-colors cursor-pointer shrink-0"
            title="Close Preview (ESC)"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Metadata Banner Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 sm:px-6 bg-[#f7efe5] border-b border-[#ebdcc9] text-xs shrink-0">
          <div className="bg-white/80 p-2.5 rounded-xl border border-[#ebdcc9]/60">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c7b6c] block">Format</span>
            <span className="font-bold text-[#d97757] uppercase mt-0.5 block">
              {fileType ? fileType.replace('application/', '') : result.url ? 'Web Page' : 'Vector RAG'}
            </span>
          </div>

          <div className="bg-white/80 p-2.5 rounded-xl border border-[#ebdcc9]/60">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c7b6c] block">Domain Source</span>
            <span className="font-bold text-[#2d2721] truncate mt-0.5 block">
              {domain}
            </span>
          </div>

          <div className="bg-white/80 p-2.5 rounded-xl border border-[#ebdcc9]/60">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c7b6c] block">Vector Match</span>
            <span className="font-bold text-emerald-700 mt-0.5 block">
              {scorePercentage !== null ? `${scorePercentage}% Match` : 'Indexed Result'}
            </span>
          </div>

          <div className="bg-white/80 p-2.5 rounded-xl border border-[#ebdcc9]/60">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c7b6c] block">Indexed Date</span>
            <span className="font-bold text-[#2d2721] mt-0.5 block">
              {createdAt ? new Date(createdAt).toLocaleDateString() : 'Recent'}
            </span>
          </div>
        </div>

        {/* Main Preview Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#8c7b6c]">
              Document Content & Search Snippet
            </h4>
            <span className="text-[11px] text-[#8c7b6c] bg-[#f4ebd9] px-2.5 py-0.5 rounded-md border border-[#ebdcc9]">
              Query Highlights Marked
            </span>
          </div>

          <div
            className="p-5 bg-white border border-[#ebdcc9] rounded-2xl text-sm text-[#2d2721] leading-relaxed font-normal whitespace-pre-line shadow-inner max-h-96 overflow-y-auto"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>

        {/* Footer Actions Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#fcf8f2] border-t border-[#ebdcc9] shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#ebdcc9]/60 hover:bg-[#ebdcc9] text-[#2d2721] font-bold text-xs rounded-xl transition-colors cursor-pointer"
          >
            Close Preview
          </button>

          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#d97757] hover:bg-[#c46445] text-white font-bold text-xs rounded-xl shadow-md shadow-[#d97757]/20 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Open Full Link</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
