<template>
  <div>
    <table>
      <tr>
        <th>번호</th>
        <th>작성자</th>
        <th>제목</th>
        <th>저자</th>
        <th>텍스트</th>
        <th>등록일</th>
      </tr>
      <tr 
        v-for="post in posts"
        :key="post.board_no">
        <td>{{ post.board_no }}</td>
        <td>{{ post.user_name }}</td>
        <td>
          <router-link
            :to="{ name: 'BoardDetail', params: { id: `${post.board_no}`}}">
            {{ post.board_title }}
          </router-link>
        </td>
        <td>{{ post.board_author }}</td>
        <td>{{ post.board_text }}</td>
        <td>{{ post.createdAt }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'BoardItem',
  props: {
    posts: {
      type: Object,
      default: () => {}
    }
  },
}
</script>

<style lang="scss" scoped>
table {
  text-align: center;
  width: 100%;
  border-collapse: collapse;
}

table th:first-child,
table td:first-child { 
  border-left: 0;
  
}

table th:last-child,
table td:last-child { 
  border-right: 0;
}

th, td {
  padding: 10px;
  border-bottom: 1px solid black;
  border-color: map-get($gray-colors, color1);
}

th {
  background-color: map-get($gray-colors, color1);
  color: $font-color;
  font-weight: 700;
}

a {
  width: 0;
  text-decoration: none;
  color: $font-color;
  font-weight: 550;
}

a:hover {
  text-decoration: underline;
}
</style>