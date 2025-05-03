
import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
  fallback?: string;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 24, 
  color, 
  className = '',
  fallback = 'HelpCircle'
}) => {
  // @ts-ignore
  const LucideIcon = LucideIcons[name] || LucideIcons[fallback];
  
  return (
    <LucideIcon
      size={size}
      color={color}
      className={className}
    />
  );
};

export default Icon;
