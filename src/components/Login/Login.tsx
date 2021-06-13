import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Grid, Row, Col, Panel, Form, FormGroup, ControlLabel, FormControl, ButtonToolbar, Button, Alert, Loader } from 'rsuite';
import Image from '../Image/Image'
import lspu_logo from '../../images/lspu_logo_60.png'
import { emptyAuth, loginUser } from '../../actions/authActions';
import { triggerTopAlert } from '../../actions/topAlertActions';
import { I_Component_Login } from '../../interfaces/components';
import { I_Global } from '../../interfaces/global';
import './Login.css'
import { checkAuth } from '../../services/helper';
import { I_TopAlert } from '../../interfaces/topAlert';

const Login = (props: I_Component_Login) => {
  const history = useHistory();
  const { loginUser, isAuthLoading, alertMessage, alertType, triggerTopAlert, authId, authEmail, authUserType, emptyAuth } = props;

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const isCurrentPageAuthRestricted = false;

  useEffect(() => {
    // isCurrentPageInside is to check if this page required authentication to access
    checkAuth(
      (res: string) => history.push(res),
      (res: I_TopAlert) => triggerTopAlert(res.showAlert, res.message, res.type),
      () => emptyAuth(),
      isCurrentPageAuthRestricted
    );
  }, []);

  useEffect(() => {
    if (authId && authEmail && authUserType) {
      checkAuth(
        (res: string) => history.push(res),
        (res: I_TopAlert) => triggerTopAlert(res.showAlert, res.message, res.type),
        () => emptyAuth(),
        isCurrentPageAuthRestricted
      );
    }
  }, [authId, authEmail, authUserType]);

  useEffect(() => {
    if (alertMessage) {
      if(alertType === "success") {
          Alert.success(alertMessage, 5000, (() => triggerTopAlert(false, "", "")))
      } else if(alertType === "warning") {
          Alert.warning(alertMessage, 5000, (() => triggerTopAlert(false, "", "")))
      } else if(alertType === "danger") {
          Alert.error(alertMessage, 5000, (() => triggerTopAlert(false, "", "")))
      }
    }
  }, [alertMessage]);

  const loginStudentAccount = () => {
    if(email && password) {
      loginUser(email, password)
    } else {
      Alert.warning("Please complete all the fields", 3000)
    }
  }

  return (
    <>
      <div className="login-bg">
        <Grid>
          <Col xs={24} md={10} mdPush={7} style={{marginTop: '50px'}}>
            <Panel className="login-panel" header={
              <Row>
                <Col xs={18}>
                  <h2>Apply Login</h2>
                </Col>
                <Col xs={6}>
                  <Image src={lspu_logo} alt="LSPU Logo" className="main-logo" style={{ float: 'right' }} />
                </Col>
              </Row>
            } shaded>
              <Row>
              <Col>
                <Form fluid onSubmit={() => loginStudentAccount()}>
                  <FormGroup>
                    <ControlLabel>Email address</ControlLabel>
                    <FormControl type="email" disabled={isAuthLoading} onChange={(e) => setEmail(e)} value={email} autoFocus />
                  </FormGroup>
                  <FormGroup>
                    <ControlLabel>Password</ControlLabel>
                    <FormControl type="password" disabled={isAuthLoading} onChange={(e) => setPassword(e)} value={password} />
                  </FormGroup>
                  <FormGroup>
                    <ButtonToolbar>
                      <Button appearance="primary" type="submit" disabled={isAuthLoading}>
                        {!isAuthLoading ? "Sign in" : <Loader inverse />}
                      </Button>
                      <Button appearance="link" disabled={isAuthLoading} onClick={() => history.push("/create")}>Create account</Button>
                    </ButtonToolbar>
                  </FormGroup>
                </Form>
                </Col>
              </Row>
            </Panel>
          </Col>
        </Grid>
      </div>
    </>
  )
}

const mapStateToProps = (global: I_Global) => ({
  isAuthLoading: global.auth.isLoading,
  alertMessage: global.topAlert.message,
  alertType: global.topAlert.type,
  authId: global.auth.user?._id,
  authEmail: global.auth.user?.email,
  authUserType: global.auth.user?.userType
});

export default connect(mapStateToProps, { loginUser, triggerTopAlert, emptyAuth })(Login);
