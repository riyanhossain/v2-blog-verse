import { Input, Space } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Search() {
const { Search } = Input;
const navigate = useNavigate();
const onSearch = (value) => {
  if(value.length > 0)
  navigate(`/search/${value}`)
};


  return (
    <Space direction="vertical">
    <Search placeholder="Search..." onSearch={onSearch} enterButton />
  </Space>
  )
}
