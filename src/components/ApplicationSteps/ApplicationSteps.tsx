import React from 'react'
import { Row, Col, Panel } from 'rsuite';
import './ApplicationSteps.css'

const ApplicationSteps = () => {
    return (
        <Panel header="Application Steps" style={{ marginTop: '15px' }} bordered>
        <Row gutter={16}>
          <Col xs={24}>
            <h5 className="step-title">Step 1:</h5>
            <p>Create and access your online application account. You will need a valid application account and for receiving notifications about the status and results.</p>
            <hr />
            <h5 className="step-title">Step 2:</h5>
            <p>Fill out the application form.</p>
            <hr />
            <h5 className="step-title">Step 3:</h5>
            <p>Attach all necessary required documents.</p>
            <hr />
            <h5 className="step-title">Step 4:</h5>
            <p>Submit and Print your application.</p>
            <hr />
            <h5 className="step-title">Step 5:</h5>
            <p>You will receive a notification from your application account for the initial interview from the College you intended to enroll.</p>
            <hr />
            <h5 className="step-title">Step 6:</h5>
            <p>Once you pass the interview you will be given schedule for the Exam.</p>
            <hr />
            <h5 className="step-title">Step 7:</h5>
            <p>Take the exam on the given schedule.</p>
            <hr />
            <h5 className="step-title">Step 8:</h5>
            <p>After you pass the exam you need to fill out online forms from the medical unit.</p>
            <hr />
            <h5 className="step-title">Step 9:</h5>
            <p>Attached all necessary required documents.</p>
            <hr />
            <h5 className="step-title">Step 10:</h5>
            <p>After successfully finished all the steps you will be notified if you are pre-qualified for the enrollment.</p>
          </Col>
        </Row>
      </Panel>
    )
}

export default ApplicationSteps
