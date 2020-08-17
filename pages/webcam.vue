<template>

    <div class="container">

        <browser-webcam />

    </div>

</template>

<script>

export default {
    layout: 'webpage',

    components: {
        'browser-webcam': process.client && import('~/components/Camera')
    },

}

</script>

<style scoped lang="scss">
    
</style>
