import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions.js';
import CourseList from './CourseList.jsx';

class CoursesPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: {
        title: ""
      }
    };
  }


  onTitleChange = (event) => {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course:course});
  };

  onClickSave = (event) => {
    this.props.actions.createCourse(this.state.course);
  }

  courseRow = (course, index) => {
    return(
      <div key={index}>{course.title}</div>
    );
  }

  render() {
    //debugger;
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}/>
        <input
          type="submit"
          onClick={this.onClickSave}
          value="Save"/>
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