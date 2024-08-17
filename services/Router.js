const Router = {
  init() {
    document.querySelectorAll("a.navlink").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const url = link.getAttribute("href");
        this.go(url);
      });
    });

    window.addEventListener('popstate', event => {
      this.go(event.state.route, false);
    })
  },
  go(route, addToHistory = true) {
    if (addToHistory) {
      history.pushState({ route }, "", route);
    }

    let pageElement = null;

    switch (route) {
      case "/":
        console.log("/");
        pageElement = document.createElement("h1");
        pageElement.textContent = "Menu";
        break;
      case "/order":
        console.log("/");
        pageElement = document.createElement("h1");
        pageElement.textContent = "Your order";
        break;
      default:
        if (route.startsWith("/product-")) {
          pageElement = document.createElement("h1");
          pageElement.textContent = "Details";
          const paramsId = route.substring(route.lastIndexOf("-") + 1);
          pageElement.dataset.id = paramsId;
        }
        break;
    }

    if (pageElement) {
      const cache = document.querySelector("main");
      cache.innerHTML = "";
      cache.append(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};

export default Router;
