# 프로젝트명

한 입 크기로 잘라먹는 Next.js 인강 정리

## section02 Page Router

Page Router에 대한 내용을 실습합니다.

1. 경로

- []와 useRouter를 사용하여 쿼리 값을 가져온다.
- [...id] : .../id/id2/id3 .. 뒤에 여러개의 id를 가져올 수 있다. (=Catch All Segment)
- [[...id]] : .../ index 파일까지 범용적으로 쓰고 싶다면 대괄호를 한번 더 감싼다. ( =Optional Catch All Segment)

2. 네비게이팅

- a태그는 CSR방식으로 이동시키기 때문에 (매번 서버에 새로운 페이지를 요청함) next 내장객체인 Link 태그를 사용한다.
- 프로그래매틱한 페이지 이동(Programmatic Navigation) : 사용자가 링크를 직접 클릭했을때 이동하는 것이 아니라 특정 버튼이 클릭되었거나, 특정 조건이 만족했을때 함수 내에서 이동시키는 방법
  ex) 함수 내부에서 조건 만족시 페이지 이동

3. 프리페칭

- 현재 사용자가 보고 있는 페이지 내에서 이동할 가능성이 있는 모든 페이지의 js bundel을 미리 불러오는 것 => 빠른 페이지 이동을 제공함.
- Link 태그로 연결된 페이지만 프리페칭이 이루어지지만, 프로그래매틱한 페이지도 쓰고 싶다면 `router.prefetch`를 사용한다.
- Link 태그 중 프리패치를 원하지 않는 페이지가 있다면 `prefetch={false}`를 추가하면 된다.
  ```
  // 마운트될때 프리패칭을 해주고 싶다면 router.prefetch를 사용한다.
  useEffect(() => {
    router.prefetch("/book");
  }, []);
  ```

4. 스타일

- .css파일은 App 파일이 아닌 곳에서 불러올 수 없다.(css의 클래스명이 겹치는 것을 원천 차단 시키기 위해) 그렇기에 Next에서는 CSS Module을 사용한다.
- CSS Module은 유니크한 클래스명으로 자동 변환된다.

5. 글로벌 레이아웃

- \_app.tsx에서 글로벌 레이아웃, 스타일링을 해준다.

6. 페이지별 레이아웃

- Page.getLayout과 같이 필요한 페이지에 메서드를 정의하고 app 컴포넌트에서 불러와서 적용시킨다. getLayout이 없는 페이지가 있을 수 있으므로 `??`연산자를 사용하여 예외처리를 한다.

7. 사전 렌더링과 데이터 페칭

- 리액트는 컴포넌트 마운트 이후에 데이터 페칭이 이루어진다. 그렇기 때문에 데이터 요청 시점이 느려지게 되는 단점이 발생한다.
- Next는 사전 렌더링 중에 데이터 페칭까지 진행하기 때문에 리액트보다 데이터 요청 시간이 앞당겨지게 된다. 그로인해 사용자는 추가 데이터 로딩 없이 데이터 페칭이 완료된 페이지를 바로 볼 수 있다.
- 만약 사전 렌더링 과정 중 데이터 페칭의 용량이 크거나 느려질 경우, 빌드타임에 렌더링을 맞춰두는 설정을 할 수 있다. = SSG
- Next에는 SSR, SSG, ISR이 존재한다.

8. SSR

- 가장 기본적인 사전 렌더링 방식으로 요청이 들어올 때 마다 사전 렌더링을 진행한다.
- `getServerSideProps` 함수를 사용하면 SSR로 내보낼 수 있다. 컴포넌트보다 먼저 실행되어서 컴포넌트에 필요한 데이터를 불러오는 함수이다.
  type은 `InferGetServerSidePropsType`로 사용한다.

  ```
  export const getServerSideProps = () => {
  const data = "hello";

    return {
      props: {
        data,
      },
    };
  };
  ```

- getServerSideProps는 서버쪽에서 실행하기 때문에 브라우저 객체는 사용하지 못한다.
- getServerSideProps에는 context라는 매개변수를 사용하여 다양한 정보를 가져올 수 있다. (쿼리 값 등등)
