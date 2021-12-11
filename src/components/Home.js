import '../App.css';
import Button from './Button';
import Greet from './Greet';
import Hello from './Hello';


const Home = () => {
    return (
        <div className="Home">
            <header className="App-header">
                <img src="https://i.imgur.com/hOxMhcF.png" className="App-logo" alt="logo" />
                <p>
                <p>{Hello()}</p>
                    <Greet></Greet>
                    
                    <figure class="text-center">
                        <blockquote class="blockquote">
                            <p>Anong <b><i>PAK</i></b> ang mataas tumalon? 
                            Edi <b><i>TIPAKLONG!</i></b></p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            Manny "Unipak" Pacquiao
                        </figcaption>
                    </figure>
                    
                </p>
                <Button />
                <a
                    className="App-link"
                    href="https://www.lazada.com.ph/unipak-121004675/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Buy Uni-Pak Sardines
                </a>
            </header>
        </div>
    );
}

export default Home;