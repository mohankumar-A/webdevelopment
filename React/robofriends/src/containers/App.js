import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchFields: ""
        };
        // this.onSearchChange = this.onSearchChange.bind(this);
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((robots) => this.setState({robots}));
    }

    onSearchChange = (event) => {
        this.setState({searchFields: event.target.value})
    }

    render() {
        const { robots, searchFields } = this.state;
        const filterRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchFields.toLowerCase())
        });
        return (!robots.length)
            ?
            (<h1>Loading...</h1>)
            :
            (
                <div className="tc">
                    <h1 className="f1">Robot Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filterRobots} />
                    </Scroll>
                </div>
            )
    }
}

export default App;