<template>

    <div class="container">

        <div class="columns is-centered">

            <div class="column">

                <div class="has-text-centered">

                    <h2 class="title">Current Camera</h2>
                    <code v-if="device">{{ device.label }}</code>
                    <div class="border">
                        <web-cam
                            ref="webcam"
                            :device-id="deviceId"
                            width="100%"
                            @started="onStarted"
                            @stopped="onStopped"
                            @error="onError"
                            @cameras="onCameras"
                            @camera-change="onCameraChange"
                        />
                    </div>

                </div>

            </div>

        </div>

        <div class="columns is-centered">

            <div class="column">

                <div class="has-text-centered">

                    <select v-model="camera">
                        <option>-- Select Device --</option>
                        <option
                            v-for="device in devices"
                            :key="device.deviceId"
                            :value="device.deviceId"
                            >{{ device.label }}</option>
                    </select>
                   
                </div>

            </div>

             <div class="column">

                <div class="has-text-centered">

                    <b-button @click="onCapture">Capture Photo</b-button>
                    <b-button @click="onStop">Stop Camera</b-button>
                    <b-button @click="onStart">Start Camera</b-button>

                </div>

            </div>
            
        </div>

         <div class="columns is-centered">

            <div class="column">

                <div class="has-text-centered">

                    <h2 class="title">Captured Image</h2>
                    <figure class="figure">
                        <img id="CapturedImage" alt="Captured Image" :src="img" class="img-responsive" />
                    </figure>

                </div>

            </div>

        </div>

    </div>

</template>

<script>

import { WebCam } from 'vue-web-cam';

export default {

    components: {
        WebCam
    },

    data() {
        return {
            img: '/no_image_available.png',
            camera: null,
            deviceId: null,
            devices: []
        };
    },

    computed: {
        device: function() {
            return this.devices.find(n => n.deviceId === this.deviceId);
        }
    },

    watch: {
        camera: function(id) {
            this.deviceId = id;
        },
        devices: function() {
            // Once we have a list select the first one
            const [first, ,] = this.devices;
            if (first) {
                this.camera = first.deviceId;
                this.deviceId = first.deviceId;
            }
        }
    },

    methods: {
        onCapture() {
            this.img = this.$refs.webcam.capture();
        },
        onStarted(stream) {
            console.log("On Started Event", stream);
        },
        onStopped(stream) {
            console.log("On Stopped Event", stream);
        },
        onStop() {
            this.$refs.webcam.stop();
        },
        onStart() {
            this.$refs.webcam.start();
        },
        onError(error) {
            console.log("On Error Event", error);
        },
        onCameras(cameras) {
            this.devices = cameras;
            console.log("On Cameras Event", cameras);
        },
        onCameraChange(deviceId) {
            this.deviceId = deviceId;
            this.camera = deviceId;
            console.log("On Camera Change Event", deviceId);
        },
        saveImage() {
            const capturedImage = document.getElementById('CapturedImage');
            const imageData = this.$getBase64Image(capturedImage);
            localStorage.setItem('captured_image', imageData);
        },
    }

}

</script>

<style scoped lang="scss">
    @import '~assets/styles/main.scss';
</style>
