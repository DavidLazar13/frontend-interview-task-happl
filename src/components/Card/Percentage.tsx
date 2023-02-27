import React, {useState, useEffect} from "react";
import { Allowance } from '@/types/allowances'

interface PercentageProps {
    allowance: Allowance
}

const Percentage = ({allowance}:PercentageProps) => {
    const [percentage, setPercentage] = useState<number>(0)

    const getPercentage = () => {
        const percentage = (+allowance.spent / +allowance.amount) * 100
        setPercentage(percentage)
    }

    useEffect(() => {
           getPercentage();
    }, [allowance])

    return (
        <div>
            {allowance.amount}
            {allowance.currency} / Month
            <br/>
             {percentage}% utilised
        </div>
    )
}

export default Percentage;
