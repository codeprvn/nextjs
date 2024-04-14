import React from 'react'
import { CategoryComponent } from './CategoryComponent'
import SwiperComponent from './SwiperComponent'

export default function SwipWrapperComponent() {
  return (
    <div className='row mb-4'>
    <CategoryComponent />
    <SwiperComponent />
    </div>
  )
}
