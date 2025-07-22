import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface CustomButtonProps {
  children?: React.ReactNode;
  tooltipContent?: React.ReactNode;
  tooltipPosition?: "top" | "right" | "bottom" | "left";
  [key: string]: any;
}

export default function CustomButton({
  children,
  tooltipContent,
  tooltipPosition = "right",
  ...props
}: CustomButtonProps) {
  const button = <Button {...props}>{children}</Button>;

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
