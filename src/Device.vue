<template>
    <div class="Device">
        <h2>{{ device.label }} (<code>{{ device.id }}</code>)</h2>
        <label :for="'device-label-' + device.id">Label</label>
        <input type="text" name="label" :id="'device-label-' + device.id" v-model="device.label"/>
        <div v-if="device.powered != null">
            <label :for="'device-powered-' + device.id">Powered</label>
            <input type="checkbox" name="powered" :id="'device-powered-' + device.id" v-model="device.powered"/>
        </div>
        <div v-if="device.luminosity != null">
            <label :for="'device-luminosity-' + device.id">Luminosity</label>
            <input type="range" name="luminosity" :id="'device-luminosity-' + device.id" v-model="device.luminosity" min="0.000" max="1.000" step="0.001"/>
        </div>
        <div v-if="device.color != null">
            <label :for="'device-color-' + device.id">Color</label>
            <swatches v-model="device.color" colors="material-basic" shapes="circles"></swatches>
        </div>
    </div>
</template>

<script>
    import Swatches from 'vue-swatches'

    export default {
        name: 'device',
        props: ['initialDevice'],
        data() {
            return {
                device: this.initialDevice
            }
        },
        computed: {
            hexColor: {
                // get: () => {return {hex: this.device.color}},
                // set: (hexColor) => this.device.color = hexColor.hex,
                get: () => {return {hex: '#000000'}},
                set: (hexColor) => 9,
            }
        },
        components: {
            Swatches,
        }
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

