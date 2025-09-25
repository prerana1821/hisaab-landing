import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-card hover:shadow-soft",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Enhanced conversion-focused variants with Gen Z aesthetics
        hero: "bg-gradient-to-r from-lime to-lime-light text-charcoal hover:shadow-glow font-bold transform hover:scale-105 active:scale-95 animate-pulse-glow",
        teal: "bg-gradient-to-r from-teal to-teal-light text-white hover:shadow-card font-semibold transform hover:scale-105 active:scale-95",
        "teal-outline": "border-2 border-teal bg-transparent text-teal hover:bg-teal hover:text-white font-semibold transform hover:scale-105 active:scale-95 animated-border",
        purple: "bg-gradient-to-r from-purple to-purple-light text-white hover:shadow-purple font-semibold transform hover:scale-105 active:scale-95",
        pink: "bg-gradient-to-r from-pink to-pink-light text-white hover:shadow-pink font-semibold transform hover:scale-105 active:scale-95",
        glass: "glass-effect text-foreground hover:bg-white/20 border border-white/30 backdrop-blur-md",
        "glass-dark": "glass-effect-dark text-white hover:bg-black/20 border border-white/20 backdrop-blur-md",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-4",
        lg: "h-14 rounded-xl px-8 text-base",
        xl: "h-16 rounded-xl px-12 text-lg font-bold",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
