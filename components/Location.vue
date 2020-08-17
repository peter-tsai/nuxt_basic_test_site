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

const geolocator = require('geolocator');

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

            const options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumWait: 10000,     // max wait time for desired accuracy
                maximumAge: 0,          // disable cache
                desiredAccuracy: 30,    // meters
                fallbackToIP: true,     // fallback to IP if Geolocation fails or rejected
                addressLookup: false,    // requires Google API key if true
                timezone: false,         // requires Google API key if true
                map: "map-canvas",      // interactive map element id (or options object)
                staticMap: false         // get a static map image URL (boolean or options object)
            };

            geolocator.locate(options, function (err, location) {
                
                if (err) {
                    this.errorStr = err.message;
                    return console.log(err);
                }
                
                console.log(location);

                this.gettingLocation = false;
                this.location = location;

            });

            /*

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

            */



        },

    },

}

</script>

<style scoped lang="scss">
    
</style>
