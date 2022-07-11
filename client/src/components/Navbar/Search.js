import { Input, Space } from 'antd'
import React from 'react'

export default function Search() {
const { Search } = Input;

const onSearch = (value) => console.log(value);
  return (
    <Space direction="vertical">
    <Search placeholder="input search text" onSearch={onSearch} enterButton />
  </Space>
  )
}
