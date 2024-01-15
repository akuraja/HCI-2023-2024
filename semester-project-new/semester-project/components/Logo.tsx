import { cn } from "@/lib/utils";

type IconSize = {
  width?: number;
  height?: number;
};

const LogoIcon = ({ width = 42, height = 42 }) => {
  return (
    <img
      src="../images/Vektor.png"
      width={width}
      height={height}
    />
  );
};

const Logo = ({ dark = false }) => (
  <div className="flex items-center justify-between max-w-min gap-2">
    <LogoIcon />
    <span
      className={cn(
        "font-roboto font-bold text-3xl whitespace-nowrap text-red-500", // Dodali smo klasu za crvenu boju
        { "text-red-500": !dark, "text-gray-800": dark } // Postavljamo boje teksta ovisno o temi
      )}
    >
      CityScape Station
    </span>
  </div>
);

export default Logo;
