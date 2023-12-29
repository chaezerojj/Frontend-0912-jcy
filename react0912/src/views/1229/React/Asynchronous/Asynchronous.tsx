import React, { useEffect, useState } from "react";

// jsonplaceholder의 post 데이터를 비동기함수로 가져오기
// - 해당 상태를 관리
// - 화면에 렌더링

// 각각의 게시물의 타입 정의
type Post = {
  id: number;
  title: string;
  body: string;
};

export default function Asynchoronous() {
  // 게시물 상태 및 초기값 지정([])
  const [posts, setPosts] = useState<Post[]>([]);

  // 로딩 상태 관리
  const [loading, setLoading] = useState<boolean>(true);

  // 에러 상태 관리
  const [error, setError] = useState<string | null>(null);

  //! 데이터를 불러오는 비동기함수
  async function fetchPost() {
    try {
      // API 통신
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // 응답이 정상이 아니라면 오류 발생
      if (!response.ok) {
        // 강제로 에러 발생
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      // 응답이 정상적으로 존재한다면 json 형태로 데이터 반환
      const data = await response.json();
      // 데이터 상태 업데이트
      setPosts(data);
      // 로딩 상태 업데이트
      setLoading(false);
    } catch (error) {
      // 에러 상태 업데이트
      setError((error as Error).message);
      // 로딩 상태 업데이트
      setLoading(false);
    }
  }

  useEffect(() => {
    // 컴포넌트가 마운트될 때 데이터 불러오기
    fetchPost();
  }, []);

  // 로딩 중 화면 표시
  if (loading) {
    return <div>Loading Posts</div>;
  }

  // 에러 발생 시 화면 표시
  if (error) {
    return <div>Error: {error}</div>;
  }

  // 게시물 목록 렌더링
  return (
    <div>
      <h3>Posts</h3>
      {/*  
      순서가 없는 태그 내에 
      h4 태그에 post의 제목을
      p태그에 body태그로 작성
      */}
      <ul>
        <h4>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </h4>
      </ul>
    </div>
  );
}
