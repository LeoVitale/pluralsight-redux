import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions.js';
import CourseList from './CourseList.jsx';

class CoursesPage extends Component {

  constructor(props, context) {
    super(props, context);
  }


  courseRow = (course, index) => {
    return(
      <div key={index}>{course.title}</div>
    );
  }

  render() {
    //debugger;
    const { courses } = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  //debugger;
  return {
    courses: state.courses
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);