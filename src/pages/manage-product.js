import { getAll } from "../api/products"

const ManageProduct = {
    async render(){
        const productList = (await getAll()).data;
        console.log(productList);
        return /*html*/`
            <a href="/admin/products/add"><button>Add New Product</button></a>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Image</th>
                        <th>Product Content</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${
                        productList.map((item)=>{
                            return /*html*/`
                                <tr>
                                    <td>${item.title}</td>
                                    <td><img src="${item.image}" alt="" /></td>
                                    <td>${item.content}</td>
                                    <td>
                                        <a href="/admin/products/${item.id}/update">Update Product</a>
                                    </td>
                                </tr>
                            `
                        }).join("")
                    }
                    
                </tbody>
            </table>
        `
    }
}
export default ManageProduct