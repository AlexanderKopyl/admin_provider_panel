<template>
    <h1>Id_value: {{ id }}</h1>
</template>

<script>
  export default {
    name: "order_id",
    validate({params}) {
      return /^\d+$/.test(params.id)
    },
    data() {
      return {id: this.$router.currentRoute.params.id}
    }

  }
</script>

<style scoped>

</style>
