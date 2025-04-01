import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
}

function Logo({ className }: LogoProps) {
  return (
    <Image
      src={'/assets/main-logo.png'}
      alt={'logo notes'}
      width={95}
      height={28}
      className={className}
    />
  );
}

export default Logo;
