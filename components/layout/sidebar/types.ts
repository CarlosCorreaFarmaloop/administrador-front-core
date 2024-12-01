export interface NavItem {
  title: string;
  href: string;
  icon: string;
  children?: NavItem[];
}

export interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}