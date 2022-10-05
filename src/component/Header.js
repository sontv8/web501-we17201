const Header = {
    render(){
        return `
            <div class="banner">
                <img src="https://picsum.photos/1000/400">
            </div>
            <nav>
                <ul>
                    <li><a href="/">HomePage</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        `
    }
}

export default Header;