import { cn } from "./lib/utils";
import Image from "next/image";

type IconSize = {
  width?: number;
  height?: number;
};

const LogoIcon = ({ width = 50, height = 50 }: IconSize) => {
  return (
    <Image src="/images/logo1.png" width={width} height={height} alt="Logo" />
  );
};

const Logo = ({ dark = false }) => (
  <div className="flex items-center gap-2"> {/* Uklonjeno justify-start */}
    <LogoIcon />
    <span
      className={cn(
        "font-roboto font-bold text-3xl whitespace-nowrap text-lightblue-500", // Promijenjena boja u svijetloplavu
        {
          "text-lightblue-500": dark, // Tamnoplava boja za tamno
        }
      )}
    >
      CityScape Station
    </span>
  </div>
);

export default Logo;
