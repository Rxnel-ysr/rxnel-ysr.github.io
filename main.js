import { createRoot, hmr } from "./dsl-vdom/core/vdom.hooks.js";
import App from "./src/App.js";
import env from "./env.json" with {type: 'json'}
// import router from "./router/index.js";

const app = createRoot("#app");
app.render(App);

hmr({
    ws: {
        port: 4040,
    },
    main: "/src/App.js",
}, app, !env.deploy.prod);
