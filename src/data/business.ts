export interface ServiceItem {
  id: string;
  category: 'management' | 'excavation';
  code: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  technicalSpecs: string[];
}

export interface ProjectProfile {
  id: string;
  code: string;
  title: string;
  category: string;
  location: string;
  scopeSummary: string;
  technicalChallenges: string[];
  executionKeypoints: string[];
  image: string;
}

export interface ProcessStep {
  step: string;
  code: string;
  phase: string;
  title: string;
  description: string;
  criticalChecks: string[];
  durationTypical: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'excavation' | 'management' | 'site-logistics';
}

export const BUSINESS_INFO = {
  name: 'Rizzi Kurt',
  legalCategory: 'Construction Management / Excavation',
  address: {
    street: 'Rainweg 8',
    postalCode: '3645',
    city: 'Gwatt',
    canton: 'Bern (BE)',
    country: 'Switzerland',
    fullFormatted: 'Rainweg 8, 3645 Gwatt, Switzerland'
  },
  phone: '033 336 21 25',
  phoneClean: '0333362125',
  phoneHref: 'tel:0333362125',
  internationalPhone: '+41 33 336 21 25',
  coordinates: {
    lat: '46°43\'17" N',
    lng: '7°37\'57" E',
    decimal: '46.7214, 7.6324',
    altitude: 'EL ~560m ASL',
    region: 'Lake Thun / Bernese Oberland'
  },
  workingHours: [
    { days: 'Monday – Friday', hours: '07:00 – 17:30' },
    { days: 'Saturday', hours: 'By site schedule / prior agreement' },
    { days: 'Sunday', hours: 'Closed' }
  ],
  serviceArea: 'Gwatt, Thun, Spiez, and surrounding Bernese Oberland communities',
  tagline: 'Precision excavation and structured construction management for Swiss building standards.'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'foundation-excavation',
    category: 'excavation',
    code: 'EX-01',
    title: 'Building Pit & Foundation Excavation',
    shortDesc: 'Precise pit excavation adhering to strict geometric profiles, depth tolerances, and safety batters.',
    fullDesc: 'Executing accurate earth cuts for residential basements, commercial foundations, and underground structures. We calculate exact grade cuts, establish subgrade stability, and ensure clean excavation boundaries aligned with structural engineering plans.',
    deliverables: [
      'Excavation of building pits to exact laser-guided levels',
      'Safety slope battering and temporary embankment stabilization',
      'Controlled spoil removal and separation of topsoil from subsoil',
      'Clean sub-base preparation for mud slab and foundation footing'
    ],
    technicalSpecs: ['Laser-controlled depth tolerance', 'Slope angle stabilization per Swiss SIA standards', 'Subgrade bearing evaluation']
  },
  {
    id: 'site-levelling-grading',
    category: 'excavation',
    code: 'EX-02',
    title: 'Site Levelling & Terrain Reshaping',
    shortDesc: 'Topographic contouring, cut-and-fill balancing, and sub-base grading for construction readiness.',
    fullDesc: 'Transforming uneven or sloping ground into engineered build platforms. We balance earth volumes to minimize haulage costs, establish positive surface drainage away from future foundations, and compact subgrades to required load-bearing capacities.',
    deliverables: [
      'Cut-and-fill volume balancing',
      'Terracing and structural slope re-profiling',
      'Laser-guided uniform grading for driveways and slabs',
      'Erosion prevention and surface water drainage management'
    ],
    technicalSpecs: ['Digital terrain profiling', 'Optimum soil moisture compaction', 'Sub-base slope grading for runoff']
  },
  {
    id: 'trenching-utilities',
    category: 'excavation',
    code: 'EX-03',
    title: 'Trenching & Ground Utilities',
    shortDesc: 'Precision trench excavation for municipal water, electrical conduits, sewer lines, and district services.',
    fullDesc: 'Excavation of linear utility corridors with precise gradient control for gravity-fed drainage and protected conduit runs. We account for existing subsurface infrastructure and provide proper bedding and backfilling.',
    deliverables: [
      'Trench excavation for sanitary, stormwater, and potable water',
      'Conduit routes for electricity, telecom, and geothermal hookups',
      'Pipe bedding placement and laser-verified fall gradients',
      'Layered compaction and protective warning tape integration'
    ],
    technicalSpecs: ['Continuous laser grade alignment', 'Trench box / shoring where necessary', 'Granular pipe bedding material']
  },
  {
    id: 'retaining-earthworks',
    category: 'excavation',
    code: 'EX-04',
    title: 'Retaining Prep & Slope Earthworks',
    shortDesc: 'Ground preparation for rock cribbing, gabions, and reinforced concrete retaining structures.',
    fullDesc: 'The undulating topography around Gwatt and the Lake Thun area often requires secure retention earthworks. We execute preparatory bench cuts, drainage aggregate installation, and rear backfill compaction.',
    deliverables: [
      'Bench cutting for gravity and cantilever retaining walls',
      'Geotextile and coarse drainage gravel layer installation',
      'Heavy rock placement prep and backfill consolidation',
      'Long-term slope stabilization earthworks'
    ],
    technicalSpecs: ['Hydrostatic relief trenching', 'Geotextile separator barrier', 'Vibratory compaction testing']
  },
  {
    id: 'site-supervision-coordination',
    category: 'management',
    code: 'CM-01',
    title: 'Construction Management & Site Oversight',
    shortDesc: 'On-site technical coordination, schedule sequencing, and multi-trade synchronization.',
    fullDesc: 'Providing clear leadership on active job sites. We orchestrate trade handoffs between earthworks, concrete masons, utility contractors, and structural crews to maintain milestone schedules and eliminate costly site delays.',
    deliverables: [
      'Daily site presence and trade activity coordination',
      'Milestone scheduling, critical path tracking, and weekly status reviews',
      'Subcontractor alignment on site boundaries, access, and laydown areas',
      'Site safety protocols and municipal noise / access compliance'
    ],
    technicalSpecs: ['Critical path Gantt sequencing', 'Interface management between civil and structural', 'Weekly technical coordination logs']
  },
  {
    id: 'quality-cost-control',
    category: 'management',
    code: 'CM-02',
    title: 'Site Logistics & Execution Control',
    shortDesc: 'Meticulous verification of materials, geometric tolerances, site deliveries, and cost control.',
    fullDesc: 'Protecting the property owner and developer interests through hands-on quality verification. We inspect completed stages prior to follow-up trades, verify bill-of-quantities measurements against actual site execution, and solve field discrepancies rapidly.',
    deliverables: [
      'Verification of ground levels, axis lines, and structural offsets',
      'Material delivery inspection and site storage management',
      'Bill-of-quantities measurement validation for earth and concrete works',
      'Defect identification and proactive rectification coordination'
    ],
    technicalSpecs: ['Geometric tolerance checks', 'Measurement reconciliation', 'Discrepancy logs and resolution tracking']
  }
];

