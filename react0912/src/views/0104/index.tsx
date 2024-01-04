import React from 'react'
import UseReducer01 from './a_useReducer/UseReducer01'
import UseReducer02 from './a_useReducer/UseReducer02'
import CustomHook01 from './b_customHook/CustomHook01'
import Framework from './c_style_framework/Framework'

export default function index() {
  return (
    <>
      <h1>20240104 수업자료</h1>
      <h2 style={{backgroundColor: 'pink'}}>UseReducer</h2>
      <UseReducer01 />
      <UseReducer02 />
      <h2 style={{backgroundColor: 'pink'}}>customHook</h2>
      <CustomHook01 />
      <h2>리액트 CSS 프레임워크</h2>
      <Framework />
    </>
  )
}
