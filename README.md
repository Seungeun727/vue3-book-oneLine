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
| 게시판 | - 게시판의 기본 기능(등록, 수정, 삭제) <br /> - 특정 사용자의 상세 페이지 반영
<br />

### 🔎 회원관리
| 기능 | 설명 |
|-----|-----|
| 회원가입 | - 회원가입 vee-validate로 유효성 검증, 필드 메시지 활성화 <br /> - 회원가입 성공 시 모달로 알림 추가 
| 로그인   | - 로그인 vee-validate 유효성 검증 추가 <br /> - JWT accessToken 사용자 인증
| 마이페이지 | - 프로필 기본 설정, 유저가 작성한 게시물 조회

<br />

## 💡프로젝트 새로 배운 점 
<br />

### ✏️ Composition API
> [VUE 공식문서](https://vuejs.org/guide/extras/composition-api-faq.html#what-is-composition-api)에서 Composition API는 옵션 대신 가져온 함수를 사용하여 Vue 구성요소를 있게 해주는 API 세트이다.

<br />

1. 필요성
- setup() 내 변수, 함수를 모두 작성하여 가독성과 재사용에 용이함.

2. 사용 방식
- script setup과 setup()방식이 존재한다.
<br />

| 개념 | 의미|
|---|:---:|
| script setup | return 필요 없다.
| `setup()` | - Option API와 다르게 this 사용하지 못한다. <br /> - setup()의 인자는 props와 context가 있다. <br /> - setup() 내 변수, 함수는 return 반환해야 한다.

<details>
<summary>setup() 선언 방식</summary>
<div>

```javascript
import { ref, reactive } from 'vue';
export default {
  setup() {
    // 변수 선언
    const isShow = ref('');  // ref: 원시값
    const state = reactive({ isShow: '' });  // reactive: 객체, 배열

    // 함수 선언
    const visibleContent = () => {
      isShow.value = true;     // ref를 사용
      state.isShow = true;  // reactive를 사용
    };

    return {
      isShow,
      state,
      visibleContent
    };
  }
}
```
</div>
</details> 