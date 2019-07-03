import React , { Component } from "react"

class Card extends Component {
    render() {
        const {data } = this.props;
        return (
            <div className="bg-light-green dib ma2 bw2 shadow-5 br3 pa3 grow ">
                <img src={`https://robohash.org/${data.id}?200x200`} alt="robots"/>
                <div>
                    <h2>{data.name}</h2>
                    <p>{data.email}</p>
                </div>
            </div>
        )
    }
}

export default Card;