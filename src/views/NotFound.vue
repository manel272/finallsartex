<template>
    <div>
        <h1>404</h1>
        <p>Page not found</p>
    <button @click="goHome">Go Home</button>
    </div>
</template>
<script>
export default {
    name: 'NotFound',
    methods: {
        goHome() {
            this.$router.push({ name: 'login' })
        }
    }
}

</script>