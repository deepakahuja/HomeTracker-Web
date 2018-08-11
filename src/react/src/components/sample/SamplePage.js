import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as sampleActions from '../../actions/sampleActions';
import ProductsList from './ProductsList';

class SamplePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    
  } 

  render() {
    //alert(this.props.products[0].productName)
    return (
      <div>
        <h1>Products</h1>      

        <ProductsList products={this.props.products}/>
      </div>
    );
  }
}

SamplePage.propTypes = {
  actions: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
  //history: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sampleActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SamplePage));
