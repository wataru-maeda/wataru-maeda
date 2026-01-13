import * as React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";
import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

export interface ButtonProps extends Omit<ChakraButtonProps, "variant" | "size"> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";
  asChild?: boolean;
}

function Button({
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: ButtonProps) {
  // Map custom variants to Chakra variants
  const chakraVariant = React.useMemo(() => {
    switch (variant) {
      case "default":
        return "solid";
      case "outline":
        return "outline";
      case "ghost":
        return "ghost";
      case "link":
        return "plain";
      case "destructive":
        return "solid";
      case "secondary":
        return "subtle";
      default:
        return "solid";
    }
  }, [variant]);

  // Map custom sizes to Chakra sizes
  const chakraSize = React.useMemo(() => {
    if (size === "sm" || size === "icon-sm") return "sm";
    if (size === "lg" || size === "icon-lg") return "lg";
    if (size === "icon") return "md";
    return "md";
  }, [size]);

  return (
    <ChakraButton
      variant={chakraVariant}
      size={chakraSize}
      colorPalette={variant === "destructive" ? "red" : "blue"}
      {...props}
    />
  );
}

export { Button };
