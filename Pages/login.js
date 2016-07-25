import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';
import { browserHistory, Router, Route, Link } from 'react-router'
import { connect } from 'react-redux';

class login extends Component {
  constructor(props) {
      super(props);
    }
render() {
  let { globalGrid } = this.props;

  return (
    <div>
    {globalGrid.map((employee,index) =>
    <div key={employee.id}>{employee.id}&nbsp;&nbsp;{employee.firstname}&nbsp;&nbsp;{employee.lastname}&nbsp;&nbsp;{employee.designation}&nbsp;&nbsp;
      (`{employee.active}` ?
      'Acive' :
      'InActive')
    </div> )}
    </div>
  );
}
}

login.propTypes = {
  globalGrid: React.PropTypes.array,
  dispatch: React.PropTypes.func,
};

const mapStateToProps = (state) => ({
  globalGrid: state.globalGrid
});

export default connect(mapStateToProps)(login);
