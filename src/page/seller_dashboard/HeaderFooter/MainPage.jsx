import React, { Component } from 'react';
import "./dashboard.css";
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: false,
    };
  }

  closeSidebar = () => {
    this.setState({
      isSidebarOpen: false,
    });
  };
  openSidebar = () => {
    this.setState({
      isSidebarOpen: true,
    });
  };

  toggleSidebar = () => {
    this.setState((prevState) => ({
      isSidebarOpen: !prevState.isSidebarOpen,
    }));
  };


  render() {
    return (
      <div className='dashboard_page'>
        <DashboardHeader
          openSidebars={this.openSidebar}
          toggleSidebar={this.toggleSidebar}
        />
        <DashboardSidebar
          closeSidebar={this.closeSidebar}
          isSidebarOpen={this.state.isSidebarOpen}
        />
      </div>
    );
  }
}
export default Dashboard