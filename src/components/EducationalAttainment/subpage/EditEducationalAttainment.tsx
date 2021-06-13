import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Row, Col, Button, Panel, Input, ControlLabel, Form, InputPicker, Loader } from 'rsuite';
import { updateStudent } from "../../../actions/studentActions";
import { I_Component_Edit_Educational_Attainment_Information } from '../../../interfaces/components';
import { I_Global } from '../../../interfaces/global';
import { triggerTopAlert } from "../../../actions/topAlertActions";
import { TYPE_OF_SCHOOL_CONTENT } from '../../../services/constant';

const EditEducationalAttainment = (props: I_Component_Edit_Educational_Attainment_Information) => {
  const {
    _id,
    setIsEditState,
    elementary,
    highSchool,
    seniorHighSchool,
    college,
    graduate,
    als,
    updateStudent,
    isEducationalAttainmentUpdateLoading
  } = props

  const [inputElementarySchoolName, setInputElementarySchoolName] = useState(elementary?.schoolName)
  const [inputElementarySchoolAddress, setInputElementarySchoolAddress] = useState(elementary?.schoolAddress)
  const [inputElementaryTypeOfSchool, setInputElementaryTypeOfSchool] = useState(elementary?.typeOfSchool)
  const [inputElementaryYearGraduated, setInputElementaryYearGraduated] = useState(elementary?.yearGraduated)

  const [inputHighSchoolSchoolName, setInputHighSchoolSchoolName] = useState(highSchool?.schoolName)
  const [inputHighSchoolSchoolAddress, setInputHighSchoolSchoolAddress] = useState(highSchool?.schoolAddress)
  const [inputHighSchoolTypeOfSchool, setInputHighSchoolTypeOfSchool] = useState(highSchool?.typeOfSchool)
  const [inputHighSchoolYearGraduated, setInputHighSchoolYearGraduated] = useState(highSchool?.yearGraduated)

  const [inputSeniorHighSchoolSchoolName, setInputSeniorHighSchoolSchoolName] = useState(seniorHighSchool?.schoolName)
  const [inputSeniorHighSchoolSchoolAddress, setInputSeniorHighSchoolSchoolAddress] = useState(seniorHighSchool?.schoolAddress)
  const [inputSeniorHighSchoolTypeOfSchool, setInputSeniorHighSchoolTypeOfSchool] = useState(seniorHighSchool?.typeOfSchool)
  const [inputSeniorHighSchoolYearGraduated, setInputSeniorHighSchoolYearGraduated] = useState(seniorHighSchool?.yearGraduated)

  const [inputCollegeSchoolName, setInputCollegeSchoolName] = useState(college?.schoolName)
  const [inputCollegeSchoolAddress, setInputCollegeSchoolAddress] = useState(college?.schoolAddress)
  const [inputCollegeTypeOfSchool, setInputCollegeTypeOfSchool] = useState(college?.typeOfSchool)
  const [inputCollegeYearGraduated, setInputCollegeYearGraduated] = useState(college?.yearGraduated)

  const [inputGraduateSchoolName, setInputGraduateSchoolName] = useState(graduate?.schoolName)
  const [inputGraduateSchoolAddress, setInputGraduateSchoolAddress] = useState(graduate?.schoolAddress)
  const [inputGraduateTypeOfSchool, setInputGraduateTypeOfSchool] = useState(graduate?.typeOfSchool)
  const [inputGraduateYearGraduated, setInputGraduateYearGraduated] = useState(graduate?.yearGraduated)

  const [inputAlsSchoolName, setInputAlsSchoolName] = useState(als?.schoolName)
  const [inputAlsSchoolAddress, setInputAlsSchoolAddress] = useState(als?.schoolAddress)
  const [inputAlsTypeOfSchool, setInputAlsTypeOfSchool] = useState(als?.typeOfSchool)
  const [inputAlsYearGraduated, setInputAlsYearGraduated] = useState(als?.yearGraduated)

  const submitEducationalAttainment = () => {
    const educationalAttainment = {
      educationalAttainment: {
        elementary: {
          schoolName: inputElementarySchoolName,
          schoolAddress: inputElementarySchoolAddress,
          typeOfSchool: inputElementaryTypeOfSchool,
          yearGraduated: inputElementaryYearGraduated
        },
        highSchool: {
          schoolName: inputHighSchoolSchoolName,
          schoolAddress: inputHighSchoolSchoolAddress,
          typeOfSchool: inputHighSchoolTypeOfSchool,
          yearGraduated: inputHighSchoolYearGraduated
        },
        seniorHighSchool: {
          schoolName: inputSeniorHighSchoolSchoolName,
          schoolAddress: inputSeniorHighSchoolSchoolAddress,
          typeOfSchool: inputSeniorHighSchoolTypeOfSchool,
          yearGraduated: inputSeniorHighSchoolYearGraduated
        },
        college: {
          schoolName: inputCollegeSchoolName,
          schoolAddress: inputCollegeSchoolAddress,
          typeOfSchool: inputCollegeTypeOfSchool,
          yearGraduated: inputCollegeYearGraduated
        },
        graduate: {
          schoolName: inputGraduateSchoolName,
          schoolAddress: inputGraduateSchoolAddress,
          typeOfSchool: inputGraduateTypeOfSchool,
          yearGraduated: inputGraduateYearGraduated
        },
        als: {
          schoolName: inputAlsSchoolName,
          schoolAddress: inputAlsSchoolAddress,
          typeOfSchool: inputAlsTypeOfSchool,
          yearGraduated: inputAlsYearGraduated
        }
      }
    }
    updateStudent(_id, educationalAttainment)
  }

  return (
    <>
      <Form onSubmit={() => submitEducationalAttainment()}>
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
              disabled={isEducationalAttainmentUpdateLoading}
            >
              {!isEducationalAttainmentUpdateLoading ? "Save" : <Loader inverse />}
            </Button>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} md={12} style={{ marginTop: '15px' }}>
            <Panel bordered header="Elementary">
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>School Name:</b>
                  </ControlLabel>
                  <Input
                    type="text"
                    value={inputElementarySchoolName}
                    onChange={(e) => setInputElementarySchoolName(e)}
                    disabled={isEducationalAttainmentUpdateLoading}
                  />
                </Col>
                <Col xs={24} md={12}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>School Address:</b>
                  </ControlLabel>
                  <Input
                    type="text"
                    value={inputElementarySchoolAddress}
                    onChange={(e) => setInputElementarySchoolAddress(e)}
                    disabled={isEducationalAttainmentUpdateLoading}
                  />
                </Col>
              </Row>
              <hr />
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>Type of School:</b>
                  </ControlLabel>
                  <InputPicker
                    value={inputElementaryTypeOfSchool}
                    placeholder=""
                    data={TYPE_OF_SCHOOL_CONTENT}
                    onChange={(e) => setInputElementaryTypeOfSchool(e)}
                    block
                    disabled={isEducationalAttainmentUpdateLoading}
                  />
                </Col>
                <Col xs={24} md={12}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>Year Graduated:</b>
                  </ControlLabel>
                  <Input
                    type="text"
                    value={inputElementaryYearGraduated}
                    onChange={(e) => setInputElementaryYearGraduated(e)}
                    disabled={isEducationalAttainmentUpdateLoading}
                  />
                </Col>
              </Row>
            </Panel>
          </Col>
          <Col xs={24} md={12} style={{ marginTop: '15px' }}>
            <Panel bordered header="High school">
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>School Name:</b>
                  </ControlLabel>
                  <Input
                    type="text"
                    value={inputHighSchoolSchoolName}
                    onChange={(e) => setInputHighSchoolSchoolName(e)}
                    disabled={isEducationalAttainmentUpdateLoading}
                  />
                </Col>
                <Col xs={24} md={12}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>School Address:</b>
                  </ControlLabel>
                  <Input
                    type="text"
                    value={inputHighSchoolSchoolAddress}
                    onChange={(e) => setInputHighSchoolSchoolAddress(e)}
                    disabled={isEducationalAttainmentUpdateLoading}
                  />
                </Col>
              </Row>
              <hr />
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>Type of School:</b>
                  </ControlLabel>
                  <InputPicker
                    value={inputHighSchoolTypeOfSchool}
                    placeholder=""
                    data={TYPE_OF_SCHOOL_CONTENT}
                    onChange={(e) => setInputHighSchoolTypeOfSchool(e)}
                    block
                    disabled={isEducationalAttainmentUpdateLoading}
                  />
                </Col>
                <Col xs={24} md={12}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>Year Graduated:</b>
                  </ControlLabel>
                  <Input
                    type="text"
                    value={inputHighSchoolYearGraduated}
                    onChange={(e) => setInputHighSchoolYearGraduated(e)}
                    disabled={isEducationalAttainmentUpdateLoading}
                  />
                </Col>
              </Row>
            </Panel>
          </Col>
          <Col xs={24} md={12} style={{ marginTop: '15px' }}>
            <Panel bordered header="Senior high school">
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>School Name:</b>
                  </ControlLabel>
                  <Input
                    type="text"
                    value={inputSeniorHighSchoolSchoolName}
                    onChange={(e) => setInputSeniorHighSchoolSchoolName(e)}
                    disabled={isEducationalAttainmentUpdateLoading}
                  />
                </Col>
                <Col xs={24} md={12}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>School Address:</b>
                  </ControlLabel>
                  <Input
                    type="text"
                    value={inputSeniorHighSchoolSchoolAddress}
                    onChange={(e) => setInputSeniorHighSchoolSchoolAddress(e)}
                    disabled={isEducationalAttainmentUpdateLoading}
                  />
                </Col>
              </Row>
              <hr />
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>Type of School:</b>
                  </ControlLabel>
                  <InputPicker
                    value={inputSeniorHighSchoolTypeOfSchool}
                    placeholder=""
                    data={TYPE_OF_SCHOOL_CONTENT}
                    onChange={(e) => setInputSeniorHighSchoolTypeOfSchool(e)}
                    block
                    disabled={isEducationalAttainmentUpdateLoading}
                  />
                </Col>
                <Col xs={24} md={12}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>Year Graduated:</b>
                  </ControlLabel>
                  <Input
                    type="text"
                    value={inputSeniorHighSchoolYearGraduated}
                    onChange={(e) => setInputSeniorHighSchoolYearGraduated(e)}
                    disabled={isEducationalAttainmentUpdateLoading}
                  />
                </Col>
              </Row>
            </Panel>
          </Col>
          <Col xs={24} md={12} style={{ marginTop: '15px' }}>
            <Panel bordered header="College">
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>School Name:</b>
                  </ControlLabel>
                  <Input
                    type="text"
                    value={inputCollegeSchoolName}
                    onChange={(e) => setInputCollegeSchoolName(e)}
                    disabled={isEducationalAttainmentUpdateLoading}
                  />
                </Col>
                <Col xs={24} md={12}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>School Address:</b>
                  </ControlLabel>
                  <Input
                    type="text"
                    value={inputCollegeSchoolAddress}
                    onChange={(e) => setInputCollegeSchoolAddress(e)}
                    disabled={isEducationalAttainmentUpdateLoading}
                  />
                </Col>
              </Row>
              <hr />
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>Type of School:</b>
                  </ControlLabel>
                  <InputPicker
                    value={inputCollegeTypeOfSchool}
                    placeholder=""
                    data={TYPE_OF_SCHOOL_CONTENT}
                    onChange={(e) => setInputCollegeTypeOfSchool(e)}
                    block
                    disabled={isEducationalAttainmentUpdateLoading}
                  />
                </Col>
                <Col xs={24} md={12}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>Year Graduated:</b>
                  </ControlLabel>
                  <Input
                    type="text"
                    value={inputCollegeYearGraduated}
                    onChange={(e) => setInputCollegeYearGraduated(e)}
                    disabled={isEducationalAttainmentUpdateLoading}
                  />
                </Col>
              </Row>
            </Panel>
          </Col>
          <Col xs={24} md={12} style={{ marginTop: '15px' }}>
            <Panel bordered header="Graduate">
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>School Name:</b>
                  </ControlLabel>
                  <Input
                    type="text"
                    value={inputGraduateSchoolName}
                    onChange={(e) => setInputGraduateSchoolName(e)}
                    disabled={isEducationalAttainmentUpdateLoading}
                  />
                </Col>
                <Col xs={24} md={12}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>School Address:</b>
                  </ControlLabel>
                  <Input
                    type="text"
                    value={inputGraduateSchoolAddress}
                    onChange={(e) => setInputGraduateSchoolAddress(e)}
                    disabled={isEducationalAttainmentUpdateLoading}
                  />
                </Col>
              </Row>
              <hr />
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>Type of School:</b>
                  </ControlLabel>
                  <InputPicker
                    value={inputGraduateTypeOfSchool}
                    placeholder=""
                    data={TYPE_OF_SCHOOL_CONTENT}
                    onChange={(e) => setInputGraduateTypeOfSchool(e)}
                    block
                    disabled={isEducationalAttainmentUpdateLoading}
                  />
                </Col>
                <Col xs={24} md={12}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>Year Graduated:</b>
                  </ControlLabel>
                  <Input
                    type="text"
                    value={inputGraduateYearGraduated}
                    onChange={(e) => setInputGraduateYearGraduated(e)}
                    disabled={isEducationalAttainmentUpdateLoading}
                  />
                </Col>
              </Row>
            </Panel>
          </Col>
          <Col xs={24} md={12} style={{ marginTop: '15px' }}>
            <Panel bordered header="ALS (Alternative Learning School)">
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>School Name:</b>
                  </ControlLabel>
                  <Input
                    type="text"
                    value={inputAlsSchoolName}
                    onChange={(e) => setInputAlsSchoolName(e)}
                    disabled={isEducationalAttainmentUpdateLoading}
                  />
                </Col>
                <Col xs={24} md={12}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>School Address:</b>
                  </ControlLabel>
                  <Input
                    type="text"
                    value={inputAlsSchoolAddress}
                    onChange={(e) => setInputAlsSchoolAddress(e)}
                    disabled={isEducationalAttainmentUpdateLoading}
                  />
                </Col>
              </Row>
              <hr />
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>Type of School:</b>
                  </ControlLabel>
                  <InputPicker
                    value={inputAlsTypeOfSchool}
                    placeholder=""
                    data={TYPE_OF_SCHOOL_CONTENT}
                    onChange={(e) => setInputAlsTypeOfSchool(e)}
                    block
                    disabled={isEducationalAttainmentUpdateLoading}
                  />
                </Col>
                <Col xs={24} md={12}>
                  <ControlLabel>
                    <b style={{ color: "#39a7bf" }}>Year Graduated:</b>
                  </ControlLabel>
                  <Input
                    type="text"
                    value={inputAlsYearGraduated}
                    onChange={(e) => setInputAlsYearGraduated(e)}
                    disabled={isEducationalAttainmentUpdateLoading}
                  />
                </Col>
              </Row>
            </Panel>
          </Col>
        </Row>
      </Form>
    </>
  )
}
const mapStateToProps = (global: I_Global) => ({
  _id: global.auth.otherInfo._id,
  elementary: global.auth.otherInfo.educationalAttainment?.elementary,
  highSchool: global.auth.otherInfo.educationalAttainment?.highSchool,
  seniorHighSchool: global.auth.otherInfo.educationalAttainment?.seniorHighSchool,
  college: global.auth.otherInfo.educationalAttainment?.college,
  graduate: global.auth.otherInfo.educationalAttainment?.graduate,
  als: global.auth.otherInfo.educationalAttainment?.als,
  isEducationalAttainmentUpdateLoading: global.student.isUpdateLoading
})
export default connect(mapStateToProps, { updateStudent, triggerTopAlert })(EditEducationalAttainment);
