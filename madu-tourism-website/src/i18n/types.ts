export interface TranslationResource {
  common: {
    brandName: string;
    brandTagline: string;
    topBarSubtitle: string;
    topBarCurrency: string;
    phone: string;
    email: string;
    planYourTrip: string;
    viewPackages: string;
    exploreDetails: string;
    exploreAllPackages: string;
    backToHome: string;
    reviewsCount: string;
    fromPrice: string;
    perGuest: string;
    perPerson: string;
    loading: string;
    errorTitle: string;
    reloadPage: string;
    menuOpen: string;
    menuClose: string;
    selectLanguage: string;
    languageEn: string;
    languageRu: string;
    nav: {
      home: string;
      about: string;
      destinations: string;
      packages: string;
      gallery: string;
      contact: string;
    };
    footer: {
      description: string;
      exploreHeading: string;
      territoriesHeading: string;
      conciergeHeading: string;
      address: string;
      onlineBadge: string;
      copyright: string;
      privacyPolicy: string;
      termsOfService: string;
      responsibleTravel: string;
    };
    notFound: {
      eyebrow: string;
      title: string;
      description: string;
      button: string;
    };
  };
  home: {
    hero: {
      eyebrow: string;
      title: string;
      highlight: string;
      description: string;
      ctaPlan: string;
      ctaExplore: string;
      trustDmc: string;
      trustPace: string;
      trustPrivate: string;
    };
    about: {
      eyebrow: string;
      title: string;
      description: string;
      quote: string;
      quoteAuthor: string;
    };
    destinations: {
      eyebrow: string;
      title: string;
      subtitle: string;
      viewRegion: string;
    };
    packages: {
      eyebrow: string;
      title: string;
      allPackages: string;
    };
    experiences: {
      eyebrow: string;
      title: string;
    };
    testimonials: {
      eyebrow: string;
      title: string;
    };
    gallery: {
      eyebrow: string;
      title: string;
      cta: string;
    };
    cta: {
      eyebrow: string;
      title: string;
      description: string;
      planTrip: string;
      viewPackages: string;
    };
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    hero: {
      eyebrow: string;
      title: string;
      highlight: string;
      description: string;
    };
    story: {
      eyebrow: string;
      title: string;
      paragraphs: string[];
      quote: string;
      quoteAttribution: string;
    };
    stats: {
      eyebrow: string;
      title: string;
      travelersLabel: string;
      packagesLabel: string;
      excellenceLabel: string;
      travelersAria: string;
      packagesAria: string;
      excellenceAria: string;
    };
    mission: {
      eyebrow: string;
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    whyUs: {
      eyebrow: string;
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    expertise: {
      eyebrow: string;
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    values: {
      eyebrow: string;
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    cta: {
      eyebrow: string;
      title: string;
      planTrip: string;
      viewPackages: string;
    };
  };
  destinations: {
    metaTitle: string;
    metaDescription: string;
    hero: {
      eyebrow: string;
      title: string;
      highlight: string;
      description: string;
    };
    intro: string;
    featuredEyebrow: string;
    featuredTitle: string;
    highlightsEyebrow: string;
    highlightsTitle: string;
    planTrip: string;
  };
  tourPackages: {
    metaTitle: string;
    metaDescription: string;
    hero: {
      eyebrow: string;
      title: string;
      highlight: string;
      description: string;
    };
    intro: string;
    sectionEyebrow: string;
    sectionTitle: string;
    bespokeEyebrow: string;
    bespokeTitle: string;
    bespokeDescription: string;
    planTrip: string;
  };
  packageDetail: {
    backToPackages: string;
    durationLabel: string;
    travelStyleLabel: string;
    regionsLabel: string;
    journeyOverview: string;
    dailyProgram: string;
    journeyAtGlance: string;
    signatureExperiences: string;
    inclusionsHeading: string;
    exclusionsHeading: string;
    bookThisJourney: string;
    inquireNow: string;
    speakToSpecialist: string;
    dayPrefix: string;
  };
  gallery: {
    metaTitle: string;
    metaDescription: string;
    hero: {
      eyebrow: string;
      title: string;
      highlight: string;
      description: string;
    };
    empty: string;
    ctaTitle: string;
    planTrip: string;
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    hero: {
      eyebrow: string;
      title: string;
      highlight: string;
      description: string;
    };
    conciergeTitle: string;
    conciergeSubtitle: string;
    directChannels: string;
    officeLocation: string;
    officeAddress: string;
    hoursTitle: string;
    hoursDetail: string;
    formTitle: string;
    formSubtitle: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    countryLabel: string;
    countryPlaceholder: string;
    travelDatesLabel: string;
    travelDatesPlaceholder: string;
    travelersLabel: string;
    travelersPlaceholder: string;
    destinationsLabel: string;
    destinationsPlaceholder: string;
    tourTypeLabel: string;
    tourTypePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submittingButton: string;
    successTitle: string;
    successMessage: string;
    sendAnother: string;
    errors: {
      fullNameRequired: string;
      emailInvalid: string;
      phoneInvalid: string;
      countryRequired: string;
      messageRequired: string;
    };
    whatsappTitle: string;
    whatsappText: string;
    whatsappButton: string;
  };
}
