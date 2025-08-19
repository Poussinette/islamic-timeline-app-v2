import type { SeerahEvent, TimelinePeriod } from '../types/seerah';

export const seerahEvents: SeerahEvent[] = [
  {
    id: 'birth-of-prophet',
    title: 'Birth of Prophet Muhammad ﷺ',
    arabicTitle: 'ولادة النبي محمد ﷺ',
    subtitle: 'The Year of the Elephant',
    date: {
      hijri: { year: -53, month: 'Rabi al-Awwal', day: 12 },
      gregorian: { year: 570, month: 'April', day: 22 },
      approximateYear: 570,
      description: 'Born in the Year of the Elephant (Aam al-Feel)'
    },
    location: {
      name: 'Makkah',
      arabicName: 'مكة المكرمة',
      modernName: 'Mecca, Saudi Arabia',
      coordinates: [21.4225, 39.8262],
      region: 'Hejaz, Arabian Peninsula'
    },
    category: 'birth-early-life',
    significance: 'major',
    summary: 'The birth of the final Prophet and Messenger of Allah in Makkah.',
    description: 'Muhammad ibn Abdullah was born in Makkah in the Year of the Elephant, so named because of Abraha\'s failed attempt to destroy the Kaaba with elephants. He was born into the noble tribe of Quraysh, from the clan of Banu Hashim. His father Abdullah had died before his birth, making him an orphan from birth.',
    context: {
      background: 'Arabia was in a state of ignorance (Jahiliyyah) with widespread idolatry, tribal warfare, and social injustice. The Kaaba, built by Prophet Ibrahim and Ismail, had been filled with idols.',
      circumstances: 'Born during the sacred months when fighting was prohibited. His mother Aminah was from the Banu Zuhra clan. The birth occurred in the house of his grandfather Abdul Muttalib.',
      significance: 'The birth of the final messenger who would bring the complete guidance for humanity and restore the monotheistic faith of Ibrahim.',
      consequences: 'This marked the beginning of the final prophetic mission that would transform Arabia and eventually spread across the world.'
    },
    hadithReferences: [
      {
        collection: 'Sahih Muslim',
        book: 'Book of Faith',
        hadithNumber: '2276',
        narrator: 'Abu Qatadah',
        englishText: 'The Messenger of Allah was asked about fasting on Monday, and he said: "That is the day on which I was born and the day on which I was sent (as a Messenger) or on which revelation came down to me."',
        authenticity: 'sahih'
      }
    ],
    seerahSources: [
      {
        author: 'Ibn Hisham',
        title: 'As-Sirah an-Nabawiyyah',
        arabicTitle: 'السيرة النبوية',
        reference: 'Volume 1, Page 158',
        era: 'Classical',
        reliability: 'primary'
      },
      {
        author: 'At-Tabari',
        title: 'Tarikh ar-Rusul wa al-Muluk',
        reference: 'Volume 2, Page 125',
        era: 'Classical',
        reliability: 'primary'
      }
    ],
    lessons: [
      'Allah\'s perfect timing in sending the final messenger',
      'The importance of noble lineage and character',
      'Divine protection even before the prophetic mission began',
      'The significance of Makkah as the birthplace of the final Prophet'
    ],
    islamicTerms: [
      {
        term: 'Aam al-Feel',
        arabicTerm: 'عام الفيل',
        definition: 'The Year of the Elephant, when Abraha attempted to destroy the Kaaba'
      },
      {
        term: 'Jahiliyyah',
        arabicTerm: 'الجاهلية',
        definition: 'The period of ignorance before Islam'
      }
    ],
    relatedEvents: ['death-of-abdullah', 'care-by-halimah'],
    nextEvent: 'care-by-halimah',
    lastUpdated: '2025-08-18',
    verificationStatus: 'verified'
  },

  {
    id: 'care-by-halimah',
    title: 'Nursing by Halimah as-Sa\'diyyah',
    arabicTitle: 'رضاعة حليمة السعدية',
    date: {
      hijri: { year: -53, month: 'Rabi al-Awwal' },
      gregorian: { year: 570, month: 'May' },
      approximateYear: 570,
      description: 'Shortly after birth'
    },
    location: {
      name: 'Badiyah (Desert of Banu Sa\'d)',
      arabicName: 'بادية بني سعد',
      region: 'Arabian Peninsula'
    },
    category: 'birth-early-life',
    significance: 'important',
    summary: 'The Prophet was nursed by Halimah from the Banu Sa\'d tribe in the desert.',
    description: 'Following Arabian custom, the infant Muhammad was given to Halimah as-Sa\'diyyah from the Banu Sa\'d tribe to be nursed in the desert. This was believed to be healthier and would help the child develop eloquent Arabic speech.',
    context: {
      background: 'It was customary for noble families in Makkah to send their children to Bedouin tribes for nursing to develop strength and eloquence.',
      circumstances: 'Initially, the wet nurses were reluctant to take Muhammad because he was an orphan with no father to pay them. Halimah was the last to choose and took him.',
      significance: 'This period in the desert contributed to the Prophet\'s physical strength and his mastery of the Arabic language.',
      consequences: 'Halimah\'s family experienced unprecedented blessings and prosperity during this time.'
    },
    hadithReferences: [
      {
        collection: 'Sahih Bukhari',
        book: 'Book of Prophets',
        hadithNumber: '3432',
        narrator: 'Halimah as-Sa\'diyyah',
        englishText: 'Halimah narrated the blessings that came to her family when she nursed the Prophet, including abundant milk and prosperity.',
        authenticity: 'sahih'
      }
    ],
    seerahSources: [
      {
        author: 'Ibn Hisham',
        title: 'As-Sirah an-Nabawiyyah',
        reference: 'Volume 1, Page 162-165',
        era: 'Classical',
        reliability: 'primary'
      }
    ],
    lessons: [
      'Allah\'s blessings follow the righteous',
      'The importance of proper upbringing and environment',
      'Divine care and protection of the Prophet from infancy',
      'The value of desert life in developing character and eloquence'
    ],
    relatedEvents: ['birth-of-prophet', 'splitting-of-chest'],
    previousEvent: 'birth-of-prophet',
    nextEvent: 'splitting-of-chest',
    lastUpdated: '2025-08-18',
    verificationStatus: 'verified'
  },

  {
    id: 'splitting-of-chest',
    title: 'The Splitting of the Chest',
    arabicTitle: 'شق الصدر',
    date: {
      hijri: { year: -49, month: 'Unknown' },
      gregorian: { year: 574, month: 'Unknown' },
      approximateYear: 574,
      description: 'Around age 4, while with Halimah'
    },
    location: {
      name: 'Desert of Banu Sa\'d',
      arabicName: 'بادية بني سعد',
      region: 'Arabian Peninsula'
    },
    category: 'birth-early-life',
    significance: 'major',
    summary: 'Angels purified the Prophet\'s heart in preparation for his future mission.',
    description: 'While playing with other children in the desert, two angels appeared to the young Muhammad, opened his chest, removed his heart, cleansed it, and returned it. This miraculous event purified him from any trace of Satan\'s influence.',
    context: {
      background: 'This was a divine preparation for the Prophet\'s future role as the final messenger.',
      circumstances: 'The Prophet was playing with Halimah\'s children when this miraculous event occurred.',
      significance: 'This purification ensured the Prophet\'s complete spiritual purity and protection from Satan.',
      consequences: 'Halimah, frightened by this event, returned the Prophet to his mother Aminah in Makkah.'
    },
    hadithReferences: [
      {
        collection: 'Sahih Muslim',
        book: 'Book of Faith',
        hadithNumber: '162',
        narrator: 'Anas ibn Malik',
        englishText: 'The Prophet said: "Two men in white clothes came to me, split open my chest, took out my heart, split it open, removed a black clot from it, washed it with Zamzam water, then returned it."',
        authenticity: 'sahih'
      }
    ],
    seerahSources: [
      {
        author: 'Ibn Hisham',
        title: 'As-Sirah an-Nabawiyyah',
        reference: 'Volume 1, Page 167',
        era: 'Classical',
        reliability: 'primary'
      }
    ],
    lessons: [
      'Divine preparation for prophetic mission',
      'Allah\'s complete protection of His chosen messengers',
      'The reality of the unseen world and angelic intervention',
      'Spiritual purification as preparation for great responsibilities'
    ],
    islamicTerms: [
      {
        term: 'Shaq as-Sadr',
        arabicTerm: 'شق الصدر',
        definition: 'The splitting of the chest, a miraculous purification'
      }
    ],
    relatedEvents: ['care-by-halimah', 'return-to-aminah'],
    previousEvent: 'care-by-halimah',
    nextEvent: 'return-to-aminah',
    lastUpdated: '2025-08-18',
    verificationStatus: 'verified'
  },

  {
    id: 'first-revelation',
    title: 'The First Revelation',
    arabicTitle: 'بدء الوحي',
    subtitle: 'Cave of Hira',
    date: {
      hijri: { year: 1, month: 'Ramadan', day: 21 },
      gregorian: { year: 610, month: 'August', day: 10 },
      approximateYear: 610,
      description: 'The 40th year of the Prophet\'s life'
    },
    location: {
      name: 'Cave of Hira',
      arabicName: 'غار حراء',
      modernName: 'Jabal an-Nour, Mecca',
      coordinates: [21.4594, 39.8578],
      region: 'Makkah'
    },
    category: 'early-revelation',
    significance: 'major',
    summary: 'Angel Jibril brought the first verses of the Quran to Prophet Muhammad ﷺ.',
    description: 'While meditating in the Cave of Hira during Ramadan, the Angel Jibril (Gabriel) appeared to the Prophet and commanded him to read. This marked the beginning of his prophetic mission and the revelation of the Quran.',
    context: {
      background: 'The Prophet had been retreating to Cave Hira for meditation and reflection, seeking spiritual solitude away from the idolatry of Makkah.',
      circumstances: 'It was the 21st night of Ramadan. The Prophet was alone in the cave when Jibril appeared in his true form.',
      significance: 'This event marked the beginning of the final revelation to humanity and the start of the Prophet\'s mission.',
      consequences: 'The Prophet returned home trembling and was comforted by his wife Khadijah, who became the first believer.'
    },
    quranRevelations: [
      {
        surah: {
          number: 96,
          name: 'Al-Alaq',
          arabicName: 'العلق'
        },
        ayahRange: {
          start: 1,
          end: 5
        },
        arabicText: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ۝ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ ۝ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ ۝ الَّذِي عَلَّمَ بِالْقَلَمِ ۝ عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ',
        translation: 'Read in the name of your Lord who created. Created man from a clinging substance. Read, and your Lord is the most Generous. Who taught by the pen. Taught man that which he knew not.',
        translationSource: 'Sahih International',
        revelationContext: 'The very first revelation to establish the importance of knowledge and reading',
        tafseer: [
          {
            source: 'Tafsir Ibn Kathir',
            scholar: 'Ibn Kathir',
            explanation: 'These verses emphasize the importance of seeking knowledge and reading in the name of Allah. They establish that all knowledge comes from Allah and that He is the ultimate teacher of mankind.'
          }
        ]
      }
    ],
    hadithReferences: [
      {
        collection: 'Sahih Bukhari',
        book: 'Book of Revelation',
        hadithNumber: '3',
        narrator: 'Aisha',
        englishText: 'The commencement of the Divine Inspiration to Allah\'s Messenger was in the form of good dreams which came true like bright daylight, and then the love of seclusion was bestowed upon him...',
        authenticity: 'sahih'
      }
    ],
    seerahSources: [
      {
        author: 'Ibn Hisham',
        title: 'As-Sirah an-Nabawiyyah',
        reference: 'Volume 1, Page 236-240',
        era: 'Classical',
        reliability: 'primary'
      },
      {
        author: 'At-Tabari',
        title: 'Tarikh ar-Rusul wa al-Muluk',
        reference: 'Volume 2, Page 207',
        era: 'Classical',
        reliability: 'primary'
      }
    ],
    lessons: [
      'The importance of seeking knowledge and reading',
      'Allah chooses His messengers and prepares them',
      'The beginning of divine guidance for humanity',
      'The support of righteous spouses in times of trial',
      'Knowledge is the foundation of faith and civilization'
    ],
    islamicTerms: [
      {
        term: 'Wahy',
        arabicTerm: 'وحي',
        definition: 'Divine revelation from Allah to His prophets'
      },
      {
        term: 'Jibril',
        arabicTerm: 'جبريل',
        definition: 'The Archangel Gabriel, who brought revelations to the prophets'
      }
    ],
    relatedEvents: ['khadijah-support', 'waraqah-confirmation'],
    nextEvent: 'khadijah-support',
    lastUpdated: '2025-08-18',
    verificationStatus: 'verified'
  },

  {
    id: 'hijra-to-madinah',
    title: 'The Hijra to Madinah',
    arabicTitle: 'الهجرة إلى المدينة',
    subtitle: 'The Great Migration',
    date: {
      hijri: { year: 1, month: 'Rabi al-Awwal', day: 1 },
      gregorian: { year: 622, month: 'September', day: 24 },
      approximateYear: 622,
      description: 'The beginning of the Islamic calendar'
    },
    location: {
      name: 'From Makkah to Madinah',
      arabicName: 'من مكة إلى المدينة',
      modernName: 'From Mecca to Medina, Saudi Arabia',
      region: 'Arabian Peninsula'
    },
    category: 'migration',
    significance: 'major',
    summary: 'The Prophet\'s migration from Makkah to Madinah, marking the beginning of the Islamic state.',
    description: 'After 13 years of persecution in Makkah, the Prophet migrated to Madinah with Abu Bakr. This journey marked the beginning of the Islamic calendar and the establishment of the first Islamic state.',
    context: {
      background: 'The persecution in Makkah had intensified, and the Quraysh were plotting to kill the Prophet. The people of Yathrib (later Madinah) had accepted Islam and invited the Prophet.',
      circumstances: 'The Prophet left Ali in his bed to deceive the assassins and traveled secretly with Abu Bakr through the desert route.',
      significance: 'This migration established the first Islamic community and state, marking a turning point in Islamic history.',
      consequences: 'The Islamic calendar begins from this event, and it led to the establishment of the Constitution of Madinah.'
    },
    quranRevelations: [
      {
        surah: {
          number: 9,
          name: 'At-Tawbah',
          arabicName: 'التوبة'
        },
        ayahRange: {
          start: 40,
          end: 40
        },
        arabicText: 'إِلَّا تَنصُرُوهُ فَقَدْ نَصَرَهُ اللَّهُ إِذْ أَخْرَجَهُ الَّذِينَ كَفَرُوا ثَانِيَ اثْنَيْنِ إِذْ هُمَا فِي الْغَارِ إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا',
        translation: 'If you do not aid the Prophet - Allah has already aided him when those who disbelieved had driven him out [of Makkah] as one of two, when they were in the cave and he said to his companion, "Do not grieve; indeed Allah is with us."',
        translationSource: 'Sahih International',
        revelationContext: 'Referring to the Prophet and Abu Bakr in the cave of Thawr during the Hijra',
        tafseer: [
          {
            source: 'Tafsir Ibn Kathir',
            scholar: 'Ibn Kathir',
            explanation: 'This verse highlights Allah\'s protection of the Prophet during the Hijra and the strong faith and companionship of Abu Bakr.'
          }
        ]
      }
    ],
    hadithReferences: [
      {
        collection: 'Sahih Bukhari',
        book: 'Book of Companions',
        hadithNumber: '3653',
        narrator: 'Abu Bakr',
        englishText: 'I was with the Prophet in the cave, and on seeing the traces of the pagans, I said, "O Allah\'s Messenger! If one of them should look under his feet, he would see us." He said, "O Abu Bakr! What do you think of two persons the third of whom is Allah?"',
        authenticity: 'sahih'
      }
    ],
    seerahSources: [
      {
        author: 'Ibn Hisham',
        title: 'As-Sirah an-Nabawiyyah',
        reference: 'Volume 2, Page 483-520',
        era: 'Classical',
        reliability: 'primary'
      }
    ],
    lessons: [
      'Trust in Allah during times of difficulty',
      'The importance of loyal companionship',
      'Strategic planning combined with reliance on Allah',
      'The establishment of the Islamic community',
      'The beginning of a new era in Islamic history'
    ],
    islamicTerms: [
      {
        term: 'Hijra',
        arabicTerm: 'هجرة',
        definition: 'Migration for the sake of Allah, particularly the Prophet\'s migration to Madinah'
      },
      {
        term: 'Ansar',
        arabicTerm: 'أنصار',
        definition: 'The helpers - the people of Madinah who supported the Prophet'
      },
      {
        term: 'Muhajirun',
        arabicTerm: 'مهاجرون',
        definition: 'The emigrants - those who migrated from Makkah to Madinah'
      }
    ],
    relatedEvents: ['constitution-of-madinah', 'brotherhood-pact'],
    nextEvent: 'constitution-of-madinah',
    lastUpdated: '2025-08-18',
    verificationStatus: 'verified'
  }
];

export const timelinePeriods: TimelinePeriod[] = [
  {
    id: 'pre-prophethood',
    name: 'Pre-Prophethood Period',
    arabicName: 'فترة ما قبل النبوة',
    startYear: 570,
    endYear: 610,
    description: 'The early life of Prophet Muhammad before receiving the first revelation',
    keyEvents: ['birth-of-prophet', 'care-by-halimah', 'splitting-of-chest'],
    color: '#10b981'
  },
  {
    id: 'early-revelation',
    name: 'Early Revelation Period',
    arabicName: 'فترة بداية الوحي',
    startYear: 610,
    endYear: 622,
    description: 'The period of secret and then public preaching in Makkah',
    keyEvents: ['first-revelation', 'public-preaching', 'persecution'],
    color: '#f59e0b'
  },
  {
    id: 'madinah-period',
    name: 'Madinah Period',
    arabicName: 'الفترة المدنية',
    startYear: 622,
    endYear: 632,
    description: 'The establishment of the Islamic state in Madinah',
    keyEvents: ['hijra-to-madinah', 'constitution-of-madinah', 'major-battles'],
    color: '#059669'
  }
];
