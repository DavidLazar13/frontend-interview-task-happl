import React, { useEffect, useState } from 'react'
import { Allowance } from '@/types/allowances'
import Card from '@/components/Card'

const List = () => {
  const [allowances, setAllowances] = useState<Allowance[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/allowances')
      const { result } = await response.json()
      setAllowances(result)
    }

    fetchData()
  }, [])

  return (
    <div className='m-8'>
      <h2 className='text-2xl font-semibold leading-5'>Allowances</h2>
      <div className='grid grid-rows-3 grid-flow-col gap-4 mt-7'>
        {allowances.map((allowance) => (
          <Card key={allowance.id} allowance={allowance}></Card>
        ))}
      </div>
    </div>
  )
}

export default List
