import { cn } from "./lib/utils";

type IconSize = {
  width?: number;
  height?: number;
};

const LogoIcon = ({ width = 40, height = 40 }: IconSize) => {
  return (
    <img src="./images/Vector.png" width={width} height={height} alt="Logo" />
  );
};

const Logo = ({ dark = false }) => (
  <div className="flex items-center justify-between max-w-min gap-2">
    <LogoIcon />
    <span
      className={cn(
        "font-roboto font-bold text-3xl whitespace-nowrap text-red-500",
        { "text-red-500": !dark, "text-gray-800": dark }
      )}
    >
      CityScape Station
    </span>
  </div>
);

export default Logo;
