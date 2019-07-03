import React , { Component } from "react"
import Card from "./Card"

class CardList extends Component {
    
    render() {
        const { robots } = this.props;        let allCards = robots.map((user,index) => {
            return <Card key={index} data={user}/>
        } )
        return (
            <div>
                {allCards}
            </div>
        )
    }
}

export default CardList;