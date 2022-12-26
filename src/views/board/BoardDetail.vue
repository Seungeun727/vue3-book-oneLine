<template>
  <div class="container">
    <div
      v-for="post in state.posts"
      :key="post.board_no"
      class="content">
      <div class="content-title">
        <span>{{ post.board_title }}</span>
      </div>
      <div
        class="content-profile">
        <div class="profile-img">
          <FontAwesomeIcon 
            :icon="['fas', 'user']" />
        </div>
        <div  
          class="profile-user">
          <span class="user-info">
            {{ post.users_user_id }}
          </span>
          {{ post.createdAt }}
        </div>
      </div>
      <div class="content-text">
        {{ post.board_text }}
      </div>
      <div class="btn-group">
        <BoardDetailButton
          :post-id="post.users_user_id" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import BoardDetailButton from '@/components/board/BoardDetailButton.vue';
export default {
  components: {
    BoardDetailButton,
  },  
  props: {
    id: {
      type: Number,
      default: 1,
    },
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    
    const postId = parseInt(route.params.id);
    const state = reactive({
      posts: computed(() => store.state.board.post)
    });
    store.dispatch('board/getUserPost', { postId });

    return {
      state,
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 1200px;
  height: auto;
  padding-top: 70px;
  position: absolute;
  left: 20%;
}

.content {
  width: 900px;
  height: 500px auto;
  border: 1px solid #ebdef3;
  border-radius: 20px;
  margin-left: 150px;
  color: $font-color;
  padding: 30px;
  font-size: 18px;
  font-weight: 500;

  .content-text {
    padding-top: 30px;
    height: 350px;
  }
  .content-title {
    font-size: 2rem;
    margin-bottom: 10px;
  }
}

.content-profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: $white;
  .profile-img {
    background-color: #ebdef3;
    width: 35px;
    height: 35px;
    border-radius: 15px;
    text-align: center;
  }
}
.profile-user {
  padding-left: 12px;
  color: $light-gray;
  font-size: 18px;
  
  .user-info {
    display: block;
    font-weight: 550;
    margin-bottom: 3px;
    color: $font-color;
  }
}
</style>