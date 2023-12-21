import React from 'react'

//! Props(properties)
// : 부모 컴포넌트로부터 자식 컴포넌트로 데이터를 전달할 때 사용
// props는 자식 컴포넌트에서 읽기 전용 (변경 x)

type DataType = {
  name: string;
}

// 자식 컴포넌트
// : 부모 컴포넌트로부터 데이터를 받아 출력
function Data(props: DataType) {
  return(
    <div>
      안녕하세요 {props.name}
    </div>
  )
}

//? 여러개의 Props 구조를 비구조화 할당
// 비구조화 할당(구조 분해)
// : 객체나 배열에서 해당 묶음 구조를 풀이해서 작성

type HelloType = {
  name: string;
  color: string
}
function Hello({name, color}: HelloType) {
  return <div style={{color: color}}>
    안녕하세요, {name}</div>
}

//? defaultProps로 기본값 설정
// : 컴포넌트에 props를 지정하지 않았을 때 기본적으로 사용할 값 설정
Hello.defaultProps = {
  name: '이름없음'
}

//? Props.children
// : 컴포넌트 태그 사이에 위치한 내용을 전달받기 위해 사용되는 props

type ChildrenType = {
  children: React.ReactNode;
}
// 다른 컴포넌트를 감싸는 Wrapper 컴포넌트
const Wrapper: React.FC<ChildrenType> = ({ children }) => {
  const style = {
    border: '2px solid black',
    padding: '16px'
  };

  return(
    <div style={style}>
      {children}
    </div>
  )
}

// 부모 컴포넌트
// : 자식 컴포넌트의 속성으로 데이터 전달
export default function Props01() {
  return (
    <Wrapper>
      <Data name='이승아' />
      <Hello color='pink' />
    </Wrapper>
  )
}
