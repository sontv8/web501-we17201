// import productList from "../data/products"

import { getOne } from "../api/products";

const DetailProduct = {
    async render(id){
        const product = (await getOne(id)).data;
        console.log(product);
        // const product = productList.find((item)=>{
        //     return item.id == id;
        // })
        return /*html*/`
            <div>
                <img src="${product.image}" alt="" />
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            </div>
        `
    }
}
export default DetailProduct;