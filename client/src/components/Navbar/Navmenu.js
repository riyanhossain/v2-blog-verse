import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { Link } from 'react-router-dom';

export default function Navmenu(props) {
    const { state, dispatch } = props;
    const { user } = state;
    const menu = (
        <Menu
          items={[
            {
              label: <Link to='/myblogs'>My Blogs</Link>,
              key: "0",
            },
            {
              type: "divider",
            },
            {
              label: <button onClick={() => dispatch({
                type: "SIGN_OUT"
              })}>Logout</button>,
              key: "2",
            },
          ]}
        />
      );
  return (
    <li className="font-semibold p-2 rounded hover:bg-slate-100">
    <Dropdown overlay={menu} trigger={["click"]}>
      <a href='/' onClick={(e) => e.preventDefault()}>
        <Space>
            {user.name}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  </li>
  )
}
