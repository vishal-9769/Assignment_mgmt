import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { MdAssignment } from "react-icons/md";
import { FaUsers, FaUserTie, FaBook } from "react-icons/fa";
import StudentSidebar from '../StudentSidebar'
import NavbarComponent from '../../NavbarComponent'
import {
    EuiPage,
    consoleApp,
    EuiFilePicker,
    EuiPageBody,
    EuiPageSideBar,
    EuiPageContentBody,
    EuiCard,
    EuiFlexGroup,
    EuiFlexItem,
    EuiButton
  } from '@elastic/eui'
import { EuiButtonEmpty } from '@elastic/eui';
//import FacultyDashboard from './FacultyDashboard'

export class SubmitAssignment extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isPopoverOpen: false
        };
      }
    
      onButtonClick() {
        this.setState({
          isPopoverOpen: !this.state.isPopoverOpen
        });
      }
    
      closePopover() {
        this.setState({
          isPopoverOpen: false
        });
      }
    render() {
        return (
            <div>
                <NavbarComponent/>
                <EuiPage>
                    <EuiPageSideBar><StudentSidebar/></EuiPageSideBar>
                    <EuiPageBody>
                       <div>
                       <EuiFormRow label="File picker" display="columnCompressed">
                         <EuiFilePicker compressed display="default" />
                        </EuiFormRow>
                        <EuiformRow>
                            <EuiIcon type={consoleApp}><EuiButtonEmpty>Code-Compiler</EuiButtonEmpty>
                            </EuiIcon>
                        </EuiformRow>                                 
                       </div>
                    </EuiPageBody>
                </EuiPage>
            </div>
        )
    }
}

export default SubmitAssignment;
