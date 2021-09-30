const Header = () => {
    const view = `
        <div class="header-main">
            <div class="header-nav">
                <div class="nav-titulo">
                    <h1>
                        <a href="#/">MovFlix</a>
                    </h1>
                </div>
                <div class="nav-button">
                    <a href = "/" >Populares</a>
                    <a href = "#/tendencias" >Tendencias</a>
                </div>
            </div>
        </div>
    
    `
    return view;
}

export default Header;