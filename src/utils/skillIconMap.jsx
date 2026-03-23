import {
  Atom,
  BarChart3,
  Braces,
  Code2,
  Cog,
  Cpu,
  Factory,
  FileCode,
  FileText,
  GitBranch,
  Layers,
  Lightbulb,
  Palette,
  PencilRuler,
  Route,
  Users,
  Workflow,
  Zap,
} from 'lucide-react'

const skillIconMap = {
  python: FileCode,
  react: Atom,
  javascript: Braces,
  html: Code2,
  css: Palette,
  git: GitBranch,
  vite: Zap,
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
