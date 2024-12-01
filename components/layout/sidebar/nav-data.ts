import { NavItem } from './types';

export const navigationItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'layoutDashboard',
  },
  {
    title: 'Productos',
    href: '/productos',
    icon: 'package',
    children: [
      { title: 'Listado', href: '/productos/listado', icon: 'list' },
      { title: 'Categorías', href: '/productos/categorias', icon: 'folder' },
      { title: 'Subcategorías', href: '/productos/subcategorias', icon: 'list' },
      { title: 'Categorías temporales', href: '/productos/categorias-temporales', icon: 'clock' },
      { title: 'Principios activos', href: '/productos/principios-activos', icon: 'pill' },
      { title: 'Laboratorios', href: '/productos/laboratorios', icon: 'flask' },
      { title: 'Bloqueos', href: '/productos/bloqueos', icon: 'lock' },
    ],
  },
];