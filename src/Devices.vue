<template>
    <page :title="title">
        <div class="Devices">
            <loading v-if="devices==null"></loading>
            <div v-if="devices!=null" v-for="device in devices">
                <device :initialDevice="device"></device>
            </div>
        </div>
    </page>
</template>

<script>
    import Page from './Page'
    import Device from './Device'
    import Loading from './Loading'
    import Vue from 'vue'

    export default {
        extends: Page,
        asyncComputed: {
            devices: () => Vue.$alfred.fetch('/devices'),
        },
        props: {
            title: {
                default: () => 'Devices',
            },
        },
        components: {
            Page,
            Device,
            Loading,
        },
    }
</script>
