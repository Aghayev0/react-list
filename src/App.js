import React, { useState } from 'react'
import { Space, Table, Tag } from 'antd'
// function Appp(){
//   const [data, setData] = useState(['Eli','Smith', 'Jhon']);
//   const handleDelete = (index,e) => {
//       setData(data.filter((v, i) => i !== index));
//   }
function SomeDeleteRowFunction(o) {
  //no clue what to put here?
  var p=o.parentNode.parentNode;
      p.parentNode.removeChild(p);
 }
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green'
          if (tag === 'loser') {
            color = 'volcano'
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a onClick="SomeDeleteRowFunction(this)" >Delete</a>
      </Space>
    ),
  },
]

const dataa = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    name: 'Emin Agayev',
    age: 32,
    address: '28 may',
    tags: ['nice', 'developer'],
  },
  {
    key: '5',
    name: 'Rashad Khalil',
    age: 42,
    address: 'Bine qesebesi',
    tags: ['loser'],
  },
  {
    key: '6',
    name: 'Suleyman Dadashow',
    age: 32,
    address: 'Qaracuxur',
    tags: ['cool', 'teacher'],
  },
  {
    key: '7',
    name: 'Elnur xo',
    age: 32,
    address: 'Ev',
    tags: ['nice', 'developer'],
  },
  {
    key: '8',
    name: 'Elon Musk',
    age: 42,
    address: 'Amerika',
    tags: ['loser'],
  },
  {
    key: '9',
    name: 'Rashad Khalil',
    age: 32,
    address: 'Bine qesebesi',
    tags: ['cool', 'teacher'],
  },
]
const App = () => <Table columns={columns} dataSource={dataa} />

export default App
