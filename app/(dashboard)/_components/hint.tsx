import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

export interface HintProps  {
    label: string
    children: React.ReactNode
    side?: "top" | "bottom" | "left" | "right"
    align?: "start" | "center" | "end"
    sideOffset?: number
    alignOffset?: number 
}

export const Hint = ({
    label: lable,
    children,
    side,
    align,
    sideOffset,
    alignOffset
}: HintProps) =>{
    return (
        <TooltipProvider>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent
                    className="text-white bg-black border-black rounded-sm"
                side={side}
                align={align}
                sideOffset={sideOffset}
                alignOffset={alignOffset}
                >
                    <p className="font-semibold capitalize">{lable}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}