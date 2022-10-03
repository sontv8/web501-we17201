import Navigo from 'navigo'
import HomePage from './src/pages/home';

const router = new Navigo("/");
const print = (content) => {
  document.querySelector("#app").innerHTML = content;
}

router.on({
  "/": () => {
    print(HomePage.render());
  },
  "/products": () => {
    print("Product Page");
  },
  "/about": () =>{
    print("About Page");
  }
});

router.resolve();