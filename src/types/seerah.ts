// Types for the Islamic Timeline App - Seerah Events

export interface HijriDate {
  year: number;
  month: string;
  day?: number;
}

export interface GregorianDate {
  year: number;
  month: string;
  day?: number;
}

export interface EventDate {
  hijri: HijriDate;
  gregorian: GregorianDate;
  approximateYear: number;
  description?: string; // e.g., "Around the 40th year of the Prophet's life"
}

export interface Location {
  name: string;
  arabicName?: string;
  modernName?: string;
  coordinates?: [number, number]; // [latitude, longitude]
  region: string; // e.g., "Arabian Peninsula", "Makkah", "Madinah"
}

export interface QuranRevelation {
  surah: {
    number: number;
    name: string;
    arabicName: string;
  };
  ayahRange: {
    start: number;
    end?: number;
  };
  arabicText: string;
  translation: string;
  translationSource: string; // e.g., "Sahih International", "Pickthall"
  revelationContext: string;
  tafseer: {
    source: string; // e.g., "Ibn Kathir", "Al-Tabari", "Al-Qurtubi"
    scholar: string;
    explanation: string;
    arabicExplanation?: string;
  }[];
}

export interface HadithReference {
  collection: string; // e.g., "Sahih Bukhari", "Sahih Muslim"
  book: string;
  hadithNumber: string;
  narrator: string;
  arabicText?: string;
  englishText: string;
  authenticity: 'sahih' | 'hasan' | 'daif' | 'mawdu'; // authentic, good, weak, fabricated
  grade?: string; // Additional grading information
}

export interface SeerahSource {
  author: string;
  arabicAuthor?: string;
  title: string;
  arabicTitle?: string;
  reference: string; // page number, volume, etc.
  era: string; // e.g., "Classical", "Contemporary"
  reliability: 'primary' | 'secondary' | 'tertiary';
}

export type EventCategory = 
  | 'birth-early-life'
  | 'pre-prophethood'
  | 'early-revelation'
  | 'persecution'
  | 'migration'
  | 'battles'
  | 'treaties'
  | 'conquests'
  | 'personal'
  | 'social-reforms'
  | 'final-years';

export interface SeerahEvent {
  id: string;
  title: string;
  arabicTitle?: string;
  subtitle?: string;
  date: EventDate;
  location: Location;
  category: EventCategory;
  significance: 'major' | 'important' | 'notable'; // For visual emphasis
  
  // Core Event Details
  summary: string; // Brief description
  description: string; // Detailed description
  context: {
    background: string;
    circumstances: string;
    significance: string;
    consequences: string;
  };
  
  // Islamic Sources
  quranRevelations?: QuranRevelation[];
  hadithReferences?: HadithReference[];
  seerahSources: SeerahSource[];
  
  // Educational Content
  lessons: string[];
  islamicTerms?: {
    term: string;
    arabicTerm?: string;
    definition: string;
  }[];
  
  // Relationships
  relatedEvents: string[]; // IDs of connected events
  previousEvent?: string;
  nextEvent?: string;
  
  // Additional Resources
  externalLinks?: {
    title: string;
    url: string;
    type: 'scholarly-article' | 'video' | 'audio' | 'book';
  }[];
  
  // Metadata
  lastUpdated: string;
  verificationStatus: 'verified' | 'under-review' | 'needs-verification';
  contributors?: string[];
}

export interface TimelinePeriod {
  id: string;
  name: string;
  arabicName?: string;
  startYear: number;
  endYear: number;
  description: string;
  keyEvents: string[]; // Event IDs
  color: string; // For visual theming
}

// Filter and search interfaces
export interface TimelineFilters {
  categories: EventCategory[];
  significance: ('major' | 'important' | 'notable')[];
  dateRange: {
    start: number;
    end: number;
  };
  location?: string;
  hasQuranRevelation?: boolean;
  hasHadithReference?: boolean;
}

export interface SearchQuery {
  text: string;
  filters: TimelineFilters;
  sortBy: 'date' | 'significance' | 'relevance';
  sortOrder: 'asc' | 'desc';
}
