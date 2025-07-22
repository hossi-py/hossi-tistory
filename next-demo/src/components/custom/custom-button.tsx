import { Button, type buttonVariants } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { type VariantProps } from "class-variance-authority";

interface CustomButtonProps
  extends React.ComponentProps<typeof Button>,
    VariantProps<typeof buttonVariants> {
  tooltipContent?: React.ReactNode;
  tooltipPosition?: "top" | "right" | "bottom" | "left";
}

export default function CustomButton({
  children,
  tooltipContent,
  tooltipPosition = "right",
  ...buttonProps
}: any) {
  const button = <Button {...buttonProps}>{children}</Button>;

  if (!tooltipContent) return button;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent side={tooltipPosition}>{tooltipContent}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
