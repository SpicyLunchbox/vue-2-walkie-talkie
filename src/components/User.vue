<template>
  <div>
    <!-- makes the user data available to any other component that consumes the user component -->
    <slot name="user" :user="user"></slot>
  </div>
</template>

<script>
import { auth } from '../firebase'
import { ref } from '@vue/composition-api'

export default {
  // lifecycle hook
  setup() {
    const user = ref(null)
    const unsubscribe = auth.onAuthStateChanged(
      firebaseUser => user.value = firebaseUser
    )
    return {
      user,
      unsubscribe,
    }
  },
  // unsubscribe from user state whenever the component is destroyed
  destroyed() {
    this.unsubscribe()
  }
}
</script>