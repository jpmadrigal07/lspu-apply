import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Row, Col, Button, Panel, Message, Checkbox } from 'rsuite';
import { I_Component_Intended_Course } from '../../../interfaces/components';
import { I_Global } from '../../../interfaces/global';
import { getMainCampus } from '../../../actions/mainCampusActions';
import { getCourse } from '../../../actions/courseActions'
import { getSatelliteCampus } from '../../../actions/satelliteCampusActions';
import { getCollege } from '../../../actions/collegeActions'
import Asterisk  from '../../Asterisk/Asterisk'

const Information = (props: I_Component_Intended_Course) => {
    const { 
      campusId,
      mainCampus,
      course,
      satelliteCampus, 
      intendedCourse,
      getMainCampus,
      getSatelliteCampus,
      getCourse,
      setIsEditState,
      college,
      getCollege 
    } = props
  const [campusName, setCampusName] = useState<string | undefined>("")
  const [firstChoiceCourseName, setFirstChoiceCourseName] = useState<string | undefined>("")
  const [secondChoiceCourseName, setSecondChoiceCourseName] = useState<string | undefined>("")
  const [thirdChoiceCourseName, setThirdChoiceCourseName] = useState<string | undefined>("")

  useEffect(() => {
    if (mainCampus.length === 0) {
      getMainCampus()
    }
    if (satelliteCampus.length === 0) {
      getSatelliteCampus()
    }
    if(college.length === 0){
      getCollege();
    }
    if(course.length === 0){
      getCourse();
    }
  }, [mainCampus, satelliteCampus, college])

  useEffect(() => {
    //Find Main/Satellite Campus Name
    if (mainCampus.length > 0 && satelliteCampus.length > 0) {
      const foundMain = mainCampus.find(campus => campus._id === campusId)
      if(!foundMain){
        const foundSatellite = satelliteCampus.find(campus => campus._id === campusId)
        setCampusName(foundSatellite?.campusName)
      }
      else{
        setCampusName(foundMain?.campusName)
      }
    }
    //Find Course Name
    if(course.length > 0 && intendedCourse) {
      const foundFirstChoice = course.find(course => course._id === intendedCourse.firstChoice)
      setFirstChoiceCourseName(foundFirstChoice?.courseName)
      const foundSecondChoice = course.find(course => course._id === intendedCourse.secondChoice)
      setSecondChoiceCourseName(foundSecondChoice?.courseName)
      const foundThirdChoice = course.find(course => course._id === intendedCourse.thirdChoice)
      setThirdChoiceCourseName(foundThirdChoice?.courseName)
    }
  }, [intendedCourse, course])

    return (
        <>
        <Row gutter={16}>
          <Col style={{ marginTop: '15px' }}>
            <Button appearance="primary" size="sm" style={{ marginRight: '5px' }} onClick={() => setIsEditState(true)}>Edit</Button>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} md={12} style={{ marginTop: '15px' }}>
            <Panel bordered header="First Choice">
              <Row gutter={16}>
                <Col xs={24} md={6}>
                  <p><b style={{ color: '#39a7bf' }}>Campus:</b><br />{campusName}</p>
                </Col>
                <Col xs={24} md={18}>
                  <p><b style={{ color: '#39a7bf' }}>Course:<Asterisk /></b><br />{firstChoiceCourseName ? firstChoiceCourseName : '---'}</p>
                </Col>
              </Row>
            </Panel>
          </Col>
          <Col xs={24} md={12} style={{ marginTop: '15px' }}>
            <Panel bordered header="Second Choice">
              <Row gutter={16}>
                <Col xs={24} md={6}>
                  <p><b style={{ color: '#39a7bf' }}>Campus:</b><br />{campusName}</p>
                </Col>
                <Col xs={24} md={18}>
                  <p><b style={{ color: '#39a7bf' }}>Course:<Asterisk /></b><br />{secondChoiceCourseName ? secondChoiceCourseName : '---'}</p>
                </Col>
              </Row>
            </Panel>
          </Col>
          <Col xs={24} md={12} style={{ marginTop: '15px' }}>
            <Panel bordered header="Third Choice">
              <Row gutter={16}>
                <Col xs={24} md={6}>
                  <p><b style={{ color: '#39a7bf' }}>Campus:</b><br />{campusName}</p>
                </Col>
                <Col xs={24} md={18}>
                  <p><b style={{ color: '#39a7bf' }}>Course:</b><br />{thirdChoiceCourseName ? thirdChoiceCourseName : '---'}</p>
                </Col>
              </Row>
            </Panel>
          </Col>
        </Row>
        </>
    )
}

const mapStateToProps = (global: I_Global) => ({
  intendedCourse: global.auth.otherInfo?.intendedCourse,
  course: global.course?.data,
  campusId: global.auth.otherInfo?.campusId,
  mainCampus: global.mainCampus.data,
  satelliteCampus: global.satelliteCampus.data,
  college: global.college.data
})
export default connect(mapStateToProps, { getMainCampus, getSatelliteCampus, getCourse, getCollege })(Information)
