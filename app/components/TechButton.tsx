import Image from 'next/image';


const TechButton = ({ imgSrc, altText }) => (
  <button className="tech-button h-36px px-4 flex items-center justify-center rounded container fluid 1/2 text-center align-items-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ">
    <Image src={imgSrc} alt={altText} width={38} height={38} />
  </button>
);

export default TechButton;