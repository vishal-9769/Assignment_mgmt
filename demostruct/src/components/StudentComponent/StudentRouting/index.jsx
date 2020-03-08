import React, { Component } from "react";
import {
  EuiPage,
  EuiPageBody,
  EuiPageContentBody,
  EuiPageHeader,
  EuiPageSideBar
} from "@elastic/eui";
import NavbarComponent from "../../NavbarComponent";
import { Route } from "react-router-dom";
import StudentHome from "../StudentHome";
import StudentSideBar from "../StudentSidebar";
import AssignmenComponent from "../AssignmentComponent";
//import SubjectsComponent from "../SubjectsComponent";
class StudentRoutingComponent extends Component {
  render() {
    return (
      <div className="">


        <NavbarComponent />

        <EuiPage>
          <EuiPageSideBar>
            <StudentSidebar />
          </EuiPageSideBar>
          <EuiPageBody>
            <EuiPageHeader>
            </EuiPageHeader>
            {/* <EuiPageContent> */}

            <EuiPageContentBody>
              <Route exact path="/stdhome">
                <StudentHome />
              </Route>
              <Route exact path="/stdhome/assignment">
                <AssignmenComponent />
              </Route>
              {/* <Route exact path="/adminDashboard/subject">
                <SubjectsComponent />
              </Route> */}
            </EuiPageContentBody>
          </EuiPageBody>
        </EuiPage>
      </div>
    );
  }
}

export default StudentRoutingComponent;
