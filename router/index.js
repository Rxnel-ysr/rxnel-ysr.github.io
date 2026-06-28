import { html, createRouter, lazyLoad } from "yandom";
import Loader from "../src/components/Loader.js";

const router = createRouter({
    prefix: '',
    element: 'a',
    cacheExp: 0,
    placeholder: Loader
})

router.route({
    uri: '/',
    component: lazyLoad(() => import("../src/Pages/Homepage.js")),
    static: true,
    cache: {
        name: 'home',
        hook: 0,
        invalidAfter: 0,
        remember: true,
    }
})

router.route({
    uri: '/projects',
    component: lazyLoad(() => import('../src/Pages/Project.js')),
    static: true,
    cache: {
        name: 'projects',
        hook: 3,
        invalidAfter: 0,
        remember: true,
    }
})

router.route({
    uri: '/certificates',
    component: lazyLoad(() => import('../src/Pages/Certificate.js')),
    static: true,
    cache: {
        name: 'certificates',
        hook: 0,
        invalidAfter: 0,
        remember: true,
    }
})

router.route({
    uri: '/playground',
    title: 'Ronel\'s Portfolio - Playground',
    component: lazyLoad(() => import("../src/Pages/Playground.js")),
    static: true,
    cache: {
        name: 'playground',
        hook: 0,
        invalidAfter: 0,
        remember: true,
    }
})

export default router;