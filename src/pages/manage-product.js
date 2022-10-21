import { getAll, remove } from "../api/products"
import { reRender } from "../utils/rerender";

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
                                        <a href="/admin/products/${item.id}/update"><button class="btn">Update Product</button></a>
                                        <button class="btn btn-remove" data-id=${item.id}>Remove</button>
                                    </td>
                                </tr>
                            `
                        }).join("")
                    }
                    
                </tbody>
            </table>
        `
    },
    afterRender(){
        const btns = document.querySelectorAll(".btn-remove"); //tìm tất cả button trong table (kết quả trả về 1 mảng)
        for (let btn of btns) {
            const id = btn.dataset.id; // lấy thuộc tính data-id của tất cả button
            btn.addEventListener('click', async function () { //thêm sự kiện click cho button
                if (btn.classList.contains('btn-remove')) { //kiểm tra xem button có chứa class btn-remove hay không, nếu có mới thực hiện việc bên dưới
                    const confirm = window.confirm('Bạn có chắc chắn xóa không?');
                    if (confirm) {
                        const { data } = await remove(id); //gọi hàm xóa từ folder api
                        reRender('app', ManageProduct); // gọi hàm reRender từ folder utils để thực hiện việc hiển thị lại trang sau khi đã xóa
                        // kiểm tra xem xóa thành công hay không
                        // if (data) {
                        //     console.log('delete thành công');
                        // }
                    }
                }
            });
        }
    }
}
export default ManageProduct