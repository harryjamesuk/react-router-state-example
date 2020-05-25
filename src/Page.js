import React from 'react';
import {Link, withRouter} from "react-router-dom";

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.location.state || {activeScreen: "PAGE1"}; // In the ||, set default state.
        this.props.history.replace(this.props.location.pathname, this.state); // Update state of current entry in history stack.
    }

    // Called when props change (Props change when Route changes).
    componentDidUpdate(prevProps, prevState, snapshot) {
        // If Route has changed, update state (Ensures consistency between location state and Component state).
        if (this.props.location !== prevProps.location) {
            this.setState(this.props.location.state);
        }
    }

    /**
     * Returns updated 'activeScreen' state.
     * @returns {{activeScreen: string}} Returns
     *          { activeState: "PAGE2" } if the current state is "PAGE1"
     *          { activeState: "PAGE1" } if the current state is "PAGE2"
     */
    otherState() {
        return {
            activeScreen: (this.state.activeScreen === "PAGE1") ? "PAGE2" : "PAGE1"
        };
    }

    render() {
        return (
            <div id="container">
                <h2>You are currently on...</h2>
                <h1>{this.state.activeScreen}</h1>
                <Link to={ {state: this.otherState()} }>
                    <button>Toggle state</button>
                </Link>
            </div>
        );
    }
}

export default Page; // Use this if the Component is the direct child of the Router.
// export default withRouter(Page); // Use this alternative if the Component is not.