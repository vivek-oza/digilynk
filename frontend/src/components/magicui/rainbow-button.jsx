import { cn } from "../../lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import React from "react";


const rainbowButtonVariants = cva(
  cn(
    "relative cursor-pointer group transition-all duration-300 ease-in-out",
    "inline-flex items-center justify-center gap-2 shrink-0",
    "rounded-full outline-none focus-visible:ring-[3px] focus-visible:ring-blue-500",
    "text-white font-medium whitespace-nowrap shadow-lg",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
    "bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500",
    "bg-[length:200%_200%] animate-gradient-x",
    "hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25",
    "active:scale-95",
    "before:absolute before:inset-0 before:rounded-full before:p-[1px]",
    "before:bg-gradient-to-r before:from-red-500 before:via-yellow-500 before:via-green-500 before:via-blue-500 before:to-purple-500",
    "before:animate-pulse before:opacity-50 before:-z-10"
  ),
  {
    variants: {
      variant: {
        default: "",
        outline:
          "border-2 border-transparent bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-padding",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4 py-2 text-sm",
        lg: "h-12 px-10 py-3 text-lg",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);


const RainbowButton = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        data-slot="button"
        className={cn(rainbowButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

RainbowButton.displayName = "RainbowButton";

export { RainbowButton, rainbowButtonVariants };
