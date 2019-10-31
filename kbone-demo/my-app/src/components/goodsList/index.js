import React, { useState } from 'react'
import { allGoods } from '../../data/goods'
import './index.css'

export default () => {
  return (
    <div className="container">
      {allGoods.map(goods => (
        <div className="goods-item">
          <img src={goods.imgUrl} />
          <div className="goods-name">{goods.goodsName}</div>
        </div>
      ))}
      <div></div>
    </div>
  )
}