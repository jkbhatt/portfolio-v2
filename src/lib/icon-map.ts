import {
  FileCode,
  FileType,
  Braces,
  Terminal,
  FileCode2,
  Code2,
  Layers,
  Atom,
  Palette,
  Paintbrush,
  Server,
  Route,
  Radio,
  Database,
  GitBranch,
  Send,
  Code,
  GitCommit,
  Cloud,
  CloudCog,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  FileCode,
  FileType,
  Braces,
  Terminal,
  FileCode2,
  Code2,
  Layers,
  Atom,
  Palette,
  Paintbrush,
  Server,
  Route,
  Radio,
  Database,
  GitBranch,
  Github: Code2, // lucide-react removed brand icons; using Code2 as fallback
  Send,
  Code,
  GitCommit,
  Cloud,
  CloudCog,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Code2;
}