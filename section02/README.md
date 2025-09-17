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
