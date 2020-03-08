import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginPageComponent from '../components/LoginPageComponent';
// import AdminDashboardComponent from '../components/AdminComponents/AdminDashboradComponent';
// import StudentTableComponent from '../components/AdminComponents/StudentTableComponent';
// import SubjectsComponent from '../components/AdminComponents/SubjectsComponent';
import AdminRoutingComponent from '../components/AdminComponents/AdminRoutingComponent';
import RegisterComponent from '../components/RegisterComponent';
//import StudentNavbar from '../components/StudentComponent/StudentNavbar'
//import StudentMainPage from '../components/StudentComponent/StudentHome';
import StudentRouting from '../components/StudentComponent/StudentRouting';
import AssignmentComponent from '../components/StudentComponent/AssignmentComponent'
//import FacultyDashboardComponent from '../components/FacultyComponents/DashboradComponents/index';
const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LoginPageComponent />
      </Route>
      <Route exact path="/login">
        <LoginPageComponent />
      </Route>

      <Route exact path="/register">
        <RegisterComponent />
      </Route>
      {/* <Route exact path="/stuDash">
        <S/>
      </Route> */}

      <AdminRoutingComponent />
<StudentRouting/>
      {/* Admin Routing
      <Route exact path="/adminDashboard">
        <AdminDashboardComponent />
      </Route>
      <Route exact path="/adminDashboard/student">
        <StudentTableComponent />
      </Route>
      <Route exact path="/adminDashboard/subject">
        <SubjectsComponent />
      </Route> */}
      
      <Route exact path="/register">
      
      </Route>
      
                        {/* <Route exact path="/std" component={StudentNavbar}/> */}
      <Route exact path="/student/viewAssignment">
      <AssignmentComponent/>
        </Route>               
      
      {/*  */}
    </Switch>
  );
};

export default Routing;
