import { add } from "../api/products";

const AddNewProduct = {
    render(){
        return /*html*/`
            <header></header>
            <main>
                <form action="" id="add-new">
                    <input type="text" placeholder="Product Name" id="title"/>
                    <input type="text" placeholder="Product Image" id="image"/>
                    <textarea name="" id="content" cols="30" rows="10"></textarea>
                    <button>Add New Product</button>
                </form>
            </main>
            <footer></footer>
        `
    },
    afterRender(){
        document.querySelector("#add-new").addEventListener("submit", async (e) => {
            e.preventDefault();
            const newProduct = {
                title: document.querySelector("#title").value,
                image: document.querySelector("#image").value,
                content: document.querySelector("#content").value
            }
            console.log(newProduct);

            await add(newProduct);
            window.location.assign("/admin/manage-product"); //điều hướng về trang quản trị sản phẩm
        })
    }
}
export default AddNewProduct