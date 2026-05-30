// @ts-check
import { html } from "../dsl-vdom/core/vdom.js";

const App = () => {
    return html.div({
        style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '98dvh',
        }
    },[
        html.h1("Hello, world!")
    ]);
};

export default App;