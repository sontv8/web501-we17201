import Navigo from 'navigo'
import AddNewProduct from './src/pages/add-new-product';
import DetailProduct from './src/pages/detail-product';
import HomePage from './src/pages/home';
import ManageProduct from './src/pages/manage-product';
import ProductPage from './src/pages/product';
import UpdateProduct from './src/pages/update-product';

const router = new Navigo("/",{linksSelector:"a"});
const print = async (content,id) => {
  document.querySelector("#app").innerHTML = await content.render(id);
  if(content.afterRender){
    content.afterRender(id);
  }
}

router.on({
  "/": () => {
    print(HomePage);
  },
  "/products": () => {
    print(ProductPage);
  },
  "/products/:id": (value)=>{
    print(DetailProduct,value.data.id);
  },
  "/about": () =>{
    print("About Page");
  },
  "/admin/manage-product": ()=>{
    print(ManageProduct);
  },
  "/admin/products/add": () =>{
    print(AddNewProduct)
  },
  "/admin/products/:id/update": (value) => {
    print(UpdateProduct,value.data.id);
  }
});

router.resolve();