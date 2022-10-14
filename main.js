import Navigo from 'navigo'
import AddNewProduct from './src/pages/add-new-product';
import DetailProduct from './src/pages/detail-product';
import HomePage from './src/pages/home';
import ProductPage from './src/pages/product';

const router = new Navigo("/",{linksSelector:"a"});
const print = async (content,id) => {
  document.querySelector("#app").innerHTML = await content.render(id);
  if(content.afterRender){
    content.afterRender();
  }
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
  "/admin/products/add": () =>{
    print(AddNewProduct)
  },
  "/products/:id": (value)=>{
    print(DetailProduct,value.data.id);
  }
});

router.resolve();