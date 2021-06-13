import React, { useEffect, useState } from "react";
import { Row, Col, Message, Panel } from "rsuite";
import { I_Component_Notification } from "../../interfaces/components";
import { I_Global } from "../../interfaces/global";
import { inputNameMapper } from "../../services/helper";
import { connect } from "react-redux";

const Notification = (props: I_Component_Notification) => {
  const {
    studentInformationValidationError,
    isStudentValidationValid,
    educationalAttainmentValidationError,
    isEducationalAttainmentValidationValid,
    intendedCourseValidationError,
    isIntendedCourseValidationValid,
    isRequiredDocumentsValidationValid,
    requiredDocumentsValidationError
  } = props;
  
  const renderErrors = () => {
    const studentInformation = studentInformationValidationError ? studentInformationValidationError.map((error: string) => {
      const rightInputName = inputNameMapper(error);
      return (
        <Col xs={24} style={{ marginTop: "15px" }}>
          <Message
            showIcon
            type="warning"
            description={`${rightInputName} is missing.`}
          />
        </Col>
      );
    }) : [];
    const educationalAttainment = educationalAttainmentValidationError ? educationalAttainmentValidationError.map((error: string) => {
      const rightInputName = inputNameMapper(error);
      return (
        <Col xs={24} style={{ marginTop: "15px" }}>
          <Message
            showIcon
            type="warning"
            description={`${rightInputName} is missing.`}
          />
        </Col>
      );
    }) : [];
    const intendedCourse = intendedCourseValidationError ? intendedCourseValidationError.map((error: string) => {
      const rightInputName = inputNameMapper(error);
      return (
        <Col xs={24} style={{ marginTop: "15px" }}>
          <Message
            showIcon
            type="warning"
            description={`${rightInputName} is missing.`}
          />
        </Col>
      );
    }) : [];
    const requiredDocuments = requiredDocumentsValidationError ? requiredDocumentsValidationError.map((error: string) => {
      const rightInputName = inputNameMapper(error);
      return (
        <Col xs={24} style={{ marginTop: "15px" }}>
          <Message
            showIcon
            type="warning"
            description={`${rightInputName} is missing.`}
          />
        </Col>
      );
    }) : [];
    const errorArray = [...studentInformation, ...educationalAttainment, ...requiredDocuments, ...intendedCourse]
    if(errorArray.length > 0) {
      return errorArray;
    } else {
      return <h4><i>No notification.</i></h4>
    }
    
  };

  return (
    <>
      <Panel bordered header="Notifications" style={{ margin: "15px" }}>
        <Row gutter={16}>{renderErrors()}</Row>
      </Panel>
    </>
  );
};

const mapStateToProps = (global: I_Global) => ({
  studentInformationValidationError: global.validation.studentInformation.error,
  isStudentValidationValid: global.validation.studentInformation.valid,
  educationalAttainmentValidationError: global.validation.educationalAttainment.error,
  isEducationalAttainmentValidationValid: global.validation.educationalAttainment.valid,
  intendedCourseValidationError: global.validation.intendedCourse.error,
  isIntendedCourseValidationValid: global.validation.intendedCourse.valid,
  requiredDocumentsValidationError: global.validation.requiredDocuments.error,
  isRequiredDocumentsValidationValid: global.validation.requiredDocuments.valid
});

export default connect(mapStateToProps)(Notification);
