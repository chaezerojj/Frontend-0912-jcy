import React from 'react'
import StateProps01 from './a_State_Props/StateProps01'
import StateProps02 from './a_State_Props/StateProps02'
import UseRef01 from './b_Ref/UseRef01'
import ArrRendering01 from './c_Arrray/ArrRendering01'
import ArrRendering02 from './c_Arrray/ArrRendering02'

export default function Index() {
  return (
    <>
      <h1>1226 리액트 수업 자료</h1>
      <h2 style={{backgroundColor: 'pink'}}>1. 상태 관리의 컴포넌트 트리 전달</h2>
      <StateProps01 />
      <StateProps02 />

      <h2 style={{backgroundColor: 'pink'}}>
        2. useRef로 특정 DOM 선택</h2>
      <UseRef01 />
      <h2 style={{backgroundColor: 'pink'}}>
        3. 배열 렌더링 하기</h2>
        <ArrRendering01 />
        <hr />
        <ArrRendering02 />
    </>
  )
}
