import React from 'react';
import {Table, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import * as adminActions from '../../actions/adminActions';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

const UserSearchResult = ({users}) => {
    return (
        <Table striped bordered condensed hover>
        <thead>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Client</th>
                <th>Creation Date</th>                
            </tr>
        </thead>
        <tbody>
        {users.map(user =>
          <tr>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.client}</td>            
            <td>{user.creationDate}</td>
        </tr>
        )}
        </tbody>
        </Table>
    );
  };

  UserSearchResult.propTypes = {
    users: PropTypes.array.isRequired
  };

export default UserSearchResult;
