import React from 'react'

type UserType = {
  name: string;
  height: number;
}

// Props에 대한 타입 정의
interface ChildComponentProps {
  userInfo: UserType;
  onUpdate: (newInfo: UserType) => void;
}

//* 자식 컴포넌트
export default function ChildProps02({ userInfo, onUpdate }: ChildComponentProps) {
  const updateInfo = () => {
    // 상태 업데이트 로직
    onUpdate({ name: 'lee do Kyung', height: 165});
  }
  return (
    <div>
      <p>Name: {userInfo.name}</p>
      <p>Height: {userInfo.height}</p>
      <button onClick={updateInfo}>Update Info</button>
    </div>
  )
}
