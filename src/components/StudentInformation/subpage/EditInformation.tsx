import React, { useEffect, useState, Component } from 'react'
import { Row, Col, Input, ControlLabel, InputPicker, DatePicker, Form, Button, Loader, Alert } from 'rsuite';
import './Information.css'
import { connect } from 'react-redux'
import { updateStudent } from '../../../actions/studentActions';
import { I_Global } from '../../../interfaces/global';
import { I_Component_Edit_Student_Information } from '../../../interfaces/components';
import { triggerTopAlert } from '../../../actions/topAlertActions';
import Asterisk  from '../../Asterisk/Asterisk'
import { 
    ADMIT_TYPE_DATA,
    STUDENT_TYPE_DATA,
    GENDER_DATA,
    CIVIL_STATUS_DATA,
    DISABILITY_DATA,
    IS_INDIGENOUS_PERSON_DATA } from '../../../services/constant';

const EditInformation  = (props: I_Component_Edit_Student_Information)  => {
    const { 
        _id,
        lrn,
        campusId,
        firstName,
        middleName,
        lastName,
        extensionName,
        admitType,
        typeOfStudent,
        mobileNumber,
        landlineNumber,
        dateOfBirth,
        placeOfBirth,
        houseNumber,
        street,
        barangay,
        municipality,
        province,
        zipCode,
        gender,
        citizenship,
        civilStatus,
        guardianName,
        guardianMobileNumber,
        guardianEmail,
        relationWithGuardian,
        guardianAddress,
        fathersName,
        mothersName,
        dswdHouseholdNumber,
        dswdHouseholdPerCapitaIncome,
        disability,
        isIndigenousPerson,
        isStudentUpdateLoading,
        updateStudent,
        setIsEditState
    } = props
    const [inputFirstName, setInputFirstName] = useState(firstName)
    const [inputMiddleName, setInputMiddleName] = useState(middleName)
    const [inputLastName, setInputLastName] = useState(lastName)
    const [inputExtensionName, setInputExtensionName] = useState(extensionName)
    const [inputAdmitType, setInputAdmitType] = useState(admitType)
    const [inputTypeOfStudent, setInputTypeOfStudent] = useState(typeOfStudent)
    const [inputMobileNumber, setInputMobileNumber] = useState(mobileNumber)
    const [inputLandlineNumber, setInputLandlineNumber] = useState(landlineNumber)
    const [inputDateOfBirth, setInputDateOfBirth] = useState(dateOfBirth)
    const [inputPlaceOfBirth, setInputPlaceOfBirth] = useState(placeOfBirth)
    const [inputGender, setInputGender] = useState(gender)
    const [inputHouseNumber, setInputHouseNumber] = useState(houseNumber);
    const [inputStreet, setInputStreet] = useState(street);
    const [inputCitizenship, setInputCitizenship] = useState(citizenship)
    const [inputBarangay, setInputBarangay] = useState(barangay)
    const [inputMunicipality, setInputMunicipality] = useState(municipality)
    const [inputProvince, setInputProvince] = useState(province)
    const [inputZipCode, setInputZipCode] = useState(zipCode)
    const [inputCivilStatus, setInputCivilStatus] = useState(civilStatus)
    const [inputGuardianName, setInputGuardianName] = useState(guardianName);
    const [inputGuardianAddress, setInputGuardianAddress] = useState(guardianAddress);
    const [inputGuardianEmail, setInputGuardianEmail] = useState(guardianEmail);
    const [inputFathersName, setInputFathersName] = useState(fathersName);
    const [inputMothersName, setInputMothersName] = useState(mothersName);
    const [inputDswdHouseholdNumber, setInputDswdHouseholdNumber] = useState(dswdHouseholdNumber);
    const [inputDswdHouseholdPerCapitaIncome, setInputDswdHouseholdPerCapitaIncome] = useState(dswdHouseholdPerCapitaIncome);
    const [inputGuardianMobileNumber, setInputGuardianMobileNumber] = useState(guardianMobileNumber);
    const [inputRelationWithGuardian, setInputRelationWithGuardian] = useState(relationWithGuardian);
    const [inputDisability, setInputDisability] = useState(disability);
    const [inputIsIndigenousPerson, setInputIsIndigenousPerson] = useState(isIndigenousPerson);

    const submitStudentInfo = () => {
        const student = {
            lrn,
            campusId,
            admitType: inputAdmitType,
            typeOfStudent: inputTypeOfStudent,
            firstName: inputFirstName,
            middleName: inputMiddleName,
            lastName: inputLastName,
            extensionName: inputExtensionName,
            mobileNumber: inputMobileNumber,
            landlineNumber: inputLandlineNumber,
            dateOfBirth: inputDateOfBirth,
            placeOfBirth: inputPlaceOfBirth,
            gender: inputGender,
            citizenship: inputCitizenship,
            houseNumber: inputHouseNumber,
            street: inputStreet,
            barangay: inputBarangay,
            municipality: inputMunicipality,
            province: inputProvince,
            zipCode: inputZipCode,
            civilStatus: inputCivilStatus,
            guardianName: inputGuardianName,
            guardianAddress: inputGuardianAddress,
            fathersName: inputFathersName,
            mothersName: inputMothersName,
            dswdHouseholdNumber: inputDswdHouseholdNumber,
            dswdHouseholdPerCapitaIncome: inputDswdHouseholdPerCapitaIncome,
            guardianMobileNumber: inputGuardianMobileNumber,
            guardianEmail: inputGuardianEmail,
            relationWithGuardian: inputRelationWithGuardian,
            disability: inputDisability,
            isIndigenousPerson: inputIsIndigenousPerson
        }
        updateStudent(
            _id,
            student
        )
    }

    return (
        <>
            <Form onSubmit={() => submitStudentInfo()}>
                <Row gutter={16}>
                    <Col style={{ marginTop: '15px' }}>
                        <Button appearance="ghost" size="sm" onClick={() => setIsEditState(false)} style={{ marginRight: '5px' }}>Back</Button>
                        <Button type="submit" appearance="primary" size="sm" disabled={isStudentUpdateLoading}>{!isStudentUpdateLoading ? "Save" : <Loader inverse />}</Button>
                    </Col>
                </Row>
                <Row className="row-margin" gutter={16}>
                    <Col xs={24} md={6}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>First Name:<Asterisk /></b></ControlLabel>
                        <Input
                            type="text"
                            value={inputFirstName}
                            onChange={e => setInputFirstName(e)}
                            disabled={isStudentUpdateLoading}
                        />
                    </Col>
                    <Col xs={24} md={6}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>Middle Name:</b></ControlLabel>
                        <Input
                            type="text"
                            value={inputMiddleName}
                            onChange={e => setInputMiddleName(e)}
                            disabled={isStudentUpdateLoading}
                        />
                    </Col>
                    <Col xs={24} md={6}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>Last Name:<Asterisk /></b></ControlLabel>
                        <Input
                            type="text"
                            value={inputLastName}
                            onChange={e => setInputLastName(e)}
                            disabled={isStudentUpdateLoading}
                        />
                    </Col>
                    <Col xs={24} md={6}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>Extension Name:</b></ControlLabel>
                        <Input
                            type="text"
                            value={inputExtensionName}
                            onChange={e => setInputExtensionName(e)}
                            disabled={isStudentUpdateLoading}
                        />
                    </Col>
                </Row>
                <Row className="row-margin" gutter={16}>
                    <Col xs={24} md={12}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>Admit Type:<Asterisk /></b></ControlLabel>
                        <InputPicker
                            value={inputAdmitType}
                            placeholder=""
                            data={ADMIT_TYPE_DATA}
                            onChange={e => setInputAdmitType(e)}
                            block
                            disabled={isStudentUpdateLoading}
                        />
                    </Col>
                    <Col xs={24} md={12}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>Student Type:<Asterisk /></b></ControlLabel>
                        <InputPicker
                            value={inputTypeOfStudent}
                            placeholder=""
                            data={STUDENT_TYPE_DATA}
                            onChange={e => setInputTypeOfStudent(e)}
                            block
                            disabled={isStudentUpdateLoading}
                        />
                    </Col>
                </Row>
                <Row className="row-margin" gutter={16}>
                    <Col xs={24} md={12}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>Mobile Number:<Asterisk /></b></ControlLabel>
                        <Input
                            type="text"
                            value={inputMobileNumber}
                            onChange={e => setInputMobileNumber(e)}
                            disabled={isStudentUpdateLoading}
                        />
                    </Col>
                    <Col xs={24} md={12}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>Landline Number:</b></ControlLabel>
                        <Input
                            type="text"
                            value={inputLandlineNumber}
                            onChange={e => setInputLandlineNumber(e)}
                            disabled={isStudentUpdateLoading}
                        />
                    </Col>
                </Row>
                <Row className="row-margin" gutter={16}>
                    <Col xs={24} md={12}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>Date of Birth:<Asterisk /></b></ControlLabel>
                        <DatePicker
                            placeholder=""
                            block
                            value={inputDateOfBirth}
                            onSelect={(e: Date) => setInputDateOfBirth(e)}
                            disabled={isStudentUpdateLoading}
                        />
                    </Col>
                    <Col xs={24} md={12}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>Place of Birth:<Asterisk /></b></ControlLabel>
                        <Input
                            type="text"
                            value={inputPlaceOfBirth}
                            onChange={e => setInputPlaceOfBirth(e)}
                            disabled={isStudentUpdateLoading}
                        />
                    </Col>
                </Row>
                <Row className="row-margin" gutter={16}>
                    <Col xs={24} md={8}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>House Number:</b></ControlLabel>
                        <Input
                            type="text"
                            value={inputHouseNumber}
                            onChange={e => setInputHouseNumber(e)}
                            disabled={isStudentUpdateLoading}
                        />
                    </Col>
                    <Col xs={24} md={8}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>Street:</b></ControlLabel>
                        <Input
                            type="text"
                            value={inputStreet}
                            onChange={e => setInputStreet(e)}
                            disabled={isStudentUpdateLoading}
                        />
                    </Col>
                    <Col xs={24} md={8}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>Barangay:<Asterisk /></b></ControlLabel>
                        <Input
                            type="text"
                            value={inputBarangay}
                            onChange={e => setInputBarangay(e)}
                            disabled={isStudentUpdateLoading}
                        />
                    </Col>
                </Row>
                <Row className="row-margin" gutter={16}>
                    <Col xs={24} md={8}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>Municipality:<Asterisk /></b></ControlLabel>
                        <Input
                            type="text"
                            value={inputMunicipality}
                            onChange={e => setInputMunicipality(e)}
                            disabled={isStudentUpdateLoading}
                        />
                    </Col>
                    <Col xs={24} md={8}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>Province:<Asterisk /></b></ControlLabel>
                        <Input
                            type="text"
                            value={inputProvince}
                            onChange={e => setInputProvince(e)}
                            disabled={isStudentUpdateLoading}
                        />
                    </Col>
                    <Col xs={24} md={8}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>Zip Code:<Asterisk /></b></ControlLabel>
                        <Input
                            type="text"
                            value={inputZipCode ? inputZipCode.toString() : ""}
                            onChange={e => setInputZipCode(e)}
                            disabled={isStudentUpdateLoading} />
                    </Col>
                </Row>
                <Row className="row-margin" gutter={16}>
                    <Col xs={24} md={8}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>Gender:<Asterisk /></b></ControlLabel>
                        <InputPicker
                            placeholder=""
                            data={GENDER_DATA}
                            value={inputGender}
                            type="text"
                            block
                            onChange={e => setInputGender(e)}
                            disabled={isStudentUpdateLoading}
                        />
                    </Col>
                    <Col xs={24} md={8}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>Citizenship:<Asterisk /></b></ControlLabel>
                        <Input
                            type="text"
                            value={inputCitizenship}
                            onChange={e => setInputCitizenship(e)}
                            disabled={isStudentUpdateLoading}
                        />
                    </Col>
                    <Col xs={24} md={8}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>Civil Status:<Asterisk /></b></ControlLabel>
                        <InputPicker
                            placeholder=""
                            data={CIVIL_STATUS_DATA}
                            value={inputCivilStatus}
                            block
                            type="text"
                            onChange={e => setInputCivilStatus(e)}
                            disabled={isStudentUpdateLoading}
                        />
                    </Col>
                </Row>
                <Row className="row-margin" gutter={16}>
                    <Col xs={24} md={8}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>Guardian Name:<Asterisk /></b></ControlLabel>
                        <Input
                            type="text"
                            value={inputGuardianName}
                            onChange={e => setInputGuardianName(e)}
                            disabled={isStudentUpdateLoading}
                        />
                    </Col>
                    <Col xs={24} md={8}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>Guardian Mobile Number:<Asterisk /></b></ControlLabel>
                        <Input
                            type="text"
                            value={inputGuardianMobileNumber}
                            onChange={e => setInputGuardianMobileNumber(e)}
                            disabled={isStudentUpdateLoading}
                        />
                    </Col>
                    <Col xs={24} md={8}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>Guardian Email:</b></ControlLabel>
                        <Input
                            type="text"
                            value={inputGuardianEmail}
                            onChange={e => setInputGuardianEmail(e)}
                            disabled={isStudentUpdateLoading}
                        />
                    </Col>
                </Row>
                <Row className="row-margin" gutter={16}>
                    <Col xs={24} md={8}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>Relation with Guardian:<Asterisk /></b></ControlLabel>
                        <Input
                            type="text"
                            value={inputRelationWithGuardian}
                            onChange={e => setInputRelationWithGuardian(e)}
                            disabled={isStudentUpdateLoading}
                        />
                    </Col>
                    <Col xs={24} md={16}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>Guardian Address:<Asterisk /></b></ControlLabel>
                        <Input
                            type="text"
                            value={inputGuardianAddress}
                            onChange={e => setInputGuardianAddress(e)}
                            disabled={isStudentUpdateLoading}
                        />
                    </Col>
                </Row>
                <Row className="row-margin" gutter={16}>
                    <Col xs={24} md={12}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>Father's Name:<Asterisk /></b></ControlLabel>
                        <Input
                            type="text"
                            value={inputFathersName}
                            onChange={e => setInputFathersName(e)}
                            disabled={isStudentUpdateLoading}
                        />
                    </Col>
                    <Col xs={24} md={12}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>Mother's Name:<Asterisk /></b></ControlLabel>
                        <Input
                            type="text"
                            value={inputMothersName}
                            onChange={e => setInputMothersName(e)}
                            disabled={isStudentUpdateLoading}
                        />
                    </Col>
                </Row>
                <Row className="row-margin" gutter={16}>
                    <Col xs={24} md={12}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>DSWD Household Number:</b></ControlLabel>
                        <Input
                            type="text"
                            value={inputDswdHouseholdNumber ? inputDswdHouseholdNumber.toString() : ""}
                            onChange={e => setInputDswdHouseholdNumber(e)}
                            disabled={isStudentUpdateLoading} />
                    </Col>
                    <Col xs={24} md={12}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>Household Per Capita Income:</b></ControlLabel>
                        <Input
                            type="text"
                            value={inputDswdHouseholdPerCapitaIncome ? inputDswdHouseholdPerCapitaIncome.toString() : ""}
                            onChange={e => setInputDswdHouseholdPerCapitaIncome(parseInt(e))}
                            disabled={isStudentUpdateLoading} />
                    </Col>
                </Row>
                <Row className="row-margin" gutter={16}>
                    <Col xs={24} md={12}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>Disability:<Asterisk /></b></ControlLabel>
                        <InputPicker
                            placeholder=""
                            data={DISABILITY_DATA}
                            block
                            value={inputDisability}
                            type="text"
                            onChange={e => setInputDisability(e)}
                            disabled={isStudentUpdateLoading}
                        />
                    </Col>
                    <Col xs={24} md={12}>
                        <ControlLabel><b style={{ color: '#39a7bf' }}>Indigenous Person:<Asterisk /></b></ControlLabel>
                        <InputPicker
                            placeholder=""
                            data={IS_INDIGENOUS_PERSON_DATA}
                            block
                            value={inputIsIndigenousPerson}
                            type="text"
                            onChange={e => setInputIsIndigenousPerson(e)}
                            disabled={isStudentUpdateLoading}
                        />
                    </Col>
                </Row>
            </Form>
        </>
    )
}

