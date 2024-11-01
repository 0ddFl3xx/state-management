import Link from "next/link";
import { footerBlocks } from "@/constants/footer/FooterBlocks";

// types for FooterItem and FooterBlockItem props
interface FooterItemProps {
  id: number;
  text: string;
  link: string;
}

interface FooterBlockItemProps {
  title: string;
  items: FooterItemProps[];
}

// Define the FooterItem component with props type
const FooterItem = ({ text, link }: FooterItemProps) => {
  return (
    <li>
      <Link
        href={link}
        className="duration-200 hover:text-emerald-600 ">
        {text}
      </Link>
    </li>
  );
};

// Define the FooterBlockItem component with props type
const FooterBlockItem = ({ title, items }: FooterBlockItemProps) => {
  return (
    <div className="space-y-6">
      <h1 className="text-lg font-bold text-emerald-600 ">
        {title}
      </h1>
      <ul className="space-y-3">
        {items.map((item) => (
          <FooterItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

// Define the FooterBlock component
const FooterBlock = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white text-black ">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="border-t border-t-emerald-200  py-16 md:py-20 flex flex-col lg:flex-row gap-14 gap-y-16">
          <div className="w-full lg:w-96 space-y-6">
            <Link href="/">
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-emerald-800 to-emerald-400 font-bold text-2xl">
                A
              </span>
              losage
            </Link>
            <p className="max-w-lg italic">
              The best fashion brought to you!
            </p>
          </div>
          <nav className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-10">
            {footerBlocks.map((footerBlock) => (
              <FooterBlockItem key={footerBlock.id} {...footerBlock} />
            ))}
          </nav>
        </div>
      </div>
      <div className="py-3 bg-gray-100">
        <div className="max-w-3xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex justify-center text-center">
          <p> © {year} Alosage. All rights reserved </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterBlock;
