import productList from "../data/products"

const DetailProduct = {
    render(id){
        const product = productList.find((item)=>{
            return item.id == id;
        })
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