import { getOne, update } from "../api/products"

const UpdateProduct = {
    async render(id){
        const product = (await getOne(id)).data;
        console.log(product);
        return /*html*/`
            <header></header>
            <main>
                <form action="" id="update">
                    <input type="text" placeholder="Product Name" id="title" value="${product.title}"/>
                    <input type="text" placeholder="Product Image" id="image" value="${product.image}"/>
                    <textarea name="" id="content" cols="30" rows="10">${product.content}</textarea>
                    <button>Update Product</button>
                </form>
            </main>
            <footer></footer>
        `
    },
    afterRender(id){
        document.querySelector("#update").addEventListener("submit",(e)=>{
            e.preventDefault();
            const postUpdate = {
                id: id,
                title: document.querySelector("#title").value,
                content: document.querySelector("#content").value,
                image: document.querySelector("#image").value
            }
            // console.log(postUpdate);
            update(postUpdate);
        })
    }
}
export default UpdateProduct