const mapStateToProps = (global: I_Global) => ({
    _id: global.auth.otherInfo?._id,
    campusId: global.auth.otherInfo?.campusId,
    lrn: global.auth.otherInfo?.lrn,
    firstName: global.auth.otherInfo?.firstName,
    middleName: global.auth.otherInfo?.middleName,
    lastName: global.auth.otherInfo?.lastName,
    extensionName: global.auth.otherInfo?.extensionName,
    admitType: global.auth.otherInfo?.admitType,
    typeOfStudent: global.auth.otherInfo?.typeOfStudent,
    mobileNumber: global.auth.otherInfo?.mobileNumber,
    landlineNumber: global.auth.otherInfo?.landlineNumber,
    dateOfBirth: global.auth.otherInfo?.dateOfBirth,
    placeOfBirth: global.auth.otherInfo?.placeOfBirth,
    houseNumber: global.auth.otherInfo?.houseNumber,
    street: global.auth.otherInfo?.street,
    barangay: global.auth.otherInfo?.barangay,
    municipality: global.auth.otherInfo?.municipality,
    province: global.auth.otherInfo?.province,
    zipCode: global.auth.otherInfo?.zipCode,
    gender: global.auth.otherInfo?.gender,
    citizenship: global.auth.otherInfo?.citizenship,
    civilStatus: global.auth.otherInfo?.civilStatus,
    guardianName: global.auth.otherInfo?.guardianName,
    guardianMobileNumber: global.auth.otherInfo?.guardianMobileNumber,
    guardianEmail: global.auth.otherInfo?.guardianEmail,
    relationWithGuardian: global.auth.otherInfo?.relationWithGuardian,
    guardianAddress: global.auth.otherInfo?.guardianAddress,
    fathersName: global.auth.otherInfo?.fathersName,
    mothersName: global.auth.otherInfo?.mothersName,
    dswdHouseholdNumber: global.auth.otherInfo?.dswdHouseholdNumber,
    dswdHouseholdPerCapitaIncome: global.auth.otherInfo?.dswdHouseholdPerCapitaIncome,
    disability: global.auth.otherInfo?.disability,
    isIndigenousPerson: global.auth.otherInfo?.isIndigenousPerson,
    isStudentUpdateLoading: global.student.isUpdateLoading
})
export default connect(mapStateToProps, { updateStudent, triggerTopAlert })(EditInformation);