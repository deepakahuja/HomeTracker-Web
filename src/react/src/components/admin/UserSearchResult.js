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
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Phone</th>
                <th>Client</th>
            </tr>
        </thead>
        <tbody>
        {users.map(user =>
          <tr>
            <td>{user.email}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.firstName+" "+user.lastName}</td>
            <td>{user.phone}</td>
            <td>{user.fkAdminClients.clientName}</td>
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
