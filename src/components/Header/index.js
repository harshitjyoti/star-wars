import React from 'react';
import { Layout, Input, Popover, Anchor, Avatar } from 'antd';
import { connect } from 'react-redux';
let timer;
const Header = ({ onSearch, isProcessing, user, logout }) => {
  const searchValue = (event) => {
    const { value } = event.target
    clearTimeout(timer)
    timer = setTimeout(() => {
      onSearch(`search=${value}`);
    }, 500)
  }
  return (<Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
    <div style={{ textAlign: "center" }}>
      <Input.Search onChange={searchValue} style={{ width: '50%' }} enterButton={false} size='middle' maxLength='20' placeholder="Search for Planets here !" loading={isProcessing} />
    </div>
    <Popover content={<Anchor onClick={logout}><Anchor.Link title='Logout'  /></Anchor>} title="You Can:">
      <Avatar size="large">
        {user.charAt(0)}
      </Avatar>
    </Popover>
  </Layout.Header>)
}

const mapStateToProps = ({ user: { loggedInUser } }) => {
  return {
    loggedInUser
  }
}


export default connect(mapStateToProps)(Header);