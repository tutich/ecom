'use client'


import React from 'react'

import classes from './index.module.scss'
import { useFilter } from '../../../_providers/Filter'
import { Category } from '../../../../payload/payload-types';
import { Checkbox } from '../../../_components/Checkbox';
import { HR } from '../../../_components/HR';


const Filters = ({categories} : {categories: Category[]}) => {
  const {categoryFilters, sort, setCategoryFilters, setSort} = useFilter();

  const handleCategories = (categoryId : string) => {}
  return (
    <div className={classes.filters}>
      <div>
        <h4 className={classes.title}>Product Categories</h4>
        <div className={classes.category}>
          {categories.map(category => {
            const isSelected = categoryFilters.includes(category.id)
            return <Checkbox
             key={category.id} 
             label={category.title}
             value={category.id}
             isSelected={isSelected}
             onClickHandler={handleCategories}
             />
          })}
        </div>
        <HR className={classes.hr} />
        <h4 className={classes.title}>Sort By</h4>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Filters