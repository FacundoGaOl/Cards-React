import './App.css';
import Card from './components/Cards';

function App() {
    return (
        <div className="app">
            <div className="cardsContainer">
                <Card
                image="src/assets/img/absoluteBatman10.jpg"
                title="Absolute Batman 10"
                author="Scott Snyder"
                description="Bruce Wayne se encuentra atrapado en los horrores del Arca M mientras su mejor amigo, Waylon Jones, se enfrenta a una tortura inimaginable, pero a Batman le espera algo aún más terrorífico, más que cualquier cosa a la que haya hecho frente hasta ahora: la verdadera forma de Bane, y cómo éste planea quebrar al héroe."
                />
            </div>
        </div>
    );
}

export default App;