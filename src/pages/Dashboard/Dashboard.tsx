import React, { useState } from "react";
import { Grid, Row, Col, Nav } from "rsuite";
import Navigation from "../../components/Navigation/Navigation";
import Schedule from "../../components/Schedule/Schedule";
import Student from "../../components/Student/Student";
import ApplicationStatus from "../../components/ApplicationStatus/ApplicationStatus";
import ApplicationSteps from "../../components/ApplicationSteps/ApplicationSteps";
import { DashboardTabStrings } from "../../interfaces/components";
import "./Dashboard.css";
import StudentInformation from "../../components/StudentInformation/StudentInformation";
import EducationalAttainment from "../../components/EducationalAttainment/EducationalAttainment";
import IntendedCourses from "../../components/IntendedCourses/IntendedCourses";
import RequiredDocuments from "../../components/RequiredDocuments/RequiredDocuments";
import { DASHBOARD_PAGE } from "../../services/constant";
import { I_Global } from "../../interfaces/global";
import { triggerTopAlert } from "../../actions/topAlertActions";
import { connect } from "react-redux";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<DashboardTabStrings>("studentInformation");

  const renderTabs = () => {
    if (activeTab === "studentInformation") {
      return <StudentInformation />;
    } else if (activeTab === "educationalAttainment") {
      return <EducationalAttainment />;
    } else if (activeTab === "intendedCourse") {
      return <IntendedCourses />;
    } else if (activeTab === "requiredDocuments") {
      return <RequiredDocuments />;
    }
  };

  return (
    <>
      <Navigation currentPage={DASHBOARD_PAGE} />
      <Grid fluid className="content">
        <Row gutter={16}>
          <Col xs={24} md={5} style={{marginBottom: '15px'}}>
            <Student />
            <Schedule
              interviewTimeFrom="9:00 am"
              interviewTimeTo="10:00 am"
              interviewRoom="Function Hall"
              examinationTimeFrom="9:00 am"
              examinationTimeTo="10:00 am"
              examinationRoom="Function Hall"
            />
            <ApplicationSteps />
          </Col>
          <Col xs={24} md={15} style={{marginBottom: '15px'}}>
            <Nav
              appearance="subtle"
              activeKey={activeTab}
              onSelect={(key) => setActiveTab(key)}
              
            >
              <Nav.Item eventKey="studentInformation">
                Student Information
              </Nav.Item>
              <Nav.Item eventKey="educationalAttainment">
                Educational Attainment
              </Nav.Item>
              <Nav.Item eventKey="intendedCourse">Intended Course</Nav.Item>
              <Nav.Item eventKey="requiredDocuments">
                Required Documents
              </Nav.Item>
            </Nav>
            {renderTabs()}
          </Col>
          <Col xs={24} md={4}>
            <ApplicationStatus />
          </Col>
        </Row>
      </Grid>
    </>
  );
};

const mapStateToProps = (global: I_Global) => ({});

export default connect(mapStateToProps, { triggerTopAlert })(Dashboard);
