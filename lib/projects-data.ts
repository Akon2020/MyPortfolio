export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  categories: string[];
  problem: string;
  objective: string;
  role: string;
  techStack: string[];
  screenshots: string[];
  results: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "security-management",
    title: "Système de Gestion de la Sécurité Publique",
    description:
      "Web & Mobile app for real-time incident reporting and coordination using AI-powered insights and geolocation tracking.",
    image: "/security-management-dashboard.png",
    tags: [
      "React",
      "Next.js",
      "React Native",
      "Node.js",
      "Firebase",
      "Mapbox",
      "AI",
    ],
    categories: ["Web", "Mobile", "AI", "Security"],
    problem:
      "Public safety agencies struggled with delayed incident reporting and poor coordination between field officers and command centers, leading to slower response times and inefficient resource allocation.",
    objective:
      "Create a unified platform that enables real-time incident reporting, AI-powered threat analysis, and seamless coordination between citizens, field officers, and emergency response teams.",
    role: "Fullstack Developer - Designed and implemented both web dashboard and mobile applications, integrated AI analytics, and built real-time communication infrastructure.",
    techStack: [
      "React & Next.js for web dashboard",
      "React Native for mobile apps",
      "Node.js & Express for backend API",
      "Firebase for real-time database",
      "Mapbox for geolocation",
      "TensorFlow for AI insights",
      "WebSockets for live updates",
    ],
    screenshots: [
      "/security-management-dashboard.png",
      "/security-management-dashboard.png",
      "/security-management-dashboard.png",
    ],
    results: [
      "Reduced average incident response time by 40%",
      "Processed over 5,000 incident reports in first 3 months",
      "Improved coordination between 200+ field officers",
      "AI system achieved 85% accuracy in threat classification",
    ],
    liveUrl: "https://projet-tutore-2024-ucb.vercel.app",
    githubUrl: "https://github.com/Akon2020/securityApp",
  },
  {
    id: "agribot",
    title: "AgriBot",
    description:
      "Mobile AI tool for plant disease detection helping farmers protect crops efficiently using computer vision.",
    image: "/agriculture-mobile-app.jpg",
    tags: ["React Native", "Firebase", "TensorFlow Lite", "Computer Vision"],
    categories: ["Mobile", "AI"],
    problem:
      "Farmers in rural areas lack access to agricultural experts and struggle to identify plant diseases early, leading to significant crop losses and reduced yields.",
    objective:
      "Develop a mobile application that uses AI-powered computer vision to instantly identify plant diseases from photos, provide treatment recommendations, and connect farmers with agricultural experts.",
    role: "Mobile Developer & AI Integration Specialist - Built the React Native app, trained and optimized the disease detection model, and implemented offline functionality for rural areas.",
    techStack: [
      "React Native with Expo",
      "TensorFlow Lite for on-device AI",
      "Firebase for backend services",
      "Cloud Vision API for image processing",
      "SQLite for offline data storage",
    ],
    screenshots: [
      "/agriculture-mobile-app.jpg",
      "/agribot-scanning.jpg",
      "/agribot-results.jpg",
    ],
    results: [
      "Helped 2,000+ farmers across 5 regions",
      "Achieved 92% accuracy in disease detection",
      "Reduced crop losses by average of 30%",
      "Works offline in areas with limited connectivity",
    ],
    githubUrl: "https://github.com/Akon2020/agribot",
  },
  {
    id: "mentorship-platform",
    title: "Mentorship Platform",
    description:
      "Web & mobile solution connecting mentors and learners across domains with real-time communication.",
    image: "/mentorship-platform-interface.jpg",
    tags: ["React", "FastAPI", "Firestore", "WebRTC"],
    categories: ["Web", "Mobile"],
    problem:
      "Aspiring professionals struggle to find quality mentors in their field, while experienced professionals lack structured platforms to share their knowledge and give back to the community.",
    objective:
      "Build a comprehensive mentorship platform that matches mentors with mentees based on skills and goals, facilitates scheduling, and provides tools for effective knowledge transfer.",
    role: "Fullstack Developer - Architected the matching algorithm, built the web and mobile interfaces, implemented video calling functionality, and created the scheduling system.",
    techStack: [
      "React for web frontend",
      "React Native for mobile app",
      "FastAPI (Python) for backend",
      "Firestore for database",
      "WebRTC for video calls",
      "Stripe for payments",
    ],
    screenshots: [
      "/mentorship-platform-interface.jpg",
      "/mentorship-matching.jpg",
      "/mentorship-video-call.jpg",
    ],
    results: [
      "Connected 500+ mentor-mentee pairs",
      "Facilitated 3,000+ mentorship sessions",
      "95% user satisfaction rate",
      "Average session rating of 4.8/5",
    ],
    liveUrl: "https://mentorship-demo.example.com",
    githubUrl: "https://github.com/Akon2020/mentorship-platform",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projectsData.find((project) => project.id === id);
}

export function getNextProject(currentId: string): Project | undefined {
  const currentIndex = projectsData.findIndex((p) => p.id === currentId);
  if (currentIndex === -1 || currentIndex === projectsData.length - 1)
    return projectsData[0];
  return projectsData[currentIndex + 1];
}

export function getPreviousProject(currentId: string): Project | undefined {
  const currentIndex = projectsData.findIndex((p) => p.id === currentId);
  if (currentIndex === -1 || currentIndex === 0)
    return projectsData[projectsData.length - 1];
  return projectsData[currentIndex - 1];
}
