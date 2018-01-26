import Alfred from './Alfred'

class VueAlfred {
    install(vue, options) {
        vue.$alfred = new Alfred(options['baseUrl'])
    }

}

export default VueAlfred