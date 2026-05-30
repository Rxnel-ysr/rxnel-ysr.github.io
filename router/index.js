// @ts-check
import { create, lazyLoad } from "../DSL-VDOM/extensions/router.js";

const router = create({
    prefix: '',
    element: 'button',
    titleId: 'title',
    cacheExp: 0,
})

export default router;