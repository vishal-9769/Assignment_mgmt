import React, { Component } from "react";
import {
    EuiButtonEmpty,
    EuiFieldPassword,
    EuiConfirmModal,
    EuiOverlayMask,  
    EuiPage,
    EuiPageBody,
    EuiPageHeader,
    EuiPageHeaderSection,
    EuiPageSideBar,
    EuiTitle,
    EuiCard,
    EuiFlexGroup,
    EuiFlexItem,
    EuiButton,
    EuiIcon,
    EuiTreeView,
    EuiToken,
    EuiFieldText,
  EuiFieldSearch,
  EuiFormRow,
  EuiPopover,
  EuiSpacer,
  EuiSwitch,
  EuiAvatar
} from "@elastic/eui";

import { FaBell, FaUserCircle } from "react-icons/fa";

class NavbarComponent extends Component {
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
  closePopover() {
    this.setState({
      isPopoverOpen: false,
    });
  }
  closeModal = () => {
    this.setState({ isModalVisible: false });
  };

  showModal = () => {
    this.setState({ isModalVisible: true });
  };
  
  closeEmptyModal = () => {
    this.setState({ isEmptyModalVisible: false });
  };

  showEmptyModal = () => {
    this.setState({ isEmptyModalVisible: true });
  };

  render() {
// Change Password Modal
let modal;

          if (this.state.isModalVisible) {
            modal = (
              <EuiOverlayMask>
                <EuiConfirmModal
                  title="Change PassWord"
                  onCancel={this.closeModal}
                  onConfirm={this.closeModal}
                  cancelButtonText="Cancel"
                   confirmButtonText="Update"
                   defaultFocusedButton="confirm">
                    <EuiFieldText
                        className = "email"
                        compressed
                        placeholder="Enter your email"
                        value={this.state.value}
                        onChange={this.onChange}
                        aria-label="Use aria labels when no actual label is in use" />
                        <br/>
                    <EuiFieldPassword
                        className = "password"
                        compressed
                        placeholder="New password"
                        value={this.state.value}
                        onChange={this.onChange}
                        aria-label="Use aria labels when no actual label is in use" />
                        <br/>
                        <EuiFieldPassword
                        className = "password"
                        compressed
                        placeholder="Confirm password"
                        value={this.state.value}
                        onChange={this.onChange}
                        aria-label="Use aria labels when no actual label is in use" />
     
                         {/* <EuiButton className="updatebtn">Update</EuiButton><br /> */}
                  {/* <p>You&rsquo;re about to do something.</p>
                  <p>Are you sure you want to do this?</p> */}
                </EuiConfirmModal>
              </EuiOverlayMask>
            );
          }
     // Confirm Logout Modal
     let emptyModal;

    if (this.state.isEmptyModalVisible) {
      emptyModal = (
        <EuiOverlayMask>
          <EuiConfirmModal
            title="Do this thing"
            onCancel={this.closeEmptyModal}
            onConfirm={this.closeEmptyModal}
            cancelButtonText="No, don't do it"
            confirmButtonText="Yes, do it"
            defaultFocusedButton="confirm"
          />
        </EuiOverlayMask>
      );
    } 
          const button = (
            <EuiIcon type="user" style={{ height: '2rem',width: `2rem` }} onClick={this.onButtonClick.bind(this)}>

            </EuiIcon>
            //   <EuiButton
          //     iconType="arrowDown"
          //     iconSide="right"
          //     onClick={this.onButtonClick.bind(this)}>
          //     Profile
          //   </EuiButton>
          );
      
    //const button = (
    //   <FaUserCircle
    //     size={30}
    //     onClick={this.onButtonClick.bind(this)}
    //   ></FaUserCircle>
  //);

    return (
      <div className="navbar">


        <EuiPageHeader>
          <EuiPageHeaderSection>
            <EuiAvatar
              size="l"
              name="Cat"
              imageUrl="https://source.unsplash.com/64x64/?cat"
            />&emsp; sjdcbkjbfew
          </EuiPageHeaderSection>

          <EuiPageHeaderSection>
          <EuiPopover
                            style = {{ marginBottom: 3 }}
                              id="popover"
                              button={button}
                              isOpen={this.state.isPopoverOpen}
                              closePopover={this.closePopover.bind(this)}>
                              
                              <EuiButtonEmpty onClick={this.showModal}>
                                {modal}
                                ChangePassword
                              </EuiButtonEmpty>
                              <br/>
                              <EuiButtonEmpty  onClick={this.showEmptyModal}>
                                {emptyModal}
                                Logout
                              </EuiButtonEmpty>
                              {/* <div style={{ width: '300px' }}>
                                Profile
                                <EuiFieldText
                                  placeholder="LogOut"
                                  value={this.state.value}
                                  onChange={this.onChange}
                                  aria-label="Use aria labels when no actual label is in use"/>
                              </div> */}
                            </EuiPopover>
            {/* <EuiFieldSearch
              className='search'
              placeholder="Search"
              value={this.state.value}
              onChange={this.onChange}
              isClearable={this.state.isClearable}
              aria-label="Use aria labels when no actual label is in use"
            /> */}
          </EuiPageHeaderSection>

          <EuiPageHeaderSection>
            <div className='nav-right'>
              {/* <EuiButton fill className='msg'>Message</EuiButton> */}
              <FaBell className='notify' size={30} />


            </div>
          </EuiPageHeaderSection>
        </EuiPageHeader>
      </div>
    );
          }
        }
      

export default NavbarComponent;
