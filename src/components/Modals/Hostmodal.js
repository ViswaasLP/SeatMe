import React from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import PlaceSearch from "../PlaceSearch";
import SettingSelect from "../SettingSelect";
import { Link, useHistory, withRouter  } from "react-router-dom";

function HostModal() {
  function logChange(val) {
    console.log("Selected: " + val);
  }

  return (
    <div className="modalwrapper" >
      <div className="host-modal">
        <Card id="modal-card" className="w-100">
          <Card.Body  className="modal-card text-white w-100">
            <h2 className="pb-3 text-white">Step: 1 of 3</h2>
            <Form className="w-100">
              <Form.Label className="text-white">Location</Form.Label>
              <Form.Group
                className="w-100 pb-3 d-flex flex-column justify-content-start align-items-start"
                id="host-location"
              >
                <PlaceSearch />
              </Form.Group>
              <Form.Group
                className="w-100 pb-3 d-flex flex-column justify-content-start align-items-start"
                id="host-setting"
              >
                <Form.Label className="text-white">Setting</Form.Label>

                <SettingSelect purpose="setting" />
              </Form.Group>
              <Form.Group
                className="w-100 pb-3 d-flex flex-column justify-content-start align-items-start"
                id="host-setting"
              >
                <Form.Label className="text-white">Place</Form.Label>

                <SettingSelect purpose="place" />
              </Form.Group>
              <div className="d-flex flex-row justify-content-center align-items-center">

                  <Button variant="danger" id="host-back">
                    Back
                  </Button>


                <Button variant="secondary" id="host-create-custom">
                  Create Custom
                </Button>

                <Button variant="success">Next</Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default (HostModal);
