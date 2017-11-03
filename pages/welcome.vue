<template>
    <p>Welcome signed in user!</p>
</template>

<script>
    export default {
        middleware: 'auth'
    }
</script>