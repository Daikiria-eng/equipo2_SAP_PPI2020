import React from 'react';
import { Link } from 'react-router-dom';

class search_domiciliary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render(props) {
        return (
            <>
                <div className="search_margin">
                    <div className="search_input">
                        <center><input type="text" spellCheck="false"
                            placeholder="Buscar Domiciliario" />
                            <button for="search">Buscar</button></center>
                    </div>
                    <h1>{this.props.title}</h1><br/>
                    <div className="cards">
                        {/*{cards.map((item, kart) => {
                            return (
                                <>*/}
                        <div className="card">
                            <h2>{this.props.name}</h2>
                            <p>{this.props.desc}</p>
                            <Link to="/productos"><button>{this.props.button}</button></Link>
                        </div>
                        {/*</>
                            )
                        })}*/}
                    </div>
                </div>
            </>
        )
    }
}
export default search_domiciliary;