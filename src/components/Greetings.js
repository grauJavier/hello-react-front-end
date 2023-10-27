import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchGreeting } from '../redux/slice';

const Greeting = ({ greeting, fetchGreeting }) => {
  useEffect(() => {
    fetchGreeting();
  }, [fetchGreeting]);

  return (
    <h1>{greeting}</h1>
  );
};

const mapStateToProps = (state) => ({
  greeting: state.greeting,
});

Greeting.propTypes = {
  greeting: PropTypes.string.isRequired,
  fetchGreeting: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { fetchGreeting })(Greeting);
