import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { Navbar, Dropdown, Icon, Alert, Badge } from 'rsuite';
import Nav from "@rsuite/responsive-nav";
import { useHistory } from "react-router-dom";
import './Navigation.css'
// import default style
import 'rsuite/dist/styles/rsuite-default.css';
import lspu_logo from '../../images/lspu_logo_40.png'
import { logOut, checkAuth, checkIfTokenExpired, getToken } from '../../services/helper';
import { I_Component_Navigation } from '../../interfaces/components';
import { I_Global } from '../../interfaces/global';
import { triggerTopAlert } from '../../actions/topAlertActions';
import { emptyAuth, verifyToken } from '../../actions/authActions';
import { COURSES_PAGE, DASHBOARD_PAGE, NOTIFICATION_PAGE } from '../../services/constant';
import { I_TopAlert } from '../../interfaces/topAlert';
import { addUserDocument, getUserDocument } from '../../actions/userDocumentActions'
import { getDocument } from '../../actions/documentActions'
import { validateEducationalAttainment, validateIntendedCourse, validateStudentInformation } from '../../services/validator';
import { triggerStudentValidation, triggerEducationalAttainmentValidation, triggerIntendedCourseValidation } from '../../actions/validationActions';

const Navigation = (props: I_Component_Navigation) => {
    const { 
        isAuthLoading,
        alertMessage, 
        showAlert,
        triggerTopAlert,
        triggerStudentValidation,
        triggerEducationalAttainmentValidation,
        triggerIntendedCourseValidation,
        alertType,
        authId,
        authEmail,
        authUserType, 
        verifyToken,
        currentPage,
        firstName,
        lastName,
        mobileNumber,
        dateOfBirth,
        placeOfBirth,
        gender,
        barangay,
        municipality,
        province,
        zipCode,
        citizenship,
        civilStatus,
        guardianName,
        guardianAddress,
        guardianMobileNumber,
        guardianEmail,
        relationWithGuardian,
        fathersName,
        mothersName,
        disability,
        isIndigenousPerson,
        userDocument,
        getUserDocument,
        getDocument,
        document,
        educationalAttainment,
        intendedCourse,
        otherInfo,
        isStudentInformationValidationValid,
        isIntendedCourseValidationValid,
        isEducationalAttainmentValidationValid,
        isRequiredDocumentsValidationValid,
        emptyAuth
    } = props;
    const history = useHistory();

    useEffect(() => {
        // isCurrentPageInside is to check if this page required authentication to access
        const isCurrentPageAuthRestricted = true;
        checkAuth(
            (res: string) => history.push(res),
            (res: I_TopAlert) => triggerTopAlert(res.showAlert, res.message, res.type),
            () => emptyAuth(),
            isCurrentPageAuthRestricted
        );
    }, []);
    
    useEffect(() => {
        if (alertMessage) {
          if(alertType === "success") {
              Alert.success(alertMessage, 3000, (() => triggerTopAlert(false, "", "")))
          } else if(alertType === "warning") {
              Alert.warning(alertMessage, 3000, (() => triggerTopAlert(false, "", "")))
          } else if(alertType === "danger") {
              Alert.error(alertMessage, 3000, (() => triggerTopAlert(false, "", "")))
          }
        }
      }, [showAlert]);

    useEffect(() => {
        if (!checkIfTokenExpired() && (!authId || !authEmail || !authUserType)) {
            // run get auth user and otherInfo
            // params: cookie auth token
            if (getToken()) {
                verifyToken(getToken())
            }
        }
    }, [authId, authEmail, authUserType]);
    
    useEffect(() => {
        if (otherInfo) {
            const errorsStudentInformation = validateStudentInformation({
                firstName,
                lastName,
                mobileNumber,
                dateOfBirth,
                placeOfBirth,
                gender,
                barangay,
                municipality,
                province,
                zipCode,
                citizenship,
                civilStatus,
                guardianName,
                guardianMobileNumber,
                guardianEmail,
                relationWithGuardian,
                guardianAddress,
                fathersName,
                mothersName,
                disability,
                isIndigenousPerson
            });
            const studentInformationErrors = errorsStudentInformation.error?.map((res: any) => res.params.missingProperty);
            triggerStudentValidation({error: studentInformationErrors, valid: errorsStudentInformation.valid})
            const errorsEducationalAttainment = validateEducationalAttainment({educationalAttainment});
            const educationalAttainmentErrors = errorsEducationalAttainment.error?.map((res: any) => educationalAttainmentErrorMapper(res));
            triggerEducationalAttainmentValidation({ error: educationalAttainmentErrors, valid: errorsEducationalAttainment.valid })
            const errorsIntendedCourse = validateIntendedCourse({intendedCourse});
            const intendedCoursesErrors = errorsIntendedCourse.error?.map((res: any) => res.params.missingProperty);
            triggerIntendedCourseValidation({ error: intendedCoursesErrors, valid: errorsIntendedCourse.valid })
            if (document.length === 0) {
                getDocument()
            }
            if(userDocument.length === 0) {
                getUserDocument(otherInfo?._id)
            }
        }
    }, [otherInfo]);

    const educationalAttainmentErrorMapper = (error: any) => {
        const educationalAttainmentText = ".educationalAttainment";
        const missingProperty = error.params.missingProperty;
        if(error.dataPath === educationalAttainmentText) {
            return missingProperty;
        } else {
            if(error.dataPath === `${educationalAttainmentText}.elementary`) {
                return `${missingProperty}Elementary`
            } else if(error.dataPath === `${educationalAttainmentText}.highSchool`) {
                return `${missingProperty}HighSchool`
            } else if(error.dataPath === `${educationalAttainmentText}.seniorHighSchool`) {
                return `${missingProperty}SeniorHighSchool`
            } else if(error.dataPath === `${educationalAttainmentText}.college`) {
                return `${missingProperty}College`
            } else if(error.dataPath === `${educationalAttainmentText}.graduate`) {
                return `${missingProperty}Graduate`
            } else if(error.dataPath === `${educationalAttainmentText}.als`) {
                return `${missingProperty}Als`
            }
        }
    }
     
    return (
        <Navbar className="black-navbar">
            <Navbar.Header>
                <img src={lspu_logo} alt="LSPU Logo" className="main-logo" />
                <span className="navbar-brand main-logo-text"><strong>LSPU</strong> Apply</span>
            </Navbar.Header>
            <Navbar.Body>
                <Nav>
                    <Nav.Item active={currentPage === DASHBOARD_PAGE} onClick={() => history.push(DASHBOARD_PAGE.toLowerCase())}>Dashboard</Nav.Item>
                    <Nav.Item active={currentPage === COURSES_PAGE} onClick={() => history.push(COURSES_PAGE.toLowerCase())}>Courses</Nav.Item>
                </Nav>
                <Nav pullRight>
                    <Nav.Item
                        icon={
                            !isStudentInformationValidationValid ||
                            !isEducationalAttainmentValidationValid ||
                            !isIntendedCourseValidationValid ||
                            !isRequiredDocumentsValidationValid ? (
                                <Badge color="red">
                                    <Icon icon="bell" />
                                </Badge>
                            ) : (
                                <Icon icon="bell" />
                            )
                        }
                        active={currentPage === NOTIFICATION_PAGE}
                        onClick={() => history.push(NOTIFICATION_PAGE.toLowerCase())}
                    ></Nav.Item>
                    <Dropdown title="Juan">
                        <Dropdown.Item onClick={() => logOut()}>Logout</Dropdown.Item>
                    </Dropdown>
                </Nav>
            </Navbar.Body>
        </Navbar>
    )
}

