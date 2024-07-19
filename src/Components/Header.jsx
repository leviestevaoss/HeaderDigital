import Logo from "./Img/LogoDigital.png"
import Carrinho from "./Img/CarrinhoDigital.png"

export default function Header(){
    return(
        <>
        <header className="boxheader">
            <div className="container p-3">
                <div className="row d-flex align-items-center">
                    <div className="col-10 d-flex justify-content-between">
                        <img src={Logo} alt="LogoDigital" className="logo"/>
                        <input type="text" placeholder="Pesquise Aqui...." className="inputPesquisa"/>
                        <a href="" className="text-dark d-flex align-items-center">Cadastra-se</a>
                    </div>

                    <div className="col">
                        <button className="estilobotton">Entrar</button>
                    </div>

                    <div className="col d-flex align-items-center px-2">
                        <img src={Carrinho} alt="Carrinho Digital" className="iconCar"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col py-4">
                        
                        <nav className="navbox">
                            <a href="#">Home</a>
                            <a href="#">Produtos</a>
                            <a href="#">Categorias</a>
                            <a href="#">Meus Produtos</a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}