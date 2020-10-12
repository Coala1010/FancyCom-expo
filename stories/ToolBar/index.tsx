import React, { useState } from 'react';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import SearchIcon from '@material-ui/icons/Search';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import logo from './ambid_logo.png';
import user_img from './ambid_user.png';
import './style.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button } from '@material-ui/core';

export interface ToolBarProps {
  name?: string;
  leftItems?: object[];
  title: string;
  rightItems?: object[];
}

export const ToolBar: React.FC<ToolBarProps> = ({ name, leftItems, title, rightItems }) => {
  const [titleModalVisible, setTitleModalVisible] = useState(false);
  const [titleText, setTitleText] = useState(title);

  const handleClose = () => {
    setTitleModalVisible(false);
  };

  const onChangeTitleText = (event: any) => {
    setTitleText(event.target.value);
  };

  const renderTitleEditModal = (
    <Dialog
      open={titleModalVisible}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'>
      <DialogTitle id='alert-dialog-title'>ToolBar Title</DialogTitle>
      <DialogContent>
        <div className='centeredView'>
          <textarea
            className='modalEdiTitleInput'
            onChange={onChangeTitleText}
            value={titleText}
            placeholder='Title'
            maxLength={30}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setTitleModalVisible(false)} color='primary' autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <div className='screen'>
      <div className='container'>
        <div className='leftItemsSection'>
          <div>
            <FormatAlignJustifyIcon style={{ fontSize: 30, color: '#9EA9B1' }} />
          </div>
          <img src={logo} alt='Logo' className='logoImg' />
        </div>
        <div onClick={() => setTitleModalVisible(true)}>
          <p className='toolbarTitleText'>{titleText}</p>
        </div>
        <div>
          <div className='rightItemsSection'>
            <div className='rightItemElement'>
              <SearchIcon style={{ fontSize: 30, color: '#9EA9B1' }} />
            </div>
            <div className='rightItemElement'>
              <PersonAddOutlinedIcon style={{ fontSize: 35, color: '#9EA9B1' }} />
            </div>
            <div className='publishBtn'>
              <p className='publishBtnText'>PUBLISH</p>
            </div>
            <div className='userAvatarPart'>
              <img src={user_img} alt='User' className='userAvatarImg' />
              <ExpandMoreOutlinedIcon style={{ fontSize: 25, color: '#9EA9B1' }} />
            </div>
          </div>
        </div>
      </div>
      {titleModalVisible && renderTitleEditModal}
    </div>
  );
};
