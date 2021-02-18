import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleMessage } from './actions';
import { getMovies } from '../Movies/actions';


function Toggle({ messageVisibility, toggleMessage, getMovies }) {
  return (
    <div>
      { messageVisibility && <p> Redux toggle toggled</p>}
      <button onClick={toggleMessage}>Toggle Me</button>

      <button onClick={getMovies}>Load Movies</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  messageVisibility: state.toggleReducer.messageVisibility,

})

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleMessage,
  getMovies,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Toggle)