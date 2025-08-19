# Islamic Timeline App v2 - Seerah of Prophet Muhammad ﷺ

A comprehensive, interactive timeline application showcasing the life and teachings of Prophet Muhammad ﷺ (peace be upon him) based on authentic Islamic sources. This educational platform combines traditional Islamic scholarship with modern web technology to provide an immersive learning experience.

## 🌟 Overview

The Islamic Timeline App v2 presents the Seerah (biography) of Prophet Muhammad ﷺ through a beautifully designed, interactive timeline interface. Each event is meticulously researched and includes authentic Hadith references, Quranic revelations, historical context, and scholarly commentary from classical Islamic sources.

## ✨ Key Features

### 📚 **Scholarly Content**
- **Authentic Sources**: Based on primary Islamic sources including Ibn Hisham, At-Tabari, Sahih Bukhari, and Sahih Muslim
- **Quranic Integration**: Includes relevant Quranic verses with Arabic text, translations, and Tafseer
- **Hadith References**: Authenticated narrations with grading (Sahih, Hasan, Da'if)
- **Historical Context**: Comprehensive background, circumstances, and consequences for each event
- **Educational Lessons**: Key insights and teachings derived from each historical event

### 🎨 **User Experience**
- **Interactive Timeline**: Click to expand events and explore detailed content
- **Advanced Search**: Real-time filtering by keywords, locations, lessons, and Arabic terms
- **Category Filtering**: 12 distinct categories (Birth, Revelation, Migration, Battles, etc.)
- **Bilingual Support**: English and Arabic text throughout the application
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Islamic Aesthetics**: Beautiful emerald and gold color scheme with Arabic calligraphy

### 🔍 **Content Organization**
- **Historical Periods**: Pre-Prophethood, Early Revelation, and Madinah periods
- **Event Significance**: Visual indicators for Major, Important, and Notable events
- **Chronological Order**: Events sorted by historical timeline
- **Cross-References**: Related events and connections highlighted
- **Source Verification**: Reliability indicators for all references

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 7.1.2 for fast development and optimized builds
- **Styling**: Tailwind CSS v4 with custom Islamic-themed configuration
- **CSS Processing**: PostCSS with Autoprefixer
- **Code Quality**: ESLint with TypeScript support
- **Typography**: Google Fonts (Amiri for Arabic, Inter for UI)
- **Development**: Hot Module Replacement (HMR) for instant updates

## 📁 Project Structure

```
islamic-timeline-app-v2/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Timeline.tsx           # Main timeline container
│   │   ├── TimelineHeader.tsx     # App header with titles
│   │   ├── TimelineFilters.tsx    # Search and category filters
│   │   └── TimelineEvent.tsx      # Individual event cards
│   ├── data/
│   │   └── seerahEvents.ts        # Comprehensive event dataset
│   ├── types/
│   │   └── seerah.ts              # TypeScript interfaces
│   ├── App.tsx                    # Root application component
│   ├── index.css                  # Global styles and Tailwind
│   └── main.tsx                   # Application entry point
├── index.html                     # HTML template
├── package.json                   # Dependencies and scripts
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration
├── tsconfig.json                  # TypeScript configuration
├── vite.config.ts                 # Vite build configuration
└── README.md                      # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 18 or higher
- **npm**: Version 8 or higher (comes with Node.js)
- **Git**: For version control

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/Poussinette/islamic-timeline-app-v2.git
cd islamic-timeline-app-v2
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start the development server**:
```bash
npm run dev
```

4. **Open your browser** and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📖 Content Structure

### Event Data Model

Each Seerah event includes the following comprehensive information:

```typescript
interface SeerahEvent {
  id: string;                    // Unique identifier
  title: string;                 // English title
  arabicTitle?: string;          // Arabic title
  subtitle?: string;             // Additional context
  date: EventDate;               // Hijri and Gregorian dates
  location: Location;            // Geographic information
  category: EventCategory;       // Event classification
  significance: 'major' | 'important' | 'notable';
  
  // Content
  summary: string;               // Brief description
  description: string;           // Detailed narrative
  context: {                     // Historical context
    background: string;
    circumstances: string;
    significance: string;
    consequences: string;
  };
  
  // Islamic Sources
  quranRevelations?: QuranRevelation[];  // Related Quranic verses
  hadithReferences?: HadithReference[];  // Authenticated narrations
  seerahSources: SeerahSource[];         // Classical biographies
  
  // Educational Content
  lessons: string[];             // Key teachings
  islamicTerms?: IslamicTerm[];  // Terminology explanations
  
  // Relationships
  relatedEvents: string[];       // Connected events
  previousEvent?: string;        // Chronological links
  nextEvent?: string;
}
```

### Current Events Included

1. **Birth of Prophet Muhammad ﷺ** (570 CE)
   - The Year of the Elephant (Aam al-Feel)
   - Location: Makkah
   - Sources: Ibn Hisham, At-Tabari, Sahih Muslim

2. **Nursing by Halimah as-Sa'diyyah** (570 CE)
   - Desert upbringing with Banu Sa'd tribe
   - Divine blessings and prosperity
   - Sources: Sahih Bukhari, Ibn Hisham

3. **The Splitting of the Chest** (574 CE)
   - Angelic purification at age 4
   - Spiritual preparation for prophethood
   - Sources: Sahih Muslim, Ibn Hisham

4. **The First Revelation** (610 CE)
   - Cave of Hira experience
   - Surah Al-Alaq (96:1-5) revelation
   - Tafseer from Ibn Kathir
   - Sources: Sahih Bukhari, At-Tabari

5. **The Hijra to Madinah** (622 CE)
   - The Great Migration
   - Beginning of Islamic calendar
   - Quranic reference (9:40)
   - Sources: Ibn Hisham, Sahih Bukhari

## 🎨 Design System

### Color Palette

- **Primary (Emerald)**: `#10b981` - Represents growth, peace, and Islam
- **Secondary (Gold)**: `#f59e0b` - Represents wisdom, knowledge, and nobility
- **Background**: Gradient from emerald-50 to gold-50
- **Text**: Various shades of gray for optimal readability

### Typography

- **Arabic Text**: Amiri font family for authentic Arabic calligraphy
- **UI Text**: Inter font family for modern, readable interface
- **Headings**: Bold weights with proper hierarchy
- **Body Text**: Regular weight with optimal line spacing

### Components

- **Cards**: White background with subtle shadows and hover effects
- **Buttons**: Rounded corners with smooth color transitions
- **Timeline**: Vertical line with colored dots indicating event significance
- **Badges**: Rounded pills for categories and authenticity indicators

## 🔧 Configuration

### Tailwind CSS

The project uses a custom Tailwind configuration with:

- **Extended Colors**: Custom emerald and gold palettes
- **Custom Fonts**: Arabic and sans-serif font families
- **Animations**: Fade-in, slide-up, and pulse effects
- **Responsive Design**: Mobile-first approach with breakpoints

### PostCSS

Configured with:
- `@tailwindcss/postcss` for Tailwind v4 compatibility
- `autoprefixer` for cross-browser compatibility

### TypeScript

Strict TypeScript configuration with:
- Type-only imports for better tree-shaking
- Comprehensive interface definitions
- Proper error handling and validation

## 📱 Responsive Design

The application is fully responsive with:

- **Mobile (320px+)**: Single column layout, touch-friendly interactions
- **Tablet (768px+)**: Two-column grids, expanded content areas
- **Desktop (1024px+)**: Multi-column layouts, hover effects
- **Large Screens (1280px+)**: Maximum width containers, optimal spacing

## 🌐 Internationalization

### Arabic Support

- **RTL Text**: Proper right-to-left text rendering for Arabic content
- **Font Loading**: Optimized Arabic font loading with fallbacks
- **Cultural Sensitivity**: Respectful presentation of Islamic content
- **Transliteration**: Consistent Arabic-to-English transliteration

### Bilingual Content

- Event titles in both English and Arabic
- Category labels with Arabic translations
- Islamic terms with proper Arabic script
- Quranic verses with Arabic text and English translations

## 🔍 Search and Filtering

### Search Functionality

- **Real-time Search**: Instant filtering as you type
- **Multi-field Search**: Searches across titles, descriptions, locations, and lessons
- **Arabic Search**: Supports searching in Arabic text
- **Case Insensitive**: Flexible search matching

### Category Filters

1. **Birth & Early Life** (الولادة والطفولة)
2. **Pre-Prophethood** (ما قبل النبوة)
3. **Early Revelation** (بداية الوحي)
4. **Persecution Period** (فترة الاضطهاد)
5. **Migration** (الهجرة)
6. **Battles** (الغزوات)
7. **Treaties** (المعاهدات)
8. **Conquests** (الفتوحات)
9. **Personal Life** (الحياة الشخصية)
10. **Social Reforms** (الإصلاحات الاجتماعية)
11. **Final Years** (السنوات الأخيرة)

## 📚 Sources and References

### Primary Islamic Sources

- **Ibn Hisham**: As-Sirah an-Nabawiyyah (السيرة النبوية)
- **At-Tabari**: Tarikh ar-Rusul wa al-Muluk
- **Sahih Bukhari**: Authenticated Hadith collection
- **Sahih Muslim**: Authenticated Hadith collection

### Tafseer Sources

- **Ibn Kathir**: Tafsir al-Quran al-Azeem
- **At-Tabari**: Jami' al-bayan fi ta'wil al-Quran
- **Al-Qurtubi**: Al-Jami' li-ahkam al-Quran

### Modern Scholarly Works

- **Martin Lings**: Muhammad: His Life Based on the Earliest Sources
- **Tariq Ramadan**: In the Footsteps of the Prophet

## 🤝 Contributing

We welcome contributions to improve the Islamic Timeline App! Here's how you can help:

### Content Contributions

1. **Additional Events**: Research and add more Seerah events
2. **Source Verification**: Cross-check existing references
3. **Translation Improvements**: Enhance Arabic translations
4. **Educational Content**: Add more lessons and insights

### Technical Contributions

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**: Follow the existing code style
4. **Test thoroughly**: Ensure all functionality works
5. **Commit your changes**: `git commit -m 'Add amazing feature'`
6. **Push to the branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**: Describe your changes clearly

### Contribution Guidelines

- **Authenticity**: Only use verified Islamic sources
- **Respect**: Maintain cultural and religious sensitivity
- **Quality**: Follow TypeScript and React best practices
- **Documentation**: Update README and code comments
- **Testing**: Verify all features work correctly

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Islamic Scholars**: For preserving and transmitting the Seerah
- **Primary Sources**: Ibn Hisham, At-Tabari, and Hadith collectors
- **Modern Scholars**: For making Islamic knowledge accessible
- **Open Source Community**: React, Vite, Tailwind CSS teams
- **Typography**: Google Fonts for beautiful Arabic and Latin fonts
- **Islamic Community**: For feedback and support

## 📞 Support

If you encounter any issues or have questions:

1. **Check the Documentation**: Review this README thoroughly
2. **Search Issues**: Look for similar problems in GitHub Issues
3. **Create an Issue**: Provide detailed information about the problem
4. **Community Support**: Engage with other users and contributors

## 🔄 Version History

### v2.0.0 (Current)
- **Initial Release**: Complete rewrite with modern tech stack
- **React 18**: Latest React with TypeScript support
- **Tailwind CSS v4**: Modern styling with custom Islamic theme
- **Comprehensive Dataset**: 5 major Seerah events with full scholarly content
- **Interactive Features**: Search, filtering, and expandable content
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Bilingual Support**: English and Arabic throughout

### Planned Features (v2.1.0)
- **Additional Events**: Expand to 20+ major Seerah events
- **Audio Integration**: Quranic recitation for revealed verses
- **Map Integration**: Geographic visualization of events
- **Timeline Navigation**: Jump to specific time periods
- **Bookmark System**: Save favorite events for later study
- **Print Functionality**: Generate PDF reports of events
- **Offline Support**: Progressive Web App capabilities

## 🎯 Educational Goals

This application aims to:

1. **Preserve Islamic Heritage**: Maintain authentic Seerah knowledge
2. **Modern Accessibility**: Make classical sources accessible to contemporary audiences
3. **Educational Excellence**: Provide comprehensive, scholarly content
4. **Cultural Bridge**: Connect traditional Islamic scholarship with modern technology
5. **Global Reach**: Serve Muslims and non-Muslims interested in Islamic history
6. **Academic Standards**: Maintain rigorous source verification and citation

---

**Made with ❤️ for the Islamic community and all seekers of knowledge**

*"And We made from them leaders guiding by Our command when they were patient and were certain of Our signs."* - Quran 32:24

*This project is dedicated to preserving and sharing the beautiful example of Prophet Muhammad ﷺ for future generations.*
