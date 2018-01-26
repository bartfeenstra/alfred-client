import Devices from './Devices'

const routes = [
    {
        path: '/devices',
        component: Devices,
        alias: '/',
    },
    {
        path: '*',
        component: Devices,
    }
]

export default routes
