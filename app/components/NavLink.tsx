// components/NavLink.tsx
import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
  description: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title, description }) => {
  return (
    <Link href={href} passHref>
      <div className="dark:green animate-fade-in group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-400 hover:dark:bg-neutral-800/30">
        <h2 className="mb-3 text-2xl font-semibold text-center">
          {title}{" "}
          <span className=" inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="text-center m-0 max-w-[30ch] text-sm opacity-90">{description}</p>
      </div>
    </Link>
  );
};

export default NavLink;