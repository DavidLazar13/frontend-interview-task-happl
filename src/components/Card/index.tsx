import React from "react";
import { Allowance } from '@/types/allowances'
import Percentage from "@/components/Card/Percentage";
import {calculatePercentage} from "../../../utils/calculatePercentage";

type CardProps = {
    allowance: Allowance
}

const Card = ({allowance}: CardProps) => {

    const percentage = calculatePercentage(+allowance.spent, +allowance.amount)

    return (
        <div className='relative border rounded-lg shadow-sm' data-testid={`card-${allowance.id}`}>
            <div className='px-6 pt-5 mb-12 pb-1.5'>
                <h3 className='font-medium'>{allowance.name}</h3>
                <h4 className='text-sm capitalize text-gray-400'>{allowance.type}</h4>
            </div>
            <>{
                allowance.active ? (
                    <div data-testid="percentage-section">
                        <Percentage percentage={percentage} amount={allowance.amount} currency={allowance.currency} />
                    </div>
                ) : (
                    <div data-testid="activate-section">
                        <div className='absolute bg-gray-100 p-4 rounded-b-lg text-lime-500 text-sm bottom-0 inset-x-0 cursor-pointer'>
                            Activate card
                        </div>
                    </div>
                )
            }</>
        </div>
    )
}

export default Card;
