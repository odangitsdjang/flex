import React, { Component } from 'react';

import { connect } from 'react-redux';
import RestaurantItem from './RestaurantItem';

const mapStateToProps = (state) => ({
  // restaurantId: state.display
});

const mapDispatchToProps = ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantItem);
