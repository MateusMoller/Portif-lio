import {
  BarChart3,
  Cog,
  Cpu,
  Factory,
  FileText,
  GitBranch,
  Layers,
  Lightbulb,
  PencilRuler,
  Route,
  Users,
  Workflow,
} from 'lucide-react'
import {
  SiCss,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiReact,
  SiVite,
} from 'react-icons/si'

const skillIconMap = {
  python: SiPython,
  react: SiReact,
  javascript: SiJavascript,
  html: SiHtml5,
  css: SiCss,
  git: SiGit,
  vite: SiVite,
  automation: Cog,
  integration: Workflow,
  prototyping: PencilRuler,
  industrial: Factory,
  process: Route,
  flow: GitBranch,
  systems: Layers,
  analysis: BarChart3,
  documentation: FileText,
  problem_solving: Lightbulb,
  communication: Users,
  stack_base: Workflow,
}

export function getSkillIcon(iconKey) {
  return skillIconMap[iconKey] ?? Cpu
}
