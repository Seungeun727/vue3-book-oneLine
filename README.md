# vue3-book-oneline
<a href="https://velog.io/@seondal"><img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat-round&logo=Vue.js&logoColor=white"/></a>
<a href="https://velog.io/@seondal"><img src="https://img.shields.io/badge/Node.js-339933?style=flat-round&logo=Node.js&logoColor=white"/></a>
<a href="https://velog.io/@seondal"><img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-round&logo=MySQL&logoColor=white"/></a>

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
|-----|-----|
| 게시판 | - 게시판의 기본 기능(등록, 수정, 삭제)
<br />

### 🔎 회원관리
| 기능 | 설명 |
|-----|-----|
| 회원가입 | - 회원가입 vee-validate로 유효성 검증 및 필드 메시지 활성화 <br /> - 회원가입 성공 시 모달로 알림 추가 