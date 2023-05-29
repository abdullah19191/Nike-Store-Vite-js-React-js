/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Title from './utils/Title'
import Item from './utils/Item'

const Sales = ({endpoint:{title , items}}) => {
    
  return (
    <>
     <div className="">
        <Title title={title}/>
        <div className="">
            {items.map((item,i)=>(
                <Item {...item} key={i}/>
            ))}
        </div>
     </div>
    </>
  )
}

export default Sales