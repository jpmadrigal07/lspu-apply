import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Row,
  Col,
  Panel,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  ButtonToolbar,
  Button,
  Tooltip,
  InputPicker,
  Whisper,
  Icon,
  Alert,
} from "rsuite";
import Image from "../Image/Image";
import lspu_logo from "../../images/lspu_logo_60.png";
import { checkAuth } from "../../services/helper";
import { I_Global } from "../../interfaces/global";
import { addStudent } from "../../actions/studentActions";
import { triggerTopAlert } from "../../actions/topAlertActions";
import { getMainCampus } from "../../actions/mainCampusActions";
import { getSatelliteCampus } from "../../actions/satelliteCampusActions";
import { I_Component_Create } from "../../interfaces/components";
import "./Create.css";
import { I_TopAlert } from "../../interfaces/topAlert";
import { I_Main_Campus } from "../../interfaces/mainCampus";
import { I_Satellite_Campus } from "../../interfaces/satelliteCampus";
import { I_Select_Input } from "../../interfaces/etc";
import { ADMIT_TYPE_CONTENT, TYPE_OF_STUDENT_CONTENT } from '../../services/constant';
import { emptyAuth } from "../../actions/authActions";
import Asterisk  from '../Asterisk/Asterisk';

const Create = (props: I_Component_Create) => {
  const history = useHistory();
  const {
    addStudent,
    isAuthLoading,
    isAddStudentLoading,
    alertMessage,
    alertType,
    triggerTopAlert,
    authId,
    authEmail,
    authUserType,
    getMainCampus,
    getSatelliteCampus,
    isMainCampusLoading,
    isSatelliteCampusLoading,
    mainCampuses,
    satelliteCampuses,
    emptyAuth
  } = props;

  const [admitType, setAdmitType] = useState("");
  const [typeOfStudent, setTypeOfStudent] = useState("");
  const [lrn, setLRN] = useState<String | null>(null);
  const [campusId, setCampusId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [remappedMainCampuses, setRemappedMainCampuses] = useState<I_Select_Input[]>([]);
  const [remappedSatteliteCampuses, setRemappedSatteliteCampuses] = useState<I_Select_Input[]>([]);
  const isCurrentPageAuthRestricted = false;

  useEffect(() => {
    // isCurrentPageInside is to check if this page required authentication to access
    checkAuth(
      (res: string) => history.push(res),
      (res: I_TopAlert) =>
      triggerTopAlert(res.showAlert, res.message, res.type),
      () => emptyAuth(),
      isCurrentPageAuthRestricted
    );
    getMainCampus();
    getSatelliteCampus();
  }, []);

  useEffect(() => {
    if(mainCampuses.length > 0) {
        setRemappedMainCampuses(campusContent())
    }
    if(satelliteCampuses.length > 0) {
        setRemappedSatteliteCampuses(satteliteCampusContent())
    }
  }, [mainCampuses, satelliteCampuses])

  useEffect(() => {
    if (authId && authEmail && authUserType) {
      checkAuth(
        (res: string) => history.push(res),
        (res: I_TopAlert) =>
        triggerTopAlert(res.showAlert, res.message, res.type),
        () => emptyAuth(),
        isCurrentPageAuthRestricted
      );
    }
  }, [authId, authEmail, authUserType]);

  const campusContent = () => {
      return mainCampuses.map((res: I_Main_Campus) => {
        return {      
            label: res.campusName,
            value: res._id,
            type: "Main",
        }
      })
  }

  const satteliteCampusContent = () => {
    return satelliteCampuses.map((res: I_Satellite_Campus) => {
      return {      
          label: res.campusName,
          value: res._id,
          type: "Sattelite",
      }
    })
  }

  useEffect(() => {
    if (alertMessage) {
      if (alertType === "success") {
        Alert.success(alertMessage, 5000, () => triggerTopAlert(false, "", ""));
      } else if (alertType === "warning") {
        Alert.warning(alertMessage, 5000, () => triggerTopAlert(false, "", ""));
      } else if (alertType === "danger") {
        Alert.error(alertMessage, 5000, () => triggerTopAlert(false, "", ""));
      }
    }
  }, [alertMessage]);

  const typeOfStudentListener = (value: string) => {
    setTypeOfStudent(value);
    if (value === "College" || value === "Senior High") {
      setLRN("");
    }
  };

  const lrnListener = (value: string) => {
    const updated = value.replace(/\D/g, "");
    setLRN(updated);
  };

  const createStudentAccount = () => {
    if (admitType && typeOfStudent && campusId && email && password) {
      if(lrn) {
        if (lrn.length === 12) {
          addStudent(lrn, campusId, admitType, typeOfStudent, email, password);
        } else {
          Alert.warning("LRN needs to be 12 numbers", 3000);
        }
      } else {
        addStudent(lrn, campusId, admitType, typeOfStudent, email, password);
      }
    } else {
      Alert.warning("Please complete all the fields", 3000);
    }
  };

  return (
    <>
      <div className="create-bg">
        <Grid justify="center">
          <Col xs={24} md={10} mdPush={7} style={{marginTop: '50px'}}>
            <Panel
              className="create-panel"
              header={
                <Row gutter={16}>
                  <Col xs={18}>
                    <h2>Apply Create</h2>
                  </Col>
                  <Col xs={6}>
                    <Image
                      src={lspu_logo}
                      alt="LSPU Logo"
                      className="main-logo"
                      style={{ float: "right" }}
                    />
                  </Col>
                </Row>
              }
              shaded
            >
              <Form fluid onSubmit={() => createStudentAccount()}>
                <FormGroup>
                  <ControlLabel>Admit Type<Asterisk/></ControlLabel>
                  <InputPicker
                    type="text"
                    data={ADMIT_TYPE_CONTENT}
                    block
                    onChange={(e) => setAdmitType(e)}
                    value={admitType}
                    disabled={isAddStudentLoading || isAuthLoading}
                  />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Type of Student<Asterisk/></ControlLabel>
                  <InputPicker
                    type="text"
                    data={TYPE_OF_STUDENT_CONTENT}
                    block
                    onChange={(e) => typeOfStudentListener(e)}
                    value={typeOfStudent}
                    disabled={isAddStudentLoading || isAuthLoading}
                  />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>
                    Learner Reference Number (LRN){" "}
                    <Whisper
                      placement="top"
                      trigger="hover"
                      speaker={
                        <Tooltip>
                          LRN is only applicable for College and Senior High
                          student.
                        </Tooltip>
                      }
                    >
                      <Icon icon="info" style={{ cursor: "pointer" }} />
                    </Whisper>
                  </ControlLabel>
                  <FormControl
                    type="text"
                    disabled={
                      (typeOfStudent !== "College" &&
                        typeOfStudent !== "Senior High") ||
                      isAddStudentLoading ||
                      isAuthLoading
                    }
                    maxLength="12"
                    onChange={(e: string) => lrnListener(e)}
                    value={lrn}
                  />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Campus<Asterisk/></ControlLabel>
                  <InputPicker
                    type="text"
                    data={[...remappedMainCampuses, ...remappedSatteliteCampuses]}
                    groupBy="type"
                    block
                    onChange={(e) => setCampusId(e)}
                    value={campusId}
                    disabled={isAddStudentLoading || isAuthLoading || isMainCampusLoading || isSatelliteCampusLoading}
                  />
                </FormGroup>
                <hr />
                <FormGroup>
                  <ControlLabel>Email address<Asterisk/></ControlLabel>
                  <FormControl
                    type="email"
                    onChange={(e) => setEmail(e)}
                    value={email}
                    disabled={isAddStudentLoading || isAuthLoading}
                  />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>
                    Password<Asterisk/>{" "}
                    <Whisper
                      placement="top"
                      trigger="hover"
                      speaker={<Tooltip>Show or hide the password.</Tooltip>}
                    >
                      <Icon
                        icon={isPasswordVisible ? "eye" : "eye-slash"}
                        size="lg"
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                        style={{ cursor: "pointer" }}
                      />
                    </Whisper>
                  </ControlLabel>
                  <FormControl
                    type={isPasswordVisible ? "text" : "password"}
                    size="lg"
                    onChange={(e) => setPassword(e)}
                    value={password}
                    disabled={isAddStudentLoading || isAuthLoading}
                  />
                </FormGroup>
                <FormGroup>
                  <ButtonToolbar>
                    <Button appearance="primary" type="submit">
                      Create Account
                    </Button>
                    <Button
                      appearance="link"
                      onClick={() => history.push("/login")}
                    >
                      Back to Login
                    </Button>
                  </ButtonToolbar>
                </FormGroup>
              </Form>
            </Panel>
          </Col>
        </Grid>
      </div>
    </>
  );
};

const mapStateToProps = (global: I_Global) => ({
  isAuthLoading: global.auth.isLoading,
  isAddStudentLoading: global.student.isAddLoading,
  alertMessage: global.topAlert.message,
  alertType: global.topAlert.type,
  authId: global.auth.user?._id,
  authEmail: global.auth.user?.email,
  authUserType: global.auth.user?.userType,
  mainCampuses: global.mainCampus.data,
  satelliteCampuses: global.satelliteCampus.data,
  isMainCampusLoading: global.mainCampus.isLoading,
  isSatelliteCampusLoading: global.satelliteCampus.isLoading,
});

export default connect(mapStateToProps, {
  addStudent,
  triggerTopAlert,
  getMainCampus,
  getSatelliteCampus,
  emptyAuth
})(Create);
