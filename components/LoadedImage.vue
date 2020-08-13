<template>

    <div class="container">

        <div class="columns is-centered">

            <div class="column">

                <div class="has-text-centered">

                    <img alt="Captured Image" id="LoadedImage" :src="image_src" />

                </div>

            </div>

        </div>

    </div>

</template>

<script>

export default {

    data() {
        return {
            image_src: '/no_image_available.png',
        }
    },

    mounted() {
        this.loadImage();
    },

    methods: {

        loadImage() {

            const capturedImage = localStorage.getItem('captured_image');

            console.log('Captured Image Check');

            if (capturedImage) {

                console.log('Image found in localStorage');

                const loadedImage = document.getElementById('LoadedImage');
                loadedImage.src = "data:image/png;base64," + capturedImage;
            }

        },

    },

}

</script>

<style scoped lang="scss">
    @import '~assets/styles/main.scss';
</style>
