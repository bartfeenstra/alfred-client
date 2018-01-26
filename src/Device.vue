<template>
    <div class="Device">
        <h2>{{ device.label }} (<code>{{ device.id }}</code>)</h2>
        <label :for="'device-label-' + device.id">Label</label>
        <input type="text" name="label" :id="'device-label-' + device.id" v-model="device.label" @change="updateDevice()"/>
        <div v-if="device.powered != null">
            <label :for="'device-powered-' + device.id">Powered</label>
            <input type="checkbox" name="powered" :id="'device-powered-' + device.id" v-model="device.powered" @change="updateDevice()"/>
        </div>
        <div v-if="device.luminosity != null">
            <label :for="'device-luminosity-' + device.id">Luminosity</label>
            <input type="range" name="luminosity" :id="'device-luminosity-' + device.id" v-model.number="device.luminosity" min="0.000" max="1.000" step="0.001" @change="updateDevice()"/>
        </div>
        <div v-if="device.color != null">
            <label :for="'device-color-' + device.id">Color</label>
            <swatches v-model="device.color" :colors="allowedColors" shapes="circles" row-length="6" swatch-size="36" :swatch-style="{ border: '2px #e0e0e0 solid',}" @input="updateDevice()"></swatches>
        </div>
    </div>
</template>

<script>
    import Swatches from 'vue-swatches'
    import Vue from 'vue'

    export default {
        name: 'device',
        props: ['initialDevice'],
        data() {
            return {
                device: this.initialDevice,
                allowedColors: [
                    '#F44336',
                    '#E91E63',
                    '#9C27B0',
                    '#673AB7',
                    '#3F51B5',
                    '#2196F3',
                    '#03A9F4',
                    '#00BCD4',
                    '#009688',
                    '#4CAF50',
                    '#8BC34A',
                    '#CDDC39',
                    '#FFEB3B',
                    '#FFC107',
                    '#FF9800',
                    '#FF5722',
                    '#795548',
                    '#9E9E9E',
                    '#607D8B',
                    '#ffffff'
                ],
            }
        },
        components: {
            Swatches,
        },
        methods: {
            updateDevice: function() {
                Vue.$alfred.fetch('/devices/' + this.device.id, 'PUT', this.device);
            }
        },
    }
</script>

<style>
    .Device {
        background-color: #333333;
        display: inline-block;
        padding: 0.5em;
        margin: 0.5em;
    }
    .Device h2 {
        margin-top: 0;
    }
</style>

