<template>
  <div>
    <div v-if="$store.state.auth">
      <p>
        You are authenticated. You can see the
        <NuxtLink to="/admin/order">
          order page
        </NuxtLink>!
        <NuxtLink to="/admin/profile">
          profile page
        </NuxtLink>!
      </p>
      <button @click="logout">
        Logout
      </button>
    </div>
    <p v-else>
      Please
      <NuxtLink to="/login">
        login
      </NuxtLink>.
    </p>
  </div>
</template>

<script>
    const Cookie = process.client ? require('js-cookie') : undefined

    export default {
      name: "index",
      methods: {
        logout () {
          Cookie.remove('auth')
          this.$store.commit('setAuth', null)
        }
      }
    }
</script>

<style scoped>

</style>
