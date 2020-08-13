<template>

    <div class="container">

        <div class="columns is-centered">

            <div class="column">

                <div class="has-text-centered">

                    <div v-if="errorStr">
                        <h3 class="title">Sorry, but the following error occurred: {{errorStr}}</h3>
                    </div>
                    
                    <div v-if="gettingLocation">
                        <h3 class="title">Getting your location...</h3>
                    </div>
                    
                    <div v-if="location">
                        <h3 class="title">Your location data is {{ location.coords.latitude }}, {{ location.coords.longitude}}</h3>
                    </div>

                </div>

            </div>

        </div>

    </div>

</template>

<script>

export default {

    data() {
        return {
            location: null,
            gettingLocation: false,
            errorStr: null,
        }
    },

    mounted() {
        this.getUserLocation();
    },

    methods: {

        getUserLocation() {

            //do we support geolocation
            if(!("geolocation" in navigator)) {
                this.errorStr = 'Geolocation is not available.';
                return;
            }

            this.gettingLocation = true;
            // get position
            navigator.geolocation.getCurrentPosition(pos => {
                this.gettingLocation = false;
                this.location = pos;
            }, err => {
                this.gettingLocation = false;
                this.errorStr = err.message;
            });

        },

    },

}

</script>

<style scoped lang="scss">
    
</style>
