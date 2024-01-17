import { cn } from "./lib/utils";
import Image from "next/image";

type IconSize = {
  width?: number;
  height?: number;
};

const LogoIcon = ({ width = 40, height = 40 }: IconSize) => {
  return (
    <Image src="/images/Vector.png" width={width} height={height} alt="Logo" />
  );
};

const Logo = ({ dark = false }) => (
  <div className="flex items-center justify-between max-w-min gap-2">
    <LogoIcon />
    <span
      className={cn(
        "font-roboto font-bold text-3xl whitespace-nowrap text-lightblue-500", // Promijenjena boja u svijetloplavu
        {
          "text-lighblue-500": dark, // Tamnoplava boja za tamno
        }
      )}
    >
      CityScape Station
    </span>
  </div>
);

export default Logo;
