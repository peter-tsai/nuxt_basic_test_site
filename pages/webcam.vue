<template>

    <div class="container">

        <browser-webcam />

    </div>

</template>

<script>

export default {
    layout: 'webpage',

    components: {
        'browser-webcam': process.client && Camera
    },

}

</script>

<style scoped lang="scss">
    
</style>
