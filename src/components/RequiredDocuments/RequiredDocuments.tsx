import React, { useState } from "react";
import { connect } from "react-redux";
import { Row, Col, Button, Panel, Uploader } from "rsuite";
import { I_Component_Required_Documents } from "../../interfaces/components";
import { I_Global } from "../../interfaces/global";
import Image from "../Image/Image";
import {
  addUserDocument,
  setUserDocument,
} from "../../actions/userDocumentActions";
import { I_Document } from "../../interfaces/document";
import { triggerTopAlert } from "../../actions/topAlertActions";
import { I_User_Document } from "../../interfaces/userDocument";

const RequiredDocuments = (props: I_Component_Required_Documents) => {
  const { 
    userId,
    document,
    triggerTopAlert,
    setUserDocument,
    userDocument
  } = props;
  const [isUploading, setIsUploading] = useState(false);

  const renderForms = () => {
    const documentArray =
      document.length > 0 ? (
        document?.map((doc: I_Document) => {
          const documentName = doc.fileName;
          const foundUserDocument = userDocument.find(
            (res: I_User_Document) =>
              res.documentId === doc._id && res.userId === userId
          );
          return (
            <Col xs={24} md={8} style={{ marginTop: "15px" }}>
              <Panel
                bordered
                bodyFill
                style={{ display: "inline-block", width: "100%" }}
              >
                {foundUserDocument ? (
                  <Image
                    alt="Logo"
                    src={`/public/${foundUserDocument?.documentPath}`}
                    style={{ width: "100%" }}
                  />
                ) : null}
                <Panel header={`${documentName}`}>
                  <hr />
                  <Row gutter={16}>
                    <Col xs={24}>
                      <Uploader
                        name={"requiredFile"}
                        action="/api/userDocument"
                        data={{
                          documentId: doc._id,
                          userId: userId,
                        }}
                        onChange={() => {
                          setIsUploading(!isUploading);
                        }}
                        onSuccess={(response: any) => {
                          const { dbRes } = response;
                          const { message, document, type } = dbRes;
                          setUserDocument(document, type);
                          triggerTopAlert(true, message, "success");
                          setIsUploading(!isUploading);
                        }}
                        onError={() => {
                          triggerTopAlert(true, "Upload failed", "warning");
                        }}
                        block
                      >
                        <Button disabled={isUploading} size="sm" block>
                          Choose File and Upload
                        </Button>
                      </Uploader>
                    </Col>
                  </Row>
                </Panel>
              </Panel>
            </Col>
          );
        })
      ) : (
        <h5 style={{ marginTop: "15px" }}>
          <i>No required documents found.</i>
        </h5>
      );
    return documentArray;
  };

  return (
    <>
      <Row gutter={16}>{renderForms()}</Row>
    </>
  );
};

const mapStateToProps = (global: I_Global) => ({
  userId: global.auth.otherInfo._id,
  document: global.document?.data,
  userDocument: global.userDocument?.data,
  isLoading: global.document.isLoading,
});

export default connect(mapStateToProps, {
  triggerTopAlert,
  addUserDocument,
  setUserDocument,
})(RequiredDocuments);
