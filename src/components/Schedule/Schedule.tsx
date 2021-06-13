import React from 'react'
import { Row, Col, Panel } from 'rsuite';
import { I_Component_Schedule } from '../../interfaces/components'
import './Schedule.css'

const Schedule = (props: I_Component_Schedule) => {
    const {
        interviewTimeFrom,
        interviewTimeTo,
        interviewRoom,
        examinationTimeFrom,
        examinationTimeTo,
        examinationRoom,
    } = props;

    return (
        <Panel header="Schedule" style={{ marginTop: '15px' }} bordered>
        <Row gutter={16}>
          <Col xs={12}>
            <h5 className="schedule-name">Interview</h5>
            <p>Time: <b>{interviewTimeFrom} - {interviewTimeTo}</b></p>
            <p>Room: <b>{interviewRoom}</b></p>
          </Col>
          <Col xs={12}>
            <h5 className="schedule-name">Examination</h5>
            <p>Time: <b>{examinationTimeFrom} - {examinationTimeTo}</b></p>
            <p>Room: <b>{examinationRoom}</b></p>
          </Col>
        </Row>
      </Panel>
    )
}

export default Schedule
