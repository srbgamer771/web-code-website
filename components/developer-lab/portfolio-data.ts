export const PORTFOLIO_PROJECTS = [
  {
    id: "loretta",
    title: "Loretta",
    category: "Aplicación web",
    description:
      "Plataforma de gestión para freelancers con organización de proyectos, tareas y estimación de precios.",
    stack: ["Flutter", "Dart", "Firebase", "REST APIs", "MVVM", "SOLID"],
    image: null,
    href: null,
    action: "Caso en preparación",
  },
  {
    id: "fiborti-analytics",
    title: "Fiborti Analytics",
    category: "Sitio web",
    description: "Plataforma de marketing y analítica empresarial con chatbot de IA integrado.",
    stack: ["Flutter Web", "Firebase", "IA"],
    image: "/images/fiborti-preview.png",
    href: "/images/fiborti-preview.png",
    action: "Ver vista previa",
  },
  {
    id: "thodri-gis",
    title: "Thodri Gis",
    category: "Página web",
    description:
      "Sitio de catálogo y ventas para un negocio de aceites y jabones medicinales artesanales.",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    image: "/images/projects/thodri-preview.png",
    href: "https://thodriaceites.vercel.app",
    action: "Visitar sitio",
  },
] as const

export const PORTFOLIO_SKILL_GROUPS = [
  {
    id: "product",
    label: "Producto",
    description: "Definición de valor, experiencia y decisiones centradas en el producto.",
    skills: ["Producto digital", "UX/UI"],
  },
  {
    id: "frontend",
    label: "Frontend",
    description: "Interfaces web claras, mantenibles y preparadas para evolucionar.",
    skills: ["Desarrollo web", "Arquitectura frontend"],
  },
  {
    id: "mobile",
    label: "Mobile",
    description: "Construcción de experiencias móviles y multiplataforma.",
    skills: ["Flutter", "Dart"],
  },
  {
    id: "platform",
    label: "Datos y servicios",
    description: "Servicios conectados para sostener los flujos del producto.",
    skills: ["Firebase", "REST APIs"],
  },
] as const

export const PORTFOLIO_CERTIFICATIONS = [
  {
    id: "snowflake-generative-ai",
    title: "Introduction to Generative AI with Snowflake",
    issuer: "Snowflake",
    completed: "Noviembre 2025",
    area: "IA generativa",
    featured: true,
    credentialUrl: null,
  },
  {
    id: "google-business-intelligence",
    title: "Foundations of Business Intelligence",
    issuer: "Google",
    completed: "Noviembre 2024",
    area: "Business Intelligence",
    featured: true,
    credentialUrl: null,
  },
  {
    id: "cisco-soc",
    title: "Security Operations Center (SOC)",
    issuer: "Cisco Learning and Certifications",
    completed: "Marzo 2024",
    area: "Ciberseguridad",
    featured: true,
    credentialUrl: null,
  },
  {
    id: "sap-professional-fundamentals",
    title: "SAP Professional Fundamentals",
    issuer: "SAP",
    completed: "Noviembre 2023",
    area: "Sistemas empresariales",
    featured: false,
    credentialUrl: null,
  },
  {
    id: "ibm-nosql",
    title: "Introduction to NoSQL Databases",
    issuer: "IBM",
    completed: "Noviembre 2023",
    area: "Bases de datos",
    featured: false,
    credentialUrl: null,
  },
  {
    id: "austral-python-databases",
    title: "Manejo de bases de datos con Python",
    issuer: "Universidad Austral",
    completed: "Abril 2023",
    area: "Python y datos",
    featured: false,
    credentialUrl: null,
  },
  {
    id: "colorado-database-management",
    title: "Database Management Essentials",
    issuer: "University of Colorado System",
    completed: "Mayo 2022",
    area: "Bases de datos",
    featured: false,
    credentialUrl: null,
  },
  {
    id: "ucsd-java-oop",
    title: "Object Oriented Programming in Java",
    issuer: "University of California San Diego",
    completed: "Abril 2022",
    area: "Programación",
    featured: false,
    credentialUrl: null,
  },
  {
    id: "meta-social-media-management",
    title: "Social Media Management",
    issuer: "Meta",
    completed: "Abril 2022",
    area: "Marketing digital",
    featured: false,
    credentialUrl: null,
  },
  {
    id: "alberta-object-oriented-design",
    title: "Object-Oriented Design",
    issuer: "University of Alberta",
    completed: "Noviembre 2021",
    area: "Arquitectura de software",
    featured: false,
    credentialUrl: null,
  },
  {
    id: "meta-social-media-marketing",
    title: "Introduction to Social Media Marketing",
    issuer: "Meta",
    completed: "Octubre 2021",
    area: "Marketing digital",
    featured: false,
    credentialUrl: null,
  },
] as const

// TODO(content): reemplazar cada valor nulo únicamente cuando Santiago confirme información real.
export const PORTFOLIO_NOW = [
  { id: "building", label: "En construcción", content: null },
  { id: "experimenting", label: "Experimentando", content: null },
  { id: "learning", label: "Aprendiendo", content: null },
  { id: "next", label: "Próximamente", content: null },
] as const

// TODO(content): no publicar gustos o referencias personales hasta que Santiago los confirme.
export const PORTFOLIO_INSPIRATION_CATEGORIES = [
  "Tecnología",
  "Diseño",
  "Gaming",
  "Producto",
  "Cultura",
  "Herramientas",
] as const

export const PORTFOLIO_CONTACT = {
  email: "WebCodeOfficial1@gmail.com",
  phoneLabel: "+52 999 278 2716",
  whatsappHref: "https://wa.me/529992782716",
  location: "Mérida, Yucatán, México",
} as const
