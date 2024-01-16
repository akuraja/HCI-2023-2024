import { ReactNode, MouseEvent } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { cn } from "./lib/utils";

type ButtonProps = {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  orange?: boolean;
  purple?: boolean;
  red?: boolean;
  className?: string;
  iconClassName?: string;
};

const Button = ({
  children,
  className,
  iconClassName,
  onClick,
  orange,
  red,
  purple,
}: ButtonProps) => {
  const buttonClasses = cn(
    "transition duration-300 ease-in-out",
    "group flex items-center gap-2 text-lg max-w-min whitespace-nowrap",
    "px-6 py-3 rounded-sm font-roboto font-medium",
    className
  );

  const colorStyles = red
    ? {
        backgroundColor: "#EF4444", // Red color
        hoverBackgroundColor: "#DC2626", // Darker red for hover
        textColor: "#F9FAFB", // White text
        hoverTextColor: "#F9FAFB", // White text on hover
        borderColor: "#EF4444", // Red border
      }
    : {
        backgroundColor: "#9F5CC0", // Purple color
        hoverBackgroundColor: "#7C3A95", // Darker purple for hover
        textColor: "#1F2937", // Dark text
        hoverTextColor: "#F9FAFB", // White text on hover
        borderColor: "#9F5CC0", // Purple border
      };

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      style={{
        backgroundColor: colorStyles.backgroundColor,
        color: colorStyles.textColor,
        borderColor: colorStyles.borderColor,
      }}
    >
      <span>{children}</span>{" "}
      <ChevronRightIcon
        className={cn(
          "w-3 h-3 stroke-[3] transition-transform duration-300 ease-in-out transform group-hover:translate-x-1",
          iconClassName
        )}
        style={{
          stroke: colorStyles.textColor,
        }}
      />
    </button>
  );
};

export default Button;
