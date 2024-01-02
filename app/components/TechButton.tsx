import React from 'react';
import Image from 'next/image';

interface TechButtonProps {
  imgSrc: string;
  altText: string;
}

const TechButton: React.FC<TechButtonProps> = ({ imgSrc, altText }) => (
  <button className="tech-button h-10 w-10 p-1 rounded transition-all hover:scale-110">
    <Image src={imgSrc} alt={altText} width={38} height={38} />
  </button>
);

export default TechButton;
