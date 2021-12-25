import React from "react";
import { connect } from "react-redux";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import { setSearchField, requestRobots } from "../action";

const mapStateToProps = (state) => {
    const { searchField } = state.searchRobots;
    const {isPending, robots, error} = state.requestRobots;
    return {
        searchField,
        isPending,
        robots,
        error
    }
};

const mapDispathToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        requestRobots: () => dispatch(requestRobots())
    }
};

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            robots: []
        };
    }

    componentDidMount() {
        this.props.requestRobots();
    }

    render() {
        const { robots, searchField, onSearchChange, isPending } = this.props;
        const filterRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });
        return (isPending)
            ?
            (<h1>Loading...</h1>)
            :
            (
                <div className="tc">
                    <h1 className="f1">Robot Friends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filterRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
    }
}

export default connect(mapStateToProps, mapDispathToProps)(App);