import React from 'react'

//! 배열 렌더링(추가, 제거, 수정)
// CRUD 기능

// 동적인 배열 렌더링
// : JS 배열의 내장함수 map 사용

//? JS의 배열 내장 함수 사용시 주의 사항
// 배열 렌더링을 할 때는 key라는 props 설정 필요
// key값: 각 원소들마다 가지고 있는 고유값으로 설정
// - initialItems에서는 id가 고유값
// - map()함수 사용 시 고유값이 없을 경우
//  : 콜백함수의 두번째 파라미터 index를 key로 사용

type Items = {
  items: {
  id: number;
  name: string;
  amount: number;
}
}

// 장바구니 항목
const initialItems = [
  { id: 1, name: '🍎사과', amount: 3},
  { id: 2, name: '🍌바나나', amount: 1},
  { id: 3, name: '🍓딸기', amount: 2}
  // 추가 목록 작성
];

function Item({ items }: Items) {
  return (
    <div>
      <p>
        <b>{items.name}</b>
        (amount: {items.amount})
        </p>
    </div>
  )
}

export default function ArrRendering01() {

  return (
    <>
    {/* 
    <Item items={initialItems[0]}/>
    <Item items={initialItems[1]}/>
    <Item items={initialItems[2]}/> 
    */}
    {
      initialItems.map((item) => (
        <Item items={item} />
      ))
      // initialItems.map((item, index) => (
      //   <Item items={item} key={index}/>
      // ))
    }
    </>
  )
}
