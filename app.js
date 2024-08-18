import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";
import Store from "./services/Store.js";

import { DetailsPage } from "./components/DetailsPage.js";
import MenuPage from "./components/MenuPage.js";
import { OrderPage } from "./components/OrderPage.js";

window.app = {};

app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", async function loadPage() {
  loadData();
  app.router.init();
});
