import React, { useState, useEffect } from 'react'
import { Row, Col, Button } from 'rsuite';
import './Information.css'
import { connect } from "react-redux";
import { I_Global } from '../../../interfaces/global';
import { I_Component_Student_Information } from '../../../interfaces/components';
import Asterisk  from '../../Asterisk/Asterisk'
import moment from 'moment';

const Information = (props: I_Component_Student_Information) => {
    const {
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
        setIsEditState
    } = props;
    const [isIndigenousPersonText, setIsIndigenousPersonText] = useState('No')
    useEffect(() => {
        if (typeof isIndigenousPerson !== 'undefined' && isIndigenousPerson !== null) {
            setIsIndigenousPersonText(isIndigenousPerson ? 'Yes' : 'No')
        }
        else {
            setIsIndigenousPersonText('---')
        }
    }, [])

    return (
        <>
            <div className="information-div">
                <Row style={{ marginTop: '15px'}}>
                    <Button style={{ marginLeft: '5px'}} appearance="primary" size="sm" onClick={() => setIsEditState(true)}>Edit</Button>
                </Row>
                <Row className="row-margin" gutter={16}>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>First Name:<Asterisk /></b><br />{firstName ? firstName : '---'}</p>
                    </Col>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>Middle Name:</b><br />{middleName ? middleName : '---'}</p>
                    </Col>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>Last Name:<Asterisk /></b><br />{lastName ? lastName : '---'}</p>
                    </Col>

                </Row>
                <Row className="row-margin" gutter={16}>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>Extension Name:</b><br />{extensionName ? extensionName : '---'}</p>
                    </Col>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>Admit Type:<Asterisk /></b><br />{admitType ? admitType : '---'}</p>
                    </Col>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>Student Type:<Asterisk /></b><br />{typeOfStudent ? typeOfStudent : '---'}</p>
                    </Col>
                </Row>
                <Row className="row-margin" gutter={16}>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>Mobile Number:<Asterisk /></b><br />{mobileNumber ? mobileNumber : '---'}</p>
                    </Col>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>Landline Number</b><br />{landlineNumber ? landlineNumber : '---'}</p>
                    </Col>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>Date of Birth:<Asterisk /></b><br />{dateOfBirth ? moment(dateOfBirth).format("MMMM DD, YYYY") : '---'}</p>
                    </Col>
                </Row>
                <Row className="row-margin" gutter={16}>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>Place of Birth:</b><br />{placeOfBirth ? placeOfBirth : '---'}</p>
                    </Col>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>House Number:</b><br />{houseNumber ? houseNumber : '---'}</p>
                    </Col>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>Street:</b><br />{street ? street : '---'}</p>
                    </Col>
                </Row>
                <Row className="row-margin" gutter={16}>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>Barangay:<Asterisk /></b><br />{barangay ? barangay : '---'}</p>
                    </Col>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>Municipality:<Asterisk /></b><br />{municipality ? municipality : '---'}</p>
                    </Col>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>Province:<Asterisk /></b><br />{province ? province : '---'}</p>
                    </Col>
                </Row>
                <Row className="row-margin" gutter={16}>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>Zip Code:<Asterisk /></b><br />{zipCode ? zipCode : '---'}</p>
                    </Col>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>Gender:<Asterisk /></b><br />{gender ? gender : '---'}</p>
                    </Col>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>Citizenship:<Asterisk /></b><br />{citizenship ? citizenship : '---'}</p>
                    </Col>
                </Row>
                <Row className="row-margin" gutter={16}>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>Civil Status:<Asterisk /></b><br />{civilStatus ? civilStatus : '---'}</p>
                    </Col>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>Guardian Name:<Asterisk /></b><br />{guardianName ? guardianName : '---'}</p>
                    </Col>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>Guardian Mobile Number:<Asterisk /></b><br />{guardianMobileNumber ? guardianMobileNumber : '---'}</p>
                    </Col>
                </Row>
                <Row className="row-margin" gutter={16}>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>Guardian Email:</b><br />{guardianEmail ? guardianEmail : '---'}</p>
                    </Col>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>Relation with Guardian:<Asterisk /></b><br />{relationWithGuardian ? relationWithGuardian : '---'}</p>
                    </Col>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>Guardian's Address:<Asterisk /></b><br />{guardianAddress ? guardianAddress : '---'}</p>
                    </Col>
                </Row>
                <Row className="row-margin" gutter={16}>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>Father's Name:<Asterisk /></b><br />{fathersName ? fathersName : '---'}</p>
                    </Col>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>Mother's Name:<Asterisk /></b><br />{mothersName ? mothersName : '---'}</p>
                    </Col>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>DSWD Household Number:</b><br />{dswdHouseholdNumber ? dswdHouseholdNumber : '---'}</p>
                    </Col>
                </Row>
                <Row className="row-margin" gutter={16}>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>Household Per Capita Income:</b><br />{dswdHouseholdPerCapitaIncome ? dswdHouseholdPerCapitaIncome : '---'}</p>
                    </Col>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>Disability:<Asterisk /></b><br />{disability ? disability : '---'}</p>
                    </Col>
                    <Col xs={24} md={8}>
                        <p><b style={{ color: '#39a7bf' }}>Indigenous Person:<Asterisk /></b><br />{isIndigenousPersonText}</p>
                    </Col>
                </Row>
            </div>
        </>
    )
}

const mapStateToProps = (global: I_Global) => ({
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
});

export default connect(mapStateToProps, {})(Information)
