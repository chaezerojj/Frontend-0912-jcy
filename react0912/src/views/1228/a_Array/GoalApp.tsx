import React, { ChangeEvent, useRef, useState } from "react";
import CreateGoal from "./CreateGoal";
import GoalList from "./GoalList";

//! 배열에 항목을 추가
// spread 연산자, concat 함수를 사용

//! 배열에 항목을 제거
// filter 메소드 사용 (해당 항목과 일치하는 id를 제거)

//! 배열에 항목을 수정
//

// 목표 타입 정의
interface Goal {
  id: number;
  title: string;
  explaination: string;
  active: boolean;
}

// 초기 목표
const initialGoals: Goal[] = [
  {
    id: 1,
    title: "책 10권 읽기",
    explaination: "경제서적 10권 읽기",
    active: true,
  },
  {
    id: 2,
    title: "운동하기",
    explaination: "주 3회 이상 운동하기",
    active: false,
  },
  {
    id: 3,
    title: "영어공부하기",
    explaination: "영어 원서 5권 읽기",
    active: false,
  },
];

// 목표 App 컴포넌트 정의
export default function GoalApp() {
  // 목표 상태 관리
  const [goals, setGoals] = useState<Goal[]>(initialGoals);

  // 목표 입력 상태 관리
  const [goalInput, setGoalInput] = useState({
    title: "",
    explaination: "",
  });

  // 목표 ID 관리
  const nextId = useRef(4);

  // 목표 입력 변경 핸들러
  const handleCreate = (e: ChangeEvent<HTMLInputElement>) => {
    // 두 개의 input 창의 값을 하나의 핸들러로 관리하기 때문에
    // 이벤트가 일어나는 target에서 데이터값을 비구조화 할당으로 처리
    const { name, value } = e.target;
    // 스프레드 연산자를 사용하여
    // 변경되지 않은 Input은 그대로 두고,
    // 변경된 name의 value값만 업데이트
    setGoalInput({
      ...goalInput,
      [name]: value,
    });
  };

  // 목표 추가 핸들러
  const handleAddGoal = () => {
    const newGoal = {
      id: nextId.current,
      title: goalInput.title,
      explaination: goalInput.explaination,
      active: false,
    };
    // 현재 목표를 목표 목록에 추가
    // 기존의 배열을 수정하지 않고 복사하여 사용
    // : 불변성
    // >> spread 연산자 (...)
    // >> concat 함수
    //    : 기존의 배열을 수정하지 않고, 새로운 원소가 추가된 새로운 배열을 생성
    //? setGoals([...goals, newGoal]);
    setGoals(goals.concat(newGoal));

    // 입력 필드 초기화
    setGoalInput({ title: "", explaination: "" });
    // 다음 ID 증가
    nextId.current += 1;
  };

  const handleRemove = (id: number) => {
    // filter: 배열을 순회하여 함수가 True인 요소만을 새로운 배열을 추출

    // goal.id가 매개변수로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
    // goal.id가 매개변수로 받아오는 id인것을 제거
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  const handleToggle = (id: number) => {
    // 전체 배열을 순회하여 goal의 id가 매개변수의 id와 일치하는 요소는 전체 속성중에서 active값을 반전
    // 일치하지 않는 요소는 해당 요소 그대로의 반환
    //? map()과 forEach()의 차이
    // forEach()
    // : 기존 배열(Array)을 변경
    // : 단순히 반복문을 대체하기 위한 함수
    // map()
    // : 새로운 배열(Array)을 반환
    // : 요소값을 다른 값으로 mapping한(기능을 적용한) 새로운 배열을 생성하는 함수
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, active: !goal.active } : goal
      )
    );
  };

  return (
    <div>
      <CreateGoal
        goal={goalInput}
        onChange={handleCreate}
        onCreate={handleAddGoal}
      />

      <h3> 📃2024년 목표 목록</h3>
      <GoalList goals={goals} onRemove={handleRemove}
      onToggle={handleToggle}
      />
    </div>
  );
}
