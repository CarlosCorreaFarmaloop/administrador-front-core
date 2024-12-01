'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { NavItem } from './types';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';

interface NavItemProps {
  item: NavItem;
  isCollapsed: boolean;
}

export function SidebarNavItem({ item, isCollapsed }: NavItemProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = pathname === item.href;
  const IconComponent = Icons[item.icon as keyof typeof Icons];

  if (!IconComponent) {
    console.warn(`Icon ${item.icon} not found`);
    return null;
  }

  if (item.children) {
    return (
      <div className="relative">
        <Button
          variant="ghost"
          className={cn(
            'w-full justify-between px-2',
            isActive && 'bg-accent',
            isCollapsed && 'justify-center'
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-2">
            <IconComponent className="h-4 w-4" />
            {!isCollapsed && <span>{item.title}</span>}
          </div>
          {!isCollapsed && (
            <Icons.chevronDown
              className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')}
            />
          )}
        </Button>
        {isOpen && !isCollapsed && (
          <div className="pl-4 mt-1">
            {item.children.map((child) => (
              <SidebarNavItem key={child.href} item={child} isCollapsed={isCollapsed} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        'flex items-center gap-2 px-2 py-2 rounded-md hover:bg-accent transition-colors',
        isActive && 'bg-accent',
        isCollapsed && 'justify-center'
      )}
    >
      <IconComponent className="h-4 w-4" />
      {!isCollapsed && <span>{item.title}</span>}
    </Link>
  );
}