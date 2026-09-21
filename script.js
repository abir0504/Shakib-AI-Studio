/**
 * SHAKIB AI STUDIO — LUXURY BILINGUAL ENGINE
 * Pure Vanilla JavaScript (Zero Dependencies, Zero Frameworks)
 * Operated by SAKHAWAT HOSAIN SHAKIB | Built by MD MAHADI HASAN ABIR
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. COMPLETE BILINGUAL TRANSLATION DICTIONARY
     ========================================================================== */
  const translations = {
    bn: {
      seoTitle: "SHAKIB AI STUDIO | AI ভিডিও প্রোডাকশন ও ক্রিয়েটিভ স্টুডিও",
      seoDesc: "SHAKIB AI STUDIO AI-powered ভিডিও, ব্র্যান্ড প্রমোশন, অ্যানিমেশন, বিজ্ঞাপন, মিউজিক এবং ক্রিয়েটিভ ভিজ্যুয়াল কনটেন্ট তৈরি করে।",
      
      // Navigation
      navHome: "হোম",
      navAbout: "আমার সম্পর্কে",
      navServices: "সার্ভিস",
      navPortfolio: "পোর্টফোলিও",
      navWhy: "কেন আমি",
      navContact: "যোগাযোগ",
      navCta: "প্রজেক্ট শুরু করুন",
      
      // Hero Section
      heroTagline: "আপনার আইডিয়া, AI-এর শক্তিতে ভিডিও",
      heroHeadline: "AI দিয়ে তৈরি প্রফেশনাল ভিডিও, ব্র্যান্ড আর অ্যানিমেশন",
      heroDescription: "“ব্র্যান্ড প্রমোশন থেকে হাসপাতাল/ডাক্তার বিজ্ঞাপন, অ্যানিমেশন থেকে মিউজিক — SAKHAWAT HOSAIN SHAKIB-এর হাতে তৈরি হয় আপনার আইডিয়ার সম্পূর্ণ ভিজ্যুয়াল রূপ।”",
      btnWhatsApp: "হোয়াটসঅ্যাপে কথা বলুন",
      btnStartProject: "প্রজেক্ট শুরু করুন",
      heroPlaceholderLabel: "[ADD IMAGE HERE]",
      heroPlaceholderPurpose: "Purpose: Hero Visual",
      heroPlaceholderSpecs: "1920×1080px • 16:9 • WebP / AVIF • Landscape • Cinematic futuristic AI video production studio",

      // About Section
      aboutBadge: "ক্রিয়েটিভ প্রোডিউসার",
      aboutHeading: "আমার সম্পর্কে",
      aboutSubheading: "AI-এর শক্তিতে সৃজনশীলতার নতুন দিগন্ত",
      aboutBio1: "আমি সাখাওয়াত হোসাইন শাকিব — একজন AI ভিডিও ক্রিয়েটর ও কনটেন্ট প্রোডিউসার। ভিডিও স্ক্রিপ্ট লেখা থেকে শুরু করে প্রম্পট তৈরি, অ্যানিমেশন, মিউজিক প্রোডাকশন আর ফটো এডিটিং — পুরো প্রসেসটা আমি একা হাতে সামলাই, যাতে আপনাকে একাধিক জায়গায় দৌড়াতে না হয়।",
      aboutBio2: "ছোট ব্যবসা থেকে হাসপাতাল, ডাক্তার থেকে ব্র্যান্ড — সবার জন্যই কাজ করেছি। প্রতিটি প্রজেক্টকে আন্তর্জাতিক মানের ভিজ্যুয়াল আর্ট হিসেবে গড়ে তোলাই আমার লক্ষ্য।",
      aboutProfileLabel: "[ADD IMAGE HERE]",
      aboutProfilePurpose: "Purpose: SAKHAWAT HOSAIN SHAKIB Profile Photo",
      aboutProfileSpecs: "1000×1200px • 5:6 • WebP • Portrait • Professional cinematic portrait",
      highlight1Title: "এন্ড-টু-এন্ড প্রোডাকশন",
      highlight1Desc: "স্ক্রিপ্ট থেকে ফাইনাল ভিডিও ডেলিভারি পর্যন্ত একাই পুরো কাজ সামলাই।",
      highlight2Title: "দ্রুত ও প্রিমিয়াম ডেলিভারি",
      highlight2Desc: "AI ওয়ার্কফ্লো ব্যবহারের ফলে সময় ও খরচ সাশ্রয়ে সর্বোচ্চ কোয়ালিটি।",

      // Services Section
      servicesBadge: "দক্ষতা ও সেবা",
      servicesHeading: "আমার সার্ভিসসমূহ",
      servicesSubheading: "আধুনিক প্রযুক্তির সমন্বয়ে আপনার ব্র্যান্ডকে দিন এক অনন্য ভিজ্যুয়াল মাত্রা।",
      
      srv1Title: "AI ভিডিও প্রোডাকশন",
      srv1Desc: "ব্র্যান্ড প্রমোশন, হাসপাতাল/ডাক্তার অ্যাড, প্রোডাক্ট ব্র্যান্ডিং ভিডিও — AI টুল দিয়ে দ্রুত ও প্রফেশনাল কোয়ালিটিতে তৈরি।",
      srv1Specs: "[ADD IMAGE HERE — AI VIDEO PRODUCTION] • 1200×800px • 3:2 • WebP • Landscape",

      srv2Title: "ভিডিও স্ক্রিপ্ট ও প্রম্পট রাইটিং",
      srv2Desc: "আপনার আইডিয়াকে গোছানো স্ক্রিপ্ট আর কার্যকর AI প্রম্পটে রূপ দেওয়া হয়।",
      srv2Specs: "[ADD IMAGE HERE — SCRIPT & PROMPT] • 1200×800px • 3:2 • WebP • Landscape",

      srv3Title: "2D অ্যানিমেশন ভিডিও",
      srv3Desc: "আকর্ষণীয় 2D অ্যানিমেটেড স্টোরিটেলিং ও সোশ্যাল মিডিয়া এক্সপ্লেনার ভিডিও তৈরি।",
      srv3Specs: "[ADD IMAGE HERE — 2D ANIMATION] • 1200×800px • 3:2 • WebP • Landscape",

      srv4Title: "3D অ্যানিমেশন ভিডিও",
      srv4Desc: "হাইপার-রিয়ালিস্টিক 3D প্রোডাক্ট রেন্ডার এবং সিনেমাটিক ব্র্যান্ড শোকেস ভিডিও।",
      srv4Specs: "[ADD IMAGE HERE — 3D PRODUCT ANIMATION] • 1200×800px • 3:2 • WebP • Landscape",

      srv5Title: "AI অটোমেশন",
      srv5Desc: "কনটেন্ট তৈরি ও সোশ্যাল মিডিয়া পাইপলাইনে AI অটোমেশন ইন্টিগ্রেশন।",
      srv5Specs: "[ADD IMAGE HERE — AI AUTOMATION] • 1200×800px • 3:2 • WebP • Landscape",

      srv6Title: "মিউজিক প্রোডাকশন",
      srv6Desc: "ভিডিওর অনুভূতির সাথে নিখুঁতভাবে মেলানো সিনেমাটিক আবহ সঙ্গীত ও সাউন্ড ডিজাইন।",
      srv6Specs: "[ADD IMAGE HERE — MUSIC PRODUCTION] • 1200×800px • 3:2 • WebP • Landscape",

      srv7Title: "ফটো এডিটিং",
      srv7Desc: "হাই-এন্ড প্রফেশনাল ফটো রিটাচিং, কালার গ্রেডিং ও ক্রিয়েটিভ আর্টওয়ার্ক কম্পোজিশন।",
      srv7Specs: "[ADD IMAGE HERE — PHOTO EDITING] • 1200×800px • 3:2 • WebP • Landscape",
      viewDetails: "প্রজেক্টের তথ্য দেখুন",

      // Why Choose Me
      whyBadge: "শ্রেষ্ঠত্বের কারণ",
      whyHeading: "কেন আমাকে বেছে নেবেন?",
      whySubheading: "শুধু টেকনোলজি নয়, গভীর সৃজনশীল দৃষ্টিভঙ্গিই আমার মূল শক্তি।",
      
      why1Title: "এক জায়গায় সম্পূর্ণ সমাধান",
      why1Desc: "স্ক্রিপ্ট, ভিজ্যুয়াল, অ্যানিমেশন, ভয়েস ও মিউজিক — সব পাবেন একজন বিশ্বস্ত ক্রিয়েটরের কাছে।",

      why2Title: "AI-চালিত দ্রুত workflow",
      why2Desc: "লেটেস্ট জেনারেটিভ AI প্রযুক্তির ব্যবহারে ট্র্যাডিশনাল এজেন্সির চেয়ে ৫ গুণ দ্রুত ডেলিভারি।",

      why3Title: "বিভিন্ন ধরনের ক্লায়েন্টের অভিজ্ঞতা",
      why3Desc: "হাসপাতাল, মেডিকেল প্রফেশনাল, কর্পোরেট ব্র্যান্ড ও স্টার্টআপের জন্য সফল কাজ।",

      why4Title: "সরাসরি যোগাযোগ",
      why4Desc: "কোনো মিডলম্যান বা অ্যাকাউন্ট ম্যানেজার নেই; ক্রিয়েটরের সাথে সরাসরি নিবেদিত যোগাযোগ।",

      // Workflow
      workflowBadge: "কাজের প্রক্রিয়া",
      workflowHeading: "আইডিয়া থেকে ফাইনাল ভিডিও",
      workflowSubheading: "প্রতিটি ধাপে স্বচ্ছতা এবং নিখুঁত পারফেকশনের সমন্বয়।",
      wfStep1: "আইডিয়া",
      wfDesc1: "কনসেপ্ট ও ব্রিফ বিশ্লেষণ",
      wfStep2: "স্ক্রিপ্ট",
      wfDesc2: "স্টোরিবোর্ড ও কনটেন্ট স্ট্রাকচার",
      wfStep3: "AI প্রম্পট",
      wfDesc3: "অপটিমাইজড ভিজ্যুয়াল ডিরেকশন",
      wfStep4: "প্রোডাকশন",
      wfDesc4: "ভিজ্যুয়াল জেনারেশন ও কম্পোজিশন",
      wfStep5: "এডিটিং",
      wfDesc5: "কালার গ্রেডিং, সাউন্ড ও এফেক্টস",
      wfStep6: "ফাইনাল ডেলিভারি",
      wfDesc6: "হাই-রেজোলিউশন মাস্টার রিলিজ",

      // Portfolio Section
      portfolioBadge: "নির্বাচিত কাজ",
      portfolioHeading: "আমার কাজ",
      portfolioSubtitle: "আইডিয়াকে ভিজ্যুয়াল অভিজ্ঞতায় রূপ দেওয়া।",
      filterAll: "সব কাজ",
      filterHospital: "Hospital Promo",
      filterBrand: "Brand Launch",
      filter2D: "2D Explainer",
      filter3D: "3D Showcase",
      filterAI: "AI Advertisement",
      filterSocial: "Social Media",
      filterMusic: "Music Visual",
      filterCampaign: "Creative Campaign",
      portfolioItemSpecs: "[ADD PORTFOLIO IMAGE/VIDEO HERE] • 1920×1080px • 16:9 • WebP / AVIF (Image) / MP4 / WebM (Video)",

      // Featured Project
      featuredBadge: "স্পটলাইট প্রজেক্ট",
      featuredHeading: "একটি আইডিয়া থেকে অসাধারণ ভিজ্যুয়াল",
      featuredDesc: "মেডিকেল ও হেলথকেয়ার সেক্টরে নতুন বিপ্লব সৃষ্টিকারী সিনেমাটিক এআই ক্যাম্পেইন। জটিল কনসেপ্টকে সাধারণ মানুষের কাছে সহজে ও বিশ্বাসযোগ্যভাবে উপস্থাপন।",
      featuredSpecsVideo: "[ADD FEATURED PROJECT VIDEO HERE] • 1920×1080px • 16:9 • MP4 / WebM",
      btnViewProject: "প্রজেক্ট দেখুন",
      featuredSpec1: "সম্পূর্ণ AI জেনারেটেড ভিডিও ওয়ার্কফ্লো",
      featuredSpec2: "কাস্টম সিনেমাটিক সাউন্ড ডিজাইন ও মিউজিক",
      featuredSpec3: "হাইপার-টার্গেটেড ব্র্যান্ড মেসেজিং",

      // Testimonials Section
      testimonialsBadge: "ক্লায়েন্টদের অভিজ্ঞতা",
      testimonialsHeading: "ক্লায়েন্টদের মতামত",
      testimonialsSubheading: "সন্তুষ্ট ক্লায়েন্টদের প্রত্যক্ষ অভিজ্ঞতা ও মূল্যায়ন।",
      test1Text: "“[ADD CLIENT TESTIMONIAL HERE — সাখাওয়াত হোসাইন শাকিব আমাদের ব্র্যান্ডের জন্য যে সিনেমাটিক ভিডিও তৈরি করেছেন তা আমাদের প্রত্যাশার চেয়েও অনেক এগিয়ে ছিল।]”",
      test1Name: "[ADD CLIENT NAME HERE]",
      test1Role: "[ADD CLIENT BUSINESS/ROLE HERE]",
      test2Text: "“[ADD CLIENT TESTIMONIAL HERE — আমাদের হাসপাতালের সচেতনতামূলক ভিডিওর স্ক্রিপ্ট ও অ্যানিমেশন অত্যন্ত নিখুঁত ও হৃদয়গ্রাহী হয়েছে।]”",
      test2Name: "[ADD CLIENT NAME HERE]",
      test2Role: "[ADD CLIENT BUSINESS/ROLE HERE]",
      test3Text: "“[ADD CLIENT TESTIMONIAL HERE — অবিশ্বাস্য গতিতে প্রফেশনাল কোয়ালিটির 3D প্রোডাক্ট শোকেস ডেলিভারি পেয়েছি।]”",
      test3Name: "[ADD CLIENT NAME HERE]",
      test3Role: "[ADD CLIENT BUSINESS/ROLE HERE]",

      // CTA Banner
      ctaTitle: "আপনার আইডিয়া আছে? সেটাকে অসাধারণ কিছুতে রূপ দিই।",
      btnMsgWhatsApp: "হোয়াটসঅ্যাপে মেসেজ করুন",

      // Contact Section
      contactBadge: "যোগাযোগ",
      contactHeading: "যোগাযোগ করুন",
      contactSubheading: "আপনার যেকোনো প্রশ্ন বা নতুন প্রজেক্টের ব্যাপারে কথা বলতে নির্দ্বিধায় মেসেজ দিন।",
      operatorBadge: "অপারেটেড বাই",
      operatorTitle: "AI ভিডিও ক্রিয়েটর ও কনটেন্ট প্রোডিউসার",
      channelWhatsApp: "হোয়াটসঅ্যাপ",
      channelEmail: "ইমেইল",
      socialConnect: "সোশ্যাল মিডিয়া চ্যানেলসমূহ",
      
      // Form
      formNameLabel: "আপনার নাম",
      formNamePlaceholder: "উদাঃ সাখাওয়াত হোসাইন",
      formEmailLabel: "ইমেইল অ্যাড্রেস",
      formEmailPlaceholder: "name@company.com",
      formPhoneLabel: "ফোন নম্বর",
      formPhonePlaceholder: "+880 1XXXXXXXXX",
      formServiceLabel: "সার্ভিস নির্বাচন করুন",
      formServiceDefault: "সার্ভিস সিলেক্ট করুন...",
      formProjectLabel: "আপনার প্রজেক্ট সম্পর্কে লিখুন",
      formProjectPlaceholder: "আপনার আইডিয়ার বিস্তারিত, টাইমলাইন এবং প্রয়োজনীয় তথ্য লিখুন...",
      formBudgetLabel: "বাজেট রেঞ্জ (আনুমানিক)",
      btnSendInquiry: "মেসেজ পাঠান",
      sendingStatus: "পাঠানো হচ্ছে...",
      successToast: "ধন্যবাদ! আপনার মেসেজ সফলভাবে রেকর্ড করা হয়েছে। শীঘ্রই যোগাযোগ করা হবে।",
      validationToast: "দয়া করে সব প্রয়োজনীয় তথ্য সঠিকভাবে পূরণ করুন।",

      // Footer
      footerTagline: "আপনার আইডিয়া, AI-এর শক্তিতে ভিডিও। আন্তর্জাতিক মানের সিনেমাটিক ভিজ্যুয়াল প্রোডাকশন।",
      footerQuickLinks: "দ্রুত লিঙ্ক",
      footerContactInfo: "স্টুডিও লিঙ্কস",
      copyright: "© 2026 SHAKIB AI STUDIO — সর্বস্বত্ব সংরক্ষিত।",
      devPrefix: "নিখুঁতভাবে তৈরি করেছেন",
      devRole: "Web Developer",

      // Modal
      modalTitle: "প্রজেক্ট স্পেসিফিকেশন ও আর্কিটেকচার",
      modalClose: "বন্ধ করুন"
    },

    en: {
      seoTitle: "SHAKIB AI STUDIO | AI Video Production & Creative Studio",
      seoDesc: "SHAKIB AI STUDIO creates professional AI-powered videos, brand promotions, animations, advertisements, music and creative visual content.",
      
      // Navigation
      navHome: "Home",
      navAbout: "About",
      navServices: "Services",
      navPortfolio: "Portfolio",
      navWhy: "Why Me",
      navContact: "Contact",
      navCta: "Start a Project",

      // Hero Section
      heroTagline: "Your Ideas, Powered by AI.",
      heroHeadline: "Professional Videos, Brands & Animations — Powered by AI",
      heroDescription: "“From brand promotions and hospital/doctor advertisements to animation and music — SAKHAWAT HOSAIN SHAKIB transforms your ideas into complete visual experiences.”",
      btnWhatsApp: "Talk on WhatsApp",
      btnStartProject: "Start a Project",
      heroPlaceholderLabel: "[ADD IMAGE HERE]",
      heroPlaceholderPurpose: "Purpose: Hero Visual",
      heroPlaceholderSpecs: "1920×1080px • 16:9 • WebP / AVIF • Landscape • Cinematic futuristic AI video production studio",

      // About Section
      aboutBadge: "Creative Producer",
      aboutHeading: "About Me",
      aboutSubheading: "Creative Vision. Powered by AI.",
      aboutBio1: "“I’m SAKHAWAT HOSAIN SHAKIB — an AI video creator and content producer. From writing video scripts and creating AI prompts to animation, music production and photo editing, I manage the complete creative process so you don’t have to deal with multiple people or agencies.",
      aboutBio2: "From small businesses and hospitals to doctors and brands, I create visual content tailored to different needs.”",
      aboutProfileLabel: "[ADD IMAGE HERE]",
      aboutProfilePurpose: "Purpose: SAKHAWAT HOSAIN SHAKIB Profile Photo",
      aboutProfileSpecs: "1000×1200px • 5:6 • WebP • Portrait • Professional cinematic portrait",
      highlight1Title: "End-to-End Creative Direction",
      highlight1Desc: "Managing the entire pipeline from story scripting to final video master.",
      highlight2Title: "AI-Accelerated Precision",
      highlight2Desc: "High-end cinematic quality delivered faster with optimized generative workflows.",

      // Services Section
      servicesBadge: "Capabilities",
      servicesHeading: "My Services",
      servicesSubheading: "Elevate your brand with high-impact, state-of-the-art cinematic visuals.",

      srv1Title: "AI Video Production",
      srv1Desc: "Brand promotions, hospital/doctor advertisements and product branding videos created with modern AI-powered workflows.",
      srv1Specs: "[ADD IMAGE HERE — AI VIDEO PRODUCTION] • 1200×800px • 3:2 • WebP • Landscape",

      srv2Title: "Video Script & Prompt Writing",
      srv2Desc: "Transforming your ideas into structured scripts and effective AI prompts.",
      srv2Specs: "[ADD IMAGE HERE — SCRIPT & PROMPT] • 1200×800px • 3:2 • WebP • Landscape",

      srv3Title: "2D Animation Video",
      srv3Desc: "Compelling 2D animated explainers and social media storytelling formats.",
      srv3Specs: "[ADD IMAGE HERE — 2D ANIMATION] • 1200×800px • 3:2 • WebP • Landscape",

      srv4Title: "3D Animation Video",
      srv4Desc: "High-fidelity 3D product renders and photorealistic brand visuals.",
      srv4Specs: "[ADD IMAGE HERE — 3D PRODUCT ANIMATION] • 1200×800px • 3:2 • WebP • Landscape",

      srv5Title: "AI Automation",
      srv5Desc: "Streamlined AI workflows and automated creative production pipelines.",
      srv5Specs: "[ADD IMAGE HERE — AI AUTOMATION] • 1200×800px • 3:2 • WebP • Landscape",

      srv6Title: "Music Production",
      srv6Desc: "Custom cinematic scoring, atmospheric soundscapes, and sound design.",
      srv6Specs: "[ADD IMAGE HERE — MUSIC PRODUCTION] • 1200×800px • 3:2 • WebP • Landscape",

      srv7Title: "Photo Editing",
      srv7Desc: "Studio-grade retouching, high-end compositing, and cinematic color grading.",
      srv7Specs: "[ADD IMAGE HERE — PHOTO EDITING] • 1200×800px • 3:2 • WebP • Landscape",
      viewDetails: "View Project Specs",

      // Why Choose Me
      whyBadge: "Why Work With Me?",
      whyHeading: "Why Work With Me?",
      whySubheading: "Combining advanced technology with visionary creative storytelling.",

      why1Title: "One Complete Solution",
      why1Desc: "Script, visuals, animation, sound, and final delivery handled seamlessly by one creator.",

      why2Title: "AI-Powered Workflow",
      why2Desc: "Ultra-rapid turnaround without ever compromising on world-class visual quality.",

      why3Title: "Experience Across Different Industries",
      why3Desc: "Proven success across medical, hospital, luxury corporate, and commercial domains.",

      why4Title: "Direct Communication",
      why4Desc: "Direct, transparent collaboration with the producer behind the camera and prompts.",

      // Workflow
      workflowBadge: "Production Pipeline",
      workflowHeading: "From Idea to Final Video",
      workflowSubheading: "A systematic 6-step journey from imagination to finished masterpiece.",
      wfStep1: "IDEA",
      wfDesc1: "Concept ideation & strategic alignment",
      wfStep2: "SCRIPT",
      wfDesc2: "Narrative drafting & storyboard",
      wfStep3: "AI PROMPT",
      wfDesc3: "Engineered prompt crafting",
      wfStep4: "PRODUCTION",
      wfDesc4: "High-resolution AI visual synthesis",
      wfStep5: "EDITING",
      wfDesc5: "Color science, scoring & SFX",
      wfStep6: "FINAL DELIVERY",
      wfDesc6: "Multi-platform 4K master release",

      // Portfolio Section
      portfolioBadge: "Selected Works",
      portfolioHeading: "Selected Works",
      portfolioSubtitle: "Turning ideas into visual experiences.",
      filterAll: "All Projects",
      filterHospital: "Hospital Promo",
      filterBrand: "Brand Launch",
      filter2D: "2D Explainer",
      filter3D: "3D Showcase",
      filterAI: "AI Advertisement",
      filterSocial: "Social Media",
      filterMusic: "Music Visual",
      filterCampaign: "Creative Campaign",
      portfolioItemSpecs: "[ADD PORTFOLIO IMAGE/VIDEO HERE] • 1920×1080px • 16:9 • WebP / AVIF (Image) / MP4 / WebM (Video)",

      // Featured Project
      featuredBadge: "Spotlight Film",
      featuredHeading: "From Idea to Impact",
      featuredDesc: "An immersive cinematic campaign showcasing transformative medical innovation. Combining hyper-real AI generation with emotional narrative arc.",
      featuredSpecsVideo: "[ADD FEATURED PROJECT VIDEO HERE] • 1920×1080px • 16:9 • MP4 / WebM",
      btnViewProject: "View Project",
      featuredSpec1: "100% Custom AI-Generated Visual Pipeline",
      featuredSpec2: "Atmospheric Original Score & Sound Design",
      featuredSpec3: "High-Conversion Brand Storytelling",

      // Testimonials Section
      testimonialsBadge: "Trust & Proof",
      testimonialsHeading: "Client Feedback",
      testimonialsSubheading: "Direct experiences from esteemed partners and collaborators.",
      test1Text: "“[ADD CLIENT TESTIMONIAL HERE — SAKHAWAT HOSAIN SHAKIB delivered a cinematic video that exceeded all expectations for our healthcare brand launch.]”",
      test1Name: "[ADD CLIENT NAME HERE]",
      test1Role: "[ADD CLIENT BUSINESS/ROLE HERE]",
      test2Text: "“[ADD CLIENT TESTIMONIAL HERE — The precision in scripting and visual emotion helped us communicate complex medical facts with total clarity.]”",
      test2Name: "[ADD CLIENT NAME HERE]",
      test2Role: "[ADD CLIENT BUSINESS/ROLE HERE]",
      test3Text: "“[ADD CLIENT TESTIMONIAL HERE — Incredible delivery speed for our 3D product showcase with unmatched attention to detail.]”",
      test3Name: "[ADD CLIENT NAME HERE]",
      test3Role: "[ADD CLIENT BUSINESS/ROLE HERE]",

      // CTA Banner
      ctaTitle: "Have an Idea? Let's Turn It Into Something Extraordinary.",
      btnMsgWhatsApp: "Message on WhatsApp",

      // Contact Section
      contactBadge: "Get In Touch",
      contactHeading: "Let's Create Something Great.",
      contactSubheading: "Reach out directly to discuss your creative brief, commercial campaign, or AI production.",
      operatorBadge: "Studio Director",
      operatorTitle: "AI Video Creator & Content Producer",
      channelWhatsApp: "WhatsApp",
      channelEmail: "Email",
      socialConnect: "Official Social Channels",

      // Form
      formNameLabel: "Your Name",
      formNamePlaceholder: "e.g. Sakhawat Hosain",
      formEmailLabel: "Email Address",
      formEmailPlaceholder: "name@company.com",
      formPhoneLabel: "Phone Number",
      formPhonePlaceholder: "+1 (555) 000-0000",
      formServiceLabel: "Select a Service",
      formServiceDefault: "Select a service...",
      formProjectLabel: "Tell us about your project",
      formProjectPlaceholder: "Describe your concept, deliverables, references, and timeline...",
      formBudgetLabel: "Estimated Budget Range",
      btnSendInquiry: "Send Inquiry",
      sendingStatus: "Sending Inquiry...",
      successToast: "Thank you! Your inquiry has been received. We will respond promptly.",
      validationToast: "Please fill in all required fields accurately before submitting.",

      // Footer
      footerTagline: "Your Ideas, Powered by AI. Ultra-luxury cinematic production studio.",
      footerQuickLinks: "Quick Navigation",
      footerContactInfo: "Connect",
      copyright: "© 2026 SHAKIB AI STUDIO — All rights reserved.",
      devPrefix: "Crafted with precision by",
      devRole: "Web Developer",

      // Modal
      modalTitle: "Project Blueprint & Specifications",
      modalClose: "Close"
    }
  };

  /* ==========================================================================
     2. STATE & LANGUAGE INITIALIZATION
     ========================================================================== */
  const savedLang = localStorage.getItem('shakib_ai_lang');
  let currentLang = savedLang === 'en' ? 'en' : 'bn'; // Default: বাংলা

  const applyLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('shakib_ai_lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.body.setAttribute('data-lang', lang);

    // Update active button indicators
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang-choice') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const dict = translations[lang];
    if (!dict) return;

    // Update SEO & Document Title
    document.title = dict.seoTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict.seoDesc);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', dict.seoTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', dict.seoDesc);

    // Replace all elements with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Replace all elements with data-i18n-html (if rich formatting needed)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Replace placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });
  };

  // Wire up all language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const chosenLang = btn.getAttribute('data-lang-choice');
      if (chosenLang && chosenLang !== currentLang) {
        applyLanguage(chosenLang);
        showToast(chosenLang === 'bn' ? "ভাষা পরিবর্তন: বাংলা" : "Language set to English");
      }
    });
  });

  // Initial language application
  applyLanguage(currentLang);

  /* ==========================================================================
     3. LOADING SCREEN DISSOLVE
     ========================================================================== */
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
          loadingScreen.remove();
        }, 800);
      }, 350);
    });
    // Fallback if load already fired
    setTimeout(() => {
      if (loadingScreen && !loadingScreen.classList.contains('fade-out')) {
        loadingScreen.classList.add('fade-out');
      }
    }, 1800);
  }

  /* ==========================================================================
     4. STICKY HEADER & SCROLL BEHAVIOR
     ========================================================================== */
  const siteHeader = document.querySelector('.site-header');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if (siteHeader) {
      if (scrollPos > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollPos > 450) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================================================
     5. MOBILE MENU INTERACTION
     ========================================================================== */
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileDrawer) {
    const closeMobileDrawer = () => {
      mobileDrawer.classList.remove('open');
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileDrawer.setAttribute('aria-hidden', String(!isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMobileDrawer);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 820) closeMobileDrawer();
    });
  }

  /* ==========================================================================
     6. ACTIVE NAVIGATION LINK HIGHLIGHTING
     ========================================================================== */
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.site-header .nav-link');

  const highlightNavOnScroll = () => {
    const scrollY = window.scrollY + 200;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        desktopNavLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  /* ==========================================================================
     7. PORTFOLIO FILTERING
     ========================================================================== */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  /* ==========================================================================
     8. INTERACTIVE PROJECT / BLUEPRINT MODAL
     ========================================================================== */
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.querySelector('.modal-close-btn');
  const modalBody = document.querySelector('.modal-content-area');

  const openModal = (title, metaSpecs, purpose, description) => {
    if (!modal) return;
    modalBody.innerHTML = `
      <div style="margin-bottom: 1.25rem;">
        <span class="spec-chip highlight" style="margin-bottom: 0.75rem; display: inline-block;">${purpose || 'Studio Asset Blueprint'}</span>
        <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: #fff;">${title}</h3>
        <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">${description || 'Detailed production specifications and container blueprints for future asset deployment.'}</p>
      </div>
      <div style="background: rgba(0,0,0,0.4); border: 1px dashed var(--metallic-border-bright); border-radius: var(--radius-md); padding: 1.25rem; margin: 1rem 0;">
        <div style="font-size: 0.8rem; font-weight: 700; color: var(--electric-blue); text-transform: uppercase; margin-bottom: 0.4rem;">Media Blueprint Specifications</div>
        <div style="font-family: var(--font-en-display); font-size: 0.88rem; color: #cbd5e1; line-height: 1.6;">${metaSpecs}</div>
      </div>
      <div style="display: flex; gap: 0.75rem; margin-top: 1.5rem;">
        <a href="#contact" class="btn btn-primary" onclick="closeModalDirect();">${currentLang === 'bn' ? 'এই ধরনের প্রজেক্ট শুরু করুন' : 'Commission This Project'}</a>
        <button class="btn btn-secondary modal-close-trigger">${currentLang === 'bn' ? 'বন্ধ করুন' : 'Close'}</button>
      </div>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    const triggerBtn = modalBody.querySelector('.modal-close-trigger');
    if (triggerBtn) triggerBtn.addEventListener('click', closeModalDirect);
  };

  const closeModalDirect = () => {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  window.closeModalDirect = closeModalDirect;

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModalDirect);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModalDirect();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModalDirect();
  });

  // Attach modal trigger to portfolio and placeholder frames
  document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.portfolio-card-title')?.textContent || 'Selected Work Showcase';
      const cat = card.querySelector('.portfolio-category-tag')?.textContent || 'Production';
      const specs = card.querySelector('.placeholder-specs')?.textContent || '1920×1080px • 16:9 • WebP / AVIF (Image) / MP4 (Video)';
      openModal(title, specs, `Category: ${cat}`, 'This project placeholder is configured for cinematic video playback or ultra-high-resolution stills.');
    });
  });

  const featuredBtn = document.getElementById('featured-modal-trigger');
  if (featuredBtn) {
    featuredBtn.addEventListener('click', () => {
      const isBn = currentLang === 'bn';
      openModal(
        isBn ? 'একটি আইডিয়া থেকে অসাধারণ ভিজ্যুয়াল — স্পটলাইট ফিল্ম' : 'From Idea to Impact — Spotlight Film',
        '1920×1080px • 16:9 • MP4 / WebM • 60fps • 4K Master',
        isBn ? 'সিনেমাটিক ফিচার্ড ফিল্ম' : 'Cinematic Spotlight Showcase',
        isBn ? 'এই স্পটলাইট ফিল্মটি সাখাওয়াত হোসাইন শাকিব-এর এন্ড-টু-এন্ড এআই ডিরেকশনের একটি অনন্য নিদর্শন।' : 'This spotlight film demonstrates SAKHAWAT HOSAIN SHAKIB\'s complete end-to-end generative AI production pipeline.'
      );
    });
  }

  /* ==========================================================================
     9. CONTACT FORM INTERACTIVE VALIDATION & FEEDBACK
     ========================================================================== */
  const contactForm = document.getElementById('studio-contact-form');
  const formSubmitBtn = document.getElementById('form-submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('user_name');
      const emailInput = document.getElementById('user_email');
      const phoneInput = document.getElementById('user_phone');
      const serviceInput = document.getElementById('user_service');
      const messageInput = document.getElementById('user_message');

      let isValid = true;

      // Validation
      [nameInput, emailInput, messageInput].forEach(field => {
        if (!field.value.trim()) {
          field.style.borderColor = '#f87171';
          isValid = false;
        } else {
          field.style.borderColor = '';
        }
      });

      // Simple email check
      if (emailInput.value && !/\S+@\S+\.\S+/.test(emailInput.value)) {
        emailInput.style.borderColor = '#f87171';
        isValid = false;
      }

      if (!isValid) {
        showToast(translations[currentLang].validationToast, 'error');
        return;
      }

      // Visual submission state
      if (formSubmitBtn) {
        formSubmitBtn.disabled = true;
        formSubmitBtn.textContent = translations[currentLang].sendingStatus;
      }

      setTimeout(() => {
        contactForm.reset();
        if (formSubmitBtn) {
          formSubmitBtn.disabled = false;
          formSubmitBtn.textContent = translations[currentLang].btnSendInquiry;
        }
        showToast(translations[currentLang].successToast, 'success');
      }, 1000);
    });
  }

  /* ==========================================================================
     10. TOAST NOTIFICATION UTILITY
     ========================================================================== */
  function showToast(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 400);
    }, 4200);
  }

  window.showToast = showToast;

  /* ==========================================================================
     11. CINEMATIC AMBIENT PARTICLES (Vanilla Canvas Mesh)
     ========================================================================== */
  const canvas = document.getElementById('ambient-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let particles = [];
    const particleCount = Math.min(Math.floor((width * height) / 20000), 55);

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 1.5 + 0.8;
        this.color = Math.random() > 0.4 ? 'rgba(56, 189, 248,' : 'rgba(168, 85, 247,';
        this.alpha = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color} ${this.alpha})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function renderCanvas() {
      ctx.clearRect(0, 0, width, height);

      // Connect nearby particles with subtle light threads
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(renderCanvas);
    }

    renderCanvas();

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, { passive: true });
  }

});
