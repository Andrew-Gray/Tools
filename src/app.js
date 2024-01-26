import { createApp } from "vue";

import "./app.scss";
import App from "./App.vue";
import router from "./router";
import $events from "./helpers/events.js";
import $fns from "./helpers/functions.js";

const app = createApp(App);

app.use(router);

app.config.globalProperties.$events = $events;
app.config.globalProperties.$fns = $fns;

app.mount("#app");
