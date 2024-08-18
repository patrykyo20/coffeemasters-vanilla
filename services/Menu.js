import API from "./API.js";

export async function loadData() {
  const data = await API.fetchMenu();
  app.store.menu = data;
}

export async function getProductById() {
  if (app.store.menu === null) {
    await loadData();
  }
  for (let e of app.store.menu) {
    for (let p of c.products) {
      if (p.id === id) {
        return p;
      }
    }
  }

  return null
}
