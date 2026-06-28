import { createRoot, hmr } from "yandom";
import App from "./src/App.js";
import env from "./env.json" with { type: "json" };
import router from "./router/index.js";

const app = createRoot("#app");
app.use(router);
app.render(App);

hmr(
    {
        ws: {
            port: env.app.hmr.port,
        },
        main: "/src/App.js",
    },
    app,
    !env.deploy.prod && env.app.hmr.enabled,
);
