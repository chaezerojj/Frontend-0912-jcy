import React, { useRef } from "react";

//! useRef
// : DOM선택
// : 컴포넌트 내에서 조회 및 수정할 수 있는 변수 관리

//? 컴포넌트 내부에서 배열을 선언해서 사용
// : 배열에 새 항목을 추가할 때, 새 항목에서 사용할 고유 id를 관리하는 용도
interface Item {
  id: number;
  name: string;
  amount: number;
}

interface ItemProps {
  item: Item;
}

const items: Item[] = [
  { id: 1, name: "🍔햄버거", amount: 2 },
  { id: 2, name: "🥤콜라", amount: 1 },
  { id: 3, name: "🍟감자튀김", amount: 3 },
];

function Item({ item }: ItemProps) {
  return (
    <div>
      <p>
        <b>{item.name}</b>
      </p>
      <p>{item.amount}</p>
    </div>
  );
}

// 장바구니 배열에 대한 타입 정의
interface ItemList {
  items: Array<Item>;
}

function ItemList({ items }: ItemList) {
  return (
    <div>
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
}

export default function ArrRendering02() {
  // 다음 아이템의 ID를 위한 useRef 사용
  // : 컴포넌트가 리렌더링 되어도 이 값은 유지
  const nextId = useRef<number>(4);

  // 새로운 아이템을 생성하는 함수
  const onCreate = () => {
    // 아이템 추가 로직 구현
    // : items 배열에 새로운 요소 추가

    // ID를 증가
    // useRef에서 현재값 사용시 .current 사용
    nextId.current += 1;
  }

  return <ItemList items={items} />;
}
