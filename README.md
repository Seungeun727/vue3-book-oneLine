# vue3-book-oneline
<a href="https://velog.io/@seondal"><img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat-round&logo=Vue.js&logoColor=white"/></a>
<a href="https://velog.io/@seondal"><img src="https://img.shields.io/badge/Node.js-339933?style=flat-round&logo=Node.js&logoColor=white"/></a>
<a href="https://velog.io/@seondal"><img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-round&logo=MySQL&logoColor=white"/></a>
<a href="https://velog.io/@seondal"><img src="https://img.shields.io/badge/JSONWebTokens-000000?style=flat-round&logo=JSONWebTokens&logoColor=white"/></a>

- node 17.9.1버전 사용했습니다.

<br />

## 프로젝트 개요
- 책을 읽고 한줄평을 남기는 페이지입니다.
- 페이지의 게시판과 회원가입/로그인을 중점으로 기능을 작성합니다.

<br />

## 프로젝트 구조
<details>
<summary>프로젝트 설치</summary>
<div>
<br />

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
</div>
</details> 

<details>
<summary>프로젝트 구조 이미지</summary>
<div>
<img src="https://user-images.githubusercontent.com/87456904/199190724-24fd03b2-db4f-4846-bcf0-6599fe4c968f.png" width="450" height="350"/>
</div>
</details> 

<br />

## 프로젝트 기능

### 🔎 게시판 
| 기능 | 설명 |
|------ |-----|
| 게시판 | - 게시판의 기본 기능(등록, 수정, 삭제) <br /> - 특정 사용자의 상세 페이지 반영 <br /> 게시물 유저 권한에 따른 수정, 삭제 hidden/show 처리
<br />

### 🔎 회원관리
| 기능 | 설명 |
|-----|-----|
| 회원가입 | - 회원가입 vee-validate로 유효성 검증, 필드 메시지 활성화 <br /> - 회원가입 성공 시 모달로 알림 추가 
| 로그인   | - 로그인 vee-validate 유효성 검증 추가 <br /> - JWT accessToken 사용자 인증 <br /> - 로그아웃 추가
| 마이페이지 | - 프로필 기본 정보 (이름, 이메일) 마스킹 처리, 유저가 작성한 게시물 조회  <br /> - 회원정보 (사용자 이름) 수정 <br />

<br />

## 💡프로젝트 새로 배운 점 
<br />

## ✏️회원정보 수정

### Props와 Emit 개념
- Props: 부모-자식 컴포넌트 관계에서 자식 컴포넌트는 부모 컴포넌트의 데이터 참조를위해 Props를 지정한다.
- Emit: Props 데이터 갱신 혹은 자식 컴포넌트의 데이터를 전달할 때 사용한다.

## 💡해결한 방식

<details>
<summary>회원정보편집 모달(자식 컴포넌트)</summary>
<div>
  
```javascript
<template>
  <MyPageModalEdit 
    :user-info="state.userInfo"  // props: 회원정보를 전달하는 객체
    @update="updateUserInfo" />  
</template>

<script>
export default {
  setup() {
    const updateUserInfo = (updateData) => {
      state.userInfo.user_name = updateData.name;
    };
    return {
      updateUserInfo
    };
  }
}
</script>
```
- 위 코드는 부모 컴포넌트로 props는 자식 컴포넌트에 전달하기 위한 데이터이다.
- `props를 받은 자식 컴포넌트에서 데이터가 변경된다면 꼭 emit으로 변경여부를 알려야한다`.
- @update는 emit으로 자식 컴포넌트에서 변경된 데이터를 updateUserInfo 함수로 받게 된다.
</div>
</details> 


<details>
<summary>회원정보편집 모달(자식 컴포넌트)</summary>
<div>
  ```javascript
<template>
  <button 
    type="button"
    @click="onSubmit({id, name, email})">
    변경
  </button>
</template>

<script>
import authApi from '@/api/auth';
export default {
  setup() {
    const onSubmit = (formData) => {
      authApi.updateUserInfo(userData)
      .then((res) => {
        context.emit('update', userData);   // 회원정보 요청 성공 후 부모컴포넌트로 갱신된 데이터 전달.
      })
      .catch((err) => {
        console.log("updateUserInfo fail", err);
      });
    };
    return {
      onSubmit
    };
  }
}
</script>
- 사용자가 회원정보 수정 버튼 클릭 시 axios로 회원정보 api요청이 수행된다.
- 사용자의 api 요청이 성공 시 부모 컴포넌트로 갱신된 데이터를 emit으로 전달한다.
- 위 방법으로 변경된 데이터를 새로고침하지 않아도 사용자가 변경된 필드의 값을 확인한다.
</div>
</details>  