import React from 'react'

interface Goal {
  id: number;
  title: string;
  explaination: string;
  active: boolean;
}

type GoalProps = {
  goals: Goal[]
  // 삭제 버튼 클릭 시 onRemove함수로 해당 버튼이 있는 배열의 id가 전달됨
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

export default function GoalList({ goals, onRemove, onToggle }: GoalProps) {
  return (
    <>
      <ul>
        {/* title - explaination */}
        {goals.map((goal) => (
          <div>
            <span
              key={goal.id}
              style={{
                cursor: "pointer",
                // active가 true면 글자색 green,false면 글자색 black
                color: goal.active ? 'green' : 'black'
              }}
              onClick={() => onToggle(goal.id)}
              >
              {goal.title} - {goal.explaination}
            </span>
            <button onClick={() => onRemove(goal.id)}>삭제</button>
          </div>
        ))}
      </ul>
    </>
  );
}