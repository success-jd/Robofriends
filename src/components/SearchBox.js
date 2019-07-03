import React,{ Component } from "react"

class SearchBox extends Component {
    render() {
        const { searchChange } = this.props
        return (
            <div className="tc">
                <input
                    type="search"
                    placeholder="search robots"
                    onChange={searchChange}
                />
            </div>
            
        )
    }
}

export default SearchBox;