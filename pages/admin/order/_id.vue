<template>
    <h1>Id_value: {{ id }}</h1>
</template>

<script>
    export default {
        name: "_id.vue",
        data () {
          return { id: this.validate() }
        },
        validate({params}) {
          // Должен быть числом
          return /^\d+$/.test(params.id)
        }
    }
</script>

<style scoped>

</style>
