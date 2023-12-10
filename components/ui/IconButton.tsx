import { cn } from "@/lib/utils";
import React from "react";
import { MouseEventHandler } from "react";
interface IconButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  className,
  icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full justify-center border bg-white shadow-md p-2 hover:scale-110 transition",
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
