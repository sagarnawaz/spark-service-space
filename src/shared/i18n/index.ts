import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        services: 'Services',
        work: 'Work',
        about: 'About',
        faq: 'FAQ',
        contact: 'Contact',
      },
      hero: {
        badge: 'Global Software Excellence',
        title1: "We Don't Build Software.",
        title2: "We Build What's Next.",
        subtitle:
          'We Design, Develop, and Deploy Digital Solutions That Empower Businesses to Lead.',
        ctaWork: 'See Our Work',
        ctaStory: 'Our Story',
      },
      services: {
        lead: 'What We',
        accent: 'Create',
        poetic: 'Every solution, a new standard.',
        items: [
          { title: 'Web Development', poetic: 'From Idea to Interface', description: 'High-performance websites and web apps built for every device, delivering seamless user experiences.', tag: 'Frontend · Backend' },
          { title: 'Mobile App Development', poetic: 'Your Vision on Every Device', description: 'Native and cross-platform mobile apps engineered for performance, retention, and daily engagement.', tag: 'iOS · Android' },
          { title: 'AI Automation Solutions', poetic: 'Work Smarter, Not Harder', description: 'Intelligent automation powered by AI to streamline workflows, reduce costs, and scale operations effortlessly.', tag: 'AI · Automation' },
          { title: 'Custom Software Development', poetic: 'Built Around Your Business', description: 'Tailor-made software solutions designed from the ground up to solve your unique business challenges.', tag: 'Custom · Scalable' },
          { title: 'E-Commerce Solutions', poetic: 'Sell Smarter, Grow Faster', description: 'Optimized online stores with seamless checkout experiences that convert visitors into loyal customers.', tag: 'Ecommerce' },
          { title: 'CRM / ERP Development', poetic: 'Manage Everything in One Place', description: 'Custom CRM and ERP systems that unify your teams, data, and processes for maximum efficiency.', tag: 'CRM · ERP' },
          { title: 'UI / UX Design', poetic: 'Design That Wows', description: 'Intuitive, beautiful interfaces that delight users, reduce friction, and drive meaningful engagement.', tag: 'Design Systems' },
          { title: 'Digital Marketing & SEO', poetic: 'Growth Through Strategy', description: 'Data-driven campaigns and SEO strategies that boost your visibility, traffic, and measurable ROI.', tag: 'Marketing · SEO' },
          { title: 'QA Testing Services', poetic: 'Ship with Confidence', description: 'Detailed quality assurance and testing to ensure your product is bug-free, reliable, and ready to launch.', tag: 'QA · Testing' },
        ],
      },
      work: { lead: 'Our', accent: 'Work', poetic: 'Built to outlast trends.', viewProject: 'View Project' },
      tech: { lead: 'Technologies We', accent: 'Master', poetic: 'The tools that power our craft.' },
      about: {
        lead: 'Our',
        accent: 'Psychology',
        poetic: 'Innovation with Intent. Growth with Discipline. Execution with Excellence.',
        intro:
          'At Sovertick, we believe leadership in technology requires continuous evolution. We operate with a mindset of strategic reinvention - constantly upgrading our capabilities, investing in emerging technologies, and strengthening specialized expertise to solve real business challenges.',
        visionTitle: 'Our Vision',
        visionText1:
          'We envision a world where technology removes limitations, not creates them. Our vision is to become a global catalyst for digital transformation by building intelligent platforms, ethical AI systems, and performance-driven digital ecosystems.',
        visionText2: "We don't just adapt to change. We architect it",
        missionTitle: 'Our Mission',
        missionText1:
          'To architect powerful digital ecosystems that give businesses a competitive advantage.Our mission is to create solutions that accelerate growth, increase operational efficiency, strengthen market positioning, and deliver sustainable long-term value.',
        missionText2: 'Build smarter. Scale faster. Lead stronger.',
        coreValuesTitle: 'Our Core Values',
        beliefsTitle: 'Our Beliefs',
      },
      testimonials: { lead: 'Client', accent: 'Stories', poetic: "The best proof is the people we've worked with." },
      future: { lead: 'Tomorrow,', accent: 'Today.', poetic: "Futures we're already engineering." },
      faq: {
        lead: 'Frequently Asked',
        accent: 'Questions',
        poetic: 'Clear answers before we start building together.',
      },
      contact: {
        lead: "Let's Talk.",
        poetic: "Tell us what you're building and we'll make it real.",
        name: 'Name',
        email: 'Email',
        serviceNeeded: 'Service Needed',
        message: 'Message',
        submit: 'Submit',
        sending: 'Sending...',
        sent: 'Message sent. The Sovertick team will reach out shortly.',
      },
      footer: {
        tagline: 'Engineering tomorrow. Delivering today.',
        company: 'Company',
        services: 'Services',
        connect: 'Connect',
        about: 'About',
        contact: 'Contact',
        web: 'Web Development',
        ai: 'AI Solutions',
        cloud: 'Cloud & DevOps',
        rights: '© 2026 Sovertick Technologies. All Rights Reserved. | Privacy | Terms',
      },
      modal: {
        overview: 'PROJECT OVERVIEW',
        start: 'Start Similar Project',
        close: 'Close',
      },
      notFound: {
        subtitle: 'Oops! Page not found',
        back: 'Return to Home',
      },
    },
  },
  ar: { translation: { nav: { home: 'الرئيسية', services: 'الخدمات', work: 'الأعمال', about: 'من نحن', faq: 'الأسئلة', contact: 'تواصل' }, hero: { badge: 'تميّز عالمي في البرمجيات', title1: 'نحن لا نبني برمجيات فقط.', title2: 'نحن نبني ما هو قادم.', subtitle: 'نحن نصمّم ونطوّر وننشر حلولًا رقمية تمكّن الأعمال من القيادة.', ctaWork: 'شاهد أعمالنا', ctaStory: 'قصتنا' }, services: { lead: 'ما الذي', accent: 'نقدمه', poetic: 'كل حل يضع معيارًا جديدًا.' }, work: { lead: 'أعمالنا', accent: '', poetic: 'حلول مصممة للاستمرار.', viewProject: 'عرض المشروع' }, tech: { lead: 'التقنيات التي', accent: 'نتقنها', poetic: 'الأدوات التي تدعم حرفيتنا.' }, about: { lead: 'فلسفتنا', accent: '', poetic: 'ابتكار هادف. نمو منضبط. تنفيذ متميز.', intro: 'في سوفرتك، نؤمن أن الريادة التقنية تتطلب تطورًا مستمرًا وإعادة ابتكار استراتيجية لحل تحديات الأعمال.', visionTitle: 'رؤيتنا', visionText1: 'نطمح إلى عالم تزيل فيه التكنولوجيا القيود، ونقود التحول الرقمي عبر منصات ذكية وأنظمة ذكاء اصطناعي أخلاقية.', visionText2: 'نحن لا نواكب التغيير فقط، بل نصنعه.', missionTitle: 'مهمتنا', missionText1: 'بناء أنظمة رقمية قوية تمنح الشركات ميزة تنافسية قابلة للقياس.', missionText2: 'نمزج التقنية والاستراتيجية والتصميم والبيانات لتسريع النمو ورفع الكفاءة وتعزيز الموقع السوقي.', missionText3: 'ابنِ أذكى. توسّع أسرع. قُد أقوى.', coreValuesTitle: 'قيمنا الأساسية', beliefsTitle: 'معتقداتنا' }, testimonials: { lead: 'قصص', accent: 'العملاء', poetic: 'أفضل دليل هو نتائج شركائنا.' }, future: { lead: 'غدًا،', accent: 'اليوم.', poetic: 'مستقبل نبنيه من الآن.' }, faq: { lead: 'الأسئلة', accent: 'الشائعة', poetic: 'إجابات واضحة قبل أن نبدأ.' }, contact: { lead: 'لنتحدث.', poetic: 'أخبرنا بما تبنيه وسنحوّله إلى واقع.', name: 'الاسم', email: 'البريد الإلكتروني', serviceNeeded: 'الخدمة المطلوبة', message: 'الرسالة', submit: 'إرسال', sending: 'جارٍ الإرسال...', sent: 'تم إرسال الرسالة. سيتواصل فريق سوفرتك معك قريبًا.' }, footer: { tagline: 'نُهندس الغد. ونُنجز اليوم.', company: 'الشركة', services: 'الخدمات', connect: 'تواصل', about: 'من نحن', contact: 'تواصل', web: 'تطوير الويب', ai: 'حلول الذكاء الاصطناعي', cloud: 'المنصات السحابية', rights: '© 2026 سوفرتك. جميع الحقوق محفوظة. | الخصوصية | الشروط' }, modal: { overview: 'نظرة عامة على المشروع', start: 'ابدأ مشروعًا مشابهًا', close: 'إغلاق' }, notFound: { subtitle: 'عذرًا! الصفحة غير موجودة', back: 'العودة للرئيسية' } } },
  es: { translation: { nav: { home: 'Inicio', services: 'Servicios', work: 'Proyectos', about: 'Nosotros', faq: 'FAQ', contact: 'Contacto' }, hero: { badge: 'Excelencia Global en Software', title1: 'No solo construimos software.', title2: 'Construimos lo que viene.', subtitle: 'Diseñamos, desarrollamos e implementamos soluciones digitales que impulsan a las empresas a liderar.', ctaWork: 'Ver Proyectos', ctaStory: 'Nuestra Historia' }, services: { lead: 'Lo que', accent: 'Creamos', poetic: 'Cada solución marca un nuevo estándar.' }, work: { lead: 'Nuestro', accent: 'Trabajo', poetic: 'Construido para durar.', viewProject: 'Ver Proyecto' }, tech: { lead: 'Tecnologías que', accent: 'Dominamos', poetic: 'Herramientas que impulsan nuestro trabajo.' }, about: { lead: 'Nuestra', accent: 'Filosofía', poetic: 'Innovación con intención. Crecimiento con disciplina. Ejecución con excelencia.', intro: 'En Sovertick creemos que el liderazgo tecnológico requiere evolución continua y reinvención estratégica para resolver desafíos reales.', visionTitle: 'Nuestra Visión', visionText1: 'Imaginamos un mundo donde la tecnología elimine límites y acelere la transformación digital global.', visionText2: 'No solo nos adaptamos al cambio. Lo diseñamos.', missionTitle: 'Nuestra Misión', missionText1: 'Arquitectar ecosistemas digitales potentes que generen ventaja competitiva medible.', missionText2: 'Combinamos tecnología, estrategia, diseño y datos para acelerar crecimiento y eficiencia sostenible.', missionText3: 'Construye más inteligente. Escala más rápido. Lidera con fuerza.', coreValuesTitle: 'Nuestros Valores', beliefsTitle: 'Nuestras Creencias' }, testimonials: { lead: 'Historias de', accent: 'Clientes', poetic: 'La mejor prueba son nuestros resultados.' }, future: { lead: 'Mañana,', accent: 'Hoy.', poetic: 'Futuros que ya estamos creando.' }, faq: { lead: 'Preguntas', accent: 'Frecuentes', poetic: 'Respuestas claras antes de comenzar.' }, contact: { lead: 'Hablemos.', poetic: 'Cuéntanos qué estás construyendo y lo haremos realidad.', name: 'Nombre', email: 'Correo', serviceNeeded: 'Servicio Requerido', message: 'Mensaje', submit: 'Enviar', sending: 'Enviando...', sent: 'Mensaje enviado. El equipo de Sovertick te contactará pronto.' }, footer: { tagline: 'Ingeniería para mañana. Entrega hoy.', company: 'Compañía', services: 'Servicios', connect: 'Conectar', about: 'Nosotros', contact: 'Contacto', web: 'Desarrollo Web', ai: 'Soluciones IA', cloud: 'Cloud & DevOps', rights: '© 2026 Sovertick Technologies. Todos los derechos reservados. | Privacidad | Términos' }, modal: { overview: 'RESUMEN DEL PROYECTO', start: 'Iniciar Proyecto Similar', close: 'Cerrar' }, notFound: { subtitle: 'Ups! Página no encontrada', back: 'Volver al Inicio' } } },
  nl: { translation: { nav: { home: 'Home', services: 'Diensten', work: 'Projecten', about: 'Over Ons', faq: 'FAQ', contact: 'Contact' }, hero: { badge: 'Wereldwijde Software-excellentie', title1: 'Wij bouwen niet alleen software.', title2: 'Wij bouwen wat hierna komt.', subtitle: 'Wij ontwerpen, ontwikkelen en implementeren digitale oplossingen waarmee bedrijven kunnen leiden.', ctaWork: 'Bekijk Ons Werk', ctaStory: 'Ons Verhaal' }, services: { lead: 'Wat Wij', accent: 'Maken', poetic: 'Elke oplossing zet een nieuwe standaard.' }, work: { lead: 'Ons', accent: 'Werk', poetic: 'Gebouwd om lang mee te gaan.', viewProject: 'Project Bekijken' }, tech: { lead: 'Technologieën die Wij', accent: 'Beheersen', poetic: 'Tools die ons vakmanschap aandrijven.' }, about: { lead: 'Onze', accent: 'Visie', poetic: 'Innovatie met intentie. Groei met discipline. Uitvoering met excellentie.', intro: 'Bij Sovertick geloven we dat technologisch leiderschap voortdurende evolutie vraagt om echte bedrijfsproblemen op te lossen.', visionTitle: 'Onze Visie', visionText1: 'Wij zien een wereld waarin technologie beperkingen wegneemt en digitale transformatie wereldwijd versnelt.', visionText2: 'Wij passen ons niet alleen aan verandering aan. Wij ontwerpen die.', missionTitle: 'Onze Missie', missionText1: 'Krachtige digitale ecosystemen bouwen die bedrijven meetbaar concurrentievoordeel geven.', missionText2: 'Door technologie, strategie, design en data te combineren, leveren we duurzame groei en efficiëntie.', missionText3: 'Slimmer bouwen. Sneller schalen. Sterker leiden.', coreValuesTitle: 'Onze Kernwaarden', beliefsTitle: 'Onze Overtuigingen' }, testimonials: { lead: 'Klant', accent: 'Verhalen', poetic: 'Het beste bewijs zijn onze resultaten.' }, future: { lead: 'Morgen,', accent: 'Vandaag.', poetic: 'Toekomsten die we nu al bouwen.' }, faq: { lead: 'Veelgestelde', accent: 'Vragen', poetic: 'Duidelijke antwoorden voordat we starten.' }, contact: { lead: 'Laten we praten.', poetic: 'Vertel wat je bouwt en wij maken het werkelijkheid.', name: 'Naam', email: 'E-mail', serviceNeeded: 'Gewenste Dienst', message: 'Bericht', submit: 'Versturen', sending: 'Bezig met verzenden...', sent: 'Bericht verzonden. Het Sovertick-team neemt snel contact op.' }, footer: { tagline: 'Engineering voor morgen. Levering vandaag.', company: 'Bedrijf', services: 'Diensten', connect: 'Connect', about: 'Over Ons', contact: 'Contact', web: 'Webontwikkeling', ai: 'AI-oplossingen', cloud: 'Cloud & DevOps', rights: '© 2026 Sovertick Technologies. Alle rechten voorbehouden. | Privacy | Voorwaarden' }, modal: { overview: 'PROJECTOVERZICHT', start: 'Start Vergelijkbaar Project', close: 'Sluiten' }, notFound: { subtitle: 'Oeps! Pagina niet gevonden', back: 'Terug naar Home' } } },
  ur: { translation: { nav: { home: 'ہوم', services: 'سروسز', work: 'پروجیکٹس', about: 'ہمارے بارے میں', faq: 'سوالات', contact: 'رابطہ' }, hero: { badge: 'عالمی سافٹ ویئر ایکسیلینس', title1: 'ہم صرف سافٹ ویئر نہیں بناتے۔', title2: 'ہم مستقبل انجینئر کرتے ہیں۔', subtitle: 'ہم ڈیزائن، ڈویلپ اور ڈیپلائے کرتے ہیں ایسے ڈیجیٹل حل جو کاروبار کو لیڈ کرنے میں مدد دیں۔', ctaWork: 'ہمارا کام دیکھیں', ctaStory: 'ہماری کہانی' }, services: { lead: 'ہم کیا', accent: 'بناتے ہیں', poetic: 'ہر حل ایک نیا معیار قائم کرتا ہے۔' }, work: { lead: 'ہمارے', accent: 'پروجیکٹس', poetic: 'طویل مدت کے لیے تعمیر شدہ۔', viewProject: 'پروجیکٹ دیکھیں' }, tech: { lead: 'وہ ٹیکنالوجیز جن میں ہم', accent: 'ماہر ہیں', poetic: 'وہ ٹولز جو ہماری مہارت کو طاقت دیتے ہیں۔' }, about: { lead: 'ہماری', accent: 'سوچ', poetic: 'ارادے کے ساتھ جدت۔ نظم کے ساتھ ترقی۔ بہترین عملدرآمد۔', intro: 'Sovertick میں ہم سمجھتے ہیں کہ ٹیکنالوجی میں قیادت کے لیے مسلسل ارتقا ضروری ہے۔ ہم حقیقی کاروباری مسائل کے حل کے لیے اپنی صلاحیتیں مسلسل بہتر بناتے ہیں۔', visionTitle: 'ہمارا وژن', visionText1: 'ہم ایسا مستقبل دیکھتے ہیں جہاں ٹیکنالوجی رکاوٹیں ختم کرے۔ ہم عالمی ڈیجیٹل ٹرانسفارمیشن کے محرک بننا چاہتے ہیں۔', visionText2: 'ہم صرف تبدیلی اپناتے نہیں، ہم اسے ڈیزائن کرتے ہیں۔', missionTitle: 'ہمارا مشن', missionText1: 'طاقتور ڈیجیٹل ایکوسسٹمز بنانا جو کاروبار کو قابلِ پیمائش مسابقتی برتری دیں۔', missionText2: 'ٹیکنالوجی، حکمتِ عملی، ڈیزائن اور ڈیٹا انٹیلیجنس کو ملا کر ہم پائیدار ترقی اور آپریشنل بہتری فراہم کرتے ہیں۔', missionText3: 'زیادہ سمارٹ بنائیں۔ تیزی سے اسکیل کریں۔ مضبوط قیادت کریں۔', coreValuesTitle: 'ہماری بنیادی اقدار', beliefsTitle: 'ہمارے عقائد' }, testimonials: { lead: 'کلائنٹ', accent: 'کہانیاں', poetic: 'بہترین ثبوت وہ نتائج ہیں جو ہم دیتے ہیں۔' }, future: { lead: 'کل،', accent: 'آج۔', poetic: 'وہ مستقبل جسے ہم آج بنا رہے ہیں۔' }, faq: { lead: 'اکثر پوچھے جانے والے', accent: 'سوالات', poetic: 'کام شروع کرنے سے پہلے واضح جوابات۔' }, contact: { lead: 'آئیے بات کریں۔', poetic: 'آپ کیا بنا رہے ہیں ہمیں بتائیں، ہم اسے حقیقت بنائیں گے۔', name: 'نام', email: 'ای میل', serviceNeeded: 'مطلوبہ سروس', message: 'پیغام', submit: 'جمع کرائیں', sending: 'بھیجا جا رہا ہے...', sent: 'پیغام موصول ہوگیا۔ Sovertick ٹیم جلد آپ سے رابطہ کرے گی۔' }, footer: { tagline: 'کل کی انجینئرنگ، آج کی ڈیلیوری۔', company: 'کمپنی', services: 'سروسز', connect: 'رابطہ', about: 'ہمارے بارے میں', contact: 'رابطہ', web: 'ویب ڈویلپمنٹ', ai: 'AI سلوشنز', cloud: 'Cloud & DevOps', rights: '© 2026 Sovertick Technologies. تمام حقوق محفوظ ہیں۔ | پرائیویسی | شرائط' }, modal: { overview: 'پروجیکٹ اوورویو', start: 'اسی طرح کا پروجیکٹ شروع کریں', close: 'بند کریں' }, notFound: { subtitle: 'اوپس! صفحہ نہیں ملا', back: 'ہوم پر واپس جائیں' } } },
} as const

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  detection: { order: ['localStorage', 'navigator'], caches: ['localStorage'] },
})

export default i18n
