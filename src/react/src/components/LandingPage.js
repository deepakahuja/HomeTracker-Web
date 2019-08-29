import React from 'react';
import {Row, Col, Panel} from 'react-bootstrap';
import {Link} from 'react-router-dom';


class LandingPage extends React.Component {
    render() {
        var iconColor = {
            color: 'gold'//to change font-awesome icon colors, ideally it should be in commom.css
          }
         
        return (            
            <div className="container-fluid" >
                <h2>Modules</h2>
                <Row>
                    <Col md={3}>
                        <Panel bsStyle="info">
                            <Panel.Heading>Home Tracking</Panel.Heading>
                            <Panel.Body><i className="fa fa-home fa-5x" style={iconColor}></i></Panel.Body>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel bsStyle="info">
                            <Panel.Heading>
                            <Panel.Title componentClass="h3">Admin</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <Link to="/usersearch">
                                <i className="fa fa-users fa-5x"  style={iconColor}></i>
                                </Link>
                            </Panel.Body>
                        </Panel>
                    </Col>
                    <Col md={4}>
                        <Panel bsStyle="info">
                            <Panel.Heading>
                            <Panel.Title>Sample App To Be deleted</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <Link to="/home">
                                    <i className="fa fa-asterisk fa-5x"  style={iconColor}></i>
                                </Link>
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default LandingPage;
