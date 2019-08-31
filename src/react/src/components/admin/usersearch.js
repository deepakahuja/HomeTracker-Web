import React from 'react';
import {Table, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import * as adminActions from '../../actions/adminActions';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import UserSearchResult from './UserSearchResult';

class UserSearchPage extends React.Component {

    constructor(props, context) {
        super(props, context);
    
        this.callLoadUsersAction = this.callLoadUsersAction.bind(this);
      }
    
    callLoadUsersAction() {
        //event.preventDefault();
        this.props.actions.loadUsers();
    }

    componentWillMount(){
        this.props.actions.cleanState();
    }

   

    render() {
        return (
            <div className="container-fluid">
                <Button bsStyle="primary" bsSize="large" onClick={this.callLoadUsersAction}>
                    Load Users
                </Button>
                <UserSearchResult users={this.props.users}/>
      
            </div>
        );
    }
}
UserSearchPage.propTypes = {
    users: PropTypes.array.isRequired
  };
  
function mapStateToProps(state, ownProps) {
    return {
      users: state.users.users
    };
  }

  

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(adminActions, dispatch)
    };
  }

 

export default connect(mapStateToProps, mapDispatchToProps)(UserSearchPage);
