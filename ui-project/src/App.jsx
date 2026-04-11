import React from 'react'
import Section1 from './components/section1/Section1.jsx'

const App = () => {

  const users = [
    {
      img: 'https://i.pinimg.com/736x/07/19/77/071977f38ca821f95225de476abf56e0.jpg',
      intro: '',
      color:'royalblue',
      tag: 'Satisfied'
    },
    {
      img: 'https://i.pinimg.com/736x/50/4d/7a/504d7aba766306aed2411d0de0fdfbb8.jpg',
      color:'lightseagreen',
      intro: '',
      tag: 'Underserved'
    },
    {
      img: 'https://i.pinimg.com/736x/02/d0/65/02d0653b80555a05520248f7c8273404.jpg',
      color:'orange',
      intro: '',
      tag: 'Underbanked'
    },
    {
      img: 'https://i.pinimg.com/1200x/16/85/0d/16850de7f93f8b3b8ea3aefbd57282c3.jpg',
      color:'pink',
      intro: '',
      tag: 'Underwear'
    },
    {
      img:'https://i.pinimg.com/1200x/94/33/60/943360b687d55d1189c062906eae7748.jpg',
      intro:'',
      color:'black',
      tag:'Average'
    }
  ]

  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App
