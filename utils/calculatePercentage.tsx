export const calculatePercentage = (ammountSpent: number, amountTotal:number) => {
    return Math.trunc((+ammountSpent / +amountTotal) * 100)
}
