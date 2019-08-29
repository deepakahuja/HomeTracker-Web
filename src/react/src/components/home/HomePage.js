import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import {connect} from 'react-redux';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <Header loading={this.props.loading}/>
                <h1>Pluralsight Administration</h1>
                <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
      loading: state.ajaxCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(HomePage);
