import Axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

class search_grocery extends React.Component {
    constructor(props) {
        super(props)
        this.state = { abarrote: [] }
    }
    groceryGet = async () => {
        await Axios.get('http://localhost:4001/abarrote/buscar/:nombre')
            .then(response => {
                this.setState = { abarrote: response.data }
            }).catch(err => {
                console.log(err);
            });
    }
    render(props) {
        return (
            <>
                <div className="search_margin">
                    <div className="search_input">
                        <center><input type="text" spellCheck="false"
                            placeholder="Buscar abarrote" onChange={this.groceryGet} />
                            <button for="search">Buscar</button></center>
                    </div>
                    <h1>{this.props.title}</h1><br />
                    <div className="cards">
                        {this.props.cards.map((item) => {
                            console.log(this.cards);
                            return (
                                <>
                                    <div key={item} className="card">
                                        <h2>{this.props.cards.name}</h2>
                                        <p>{this.desc}</p>
                                        <Link to="/buscar_abarrote">
                                            <button>{this.props.button}</button>
                                        </Link>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}
export default search_grocery;