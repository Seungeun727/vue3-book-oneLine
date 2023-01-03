<template>
  <div class="table-container">
    <tr> 
      <td>{{ post.board_no }}</td>
      <td>
        <router-link
          :to="{ name: 'BoardDetail', params: { id: `${post.board_no}`}}">
          {{ post.board_title }}
        </router-link>
      </td>
      <td>{{ post.users_user_id }}</td>
      <td>{{ post.createdAt }}</td>
    </tr>
  </div>
</template>

<script>
export default {
  name: 'BoardItem',
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },
}
</script>

<style lang="scss" scoped>
.table-container {
  width: 1200px;
  height: 500px auto;
}

tr {
  display: flex;
  align-items: center;
}

td {
  line-height: 35px;
  border-bottom: 1px solid #eceaea;
  width: 300px;
  height: 30px;
  padding: 10px;
  color: $font-color;
  text-align: center;
  border-left: none;
  border-right: none;
}

a:hover {
  text-decoration: underline;
  color: $main-color;
}
</style>