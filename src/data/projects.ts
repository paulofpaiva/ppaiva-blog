export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
}

export const projects: Project[] = [
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
    technologies: ["React.js", ".NET", "PostgreSQL"]
  },
  {
    id: "2", 
    title: "AI-powered clinical assistant",
    description: "An AI-powered clinical assistant designed to help medical professionals generate patient evolution summaries and receive intelligent diagnostic insights, streamlining decision-making, enhancing accuracy, and improving overall efficiency in clinical workflows.", 
    images: [
      "/projects/ai-powered-clinical-assistant/1.png",
      "/projects/ai-powered-clinical-assistant/2.png",
    ],
    technologies: ["AI", "React.js", ".NET", "Mistral", "PostgreSQL"]
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
    technologies: ["ASP.NET Core", "Razor Views", "MVC", "JavaScript", "PL/SQL"]
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
    technologies: ["React.js", ".NET", "Swagger", "PL/SQL"]
  },
  {
    id: "5", 
    title: "Beneficiary Portal Plataform",
    description: "A modern and secure web platform built for allowing patients to manage personal information, medical history, invoices, and appointments, enhancing patient autonomy and streamlining administrative workflows.",
    images: [
      "/projects/portal-beneficiary/1.jpeg",
      "/projects/portal-beneficiary/2.png",
    ],
    technologies: ["ASP.NET Core", "Razor Views", "MVC", "JavaScript", "PL/SQL"]
  },
  
];

