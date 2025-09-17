# 프로젝트명

한 입 크기로 잘라먹는 Next.js 인강 정리

## section02 Page Router

Page Router에 대한 내용을 실습합니다.

1. 경로

- []와 useRouter를 사용하여 쿼리 값을 가져온다.
- [...id] : .../id/id2/id3 .. 뒤에 여러개의 id를 가져올 수 있다. (=Catch All Segment)
- [[...id]] : .../ index 파일까지 범용적으로 쓰고 싶다면 대괄호를 한번 더 감싼다. ( =Optional Catch All Segment)
