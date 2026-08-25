import {
  Code2,
  FolderKanban,
  Home,
  Lightbulb,
  Mail,
  Route,
  Zap,
  type LucideIcon,
} from "lucide-react"

import type { LabState } from "./lab-types"

export type LabDestination = {
  id: LabState
  code: string
  label: string
  shortLabel: string
  description: string
  signal: string
  icon: LucideIcon
}

export const LAB_DESTINATIONS: LabDestination[] = [
  {
    id: "initial",
    code: "00",
    label: "Inicio",
    shortLabel: "Inicio",
    description: "Entrada al Developer Lab.",
    signal: "Sistema listo",
    icon: Home,
  },
  {
    id: "projects",
    code: "01",
    label: "Proyectos",
    shortLabel: "Proyectos",
    description: "Productos y soluciones construidas.",
    signal: "Trabajo seleccionado",
    icon: FolderKanban,
  },
  {
    id: "skills",
    code: "02",
    label: "Skills",
    shortLabel: "Skills",
    description: "Conocimientos que se conectan.",
    signal: "Capacidades conectadas",
    icon: Code2,
  },
  {
    id: "journey",
    code: "03",
    label: "Journey",
    shortLabel: "Journey",
    description: "Evolución y aprendizajes.",
    signal: "Trayectoria en progreso",
    icon: Route,
  },
  {
    id: "now",
    code: "04",
    label: "Ahora",
    shortLabel: "Ahora",
    description: "Lo que está en construcción.",
    signal: "Construcción activa",
    icon: Zap,
  },
  {
    id: "inspirations",
    code: "05",
    label: "Inspiraciones",
    shortLabel: "Ideas",
    description: "Referencias que alimentan el trabajo.",
    signal: "Fuentes de energía",
    icon: Lightbulb,
  },
  {
    id: "contact",
    code: "06",
    label: "Contacto",
    shortLabel: "Contacto",
    description: "Un espacio para comenzar algo juntos.",
    signal: "Canal disponible",
    icon: Mail,
  },
]

export const LAB_DESTINATION_BY_ID = Object.fromEntries(
  LAB_DESTINATIONS.map((destination) => [destination.id, destination]),
) as Record<LabState, LabDestination>
