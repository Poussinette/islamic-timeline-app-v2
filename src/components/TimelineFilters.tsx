import React from 'react';
import type { EventCategory } from '../types/seerah';

interface TimelineFiltersProps {
  selectedCategory: EventCategory | 'all';
  onCategoryChange: (category: EventCategory | 'all') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalEvents: number;
  filteredEvents: number;
}

const categoryLabels: Record<EventCategory | 'all', { label: string; arabicLabel?: string }> = {
  'all': { label: 'All Events', arabicLabel: 'جميع الأحداث' },
  'birth-early-life': { label: 'Birth & Early Life', arabicLabel: 'الولادة والطفولة' },
  'pre-prophethood': { label: 'Pre-Prophethood', arabicLabel: 'ما قبل النبوة' },
  'early-revelation': { label: 'Early Revelation', arabicLabel: 'بداية الوحي' },
  'persecution': { label: 'Persecution Period', arabicLabel: 'فترة الاضطهاد' },
  'migration': { label: 'Migration', arabicLabel: 'الهجرة' },
  'battles': { label: 'Battles', arabicLabel: 'الغزوات' },
  'treaties': { label: 'Treaties', arabicLabel: 'المعاهدات' },
  'conquests': { label: 'Conquests', arabicLabel: 'الفتوحات' },
  'personal': { label: 'Personal Life', arabicLabel: 'الحياة الشخصية' },
  'social-reforms': { label: 'Social Reforms', arabicLabel: 'الإصلاحات الاجتماعية' },
  'final-years': { label: 'Final Years', arabicLabel: 'السنوات الأخيرة' }
};

export const TimelineFilters: React.FC<TimelineFiltersProps> = ({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  totalEvents,
  filteredEvents
}) => {
  return (
    <div className="timeline-filters mb-8">
      <div className="max-w-6xl mx-auto">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search events, locations, lessons..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full px-4 py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Filter by Category</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {(Object.keys(categoryLabels) as (EventCategory | 'all')[]).map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white shadow-md transform scale-105'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-emerald-50 hover:border-emerald-300'
                }`}
              >
                <span className="block">{categoryLabels[category].label}</span>
                {categoryLabels[category].arabicLabel && (
                  <span className="block text-xs font-arabic opacity-75">
                    {categoryLabels[category].arabicLabel}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-50 rounded-full">
            <span className="text-emerald-800 font-medium">
              Showing {filteredEvents} of {totalEvents} events
            </span>
            {searchQuery && (
              <span className="ml-2 text-emerald-600">
                for "{searchQuery}"
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
