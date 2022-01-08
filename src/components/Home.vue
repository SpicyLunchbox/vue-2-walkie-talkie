<template>
  <div>
    <h3>Home</h3>
    <!-- allows access to the user object within User.vue -->
    <User v-slot:user="{ user }">

      <div v-if="user">
        <UserProfile :user="user" />
        <ChatList :uid="user.uid" />
      </div>
      <Login v-else />
    </User>
  </div>
</template>

<script>
import Login from './Login.vue'
import User from './User.vue'
import UserProfile from './UserProfile.vue'
import ChatList from './ChatList.vue'


export default {
  components: {
    Login,
    User,
    UserProfile,
    ChatList
  }
}
</script>