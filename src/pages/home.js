import Footer from "../component/Footer"
import Header from "../component/Header"

const HomePage = {
    render(){
        return /* html */`
            <div class="container">
                <header>
                    ${Header.render()}
                </header>
                <main>
                    <h1>Home Page</h1>
                </main>
                <footer>
                    ${Footer.render()}
                </footer>
            </div>
        `
    }
}

export default HomePage