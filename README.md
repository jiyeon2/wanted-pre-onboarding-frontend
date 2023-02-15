# 원티드 프리온보딩 프론트엔드 - 선발 과제

투두 앱 만들기
![스크린샷, 2023-02-15 18-19-50 1](https://user-images.githubusercontent.com/18395475/218989852-4e546feb-7079-4c6d-b826-ff4bf2b84efa.jpg)

## 데모

[배포 링크](https://fancy-lamington-6ab8f1.netlify.app/)

---

## 실행방법

```bash
npm install
npm start
```

`http://localhost:3000/` 에서 실행됩니다

---

## 사용 라이브러리

- React router : 주소별로 표시할 컴포넌트를 연결하기 위해 사용
- Axios : HTTP 요청을 쉽게 하기 위해 사용
- Chakra-ui : ui 라이브러리

---

[과제 지시사항](https://github.com/walking-sunset/selection-task#api)

1. 로그인 / 회원가입

- [x] 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현
  - 이메일은 `@` 문자 포함
  - 비밀번호는 8자 이상
- [x] 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 /signin 경로로 이동
- [x] 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동
- [x] 로그인 여부에 따른 리다이렉트 처리

2. TODO LIST

- [x] /todo경로에 접속하면 투두 리스트의 목록을 볼 수 있다 (작성된 투두가 없는 경우 없다는 문구가 표시됨)
- [x] 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 생성
- [x] TODO의 체크박스를 통해 완료 여부를 수정할 수 있다
- [x] 투두 리스트의 삭제 기능
- [x] 투두 리스트의 수정 기능
