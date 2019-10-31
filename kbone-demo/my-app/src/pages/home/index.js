import React, { useState } from 'react'
import GoodsList from '../../components/goodsList'
import './index.css'

const tabList = [{ title: '首页' }, { title: '个人中心' }]
export default () => {
  const [current, setCurrent] = useState(0)
  const handleTabClick = index => setCurrent(index)
  return (
    <div className="container">
      <div className="goods-list">
        <GoodsList />
      </div>
      <div className="tab-bar">
        {tabList.map((item, index) => (
          <div
            className={index === current ? 'current' : ''}
            onClick={() => handleTabClick(index)}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  )
}
