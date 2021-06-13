import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Row,
  Col,
  Button,
  Panel,
  Message,
  Checkbox,
  InputPicker,
  Form,
  ControlLabel,
  Loader
} from "rsuite";
import { I_Component_Edit_Intended_Course } from "../../../interfaces/components";
import { I_Global } from "../../../interfaces/global";
import { updateStudent } from "../../../actions/studentActions";
import { getMainCampus } from "../../../actions/mainCampusActions";
import { getSatelliteCampus } from "../../../actions/satelliteCampusActions";
import { I_Select_Input, I_Select_Input_No_Type } from "../../../interfaces/etc";
import { getCourse } from "../../../actions/courseActions";
import { I_Course } from "../../../interfaces/course";
import { triggerTopAlert } from "../../../actions/topAlertActions";
import { getCollege } from '../../../actions/collegeActions'
import { getCollegeCourses } from '../../../actions/collegeCoursesActions'
import Asterisk from "../../Asterisk/Asterisk";
import { I_College_Courses } from "../../../interfaces/collegeCourses";
import { I_College } from "../../../interfaces/college";

const EditIntendedCourses = (props: I_Component_Edit_Intended_Course) => {
  const {
    _id,
    campusId,
    mainCampus,
    satelliteCampus,
    course,
    intendedCourse,
    updateStudent,
    setIsEditState,
    getMainCampus,
    getCourse,
    getSatelliteCampus,
    isIntendedCourseUpdateLoading,
    triggerTopAlert,
    college,
    getCollege,
    collegeCourses,
    getCollegeCourses
  } = props;
  const [campusName, setCampusName] = useState<string | undefined>("");
  const [inputFirstChoice, setInputFirstChoice] = useState(
    intendedCourse?.firstChoice
  );
  const [inputSecondChoice, setInputSecondChoice] = useState(
    intendedCourse?.secondChoice
  );
  const [inputThirdChoice, setInputThirdChoice] = useState(
    intendedCourse?.thirdChoice
  );
  const [remappedCollegeCourses, setRemappedCollegeCourses] = useState<I_Select_Input[]>([]);
  const [inputIsSaveEnabled, setInputIsSaveEnabled] = useState(false)
  useEffect(() => {
    if (mainCampus.length === 0) {
      getMainCampus();
    }
    if (satelliteCampus.length === 0) {
      getSatelliteCampus();
    }
    if (college.length === 0) {
      getCollege();
    }
    if (course.length === 0) {
      getCourse();
    }
    if (collegeCourses.length === 0) {
      getCollegeCourses();
    }
  }, [mainCampus, satelliteCampus, college, collegeCourses]);

  useEffect(() => {
    if (collegeCourses.length > 0) {
      setRemappedCollegeCourses(collegeCourseContent())
    }
  }, [course, collegeCourses]);

  useEffect(() => {
    if (mainCampus.length > 0 && satelliteCampus.length > 0) {
      const foundMain = mainCampus.find((element) => element._id === campusId);
      if (!foundMain) {
        const foundSatellite = satelliteCampus.find((element) => element._id === campusId);
        setCampusName(foundSatellite?.campusName);
      } else {
        setCampusName(foundMain?.campusName);
      }
    }
  }, []);

  useEffect(() => {
    if (collegeCourses.length > 0) {
      const filteredCollegeCourses = collegeCourses.filter((element) => element.campusIds.includes(campusId))
      const foundCollege = filteredCollegeCourses.map((res: I_College_Courses) => college.find(element => element._id === res.collegeId))
      console.log("courses", filteredCollegeCourses)
      console.log("college", foundCollege)
    }
  }, [collegeCourses])

  const collegeCourseContent = () => {
    const filteredCollegeCourses = collegeCourses.filter((element) => element.campusIds.includes(campusId))
    return filteredCollegeCourses.map((res: I_College_Courses) => {
      const foundCourse = course.find(element => element._id === res.courseId)
      const foundCollege = college.find(element => element._id === res.collegeId)
      return {
        label: foundCourse?.courseName,
        value: foundCourse?._id,
        type: foundCollege?.collegeCode
      } 
    })
  }

  const submitIntededCourse = () => {
    if (inputIsSaveEnabled) {
      const intendedCourse = {
        intendedCourse: {
          firstChoice: inputFirstChoice,
          secondChoice: inputSecondChoice,
          thirdChoice: inputThirdChoice,
        }
      }
      updateStudent(_id, intendedCourse);
    }
    else {
      triggerTopAlert(true, "Please read the important message and click the checkbox", "warning")
    }
  };

  return (
    <>
      <Form onSubmit={() => submitIntededCourse()}>
        <Row gutter={16}>
          <Col style={{ marginTop: "15px" }}>
            <Button
              appearance="ghost"
              size="sm"
              style={{ marginRight: "5px" }}
              onClick={() => setIsEditState(false)}
            >
              Back
            </Button>
            <Button
              type="submit"
              appearance="primary"
              size="sm"
              style={{ marginRight: "5px" }}
              disabled={isIntendedCourseUpdateLoading || intendedCourse?.firstChoice && intendedCourse?.secondChoice ? true : false}
            >
              {!isIntendedCourseUpdateLoading ? "Save" : <Loader inverse />}
            </Button>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} style={{ marginTop: "15px" }}>
            <Message
              showIcon
              type="info"
              title="Important!"
              description={
                <>
                  <p>
                    Once you save your changes for the course on each choices,
                    it can never be edited anymore. Please make sure you choose
                    the right one.
                  </p>
                  {intendedCourse?.firstChoice && intendedCourse?.secondChoice ? "" :
                    <Checkbox onChange={() => setInputIsSaveEnabled(!inputIsSaveEnabled)}>
                      Yes, I understand this.
                  </Checkbox>
                  }
                </>
              }
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={12} style={{ marginTop: "15px" }}>
            <Panel bordered header="First Choice">
              <Row gutter={16}>
                <Col xs={6}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>Campus:</b>
                    <br />
                    {campusName}
                  </ControlLabel>
                </Col>
                <Col xs={18}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>Course:<Asterisk /></b>
                  </ControlLabel>
                  <InputPicker
                    type="text"
                    data={remappedCollegeCourses}
                    groupBy="type"
                    value={inputFirstChoice}
                    block
                    onChange={(e) => setInputFirstChoice(e)}
                    disabled={isIntendedCourseUpdateLoading || intendedCourse?.firstChoice ? true : false}
                  />
                </Col>
              </Row>
            </Panel>
          </Col>
          <Col xs={12} style={{ marginTop: "15px" }}>
            <Panel bordered header="Second Choice">
              <Row gutter={16}>
                <Col xs={6}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>Campus:</b>
                    <br />
                    {campusName}
                  </ControlLabel>
                </Col>
                <Col xs={18}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>Course:<Asterisk /></b>
                  </ControlLabel>
                  <InputPicker
                    type="text"
                    data={remappedCollegeCourses}
                    groupBy="type"
                    block
                    value={inputSecondChoice}
                    onChange={(e) => setInputSecondChoice(e)}
                    disabled={isIntendedCourseUpdateLoading || intendedCourse?.secondChoice ? true : false}
                  />
                </Col>
              </Row>
            </Panel>
          </Col>
          <Col xs={12} style={{ marginTop: "15px" }}>
            <Panel bordered header="Third Choice">
              <Row gutter={16}>
                <Col xs={24}>
                  <Message
                    showIcon
                    type="info"
                    title="Note"
                    description="Student can only select a course here if they did not pass the First and Second choices."
                  />
                </Col>
              </Row>
              <Row gutter={16} style={{ marginTop: "15px" }}>
                <Col xs={6}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>Campus:</b>
                    <br />
                    {campusName}
                  </ControlLabel>
                </Col>
                <Col xs={18}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>Course:</b>
                  </ControlLabel>
                  <InputPicker
                    type="text"
                    data={remappedCollegeCourses}
                    groupBy="type"
                    block
                    onChange={(e) => setInputThirdChoice(e)}
                    value={inputThirdChoice}
                    disabled={true}
                  />
                </Col>
              </Row>
            </Panel>
          </Col>
        </Row>
      </Form>
    </>
  );
};

const mapStateToProps = (global: I_Global) => ({
  _id: global.auth.otherInfo?._id,
  course: global.course?.data,
  intendedCourse: global.auth.otherInfo?.intendedCourse,
  firstChoice: global.auth.otherInfo.intendedCourse?.firstChoice,
  secondChoice: global.auth.otherInfo.intendedCourse?.secondChoice,
  thirdChoice: global.auth.otherInfo.intendedCourse?.thirdChoice,
  campusId: global.auth.otherInfo?.campusId,
  mainCampus: global.mainCampus?.data,
  satelliteCampus: global.satelliteCampus?.data,
  isIntendedCourseUpdateLoading: global.student.isUpdateLoading,
  college: global.college.data,
  collegeCourses: global.collegeCourse.data
});
export default connect(mapStateToProps, {
  updateStudent,
  getMainCampus,
  getSatelliteCampus,
  getCourse,
  triggerTopAlert,
  getCollege,
  getCollegeCourses
})(EditIntendedCourses);