export const WORK_PROFILES: ProjectProfile[] = [
  {
    id: 'project-residential-pit',
    code: 'PRJ-3645-01',
    title: 'Residential Foundation Excavation & Subgrade Prep',
    category: 'Excavation & Earthmoving',
    location: 'Gwatt District, Switzerland',
    scopeSummary: 'Execution of complete building pit excavation for a multi-story residential building, including slope battering and drainage routing.',
    technicalChallenges: [
      'Variable clay and gravel subsoil layers requiring dynamic slope adjustments',
      'Tight perimeter boundary lines adjacent to neighboring plots',
      'Strict municipal transport schedule for excavated material'
    ],
    executionKeypoints: [
      'Extracted over 850 m³ of bulk material with segregated topsoil recovery',
      'Installed subsurface perimeter drainage trenches with geotextile filtration',
      'Laser-graded pit floor prepared for immediate mud slab pour'
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'project-slope-terracing',
    code: 'PRJ-3645-02',
    title: 'Hillside Earthworks & Retaining Preparation',
    category: 'Terrain Engineering & Excavation',
    location: 'Thun / Gwatt Region, Switzerland',
    scopeSummary: 'Structural terracing on an inclined hillside plot to create a multi-tiered access and building platform.',
    technicalChallenges: [
      'Steep gradient requiring staged bench cutting to prevent slope slippage',
      'Water ingress from upper slope aquifer during wet spring season',
      'Restricted single-lane access track for heavy vehicle movement'
    ],
    executionKeypoints: [
      'Staged benching with immediate drainage rock placement along the rear cut',
      'Excavation for reinforced concrete retaining wall footings',
      'Integrated heavy rip-rap base consolidation'
    ],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'project-site-management',
    code: 'PRJ-3645-03',
    title: 'Civil Groundworks & Multi-Trade Construction Coordination',
    category: 'Construction Management',
    location: 'Bernese Oberland Vicinity',
    scopeSummary: 'End-to-end site supervision from initial ground clearing through structural shell completion.',
    technicalChallenges: [
      'Simultaneous presence of utility contractors, earthmoving plant, and concrete forming',
      'Strict local noise window and environmental soil disposal protocols',
      'Compressed schedule prior to winter frost window'
    ],
    executionKeypoints: [
      'Coordinated sequential crane placement and concrete pump access zones',
      'Conducted joint daily standups with trade foremen to deconflict access paths',
      'Zero trade interface delays throughout the 14-week core civil phase'
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
  }
];

export const PROCESS_PHASES: ProcessStep[] = [
  {
    step: '01',
    code: 'PH-SURV',
    phase: 'Investigation & Site Analysis',
    title: 'Site Inspection & Technical Boundary Check',
    description: 'We inspect the site in person at Rainweg 8 or the project location. We review surveying pegs, evaluate subsoil indicators, inspect access roads for machinery ingress, and confirm municipal boundary conditions.',
    criticalChecks: ['Peg and boundary mark verification', 'Machinery route clearance & axle weight review', 'Initial soil condition assessment'],
    durationTypical: 'Preliminary 1–3 business days'
  },
  {
    step: '02',
    code: 'PH-UTIL',
    phase: 'Coordination & Utility Clearance',
    title: 'Utility Inquiries & Excavation Planning',
    description: 'Before breaking ground, we cross-reference municipal utility line plans (gas, electrical, water, telecom) to avoid costly strikes. We determine precise cut-fill quantities and disposal routes.',
    criticalChecks: ['Line detection and utility authority clearances', 'Disposal categorization according to Swiss soil protection guidelines', 'Site perimeter fencing & safety plan'],
    durationTypical: 'Prior to site mobilization'
  },
  {
    step: '03',
    code: 'PH-EXEC',
    phase: 'Precision Execution',
    title: 'Earthmoving, Trenching & Pit Excavation',
    description: 'Our machinery takes position to execute laser-guided earth removal according to civil engineering drawings. Slopes are battered to standard angles and spoil is segregated systematically.',
    criticalChecks: ['Real-time laser level verification', 'Slope angle integrity checks', 'Continuous subgrade bearing capacity monitoring'],
    durationTypical: 'Depending on project volume'
  },
  {
    step: '04',
    code: 'PH-MGMT',
    phase: 'Trade Interface & Management',
    title: 'Subgrade Stabilization & Trade Handover',
    description: 'For construction management scopes, we oversee the seamless handover to foundation builders, concrete masons, or utility pipe layers. Formal level sign-off ensures zero discrepancies.',
    criticalChecks: ['Official subgrade level sign-off', 'Installation of perimeter drainage gravel', 'Coordination of subsequent concrete pour'],
    durationTypical: 'Direct continuity with subsequent trade'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'How do you coordinate with architects and structural engineers?',
    answer: 'We work directly from approved engineering blueprints and CAD/site drawings. Prior to excavation or on-site management, we verify key datum elevations, building axes, and soil assumptions with the planner, ensuring the physical site work matches structural calculations without ambiguities.',
    category: 'management'
  },
  {
    question: 'What information is needed to estimate an excavation project in Gwatt or the Thun area?',
    answer: 'A site plan with contour lines, architectural floor elevations, a geotechnical soil report (if available), and the location of existing utility lines provide the most accurate basis. For smaller jobs or initial discussions, an on-site walkthrough is typically the fastest way to assess terrain, slope, and machinery access.',
    category: 'excavation'
  },
  {
    question: 'How are soil disposal and environmental regulations handled?',
    answer: 'In Switzerland, excavated soil must be handled responsibly under federal and cantonal environmental directives. We separate organic topsoil from mineral subsoil so clean topsoil can be reused on site or repurposed, while inert excavated material is directed to certified local disposal sites.',
    category: 'site-logistics'
  },
  {
    question: 'How do you handle difficult slope terrain in the Bernese Oberland?',
    answer: 'Sloping ground requires disciplined benching, temporary slope stabilization, and immediate rainwater diversion. We sequence earthcuts in stages so ground is not left exposed to erosion, and we prepare stable bases for retaining walls or rip-rap reinforcements.',
    category: 'excavation'
  },
  {
    question: 'What is the role of Construction Management (CM) on a local site?',
    answer: 'Construction management bridges the gap between the property owner, planners, and executing trades. We maintain daily on-site discipline, track timelines against critical milestones, verify that contractor work adheres to dimensions and standards, and resolve technical challenges on the spot.',
    category: 'management'
  },
  {
    question: 'How quickly can we arrange an initial site discussion?',
    answer: 'Clients can reach us directly by phone at 033 336 21 25 or through the technical inquiry form. We can review site requirements promptly to discuss timeline viability and operational constraints.',
    category: 'general'
  }
];
