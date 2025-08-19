import React, { useState, useMemo } from 'react';
import { seerahEvents, timelinePeriods } from '../data/seerahEvents';
import type { SeerahEvent, EventCategory } from '../types/seerah';
import { TimelineEvent } from './TimelineEvent';
import { TimelineFilters } from './TimelineFilters';
import { TimelineHeader } from './TimelineHeader';

interface TimelineProps {
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ className = '' }) => {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | 'all'>('all');
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter events based on selected category and search query
  const filteredEvents = useMemo(() => {
    let filtered = seerahEvents;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(event => 
        event.title.toLowerCase().includes(query) ||
        event.arabicTitle?.toLowerCase().includes(query) ||
        event.summary.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.location.name.toLowerCase().includes(query) ||
        event.lessons.some(lesson => lesson.toLowerCase().includes(query))
      );
    }

    // Sort by date
    return filtered.sort((a, b) => a.date.approximateYear - b.date.approximateYear);
  }, [selectedCategory, searchQuery]);

  const handleEventClick = (eventId: string) => {
    setSelectedEvent(selectedEvent === eventId ? null : eventId);
  };

  return (
    <div className={`timeline-container ${className}`}>
      <TimelineHeader 
        title="Islamic Timeline - Seerah of Prophet Muhammad ﷺ"
        subtitle="A comprehensive journey through the life of the final Messenger"
        arabicTitle="السيرة النبوية الشريفة"
      />
      
      <TimelineFilters
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalEvents={seerahEvents.length}
        filteredEvents={filteredEvents.length}
      />

      <div className="timeline-content">
        {/* Timeline Periods Overview */}
        <div className="timeline-periods mb-8">
          <h3 className="text-xl font-semibold text-emerald-800 mb-4">Historical Periods</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {timelinePeriods.map(period => (
              <div 
                key={period.id}
                className="card border-l-4"
                style={{ borderLeftColor: period.color }}
              >
                <h4 className="font-semibold text-gray-800">{period.name}</h4>
                {period.arabicName && (
                  <p className="text-sm text-gray-600 font-arabic text-right">{period.arabicName}</p>
                )}
                <p className="text-sm text-gray-600 mt-1">
                  {period.startYear} - {period.endYear} CE
                </p>
                <p className="text-sm text-gray-700 mt-2">{period.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Events */}
        <div className="timeline-events">
          <h3 className="text-xl font-semibold text-emerald-800 mb-6">
            Timeline Events ({filteredEvents.length})
          </h3>
          
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">No events found</div>
              <p className="text-gray-400 mt-2">
                Try adjusting your filters or search query
              </p>
            </div>
          ) : (
            <div className="space-y-0">
              {filteredEvents.map((event, index) => (
                <TimelineEvent
                  key={event.id}
                  event={event}
                  isExpanded={selectedEvent === event.id}
                  onClick={() => handleEventClick(event.id)}
                  isLast={index === filteredEvents.length - 1}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
