import React, { useState, useEffect, useRef } from 'react';
import { searchAPI, analyticsAPI } from '../services/api';

/**
 * Searchbar Component - Claude Warm Beige Theme
 */
export default function Searchbar({ onSearch, initialQuery = '' }) {
  const [query, setQuery] = useState(initialQuery);
  const [suggestions, setSuggestions] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showRecent, setShowRecent] = useState(false);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    fetchRecentSearches();
  }, []);

  const fetchRecentSearches = async () => {
    try {
      const res = await analyticsAPI.getRecentSearches();
      const list = res.data?.data || res.data?.searches || res.data || [];
      const formatted = Array.isArray(list)
        ? list.map(item => (typeof item === 'string' ? item : item.query)).filter(Boolean)
        : [];
      setRecentSearches(formatted);
    } catch (e) {
      console.warn('Failed to load recent searches:', e);
    }
  };

  useEffect(() => {
    if (!query.trim() || query.length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    setShowRecent(false);

    const timer = setTimeout(async () => {
      try {
        setLoadingSuggestions(true);
        const res = await searchAPI.getSuggestions(query.trim());
        const list = res.data?.data || res.data?.suggestions || [];
        setSuggestions(Array.isArray(list) ? list : []);
        setShowSuggestions(true);
      } catch (err) {
        console.error('Failed to fetch search suggestions:', err);
      } finally {
        setLoadingSuggestions(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowSuggestions(false);
        setShowRecent(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFocus = () => {
    if (query.trim().length >= 2) {
      setShowSuggestions(true);
      setShowRecent(false);
    } else {
      setShowRecent(true);
      setShowSuggestions(false);
      fetchRecentSearches();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setShowSuggestions(false);
      setShowRecent(false);
      onSearch(query.trim());
    }
  };

  const handleSelectSuggestion = (suggestionText) => {
    setQuery(suggestionText);
    setShowSuggestions(false);
    setShowRecent(false);
    onSearch(suggestionText);
  };

  const handleClear = () => {
    setQuery('');
    setSuggestions([]);
    setShowSuggestions(false);
    setShowRecent(true);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="relative flex items-center">
        
        <div className="absolute left-4 text-[#d97757] pointer-events-none">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleFocus}
          placeholder="Ask VedEngine any question or search indexed documents..."
          className="w-full pl-12 pr-28 py-4 bg-white border border-[#ebdcc9] focus:border-[#d97757] focus:ring-4 focus:ring-[#d97757]/15 rounded-2xl text-[#2d2721] placeholder-[#a89887] outline-none transition-all shadow-md shadow-amber-900/5 text-base"
        />

        <div className="absolute right-3 flex items-center gap-2">
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1.5 text-[#8c7b6c] hover:text-[#2d2721] hover:bg-[#f4ebd9] rounded-lg transition-colors cursor-pointer"
              title="Clear query"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          <button
            type="submit"
            className="px-5 py-2.5 bg-[#d97757] hover:bg-[#c46445] text-white font-bold text-sm rounded-xl shadow-sm shadow-[#d97757]/20 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>Search</span>
          </button>
        </div>

      </form>

      {/* Recent Searches Popover */}
      {showRecent && !query.trim() && recentSearches.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#ebdcc9] rounded-2xl shadow-xl overflow-hidden z-50 animate-fadeIn">
          <div className="px-5 py-2.5 bg-[#fcf8f2] border-b border-[#ebdcc9] text-xs font-bold uppercase tracking-wider text-[#8c7b6c] flex items-center justify-between">
            <span>Recent Searches</span>
            <span className="text-[10px] text-[#a89887] font-semibold">History</span>
          </div>
          <ul className="divide-y divide-[#ebdcc9]/60">
            {recentSearches.slice(0, 5).map((item, idx) => (
              <li key={idx}>
                <button
                  type="button"
                  onClick={() => handleSelectSuggestion(item)}
                  className="w-full px-5 py-3 text-left text-sm text-[#2d2721] hover:bg-[#fcf8f2] flex items-center gap-3 transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4 text-[#8c7b6c] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="truncate font-medium">{item}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Auto-suggestions Popover */}
      {showSuggestions && query.trim().length >= 2 && (suggestions.length > 0 || loadingSuggestions) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#ebdcc9] rounded-2xl shadow-xl overflow-hidden z-50">
          {loadingSuggestions ? (
            <div className="p-4 text-xs text-[#786b5e] flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-[#d97757]/30 border-t-[#d97757] rounded-full animate-spin" />
              <span>Fetching suggestions...</span>
            </div>
          ) : (
            <ul className="divide-y divide-[#ebdcc9]/60">
              {suggestions.map((item, idx) => {
                const suggestionText = typeof item === 'string' ? item : item.text || item.title || item.query;
                return (
                  <li key={idx}>
                    <button
                      type="button"
                      onClick={() => handleSelectSuggestion(suggestionText)}
                      className="w-full px-5 py-3 text-left text-sm text-[#2d2721] hover:bg-[#fcf8f2] flex items-center gap-3 transition-colors cursor-pointer"
                    >
                      <svg className="w-4 h-4 text-[#d97757] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <span className="truncate font-medium">{suggestionText}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
