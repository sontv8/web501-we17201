import Navigo from 'navigo'
import HomePage from './src/pages/home';
import ProductPage from './src/pages/product';

const router = new Navigo("/",{linksSelector:"a"});
const print = (content) => {
  document.querySelector("#app").innerHTML = content.render();
}

router.on({
  "/": () => {
    print(HomePage);
  },
  "/products": () => {
    print(ProductPage);
  },
  "/about": () =>{
    print("About Page");
  }
});

router.resolve();