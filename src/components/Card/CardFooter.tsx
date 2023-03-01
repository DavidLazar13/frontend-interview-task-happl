import React, {useState} from "react";
import { Allowance } from '@/types/allowances'
import Activate from '@/components/Card/Activate'
import Percentage from '@/components/Card/Percentage'

interface CardFooterProps {
    allowance: Allowance
}

const CardFooter = ({allowance}: CardFooterProps) => {
        if (!allowance.active) {
           return(
               <div data-testid="activate-section">
                   <Activate />
               </div>
           )
        } else {
            return(
                <div data-testid="percentage-section">
                    <Percentage allowance={allowance} />
                </div>
            )
        }
}

export default CardFooter;
