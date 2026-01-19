import './App.css';
import Card from './components/Cards';
import gatusina from './assets/img/Gatusina.jpg';
import kamenRider from './assets/img/kamenRiderBlack3.jpg';
import gastroinforme from './assets/img/gastroinforme.jpg';
import batman10 from './assets/img/AbsoluteBatman10.jpg';
import wonderWoman from './assets/img/AbsoluteWonderWoman9.jpg';
import kimba from './assets/img/Kimba el león blanco.jpg';


function App() {
const comics = [
    {
        id: 1,
        name: "Gatusina",
        price: 14,
        cover: gatusina, 
        editorial: "Tomodomo",
        author: "Hisa Takano",
        description: "Una historia manga sobre la vida de una gata callejera en Japón, explorando temas de supervivencia, amistad y el vínculo entre humanos y animales en el entorno urbano."
    },
    {
        id: 2,
        name: "Kamen Raider Black 3",
        price: 18,
        cover: kamenRider,  
        editorial: "Ooso comics",
        author: "Shotaro Ishinomori",
        description: "El tercer volumen de la serie de Kamen Rider Black, donde el héroe transformado enfrenta nuevas amenazas mutantes mientras lucha por proteger a la humanidad de las fuerzas oscuras de Golgom."
    },
    {
        id: 3,
        name: "Gastroinforme de mi trastorno alimenticio",
        price: 12,
        cover: gastroinforme,
        editorial: "Fandogamia Editorial",
        author: "Kabi Nagata",
        description: "Un manga autobiográfico y sincero donde la autora narra su lucha personal con los trastornos alimenticios, combinando honestidad emocional con un estilo de dibujo expresivo y conmovedor."
    },
    {
        id: 4,
        name: "Absolute Batman 10",
        price: 3.3,
        cover: batman10,  
        editorial: "Panini Comics",
        author: ["Scott Snyder", "Nick Dragotta"],
        description: "Bruce Wayne se encuentra atrapado en los horrores del Arca M mientras su mejor amigo, Waylon Jones, se enfrenta a una tortura inimaginable, pero a Batman le espera algo aún más terrorífico: la verdadera forma de Bane, y cómo éste planea quebrar al héroe."
    },
    {
        id: 5,
        name: "Absolute Wonder Woman 9",
        price: 3.3,
        cover: wonderWoman,  
        editorial: "Panini Comics",
        author: ["Kelly Thompson", "Haayden Sherman"],
        description: "Diana Prince enfrenta una amenaza multidimensional que pone en peligro a Temiscira y al mundo mortal, mientras explora su identidad como princesa, guerrera y embajadora de la paz en un conflicto que desafía todo lo que creía saber."
    },
    {
        id: 6,
        name: "Kimba el león blanco",
        price: 30,
        cover: kimba,  
        state: "Pre-venta",
        editorial: "Planeta Cómic",
        author: "Osamu Tezuka",
        description: "La clásica serie de Osamu Tezuka que sigue las aventuras de Kimba, un león blanco que hereda el trono de la jungla tras la muerte de su padre, luchando por establecer la paz y la justicia entre todas las criaturas animales."
    }
];

    return (
        <div className="app">
            <div className="cardsContainer">
                {comics.map((comic) => (
                <Card
                    key={comic.id}
                    image={comic.cover}
                    name={comic.name}
                    author={comic.author}
                    description={comic.description}
                />
                ))}
            </div>
        </div>
    );
}

export default App;