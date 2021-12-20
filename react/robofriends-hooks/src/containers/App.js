import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

function App() {

    // initalize the state
    const [robots, setRobots] = useState([])
    const [searchFields, setSearchFields] = useState("")
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => setRobots(users));
            console.log(count);
    }, [count]); // only updates when count changes

    const onSearchChange = (event) => {
        setSearchFields(event.target.value);
    }

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
                <button onClick={() => setCount(count+1)}>Click me</button>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filterRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
}

export default App;