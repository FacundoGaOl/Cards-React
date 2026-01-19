import '../styles/Card.css';

function Card(props) {
    return (
        <div className="card">
            <div className="cardContainer">
                <img 
                    src={props.image} 
                    alt={`Portada de ${props.title}`}
                    className="cardImage"
                />
            </div>
            <div className="cardText">
                <h3 className="cardTitle">{props.title}</h3>
                <p className="cardAuthor">📺 {props.author}</p>
                <p className="cardDescription">{props.description}</p>
            </div>
        </div>
    );
}

export default Card;