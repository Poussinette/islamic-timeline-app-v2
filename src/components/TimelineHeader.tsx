import React from 'react';

interface TimelineHeaderProps {
  title: string;
  subtitle: string;
  arabicTitle?: string;
}

export const TimelineHeader: React.FC<TimelineHeaderProps> = ({
  title,
  subtitle,
  arabicTitle
}) => {
  return (
    <header className="timeline-header text-center py-12 mb-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
          {title}
        </h1>
        
        {arabicTitle && (
          <h2 className="text-2xl md:text-3xl font-arabic text-emerald-700 mb-4 text-shadow">
            {arabicTitle}
          </h2>
        )}
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-gold-500 rounded-full"></div>
        </div>
      </div>
    </header>
  );
};
