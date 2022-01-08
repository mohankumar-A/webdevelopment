import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(err, info) {
        if (err) {
            this.setState({
                hasError: true
            })
        }
    }

    render() {
        if (this.state.hasError) {
            return (<h1>oops has some error</h1>)
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary;