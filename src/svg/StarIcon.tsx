import React from 'react';

import { StarIconProps } from './type';

const StarIcon: React.FC<StarIconProps> = ({ 
  width = 41, 
  height = 39, 
  color,
  className 
}) => {
  const gradientId = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
  
  // Если цвет указан, используем его вместо градиента
  const fillColor = color || `url(#${gradientId})`;

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={width} 
      height={height} 
      viewBox="0 0 41 39" 
      fill="none"
      className={className}
    >
      {!color && (
        <defs>
          <linearGradient 
            id={gradientId} 
            x1="20.4478" 
            y1="38.8939" 
            x2="20.4478" 
            y2="-4.10614" 
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FCC187"/>
            <stop offset="1" stopColor="#FC9A22"/>
          </linearGradient>
        </defs>
      )}
      <path 
        d="M20.4478 38.8939L25.2748 24.0377H40.8955L28.2581 14.8561L33.0851 -7.62939e-06L20.4478 9.18159L7.81037 -7.62939e-06L12.6374 14.8561L3.8147e-05 24.0377H15.6207L20.4478 38.8939Z" 
        fill={fillColor}
      />
    </svg>
  );
};

export default StarIcon;

