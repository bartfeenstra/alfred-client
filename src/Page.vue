<template>
    <div id="Page">
        <Slideout menu="#Page-Nav" panel="#Page-Main" :toggleSelectors="['.Page-Nav-Toggle']" easing="linear">
            <nav id="Page-Nav">
                <h2>What can I do for you?</h2>
                <ul>
                    <li>
                        <router-link :to="'foo'">Devices</router-link>
                    </li>
                    <li>
                        <a :href="openApiUrl">API browser</a>
                    </li>
                </ul>
            </nav>
            <div id="Page-Main">
                <div id="Page-Header">
                    <p class="Page-Nav-Toggle" v-if="!navSlideOut" @click="navSlideOut = true" title="Show navigation">☰</p>
                    <p class="Page-Nav-Toggle" v-if="navSlideOut" @click="navSlideOut = false" title="Hide navigation">❌</p>
                    <h1 v-if="title">{{ title }}</h1>
                </div>
                <div id="Page-Content">
                    <slot></slot>
                </div>
            </div>
        </Slideout>
    </div>
</template>

<script>
    import Slideout from 'vue-slideout'
    import Vue from 'vue'

    export default {
        name: 'page',
        data() {
            return {
                navSlideOut: false,
            }
        },
        props: {
            title: {
                type: String,
                required: true,
            },
            openApiUrl: {
                type: String,
                default: () => Vue.$alfred.baseUrl + '/about/openapi',
            },
        },
        components: {
            Slideout,
        },
    }
</script>

<style>
    #Page {
        background-color: #222222;
        color: white;
        font-family: sans-serif;
        height: 100%;
    }

    #Page-Header {
        /*padding: 1px 1em 1em 5em;*/
    }

    #Page-Header h1 {
        margin-top: 0;
    }

    .Page-Nav-Toggle {
        width: 1em;
        height: 1em;
        margin: 0;
        font-size: 2em;
        cursor: pointer;
    }

    #Page-Nav {
        background-color: black;
    }

    #Page-Nav ul {
        padding: 0;
        width: 100%;
    }

    #Page-Nav li {
        display: block;
        border-bottom: 1px solid #e0e0e0;
        width: 100%;
    }

    #Page-Nav li a, #Page-Nav li span {
        color: #ffffff;
        display: block;
        padding: 0.5em;
        text-decoration: none;
    }

    #Page-Nav li a {
        color: #ffffff;
        display: block;
        padding: 0.5em;
        text-decoration: none;
    }

    #Page-Nav li span {
        color: #aaaaaa;
        cursor: not-allowed;
    }

    #Page-Nav li a.router-link-active {
        background-color: #222222;
    }

    #Page-Nav li a:hover {
        background-color: #777777;
    }

    #Page-Main {
        padding: 0.5em;
    }

    #Page-Content {
        padding: 0.5em;
    }

    .slideout-menu {
        position: fixed;
        top: 0;
        bottom: 0;
        width: 256px;
        height: 100vh;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        z-index: 0;
        display: none;
    }

    .slideout-panel {
        position: relative;
        z-index: 1;
        will-change: transform;
        min-height: 100vh;
    }

    .slideout-open,
    .slideout-open body,
    .slideout-open .slideout-panel {
        overflow: hidden;
    }

    .slideout-open .slideout-menu {
        display: block;
    }

    /**
     * Generic, shared styling.
     */

    h1 {
        font-size: 3em;
        font-weight: normal;
    }

    h2 {
        font-size: 2em;
        font-weight: normal;
    }

    label {
        font-weight: bold;
    }

    input[type=text], textarea {
        background-color: #f0f0f0;
        border: 2px solid #e0e0e0;
        padding: 0.2em;
    }

    input[type=text]:focus, textarea:focus {
        background-color: #ffffff;
        border-color: #0099ff;
    }
</style>
