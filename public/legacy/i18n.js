// ===== Internationalization (i18n) System =====

const translations = {
    fr: {
        // Navigation
        'home': 'Accueil',
        'about': 'À propos',
        'destinations': 'Destinations',
        'ai_assistance': 'Assistance IA',
        'epoch_antiquity': 'Antiquité',
        'epoch_middle_ages': 'Moyen-Âge',
        'epoch_future': 'Futur',
        
        // Hero Sections
        'hero_title': 'Voyagez à travers les époques',
        'hero_subtitle': 'Découvrez l\'histoire, vivez l\'aventure, écrivez votre légende',
        'explore_destinations': 'Explorer les destinations',
        'discuss_ai': 'Discuter avec un agent IA',
        'scroll_more': '↓ Découvrez plus',
        
        // About Section
        'about_intro': 'Plongez dans une expérience révolutionnaire où le temps n\'est plus une limite, mais une destination.',
        'innovation': 'Innovation',
        'innovation_desc': 'Technologie de voyage temporel de pointe',
        'immersion': 'Immersion',
        'immersion_desc': 'Expériences authentiques et immersives',
        'unique_exp': 'Expérience Unique',
        'unique_exp_desc': 'Créez vos propres souvenirs intemporels',
        
        // Previews
        'explore_epochs': 'Explorez les Époques',
        'three_destinations': 'Trois destinations extraordinaires vous attendent',
        'antiquity_preview_desc': 'Marchez aux côtés des Pharaons, assistez à la construction des merveilles du monde antique. Explorez les empires romains et grecs dans toute leur splendeur.',
        'middle_ages_preview_desc': 'Vivez la chevalerie, explorez les châteaux féodaux et participez aux grands événements médiévaux. Rencontrez rois, reines et guerriers légendaires.',
        'future_preview_desc': 'Découvrez les villes volantes, l\'intelligence artificielle avancée et les technologies qui changeront l\'humanité. Vivez demain, aujourd\'hui.',
        'discover_more': 'Découvrir →',
        
        // CTA
        'ready_for_adventure': 'Prêt pour l\'aventure ?',
        'choose_epoch': 'Choisissez votre époque et réservez dès maintenant',
        'ask_ai_advice': 'Demander conseil à notre IA',
        
        'epoch_antiquity_title': '🏛️ L\'Antiquité',
        'epoch_antiquity_period': '2500 ans av. J.C. - 476 ap. J.C.',
        'epoch_antiquity_tagline': 'Marchez aux côtés des Pharaons et des empereurs',
        
        'epoch_middle_ages_title': '🏰 Moyen-Âge',
        'epoch_middle_ages_period': '476 - 1453 ap. J.C.',
        'epoch_middle_ages_tagline': 'Vivez l\'épopée de la chevalerie',
        
        'epoch_future_title': '🚀 Le Futur',
        'epoch_future_period': '2100 - 2500 ap. J.C.',
        'epoch_future_tagline': 'Vivez les technologies de demain',
        
        // Details
        'details_title': 'Découvrez',
        'antiquity_desc_1': 'Plongez dans une époque où les civilisations antiques façonnaient le monde. De la majestueuse Égypte des Pharaons aux puissants empires romains et grecs, vivez des expériences qui ont défini la course de l\'humanité.',
        'antiquity_desc_2': 'Explorez les pyramides intemporelles, assistez à des débats philosophiques à Athènes, marchez dans les forums de Rome antique et découvrez les secrets des temples sacrés.',
        
        'middle_ages_desc_1': 'Plongez dans un monde de châteaux majestueux, de chevaliers vaillants et de nobles dames. Le Moyen-Âge est une époque d\'aventure, de mystère et de transformation où la foi, l\'honneur et la chevalerie définissaient la vie quotidienne.',
        'middle_ages_desc_2': 'Participez à des tournois de chevalerie, assistez aux intrigues de cour des rois, explorez les châteaux fortifiés et découvrez les secrets des cathédrales gothiques.',
        
        'future_desc_1': 'Plongez dans une civilisation futuriste où les technologies avancées transforment l\'humanité. Des villes flottantes aux intelligences artificielles conscientes, découvrez un monde où l\'impossible devient réalité.',
        'future_desc_2': 'Explorez les mégalopoles du ciel, interagissez avec l\'IA avancée, participez à des expériences immersives et découvrez les innovations qui ont façonné l\'avenir de l\'humanité.',
        
        // Highlights
        'egypt': 'Égypte Ancienne',
        'egypt_desc': 'Construisez les pyramides, rencontrez les Pharaons, naviguez sur le Nil',
        
        'greece': 'Grèce Antique',
        'greece_desc': 'Participez aux Jeux Olympiques, étudiez la philosophie à Athènes',
        
        'rome': 'Empire Romain',
        'rome_desc': 'Assistez aux jeux du Colosseum, marchez dans le Forum romain',
        
        'chivalry': 'L\'Ère de la Chevalerie',
        'chivalry_desc': 'Participez à des tournois, apprenez le code de l\'honneur',
        
        'royal_courts': 'Intrigues de Cour',
        'royal_courts_desc': 'Naviguez les politiques royales et les alliances',
        
        'fortified_castles': 'Châteaux Fortifiés',
        'fortified_castles_desc': 'Explorez les forteresses imprenables',
        
        'flying_cities': 'Villes Flottantes',
        'flying_cities_desc': 'Mégalopoles suspendues dans le ciel avec technologie gravitationnelle',
        
        'ai_companions': 'Compagnons IA',
        'ai_companions_desc': 'Interagissez avec des intelligences artificielles humanoïdes',
        
        'bio_tech': 'Bio-technologies',
        'bio_tech_desc': 'Expériences biologiques et modifications génétiques',
        
        // POIs
        'pois_title': 'Points d\'Intérêt',
        
        'poi_giza': 'Plateau de Giza',
        'poi_giza_desc': 'Les trois grandes pyramides et le Sphinx légendaire',
        
        'poi_parthenon': 'Le Parthénon',
        'poi_parthenon_desc': 'Temple d\'Athéna à Athènes, merveille architecturale',
        
        'poi_colosseum': 'Colosseum',
        'poi_colosseum_desc': 'Amphithéâtre de Rome avec combats de gladiateurs',
        
        'poi_forum': 'Forum Romain',
        'poi_forum_desc': 'Cœur politique et commercial de Rome antique',
        
        'poi_olympics': 'Jeux Olympiques',
        'poi_olympics_desc': 'Participez aux compétitions antiques à Olympie',
        
        'poi_nile': 'Croisière sur le Nil',
        'poi_nile_desc': 'Naviguez comme les anciens Égyptiens',
        
        'poi_versailles': 'Château de Versailles',
        'poi_versailles_desc': 'Résidence royale française majestueuse',
        
        'poi_tournament': 'Tournoi de Chevalerie',
        'poi_tournament_desc': 'Participez à des compétitions de joute épique',
        
        'poi_notre_dame': 'Cathédrale Notre-Dame',
        'poi_notre_dame_desc': 'Chef-d\'œuvre de l\'architecture gothique',
        
        'poi_crusades': 'Les Croisades',
        'poi_crusades_desc': 'Participez aux grands événements historiques',
        
        'poi_village': 'Village Médiéval',
        'poi_village_desc': 'Vivez la vie quotidienne des paysans et artisans',
        
        'poi_monastery': 'Monastère',
        'poi_monastery_desc': 'Secrets des moines et manuscrits anciens',
        
        'poi_neo_tokyo': 'Néo-Tokyo',
        'poi_neo_tokyo_desc': 'Mégalopole futuriste avec architecture holographique',
        
        'poi_space_elevator': 'Ascenseur Spatial',
        'poi_space_elevator_desc': 'Voyage vers l\'espace en quelques heures',
        
        'poi_ai_nexus': 'Nexus IA',
        'poi_ai_nexus_desc': 'Centre de conscience collective des intelligences artificielles',
        
        'poi_underwater_cities': 'Villes Sous-Marines',
        'poi_underwater_cities_desc': 'Civilisations souterraines avancées',
        
        'poi_vr_dimensions': 'Dimensions RV',
        'poi_vr_dimensions_desc': 'Réalités virtuelles immersives et mondes alternatifs',
        
        'poi_biolab': 'Laboratoire Génétique',
        'poi_biolab_desc': 'Innovations en bio-technologies et génie génétique',
        
        // Difficulty
        'difficulty_easy': 'Facile',
        'difficulty_medium': 'Moyen',
        'difficulty_hard': 'Intense',
        
        // Travel Info
        'info_duration': 'Durée Recommandée',
        'express': 'Express',
        'standard': 'Standard',
        'premium': 'Premium',
        'luxury': 'Luxe',
        
        'experience_types': 'Types d\'Expérience',
        'adventure': 'Aventure',
        'adventure_desc': 'Défis intenses et découvertes thrilling',
        'discovery': 'Découverte',
        'discovery_desc': 'Apprentissage approfondi et histoire',
        'luxury_exp': 'Luxe',
        'luxury_desc': 'Confort premium et services exclusifs',
        
        'warnings_title': '⚠️ Recommandations',
        'warning_1': 'Climat chaud et sec, prévoir hydratation',
        'warning_2': 'Éviter les périodes de conflit politique majeur',
        'warning_3': 'Période optimale: 50 av.J.C - 100 ap.J.C',
        'warning_4': 'Protection solaire obligatoire',
        'warning_5': 'Guide historique fourni pour chaque excursion',
        
        'ma_warning_1': 'Éviter les périodes de peste noire',
        'ma_warning_2': 'Vêtements historiques fournis',
        'ma_warning_3': 'Période idéale: 1100-1400',
        'ma_warning_4': 'Hygiène basique conseillée',
        'ma_warning_5': 'Protocole de chevalerie à respecter',
        
        'future_warning_1': 'Adaptation neurologique requise',
        'future_warning_2': 'Vaccins futuristes obligatoires',
        'future_warning_3': 'Protection contre les ondes magnétiques',
        'future_warning_4': 'Entraînement IA-interfacing fourni',
        'future_warning_5': 'Assurance spatiale complète incluse',
        
        // Booking
        'booking_title': 'Réservez Votre Voyage',
        'booking_name': 'Nom complet',
        'booking_email': 'Email',
        'booking_start': 'Date de départ',
        'booking_travelers': 'Nombre de voyageurs',
        'booking_duration': 'Durée du séjour',
        'booking_experience': 'Type d\'expérience',
        'booking_interests': 'Vos intérêts (sélectionnez 1+)',
        'booking_submit': 'Réserver Maintenant',
        
        // CTA
        'cta_help': 'Besoin d\'aide pour choisir?',
        'chat_ai': 'Discuter avec notre IA',
        
        // Chatbot
        'chatbot_title': 'Assistant IA TimeTravel',
        
        // Footer
        'rights': 'Tous droits réservés',
        'privacy': 'Confidentialité',
        'terms': 'Conditions',
        'contact': 'Contact'
    },
    
    en: {
        // Navigation
        'home': 'Home',
        'about': 'About',
        'destinations': 'Destinations',
        'ai_assistance': 'AI Assistance',
        'epoch_antiquity': 'Antiquity',
        'epoch_middle_ages': 'Middle Ages',
        'epoch_future': 'Future',
        
        // Hero Sections
        'hero_title': 'Travel through epochs',
        'hero_subtitle': 'Discover history, live the adventure, write your legend',
        'explore_destinations': 'Explore destinations',
        'discuss_ai': 'Discuss with an AI agent',
        'scroll_more': '↓ Discover more',
        
        // About Section
        'about_intro': 'Immerse yourself in a revolutionary experience where time is no longer a limit, but a destination.',
        'innovation': 'Innovation',
        'innovation_desc': 'Cutting-edge time travel technology',
        'immersion': 'Immersion',
        'immersion_desc': 'Authentic and immersive experiences',
        'unique_exp': 'Unique Experience',
        'unique_exp_desc': 'Create your own timeless memories',
        
        // Previews
        'explore_epochs': 'Explore the Epochs',
        'three_destinations': 'Three extraordinary destinations await you',
        'antiquity_preview_desc': 'Walk alongside Pharaohs, witness the construction of ancient world wonders. Explore Roman and Greek empires in all their glory.',
        'middle_ages_preview_desc': 'Experience chivalry, explore feudal castles and participate in major medieval events. Meet legendary kings, queens, and warriors.',
        'future_preview_desc': 'Discover flying cities, advanced artificial intelligence and technologies that will change humanity. Live tomorrow, today.',
        'discover_more': 'Discover →',
        
        // CTA
        'ready_for_adventure': 'Ready for an adventure?',
        'choose_epoch': 'Choose your epoch and book now',
        'ask_ai_advice': 'Ask our AI for advice',

        'epoch_antiquity_title': '🏛️ Antiquity',
        'epoch_antiquity_period': '2500 BC - 476 AD',
        'epoch_antiquity_tagline': 'Walk alongside Pharaohs and emperors',
        
        'epoch_middle_ages_title': '🏰 Middle Ages',
        'epoch_middle_ages_period': '476 - 1453 AD',
        'epoch_middle_ages_tagline': 'Live the epic of chivalry',
        
        'epoch_future_title': '🚀 The Future',
        'epoch_future_period': '2100 - 2500 AD',
        'epoch_future_tagline': 'Experience tomorrow\'s technologies',
        
        // Details
        'details_title': 'Discover',
        'antiquity_desc_1': 'Dive into an era where ancient civilizations shaped the world. From the majestic Egypt of the Pharaohs to the powerful Roman and Greek empires, experience events that defined humanity\'s course.',
        'antiquity_desc_2': 'Explore timeless pyramids, attend philosophical debates in Athens, walk through ancient Roman forums, and discover the secrets of sacred temples.',
        
        'middle_ages_desc_1': 'Enter a world of majestic castles, valiant knights, and noble ladies. The Middle Ages is an era of adventure, mystery, and transformation where faith, honor, and chivalry defined daily life.',
        'middle_ages_desc_2': 'Participate in chivalrous tournaments, witness royal court intrigues, explore fortified castles, and discover the secrets of gothic cathedrals.',
        
        'future_desc_1': 'Immerse yourself in a futuristic civilization where advanced technologies transform humanity. From floating cities to conscious artificial intelligences, discover a world where the impossible becomes reality.',
        'future_desc_2': 'Explore sky megacities, interact with advanced AI, participate in immersive experiences, and discover the innovations that shaped humanity\'s future.',
        
        // Highlights
        'egypt': 'Ancient Egypt',
        'egypt_desc': 'Build pyramids, meet Pharaohs, navigate the Nile',
        
        'greece': 'Ancient Greece',
        'greece_desc': 'Participate in Olympic Games, study philosophy in Athens',
        
        'rome': 'Roman Empire',
        'rome_desc': 'Attend Colosseum games, walk through the Roman Forum',
        
        'chivalry': 'The Age of Chivalry',
        'chivalry_desc': 'Participate in tournaments, learn the code of honor',
        
        'royal_courts': 'Court Intrigues',
        'royal_courts_desc': 'Navigate royal politics and alliances',
        
        'fortified_castles': 'Fortified Castles',
        'fortified_castles_desc': 'Explore impregnable fortresses',
        
        'flying_cities': 'Flying Cities',
        'flying_cities_desc': 'Sky-suspended megacities with gravitational technology',
        
        'ai_companions': 'AI Companions',
        'ai_companions_desc': 'Interact with humanoid artificial intelligences',
        
        'bio_tech': 'Bio-technologies',
        'bio_tech_desc': 'Biological experiments and genetic modifications',
        
        // POIs
        'pois_title': 'Points of Interest',
        
        'poi_giza': 'Giza Plateau',
        'poi_giza_desc': 'Three great pyramids and the legendary Sphinx',
        
        'poi_parthenon': 'The Parthenon',
        'poi_parthenon_desc': 'Temple of Athena in Athens, architectural marvel',
        
        'poi_colosseum': 'Colosseum',
        'poi_colosseum_desc': 'Rome\'s amphitheater with gladiator fights',
        
        'poi_forum': 'Roman Forum',
        'poi_forum_desc': 'Political and commercial heart of ancient Rome',
        
        'poi_olympics': 'Olympic Games',
        'poi_olympics_desc': 'Participate in ancient competitions at Olympia',
        
        'poi_nile': 'Nile Cruise',
        'poi_nile_desc': 'Navigate like ancient Egyptians',
        
        'poi_versailles': 'Palace of Versailles',
        'poi_versailles_desc': 'Majestic French royal residence',
        
        'poi_tournament': 'Chivalry Tournament',
        'poi_tournament_desc': 'Participate in epic joust competitions',
        
        'poi_notre_dame': 'Notre-Dame Cathedral',
        'poi_notre_dame_desc': 'Masterpiece of gothic architecture',
        
        'poi_crusades': 'The Crusades',
        'poi_crusades_desc': 'Participate in major historical events',
        
        'poi_village': 'Medieval Village',
        'poi_village_desc': 'Experience daily life of peasants and craftsmen',
        
        'poi_monastery': 'Monastery',
        'poi_monastery_desc': 'Secrets of monks and ancient manuscripts',
        
        'poi_neo_tokyo': 'Neo-Tokyo',
        'poi_neo_tokyo_desc': 'Futuristic megacity with holographic architecture',
        
        'poi_space_elevator': 'Space Elevator',
        'poi_space_elevator_desc': 'Space travel in just a few hours',
        
        'poi_ai_nexus': 'AI Nexus',
        'poi_ai_nexus_desc': 'Collective consciousness center of artificial intelligences',
        
        'poi_underwater_cities': 'Underwater Cities',
        'poi_underwater_cities_desc': 'Advanced underground civilizations',
        
        'poi_vr_dimensions': 'VR Dimensions',
        'poi_vr_dimensions_desc': 'Immersive virtual realities and alternate worlds',
        
        'poi_biolab': 'Genetic Laboratory',
        'poi_biolab_desc': 'Innovations in bio-technologies and genetic engineering',
        
        // Difficulty
        'difficulty_easy': 'Easy',
        'difficulty_medium': 'Medium',
        'difficulty_hard': 'Intense',
        
        // Travel Info
        'info_duration': 'Recommended Duration',
        'express': 'Express',
        'standard': 'Standard',
        'premium': 'Premium',
        'luxury': 'Luxury',
        
        'experience_types': 'Experience Types',
        'adventure': 'Adventure',
        'adventure_desc': 'Intense challenges and thrilling discoveries',
        'discovery': 'Discovery',
        'discovery_desc': 'In-depth learning and history',
        'luxury_exp': 'Luxury',
        'luxury_desc': 'Premium comfort and exclusive services',
        
        'warnings_title': '⚠️ Recommendations',
        'warning_1': 'Hot and dry climate, bring hydration',
        'warning_2': 'Avoid periods of major political conflict',
        'warning_3': 'Optimal period: 50 BC - 100 AD',
        'warning_4': 'Sun protection mandatory',
        'warning_5': 'Historical guide provided for each excursion',
        
        'ma_warning_1': 'Avoid periods of black plague',
        'ma_warning_2': 'Historical clothing provided',
        'ma_warning_3': 'Ideal period: 1100-1400',
        'ma_warning_4': 'Basic hygiene advised',
        'ma_warning_5': 'Chivalry protocol to respect',
        
        'future_warning_1': 'Neurological adaptation required',
        'future_warning_2': 'Futuristic vaccines mandatory',
        'future_warning_3': 'Protection against magnetic waves',
        'future_warning_4': 'AI-interfacing training provided',
        'future_warning_5': 'Complete space insurance included',
        
        // Booking
        'booking_title': 'Book Your Journey',
        'booking_name': 'Full name',
        'booking_email': 'Email',
        'booking_start': 'Departure date',
        'booking_travelers': 'Number of travelers',
        'booking_duration': 'Stay duration',
        'booking_experience': 'Experience type',
        'booking_interests': 'Your interests (select 1+)',
        'booking_submit': 'Book Now',
        
        // CTA
        'cta_help': 'Need help choosing?',
        'chat_ai': 'Chat with our AI',
        
        // Chatbot
        'chatbot_title': 'TimeTravel AI Assistant',
        
        // Footer
        'rights': 'All rights reserved',
        'privacy': 'Privacy',
        'terms': 'Terms',
        'contact': 'Contact'
    },
    
    es: {
        // Navigation
        'home': 'Inicio',
        'about': 'Acerca de',
        'destinations': 'Destinos',
        'ai_assistance': 'Asistencia IA',
        'epoch_antiquity': 'Antigüedad',
        'epoch_middle_ages': 'Edad Media',
        'epoch_future': 'Futuro',
        
        // Hero Sections
        'hero_title': 'Viaja a través de las épocas',
        'hero_subtitle': 'Descubre la historia, vive la aventura, escribe tu leyenda',
        'explore_destinations': 'Explorar destinos',
        'discuss_ai': 'Hablar con un agente IA',
        'scroll_more': '↓ Descubre más',
        
        // About Section
        'about_intro': 'Sumérgete en una experiencia revolucionaria donde el tiempo ya no es un límite, sino un destino.',
        'innovation': 'Innovación',
        'innovation_desc': 'Tecnología de viaje en el tiempo de vanguardia',
        'immersion': 'Inmersión',
        'immersion_desc': 'Experiencias auténticas e inmersivas',
        'unique_exp': 'Experiencia Única',
        'unique_exp_desc': 'Crea tus propios recuerdos atemporales',
        
        // Previews
        'explore_epochs': 'Explora las Épocas',
        'three_destinations': 'Tres destinos extraordinarios te esperan',
        'antiquity_preview_desc': 'Camina junto a los Faraones, asiste a la construcción de las maravillas del mundo antiguo. Explora los imperios romano y griego en todo su esplendor.',
        'middle_ages_preview_desc': 'Vive la caballería, explora castillos feudales y participa en grandes eventos medievales. Conoce a reyes, reinas y guerreros legendarios.',
        'future_preview_desc': 'Descubre ciudades flotantes, inteligencia artificial avanzada y tecnologías que cambiarán a la humanidad. Vive el mañana, hoy.',
        'discover_more': 'Descubrir →',
        
        // CTA
        'ready_for_adventure': '¿Listo para la aventura?',
        'choose_epoch': 'Elige tu época y reserva ahora',
        'ask_ai_advice': 'Pide consejo a nuestra IA',

        'epoch_antiquity_title': '🏛️ La Antigüedad',
        'epoch_antiquity_period': '2500 aC - 476 dC',
        'epoch_antiquity_tagline': 'Camina junto a los Faraones y emperadores',
        
        'epoch_middle_ages_title': '🏰 Edad Media',
        'epoch_middle_ages_period': '476 - 1453 dC',
        'epoch_middle_ages_tagline': 'Vive la epopeya de la caballería',
        
        'epoch_future_title': '🚀 El Futuro',
        'epoch_future_period': '2100 - 2500 dC',
        'epoch_future_tagline': 'Experimenta las tecnologías del mañana',
        
        // Details
        'details_title': 'Descubre',
        'antiquity_desc_1': 'Sumérgete en una época donde las civilizaciones antiguas moldearon el mundo. Desde la majestuosa Egipto de los Faraones hasta los poderosos imperios romano y griego, vive experiencias que definieron el curso de la humanidad.',
        'antiquity_desc_2': 'Explora pirámides intemporales, asiste a debates filosóficos en Atenas, camina por los antiguos foros romanos y descubre los secretos de los templos sagrados.',
        
        'middle_ages_desc_1': 'Entra en un mundo de castillos majestuosos, caballeros valientes y nobles damas. La Edad Media es una época de aventura, misterio y transformación donde la fe, el honor y la caballería definían la vida diaria.',
        'middle_ages_desc_2': 'Participa en torneos de caballería, presencia intrigas de la corte real, explora castillos fortificados y descubre los secretos de las catedrales góticas.',
        
        'future_desc_1': 'Sumérgete en una civilización futurista donde las tecnologías avanzadas transforman la humanidad. Desde ciudades flotantes hasta inteligencias artificiales conscientes, descubre un mundo donde lo imposible se hace realidad.',
        'future_desc_2': 'Explora megaciudades del cielo, interactúa con IA avanzada, participa en experiencias inmersivas y descubre las innovaciones que moldearon el futuro de la humanidad.',
        
        // Highlights
        'egypt': 'Antiguo Egipto',
        'egypt_desc': 'Construye pirámides, conoce Faraones, navega el Nilo',
        
        'greece': 'Antigua Grecia',
        'greece_desc': 'Participa en los Juegos Olímpicos, estudia filosofía en Atenas',
        
        'rome': 'Imperio Romano',
        'rome_desc': 'Asiste a los juegos del Coliseo, camina por el Foro Romano',
        
        'chivalry': 'La Era de la Caballería',
        'chivalry_desc': 'Participa en torneos, aprende el código del honor',
        
        'royal_courts': 'Intrigas de Corte',
        'royal_courts_desc': 'Navega la política real y las alianzas',
        
        'fortified_castles': 'Castillos Fortificados',
        'fortified_castles_desc': 'Explora fortalezas inexpugnables',
        
        'flying_cities': 'Ciudades Flotantes',
        'flying_cities_desc': 'Megaciudades suspendidas en el cielo con tecnología gravitacional',
        
        'ai_companions': 'Compañeros IA',
        'ai_companions_desc': 'Interactúa con inteligencias artificiales humanoide',
        
        'bio_tech': 'Bio-tecnologías',
        'bio_tech_desc': 'Experimentos biológicos y modificaciones genéticas',
        
        // POIs
        'pois_title': 'Puntos de Interés',
        
        'poi_giza': 'Meseta de Giza',
        'poi_giza_desc': 'Las tres grandes pirámides y la legendaria Esfinge',
        
        'poi_parthenon': 'El Partenón',
        'poi_parthenon_desc': 'Templo de Atenea en Atenas, maravilla arquitectónica',
        
        'poi_colosseum': 'Coliseo',
        'poi_colosseum_desc': 'Anfiteatro de Roma con luchas de gladiadores',
        
        'poi_forum': 'Foro Romano',
        'poi_forum_desc': 'Corazón político y comercial de la antigua Roma',
        
        'poi_olympics': 'Juegos Olímpicos',
        'poi_olympics_desc': 'Participa en competiciones antiguas en Olimpia',
        
        'poi_nile': 'Crucero por el Nilo',
        'poi_nile_desc': 'Navega como los antiguos egipcios',
        
        'poi_versailles': 'Palacio de Versalles',
        'poi_versailles_desc': 'Majestuosa residencia real francesa',
        
        'poi_tournament': 'Torneo de Caballería',
        'poi_tournament_desc': 'Participa en épicas competiciones de justa',
        
        'poi_notre_dame': 'Catedral de Notre-Dame',
        'poi_notre_dame_desc': 'Obra maestra de la arquitectura gótica',
        
        'poi_crusades': 'Las Cruzadas',
        'poi_crusades_desc': 'Participa en grandes eventos históricos',
        
        'poi_village': 'Pueblo Medieval',
        'poi_village_desc': 'Experimenta la vida diaria de campesinos y artesanos',
        
        'poi_monastery': 'Monasterio',
        'poi_monastery_desc': 'Secretos de los monjes y manuscritos antiguos',
        
        'poi_neo_tokyo': 'Neo-Tokio',
        'poi_neo_tokyo_desc': 'Megaciudad futurista con arquitectura holográfica',
        
        'poi_space_elevator': 'Elevador Espacial',
        'poi_space_elevator_desc': 'Viaje al espacio en apenas unas horas',
        
        'poi_ai_nexus': 'Nexo IA',
        'poi_ai_nexus_desc': 'Centro de conciencia colectiva de inteligencias artificiales',
        
        'poi_underwater_cities': 'Ciudades Submarinas',
        'poi_underwater_cities_desc': 'Civilizaciones subterráneas avanzadas',
        
        'poi_vr_dimensions': 'Dimensiones RV',
        'poi_vr_dimensions_desc': 'Realidades virtuales inmersivas y mundos alternativos',
        
        'poi_biolab': 'Laboratorio Genético',
        'poi_biolab_desc': 'Innovaciones en biotecnologías e ingeniería genética',
        
        // Difficulty
        'difficulty_easy': 'Fácil',
        'difficulty_medium': 'Medio',
        'difficulty_hard': 'Intenso',
        
        // Travel Info
        'info_duration': 'Duración Recomendada',
        'express': 'Exprés',
        'standard': 'Estándar',
        'premium': 'Premium',
        'luxury': 'Lujo',
        
        'experience_types': 'Tipos de Experiencia',
        'adventure': 'Aventura',
        'adventure_desc': 'Desafíos intensos y descubrimientos emocionantes',
        'discovery': 'Descubrimiento',
        'discovery_desc': 'Aprendizaje profundo e historia',
        'luxury_exp': 'Lujo',
        'luxury_desc': 'Comodidad premium y servicios exclusivos',
        
        'warnings_title': '⚠️ Recomendaciones',
        'warning_1': 'Clima caluroso y seco, llevar hidratación',
        'warning_2': 'Evitar períodos de conflicto político mayor',
        'warning_3': 'Período óptimo: 50 aC - 100 dC',
        'warning_4': 'Protección solar obligatoria',
        'warning_5': 'Guía histórico proporcionado para cada excursión',
        
        'ma_warning_1': 'Evitar períodos de peste negra',
        'ma_warning_2': 'Ropa histórica proporcionada',
        'ma_warning_3': 'Período ideal: 1100-1400',
        'ma_warning_4': 'Se aconseja higiene básica',
        'ma_warning_5': 'Protocolo de caballería a respetar',
        
        'future_warning_1': 'Se requiere adaptación neurológica',
        'future_warning_2': 'Vacunas futuristas obligatorias',
        'future_warning_3': 'Protección contra ondas magnéticas',
        'future_warning_4': 'Entrenamiento de interfaz IA proporcionado',
        'future_warning_5': 'Seguro espacial completo incluido',
        
        // Booking
        'booking_title': 'Reserva Tu Viaje',
        'booking_name': 'Nombre completo',
        'booking_email': 'Email',
        'booking_start': 'Fecha de salida',
        'booking_travelers': 'Número de viajeros',
        'booking_duration': 'Duración de la estancia',
        'booking_experience': 'Tipo de experiencia',
        'booking_interests': 'Tus intereses (selecciona 1+)',
        'booking_submit': 'Reservar Ahora',
        
        // CTA
        'cta_help': '¿Necesitas ayuda para elegir?',
        'chat_ai': 'Charla con nuestra IA',
        
        // Chatbot
        'chatbot_title': 'Asistente IA TimeTravel',
        
        // Footer
        'rights': 'Todos los derechos reservados',
        'privacy': 'Privacidad',
        'terms': 'Términos',
        'contact': 'Contacto'
    }
};

// Current language (default: fr)
let currentLanguage = localStorage.getItem('language') || 'fr';

// Initialize translations on page load
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
});

// Apply translations to all elements with data-i18n attribute
function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Update all language select dropdowns
    document.querySelectorAll('.language-select').forEach(select => {
        select.value = currentLanguage;
    });
}

// Set language from select
function setLanguage(lang) {
    if (['fr', 'en', 'es'].includes(lang)) {
        currentLanguage = lang;
        localStorage.setItem('language', currentLanguage);
        applyTranslations();
        
        // Show notification
        const langNames = { fr: 'Français', en: 'English', es: 'Español' };
        console.log(`Language changed to: ${langNames[currentLanguage]}`);
        
        // Update chatbot strings dynamically
        if (window.updateChatbotLanguage) {
            window.updateChatbotLanguage();
        }
    }
}

// Get current language
function getCurrentLanguage() {
    return currentLanguage;
}

// Translate a specific key
function t(key) {
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
        return translations[currentLanguage][key];
    }
    return key;
}
