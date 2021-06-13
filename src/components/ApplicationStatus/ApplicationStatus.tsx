import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { Steps, Panel } from 'rsuite';
import { I_Component_Application_Status, StepStatusStrings } from '../../interfaces/components'
import { I_Global } from '../../interfaces/global';

const ApplicationStatus = (props: I_Component_Application_Status) => {
    const {
      isStudentInformationValidationValid,
      isIntendedCourseValidationValid,
      isEducationalAttainmentValidationValid,
      isRequiredDocumentsValidationValid,
      validation
    } = props;

    const [current, setCurrent] = useState(0)
    const [currentStatus, setCurrentStatus] = useState<StepStatusStrings>("process")

    useEffect(() => {
      if(
        !isStudentInformationValidationValid ||
        !isEducationalAttainmentValidationValid ||
        !isIntendedCourseValidationValid ||
        !isRequiredDocumentsValidationValid
      ) {
        setCurrent(0)
      } else {
        setCurrent(1)
      }
    }, [validation])

    return (
      <Panel header="Application Status" bordered>
          <Steps current={current} currentStatus={currentStatus} vertical>
            <Steps.Item title="Information" description="The student needs to finish all required fields and upload all files." />
            <Steps.Item title="Dean" description="The student needs to wait for an interview schedule from the Dean." />
            <Steps.Item title="Admission" description="The student needs to wait for the examination schedule." />
            <Steps.Item title="Clinic" description="The student needs to pass the mental and physical examination." />
            <Steps.Item title="Done" description="You have finish all the required steps. Thank you for your effort!" />
          </Steps>
      </Panel>
    )
}

const mapStateToProps = (global: I_Global) => ({
  isStudentInformationValidationValid: global.validation.studentInformation.valid,
  isIntendedCourseValidationValid: global.validation.intendedCourse.valid,
  isEducationalAttainmentValidationValid: global.validation.educationalAttainment.valid,
  isRequiredDocumentsValidationValid: global.validation.requiredDocuments.valid,
  validation: global.validation
});

export default connect(mapStateToProps, {})(ApplicationStatus);
