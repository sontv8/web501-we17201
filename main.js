import Navigo from 'navigo'
import DetailProduct from './src/pages/detail-product';
import HomePage from './src/pages/home';
import ProductPage from './src/pages/product';

const router = new Navigo("/",{linksSelector:"a"});
const print = (content,id) => {
  document.querySelector("#app").innerHTML = content.render(id);
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
  },
  "/admin/manage-product": ()=>{
    print();
  },
  "/products/:id": (value)=>{
    print(DetailProduct,value.data.id);
  }
});

router.resolve();