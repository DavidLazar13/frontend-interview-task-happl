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
    <div>
      <h2>Allowances</h2>
      <div>
        {allowances.map((allowance) => (
          <Card key={allowance.id} allowance={allowance}></Card>
        ))}
      </div>
    </div>
  )
}

export default List
