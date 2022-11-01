import { ICONS } from '@/constants/icons'
import { Icons } from '@/types/icons'
import React from 'react'

type Props = {
  icon: Icons
  width?: number | string
  height?: number | string
}

const Icon = ({ icon, width = 20, height = 20 }: Props) => {
  const Component = ICONS[icon]
  return (
    <Component
      width={width}
      height={height}
      data-testid={`icon-${icon}`}
      strokeWidth={1.5}
    />
  )
}

export default Icon
