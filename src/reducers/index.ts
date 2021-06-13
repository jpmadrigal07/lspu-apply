  
import { combineReducers } from 'redux';
import authReducer from './authReducers';
import topAlertReducers from './topAlertReducers';
import campusCollegeReducers from './campusCollegeReducers';
import collegeCoursesReducers from './collegeCoursesReducers';
import collegeReducers from './collegeReducers';
import courseReducers from './courseReducers';
import documentReducers from './documentReducers';
import mainCampusReducers from './mainCampusReducers';
import satelliteCampusReducers from './satelliteCampusReducers';
import studentReducers from './studentReducers';
import userDocumentReducers from './userDocumentReducers';
import userReducers from './userReducers';
import validationReducers from './validationReducers';

export default combineReducers({
    auth: authReducer,
    topAlert: topAlertReducers,
    campusCollege: campusCollegeReducers,
    collegeCourse: collegeCoursesReducers,
    college: collegeReducers,
    course: courseReducers,
    document: documentReducers,
    mainCampus: mainCampusReducers,
    satelliteCampus: satelliteCampusReducers,
    student: studentReducers,
    validation: validationReducers,
    userDocument: userDocumentReducers,
    user: userReducers
});