import React from 'react'
import HookReview from './a_hook_review/HookReview'
import UseMemo01 from './b_Hooks/UseMemo'
import UseCallback from './b_Hooks/UseCallback'
import ReactMemo from './b_Hooks/ReactMemo'
import Mui01 from './c_MUI/Mui01'

export default function index() {
  return (
    <>
      <h1>리액트 훅 복습</h1>
      <HookReview />

      <h1>Hooks</h1>
      <h3>useMemo</h3>
      <UseMemo01 />
      <h3>useCallback</h3>
      <UseCallback />
      <h3>ReactMemo</h3>
      <ReactMemo />
      <hr />
      <h1>MUI 사용방법</h1>
      <Mui01 />
    </>
  )
}
