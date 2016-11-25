import React, {Component} from 'react';
import { connect } from 'react-redux';

class login extends Component {
  constructor(props) {
    super(props);
  }
render() {
  // let { globalGrid } = this.props;

  return (
    <div>
One Hub Learning
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
