export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  hasCode?: boolean;
  codeUrl?: string;
  hasDemo?: boolean;
  demoUrl?: string;
  hasPhotos?: boolean;
  isClientWork?: boolean;
}

export const projects: Project[] = [
  {
    id: "0",
    title: ".NET AWS Image Processor API", 
    description: "Minimal .NET 9 REST API to upload, list, and download images from an S3 bucket, and publish file metadata to AWS SQS for asynchronous processing.",
    images: [
      "/projects/dotnet-aws-image-processor/aws_services_dotnet.png"
    ],
    technologies: [".NET 9", "AWS S3", "AWS SQS", "Docker"],
    hasCode: true,
    codeUrl: "https://github.com/paulofpaiva/api-image-processor-aws",
    hasDemo: false,
    hasPhotos: true,
    isClientWork: false
  },
  {
    id: "9",
    title: "Strak Social",
    description: "A social media platform where users can connect, share posts, interact with content, and build their online community.",
    images: [
      "/projects/strak-social/strak_social.png",
      "/projects/strak-social/strak_social_6.png",
      "/projects/strak-social/strak_social_2.png",
      "/projects/strak-social/strak_social_3.png",
      "/projects/strak-social/strak_social_4.png",
      "/projects/strak-social/strak_social_5.png"
    ],
    technologies: ["React", "Node.js", "Express", "TypeScript", "PostgreSQL", "Firebase"],
    hasDemo: true,
    demoUrl: "https://straksocial.up.railway.app/",
    hasPhotos: true,
    isClientWork: false
  },
  {
    id: "19",
    title: "linkvault",
    description: "linkvault is a collaborative link manager that lets you save and organize links, add notes, share public collections, and explore what other users are curating.",
    images: [
      "/projects/linkvault/0.png",
      "/projects/linkvault/1.png",
      "/projects/linkvault/2.png",
      "/projects/linkvault/3.png",
      "/projects/linkvault/4.png",
      "/projects/linkvault/5.png",
      "/projects/linkvault/6.png",
      "/projects/linkvault/7.png",
    ],
    technologies: ["React", "Node.js", "Express", "TypeScript", "PostgreSQL"],
    hasDemo: true,
    demoUrl: "https://linkvault.up.railway.app/",
    hasPhotos: true,
    isClientWork: false
  },
  {
    id: "8",
    title: "REST API for Time-Series Data - Weatherford International Inc",
    description: ".NET REST API with CQRS for time-series data, enabling efficient ingestion and querying. Contributed as part of the engineering team that developed this solution for Weatherford International.",
    images: [
      "/projects/weatherford-rest-api/weatherford_logo.jpeg"
    ],
    technologies: [".NET", "AWS", "SQS", "Kafka", "PostgreSQL", "QuestDB", "Docker"],
    hasCode: false,
    hasDemo: false,
    hasPhotos: true,
    isClientWork: true
  },
  {
    id: "10",
    title: "Everybody's Everything",
    description: "An anonymous posting application where anyone can share anything - texts, drawings, or a combination of both.",
    images: [
      "/projects/everybodys-everything/1.png",
      "/projects/everybodys-everything/2.png",
      "/projects/everybodys-everything/3.png",
    ],
    technologies: ["Next.js 16", "React", "TypeScript", "Tailwind CSS", "Drizzle ORM", "PostgreSQL"],
    hasDemo: true,
    demoUrl: "https://everybodyseverything.up.railway.app/",
    hasPhotos: true,
    isClientWork: false
  },
  {
    id: "1",
    title: "Node + Express BetterNotes API",
    description: "A RESTful API built with Node.js + Express and PostgreSQL for managing rich notes with full CRUD operations, authentication, and advanced search capabilities.",
    images: [
      "/projects/better-notes/node_express_postgres_drizzle.png"
    ],
    technologies: ["Node.js", "Express", "PostgreSQL",  "TypeScript"],
    hasCode: true,
    codeUrl: "https://github.com/paulofpaiva/better-notes-api",
    hasDemo: false,
    hasPhotos: true,
    isClientWork: false
  },
  {
    id: "3",
    title: "ABA Therapy Management",
    description: "A complete management system for ABA therapy clinics, including patient and caregiver registration, therapeutic programs, stimuli, protocols, and progress analysis with detailed graphical indicators.",
    images: [
      "/projects/carewave/1.jpeg",
      "/projects/carewave/2.jpeg",
      "/projects/carewave/3.jpeg",
      "/projects/carewave/4.png",
      "/projects/carewave/5.png",
      "/projects/carewave/6.png"
    ],
    technologies: ["React", ".NET", "PostgreSQL"],
    hasCode: false,
    hasDemo: false,
    hasPhotos: true,
    isClientWork: true,
  },
  {
    id: "4", 
    title: "AI-Powered clinical assistant",
    description: "An AI-powered clinical assistant designed to help medical professionals generate patient evolution summaries and receive intelligent diagnostic insights, streamlining decision-making, enhancing accuracy, and improving overall efficiency in clinical workflows.", 
    images: [
      "/projects/ai-powered-clinical-assistant/1.png",
      "/projects/ai-powered-clinical-assistant/2.png",
    ],
    technologies: ["AI", "React", ".NET", "Mistral", "PostgreSQL"],
    hasCode: false,
    hasDemo: false,
    hasPhotos: true,
    isClientWork: true
  },
  {
    id: "5", 
    title: "Medical Portal Plataform",
    description: "A web platform developed to help medical professionals manage their full schedules and handle appointment and service requests efficiently, improving daily operations and optimizing hospital workflows.",
    images: [
      "/projects/medical-portal/1.jpeg",
      "/projects/medical-portal/2.png",
      "/projects/medical-portal/3.png",
      "/projects/medical-portal/4.png"
    ],
    technologies: ["ASP.NET Core", "MVC", "JavaScript", "PL/SQL"],
    hasCode: false,
    hasDemo: false,
    hasPhotos: true,
    isClientWork: true
  },
  {
    id: "6", 
    title: "Hospital Check-in Kiosk",
    description: "An intuitive self-service kiosk system for hospitals that streamlines patient check-ins, appointment scheduling, and navigation within hospital facilities.",
    images: [
      "/projects/hospital-kiosk/totem_intro_1.png",
      "/projects/hospital-kiosk/1.jpeg",
      "/projects/hospital-kiosk/2.jpeg",
      "/projects/hospital-kiosk/3.jpeg"
    ],
    technologies: ["React", ".NET", "C#", "PL/SQL"],
    hasCode: false,
    hasDemo: false,
    hasPhotos: true,
    isClientWork: true
  },
  {
    id: "7", 
    title: "Beneficiary Portal Plataform",
    description: "A modern and secure web platform built for allowing patients to manage personal information, medical history, invoices, and appointments, enhancing patient autonomy and streamlining administrative workflows.",
    images: [
      "/projects/portal-beneficiary/1.jpeg",
      "/projects/portal-beneficiary/2.png",
    ],
    technologies: ["ASP.NET Core", "MVC", "JavaScript", "PL/SQL"],
    hasCode: false,
    hasDemo: false,
    hasPhotos: true,
    isClientWork: true
  },
  
];

