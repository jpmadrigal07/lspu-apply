import React from 'react'
import { connect } from 'react-redux';
import { Row, Col, Button, Panel, Input } from 'rsuite';
import { I_Component_Educational_Attainment_Information } from '../../../interfaces/components';
import { I_Global } from '../../../interfaces/global';
import Asterisk from '../../Asterisk/Asterisk'

const Information = (props: I_Component_Educational_Attainment_Information) => {
  const { setIsEditState, elementary, highSchool, seniorHighSchool, college, graduate, als } = props
  return (
    <>
      <Row gutter={16}>
        <Col style={{ marginTop: '15px' }}>
          <Button appearance="primary" size="sm" style={{ marginRight: '5px' }} onClick={() => setIsEditState(true)}>Edit</Button>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} md={12} style={{ marginTop: '15px' }}>
          <Panel bordered header="Elementary">
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <p><b style={{ color: '#39a7bf' }}>School name:<Asterisk /></b><br />
                  {elementary ? elementary?.schoolName : '---'}
                </p>
              </Col>
              <Col xs={24} md={12}>
                <p><b style={{ color: '#39a7bf' }}>School address:<Asterisk /></b><br />
                  {elementary ? elementary?.schoolAddress : '---'}
                </p>
              </Col>
            </Row>
            <hr />
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <p><b style={{ color: '#39a7bf' }}>Type of school:<Asterisk /></b><br />
                  {elementary ? elementary?.typeOfSchool : '---'}
                </p>
              </Col>
              <Col xs={24} md={12}>
                <p><b style={{ color: '#39a7bf' }}>Year graduated:<Asterisk /></b><br />
                  {elementary ? elementary?.yearGraduated : '---'}
                </p>
              </Col>
            </Row>
          </Panel>
        </Col>
        <Col xs={24} md={12} style={{ marginTop: '15px' }}>
          <Panel bordered header="High school">
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <p><b style={{ color: '#39a7bf' }}>School name:<Asterisk /></b><br />
                  {highSchool ? highSchool?.schoolName : '---'}
                </p>
              </Col>
              <Col xs={24} md={12}>
                <p><b style={{ color: '#39a7bf' }}>School address:<Asterisk /></b><br />
                  {highSchool ? highSchool?.schoolAddress : '---'}
                </p>
              </Col>
            </Row>
            <hr />
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <p><b style={{ color: '#39a7bf' }}>Type of school:<Asterisk /></b><br />
                  {highSchool ? highSchool?.typeOfSchool : '---'}
                </p>
              </Col>
              <Col xs={24} md={12}>
                <p><b style={{ color: '#39a7bf' }}>Year graduated:<Asterisk /></b><br />
                  {highSchool ? highSchool?.yearGraduated : '---'}
                </p>
              </Col>
            </Row>
          </Panel>
        </Col>
        <Col xs={24} md={12} style={{ marginTop: '15px' }}>
          <Panel bordered header="Senior high school">
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <p><b style={{ color: '#39a7bf' }}>School name:<Asterisk /></b><br />
                  {seniorHighSchool ? seniorHighSchool?.schoolName : '---'}
                </p>
              </Col>
              <Col xs={24} md={12}>
                <p><b style={{ color: '#39a7bf' }}>School address:<Asterisk /></b><br />
                  {seniorHighSchool ? seniorHighSchool?.schoolAddress : '---'}
                </p>
              </Col>
            </Row>
            <hr />
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <p><b style={{ color: '#39a7bf' }}>Type of school:<Asterisk /></b><br />
                  {seniorHighSchool ? seniorHighSchool?.typeOfSchool : '---'}
                </p>
              </Col>
              <Col xs={24} md={12}>
                <p><b style={{ color: '#39a7bf' }}>Year graduated:<Asterisk /></b><br />
                  {seniorHighSchool ? seniorHighSchool?.yearGraduated : '---'}
                </p>
              </Col>
            </Row>
          </Panel>
        </Col>
        <Col xs={24} md={12} style={{ marginTop: '15px' }}>
          <Panel bordered header="College">
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <p><b style={{ color: '#39a7bf' }}>School name:</b><br />
                  {college ? college?.schoolName : '---'}
                </p>
              </Col>
              <Col xs={24} md={12}>
                <p><b style={{ color: '#39a7bf' }}>School address:</b><br />
                  {college ? college?.schoolAddress : '---'}
                </p>
              </Col>
            </Row>
            <hr />
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <p><b style={{ color: '#39a7bf' }}>Type of school:</b><br />
                  {college ? college?.typeOfSchool : '---'}
                </p>
              </Col>
              <Col xs={24} md={12}>
                <p><b style={{ color: '#39a7bf' }}>Year graduated:</b><br />
                  {college ? college?.yearGraduated : '---'}
                </p>
              </Col>
            </Row>
          </Panel>
        </Col>
        <Col xs={24} md={12} style={{ marginTop: '15px' }}>
          <Panel bordered header="Graduate">
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <p><b style={{ color: '#39a7bf' }}>School name:</b><br />
                  {graduate ? graduate?.schoolName : '---'}
                </p>
              </Col>
              <Col xs={24} md={12}>
                <p><b style={{ color: '#39a7bf' }}>School address:</b><br />
                  {graduate ? graduate?.schoolAddress : '---'}
                </p>
              </Col>
            </Row>
            <hr />
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <p><b style={{ color: '#39a7bf' }}>Type of school:</b><br />
                  {graduate ? graduate?.typeOfSchool : '---'}
                </p>
              </Col>
              <Col xs={24} md={12}>
                <p><b style={{ color: '#39a7bf' }}>Year graduated:</b><br />
                  {graduate ? graduate?.yearGraduated : '---'}
                </p>
              </Col>
            </Row>
          </Panel>
        </Col>
        <Col xs={24} md={12} style={{ marginTop: '15px' }}>
          <Panel bordered header="ALS (Alternative Learning School)">
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <p><b style={{ color: '#39a7bf' }}>School name:</b><br />
                  {als ? als?.schoolName : '---'}
                </p>
              </Col>
              <Col xs={24} md={12}>
                <p><b style={{ color: '#39a7bf' }}>School address:</b><br />
                  {als ? als?.schoolAddress : '---'}
                </p>
              </Col>
            </Row>
            <hr />
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <p><b style={{ color: '#39a7bf' }}>Type of school:</b><br />
                  {als ? als?.typeOfSchool : '---'}
                </p>
              </Col>
              <Col xs={24} md={12}>
                <p><b style={{ color: '#39a7bf' }}>Year graduated:</b><br />
                  {als ? als?.yearGraduated : '---'}
                </p>
              </Col>
            </Row>
          </Panel>
        </Col>
      </Row>
    </>
  )
}
const mapStateToProps = (global: I_Global) => ({
  elementary: global.auth.otherInfo.educationalAttainment?.elementary,
  highSchool: global.auth.otherInfo.educationalAttainment?.highSchool,
  seniorHighSchool: global.auth.otherInfo.educationalAttainment?.seniorHighSchool,
  college: global.auth.otherInfo.educationalAttainment?.college,
  graduate: global.auth.otherInfo.educationalAttainment?.graduate,
  als: global.auth.otherInfo.educationalAttainment?.als,
})
export default connect(mapStateToProps)(Information)