import React, {useState} from "react";
import { Allowance } from '@/types/allowances'
import CardFooter from '@/components/Card/CardFooter'
interface CardProps {
    allowance: Allowance
}

const Card = ({allowance}: CardProps) => {
    return (
        <div className='relative border rounded-lg shadow-sm'>
            <div className='px-6 pt-5 mb-12 pb-1.5'>
                <h3 className='font-medium'>{allowance.name}</h3>
                <h4 className='text-sm capitalize text-gray-400'>{allowance.type}</h4>
            </div>
            <CardFooter allowance={allowance}/>
        </div>
    )
}

export default Card;
