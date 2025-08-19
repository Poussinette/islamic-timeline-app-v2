import React from 'react';
import type { SeerahEvent } from '../types/seerah';

interface TimelineEventProps {
  event: SeerahEvent;
  isExpanded: boolean;
  onClick: () => void;
  isLast: boolean;
}

const significanceColors = {
  major: 'bg-emerald-600',
  important: 'bg-gold-500',
  notable: 'bg-emerald-400'
};

const significanceLabels = {
  major: 'Major Event',
  important: 'Important Event',
  notable: 'Notable Event'
};

export const TimelineEvent: React.FC<TimelineEventProps> = ({
  event,
  isExpanded,
  onClick,
  isLast
}) => {
  return (
    <div className={`timeline-item ${isLast ? '' : 'border-l-2 border-emerald-200'}`}>
      {/* Timeline Dot */}
      <div 
        className={`absolute -left-3 top-6 w-6 h-6 rounded-full border-4 border-white shadow-lg cursor-pointer transition-transform hover:scale-110 ${significanceColors[event.significance]}`}
        onClick={onClick}
        title={`${significanceLabels[event.significance]} - Click to expand`}
      />

      {/* Event Card */}
      <div className="ml-8 mb-8">
        <div 
          className="card cursor-pointer transition-all duration-300 hover:shadow-xl"
          onClick={onClick}
        >
          {/* Event Header */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2 py-1 text-xs font-medium text-white rounded-full ${significanceColors[event.significance]}`}>
                  {significanceLabels[event.significance]}
                </span>
                <span className="text-sm text-gray-500">
                  {event.date.approximateYear} CE
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {event.title}
              </h3>
              
              {event.arabicTitle && (
                <h4 className="text-lg font-arabic text-emerald-700 mb-2 text-right">
                  {event.arabicTitle}
                </h4>
              )}
              
              {event.subtitle && (
                <p className="text-sm text-gray-600 italic mb-2">
                  {event.subtitle}
                </p>
              )}
            </div>
            
            <div className="text-right text-sm text-gray-500">
              <div>{event.location.name}</div>
              {event.location.arabicName && (
                <div className="font-arabic text-xs">{event.location.arabicName}</div>
              )}
            </div>
          </div>

          {/* Event Summary */}
          <p className="text-gray-700 leading-relaxed mb-4">
            {event.summary}
          </p>

          {/* Date Information */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
            <div>
              <span className="font-medium">Hijri:</span> {event.date.hijri.year} {event.date.hijri.month}
              {event.date.hijri.day && ` ${event.date.hijri.day}`}
            </div>
            <div>
              <span className="font-medium">Gregorian:</span> {event.date.gregorian.year} {event.date.gregorian.month}
              {event.date.gregorian.day && ` ${event.date.gregorian.day}`}
            </div>
          </div>

          {/* Expand/Collapse Indicator */}
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              {event.quranRevelations && event.quranRevelations.length > 0 && (
                <span className="inline-flex items-center px-2 py-1 text-xs bg-emerald-100 text-emerald-800 rounded-full">
                  📖 Quran Revelation
                </span>
              )}
              {event.hadithReferences && event.hadithReferences.length > 0 && (
                <span className="inline-flex items-center px-2 py-1 text-xs bg-gold-100 text-gold-800 rounded-full">
                  📚 Hadith Reference
                </span>
              )}
            </div>
            
            <button className="text-emerald-600 hover:text-emerald-800 transition-colors">
              {isExpanded ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-4 space-y-6 animate-slide-up">
            {/* Detailed Description */}
            <div className="card">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Detailed Description</h4>
              <p className="text-gray-700 leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Context */}
            <div className="card">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Historical Context</h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-gray-700">Background:</h5>
                  <p className="text-gray-600 text-sm">{event.context.background}</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700">Circumstances:</h5>
                  <p className="text-gray-600 text-sm">{event.context.circumstances}</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700">Significance:</h5>
                  <p className="text-gray-600 text-sm">{event.context.significance}</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700">Consequences:</h5>
                  <p className="text-gray-600 text-sm">{event.context.consequences}</p>
                </div>
              </div>
            </div>

            {/* Quran Revelations */}
            {event.quranRevelations && event.quranRevelations.length > 0 && (
              <div className="card border-l-4 border-emerald-500">
                <h4 className="text-lg font-semibold text-emerald-800 mb-3">📖 Quran Revelations</h4>
                {event.quranRevelations.map((revelation, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="font-medium text-gray-800">
                        Surah {revelation.surah.name} ({revelation.surah.number}:{revelation.ayahRange.start}
                        {revelation.ayahRange.end && `-${revelation.ayahRange.end}`})
                      </h5>
                      <span className="text-sm font-arabic text-emerald-700">
                        {revelation.surah.arabicName}
                      </span>
                    </div>
                    
                    <div className="bg-emerald-50 p-4 rounded-lg mb-3">
                      <p className="font-arabic text-lg text-right leading-loose mb-3">
                        {revelation.arabicText}
                      </p>
                      <p className="text-gray-700 italic">
                        "{revelation.translation}"
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Translation: {revelation.translationSource}
                      </p>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">Context:</span> {revelation.revelationContext}
                    </p>
                    
                    {revelation.tafseer.map((tafseer, tafseerIndex) => (
                      <div key={tafseerIndex} className="bg-gray-50 p-3 rounded text-sm">
                        <p className="font-medium text-gray-700 mb-1">
                          {tafseer.source} - {tafseer.scholar}:
                        </p>
                        <p className="text-gray-600">{tafseer.explanation}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {/* Hadith References */}
            {event.hadithReferences && event.hadithReferences.length > 0 && (
              <div className="card border-l-4 border-gold-500">
                <h4 className="text-lg font-semibold text-gold-800 mb-3">📚 Hadith References</h4>
                {event.hadithReferences.map((hadith, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="font-medium text-gray-800">
                        {hadith.collection} - {hadith.book}
                      </h5>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          hadith.authenticity === 'sahih' ? 'bg-green-100 text-green-800' :
                          hadith.authenticity === 'hasan' ? 'bg-blue-100 text-blue-800' :
                          hadith.authenticity === 'daif' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {hadith.authenticity.charAt(0).toUpperCase() + hadith.authenticity.slice(1)}
                        </span>
                        <span className="text-sm text-gray-500">#{hadith.hadithNumber}</span>
                      </div>
                    </div>
                    
                    <div className="bg-gold-50 p-4 rounded-lg">
                      <p className="text-gray-700 italic mb-2">
                        "{hadith.englishText}"
                      </p>
                      <p className="text-xs text-gray-500">
                        Narrated by: {hadith.narrator}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Lessons */}
            <div className="card">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">📝 Lessons & Insights</h4>
              <ul className="space-y-2">
                {event.lessons.map((lesson, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span className="text-gray-700">{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Islamic Terms */}
            {event.islamicTerms && event.islamicTerms.length > 0 && (
              <div className="card">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">🔤 Islamic Terms</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {event.islamicTerms.map((term, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-gray-800">{term.term}</span>
                        {term.arabicTerm && (
                          <span className="font-arabic text-emerald-700">{term.arabicTerm}</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{term.definition}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sources */}
            <div className="card">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">📖 Sources</h4>
              <div className="space-y-2">
                {event.seerahSources.map((source, index) => (
                  <div key={index} className="text-sm">
                    <span className="font-medium text-gray-700">{source.author}</span>
                    {source.arabicAuthor && (
                      <span className="font-arabic text-gray-600 mr-2">({source.arabicAuthor})</span>
                    )}
                    <span className="text-gray-600">
                      - {source.title}
                      {source.arabicTitle && ` (${source.arabicTitle})`}
                      , {source.reference}
                    </span>
                    <span className={`ml-2 px-2 py-1 text-xs rounded ${
                      source.reliability === 'primary' ? 'bg-green-100 text-green-800' :
                      source.reliability === 'secondary' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {source.reliability}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