const mapStateToProps = (global: I_Global) => ({
    otherInfo: global.auth.otherInfo,
    isAuthLoading: global.auth.isLoading,
    alertMessage: global.topAlert.message,
    alertType: global.topAlert.type,
    showAlert: global.topAlert.showAlert,
    authId: global.auth.user?._id,
    authEmail: global.auth.user?.email,
    authUserType: global.auth.user?.userType,
    firstName: global.auth.otherInfo?.firstName,
    lastName: global.auth.otherInfo?.lastName,
    mobileNumber: global.auth.otherInfo?.mobileNumber,
    dateOfBirth: global.auth.otherInfo?.dateOfBirth,
    placeOfBirth: global.auth.otherInfo?.placeOfBirth,
    gender: global.auth.otherInfo?.gender,
    houseNumber: global.auth.otherInfo?.houseNumber,
    barangay: global.auth.otherInfo?.barangay,
    municipality: global.auth.otherInfo?.municipality,
    province: global.auth.otherInfo?.province,
    zipCode: global.auth.otherInfo?.zipCode,
    citizenship: global.auth.otherInfo?.citizenship,
    civilStatus: global.auth.otherInfo?.civilStatus,
    guardianName: global.auth.otherInfo?.guardianName,
    guardianMobileNumber: global.auth.otherInfo?.guardianMobileNumber,
    guardianEmail: global.auth.otherInfo?.guardianEmail,
    relationWithGuardian: global.auth.otherInfo?.relationWithGuardian,
    guardianAddress: global.auth.otherInfo?.guardianAddress,
    fathersName: global.auth.otherInfo?.fathersName,
    mothersName: global.auth.otherInfo?.mothersName,
    disability: global.auth.otherInfo?.disability,
    isIndigenousPerson: global.auth.otherInfo?.isIndigenousPerson,
    document: global.document?.data,
    userDocument: global.userDocument?.data,
    educationalAttainment: global.auth.otherInfo?.educationalAttainment,
    intendedCourse: global.auth.otherInfo?.intendedCourse,
    isStudentInformationValidationValid: global.validation.studentInformation.valid,
    isIntendedCourseValidationValid: global.validation.intendedCourse.valid,
    isEducationalAttainmentValidationValid: global.validation.educationalAttainment.valid,
    isRequiredDocumentsValidationValid: global.validation.requiredDocuments.valid,
});

export default connect(mapStateToProps, {
  triggerTopAlert,
  verifyToken,
  triggerStudentValidation,
  triggerEducationalAttainmentValidation,
  triggerIntendedCourseValidation,
  emptyAuth,
  getDocument,
  getUserDocument
})(Navigation);

  
