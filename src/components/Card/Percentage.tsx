import React, {useState, useEffect} from "react";
import { Allowance } from '@/types/allowances'

interface PercentageProps {
    allowance: Allowance
}

const Percentage = ({allowance}:PercentageProps) => {
    const [percentage, setPercentage] = useState<number>(0)

    const calculatePercentage = (allowance: Allowance) => {
        return Math.trunc((+allowance.spent / +allowance.amount) * 100)
    }

    const updatePercentage = () => {
        const percentage = calculatePercentage(allowance)
        setPercentage(percentage)
    }

    useEffect(() => {
           updatePercentage();
    }, [allowance])

    return (
        <div className='pb-5 mx-6'>
            <div className='flex justify-between'>
                <div className='text-sm font-medium'>
                    {percentage}% utilised
                </div>
                <div className='text-sm text-gray-300'>
                    {allowance.currency}
                    {allowance.amount} / Month
                </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1 mt-1.5">
                <div className="bg-green-600 h-1 rounded-full" style={{width: `${percentage}%`}}></div>
            </div>
        </div>
    )
}

export default Percentage;
