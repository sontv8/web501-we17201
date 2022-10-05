import Header from "../component/Header";

const ProductPage = {
    render(){
        return /* html */`
            <div class="container">
                <header>
                    ${Header.render()}
                </header>
                <main>
                    <h1>Product Page</h1>
                </main>
                <footer>
                    <div className="logo">
                        <img src="https://picsum.photos/100/50" alt="" />
                    </div>
                    <ul>
                        <li>Site Map</li>
                        <li>Site Map</li>
                        <li>Site Map</li>
                    </ul>
                </footer>
            </div>
        `
    }
}
export default ProductPage;