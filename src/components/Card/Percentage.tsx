import React from "react";


interface PercentageProps {
    percentage: number
    currency: string
    amount: string
}

const Percentage = ({percentage, currency, amount}:PercentageProps) => {

    return (
        <div className='pb-5 mx-6'>
            <div className='flex justify-between'>
                <div className='text-sm font-medium'>
                    {percentage}% utilised
                </div>
                <div className='text-sm text-gray-300'>
                    {currency}
                    {amount} / Month
                </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1 mt-1.5">
                <div className="bg-green-600 h-1 rounded-full" style={{width: `${percentage}%`}}></div>
            </div>
        </div>
    )
}

export default Percentage;
