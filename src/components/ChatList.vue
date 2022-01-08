<template>
  <div>
    <button @click="createChatRoom()">Create New Chat Room</button>

    <ul>
      <li v-for="chat of chats" :key="chat.id">
        <router-link :to="{ name: 'chat', params: { id: chat.id } }">{{ chat.id }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from '../firebase'

export default {
  data() {
    return {
      chats: []
    }
  },
  // provided by vuefire
  firestore() {
    return {
      chats: db.collection('chats').where('owner', '==', this.uid)
    }
  },

  props: ['uid'],

  methods: {
    async createChatRoom() {
      const newChat = await db.collection('chats').add({
        createdAt: Date.now(),
        owner: this.uid,
        members: [this.uid]
      })

      console.log(newChat)
    }
  },

};
</script>