import { create, lazyLoad } from "../dsl-vdom/extensions/router.js";

const router = create({
    prefix: '',
    element: 'button',
    titleId: 'title',
    cacheExp: 0,
})

export default router;