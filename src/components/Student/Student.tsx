import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import { Row, Col, Panel } from 'rsuite';
import { I_Component_Student } from '../../interfaces/components'
import { getUserDocument } from '../../actions/userDocumentActions'
import { I_Global } from '../../interfaces/global';
import Image from '../Image/Image';
import student_no_picture from '../../images/student_no_picture.png';
import './Student.css'
import { I_User_Document } from '../../interfaces/userDocument';
import { getDocument } from '../../actions/documentActions';
import { I_Document } from '../../interfaces/document';

const Student = (props: I_Component_Student) => {
    const {
        userId,
        firstName,
        lastName,
        middleName,
        lrn,
        mobileNumber,
        userDocument,
        document
    } = props;

    const [profilePicture, setProfilePicture] = useState<String | undefined>("");

    useEffect(() => {
        if(document.length > 0 && userDocument.length > 0) {
            const foundDocument = document.find((res: I_Document) => res.fileName === "2x2")
            const foundUserDocument = userDocument.find((res: I_User_Document) => res.documentId === foundDocument?._id && res.userId === userId)
            setProfilePicture(foundUserDocument?.documentPath)
        }
    }, [document, userDocument])

    const middleInitial = middleName ? `${middleName.charAt(0)}.` : ""

    return (
        <Panel header="Student" bordered>
            <Row gutter={16}>
            <Col xs={8}>
                <Image alt="Logo" src={profilePicture ? `/public/${profilePicture}` : student_no_picture} height="100" style={{ width: '100%' }} />
            </Col>
            <Col xs={16}>
                <h5 className="student-name">{firstName ? firstName : "---"} {firstName || lastName ? middleInitial : "---"} {lastName ? lastName : "---"}</h5>
                <p>LRN: <b>{lrn ? lrn : "---"}</b></p>
                <p>Mobile #: <b>{mobileNumber ? mobileNumber : "---"}</b></p>
            </Col>
            </Row>
        </Panel>
    )
}

const mapStateToProps = (global: I_Global) => ({
    userId: global.auth.otherInfo?._id,
    firstName: global.auth.otherInfo?.firstName,
    lastName: global.auth.otherInfo?.lastName,
    middleName: global.auth.otherInfo?.middleName,
    lrn: global.auth.otherInfo?.lrn,
    mobileNumber: global.auth.otherInfo?.mobileNumber,
    document: global.document?.data,
    userDocument: global.userDocument?.data,
})
  
export default connect(mapStateToProps, {})(Student)
