<template>
    <p>Welcome signed in user! Here's your content.</p>
</template>

<script>
    export default {
        middleware: 'auth'
    }
</script>