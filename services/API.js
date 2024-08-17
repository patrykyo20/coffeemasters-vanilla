const API = {
  url: "https://firtman.github.io/coffeemasters/api/menu.json",
  async fetchMenu() {
    const result = await fetch(API.url);
    return await result.json();
  },
};

export default API;
