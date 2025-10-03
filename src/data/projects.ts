export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  hasCode?: boolean;
  codeUrl?: string;
  hasPhotos?: boolean;
}

export const projects: Project[] = [
  {
    id: "0",
    title: ".NET AWS Image Processor API", 
    description: "Minimal .NET 9 REST API to upload, list, and download images from an S3 bucket, and publish file metadata to AWS SQS for asynchronous processing.",
    images: [
      "/projects/dotnet-aws-image-processor/aws-logo-logo.png"
    ],
    technologies: [".NET 9", "AWS S3", "AWS SQS", "Docker"],
    hasCode: true,
    codeUrl: "https://github.com/paulofpaiva/api-image-processor-aws",
    hasPhotos: false
  },
  {
    id: "1",
    title: "ABA Therapy management",
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
    hasPhotos: true
  },
  {
    id: "2", 
    title: "AI-Powered clinical assistant",
    description: "An AI-powered clinical assistant designed to help medical professionals generate patient evolution summaries and receive intelligent diagnostic insights, streamlining decision-making, enhancing accuracy, and improving overall efficiency in clinical workflows.", 
    images: [
      "/projects/ai-powered-clinical-assistant/1.png",
      "/projects/ai-powered-clinical-assistant/2.png",
    ],
    technologies: ["AI", "React", ".NET", "Mistral", "PostgreSQL"],
    hasPhotos: true
  },
  {
    id: "3", 
    title: "Medical Portal Plataform",
    description: "A web platform developed to help medical professionals manage their full schedules and handle appointment and service requests efficiently, improving daily operations and optimizing hospital workflows.",
    images: [
      "/projects/medical-portal/1.jpeg",
      "/projects/medical-portal/2.png",
      "/projects/medical-portal/3.png",
      "/projects/medical-portal/4.png"
    ],
    technologies: ["ASP.NET Core", "MVC", "JavaScript", "PL/SQL"],
    hasPhotos: true
  },
  {
    id: "4", 
    title: "Hospital Check-in Kiosk",
    description: "An intuitive self-service kiosk system for hospitals that streamlines patient check-ins, appointment scheduling, and navigation within hospital facilities.",
    images: [
      "/projects/hospital-kiosk/1.jpeg",
      "/projects/hospital-kiosk/2.jpeg",
      "/projects/hospital-kiosk/3.jpeg"
    ],
    technologies: ["React", ".NET", "C#", "PL/SQL"],
    hasPhotos: true
  },
  {
    id: "5", 
    title: "Beneficiary Portal Plataform",
    description: "A modern and secure web platform built for allowing patients to manage personal information, medical history, invoices, and appointments, enhancing patient autonomy and streamlining administrative workflows.",
    images: [
      "/projects/portal-beneficiary/1.jpeg",
      "/projects/portal-beneficiary/2.png",
    ],
    technologies: ["ASP.NET Core", "MVC", "JavaScript", "PL/SQL"],
    hasPhotos: true
  },
  
];

