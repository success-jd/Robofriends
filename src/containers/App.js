import React, { Component } from "react"
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./app.css"
import Scroll from "../components/Scroll";

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({ robots: users }))
    }

    onSearchChange(e) {
        this.setState({ searchfield: e.target.value })   
    }
    
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield)
        })

        return (          
            <div>
                { !this.state.robots.length ?
                    <h1>loading...</h1>
                :
                    <div className="tc">
                        <h1 className="f1">Robo friends</h1>
                        <SearchBox searchChange={this.onSearchChange.bind(this)} />
                        <Scroll>
                           <CardList robots={filteredRobots} />
                        </Scroll>
                    </div>
                } 
            </div>
        )
    }
}

export default App;