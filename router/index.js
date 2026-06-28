import { html, createRouter, lazyLoad } from "yandom";
import Loader from "../src/components/Loader.js";

const router = createRouter({
    prefix: '',
    element: 'a',
    titleId: 'title',
    cacheExp: 0,
    placeholder: Loader
})

router.route({
    uri: '/',
    title: 'Ronel\'s Portfolio',
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
    title: 'Ronel\'s Portfolio - Previous Works',
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
    title: 'Ronel\'s Portfolio - Certificates',
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
        name: 'loader',
        hook: 0,
        invalidAfter: 0,
        remember: true,
    }
})

router.route({
    uri: '/test',
    title: 'Ronel\'s Portfolio - Certificates',
    component: Loader,
    static: true,
    cache: {
        name: 'loader',
        hook: 0,
        invalidAfter: 0,
        remember: true,
    }
})

router.route({
    uri: '/3d',
    title: 'Ronel\'s Portfolio - 3D',
    component: lazyLoad(() => import("../src/Pages/_3D.js")),
    static: true,
    cache: {
        name: '3d',
        hook: 0,
        invalidAfter: 0,
        remember: true,
    }
})

export default router;