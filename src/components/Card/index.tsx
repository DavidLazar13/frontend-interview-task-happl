import React, {useState} from "react";
import { Allowance } from '@/types/allowances'
import CardFooter from '@/components/Card/CardFooter'
interface CardProps {
    allowance: Allowance
}

const Card = ({allowance}: CardProps) => {
    return (
        <div className='border mb-5'>
            <h3 className=''>{allowance.name}</h3>
            <h4 className=''>{allowance.type}</h4>
            <CardFooter allowance={allowance}/>
        </div>
    )
}

export default Card;
