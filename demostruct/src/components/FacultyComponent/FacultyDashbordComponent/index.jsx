import React, { Component } from 'react'
import NavBar from './NavigationBar'
import {
    EuiPage,
    EuiPageBody,
    EuiPageSideBar,
  } from '@elastic/eui'
import TreeView from './TreeView'
import FacultyDashboard from './FacultyDashboard'
import SideBar from '../FacultyDashbordComponent';
import NavbarComponent from '../../NavbarComponent';

export class FacultyMainPage extends Component {
    render() {
        return (
            <div>
                <NavbarComponent/>
                <EuiPage>
                    <EuiPageSideBar><SideBar/></EuiPageSideBar>
                    <EuiPageBody>
                        <FacultyDashboard/>
                    </EuiPageBody>
                </EuiPage>
            </div>
        )
    }
}

export default FacultyMainPage;
