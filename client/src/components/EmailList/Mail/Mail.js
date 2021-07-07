import React from 'react'
import { useHistory } from 'react-router-dom'
import './Mail.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import PrintIcon from '@material-ui/icons/Print';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { Avatar } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star'
import ReplyIcon from '@material-ui/icons/Reply';

function Mail({ id, subject, time, message, sender }) {
    const history = useHistory()

    return (
        <div className="mail">
            <div className="mail_tools">
                <div className="mail_toolsLeft">
                    <IconButton onClick={() => history.push('/')}>
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>
                    <IconButton>
                        <ErrorIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <hr/>
                    <IconButton>
                        <EmailIcon />
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>
                    <hr/>
                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    
                </div>
                <div className="mail_toolsRight">
                    <p className="emailList_settingsRightCounter">1-50 of 103</p>
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardIcon />
                    </IconButton>
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                </div>
            </div>
            <div className="mail_header1">
                <div className="mail_header1Left">
                    <h2>{subject}</h2>
                </div>
                <div className="mail_header1Right">
                    <PrintIcon />
                    <OpenInNewIcon />
                </div>
            </div>
            <div className="mail_header2">
                <div className="mail_header2Left">
                    <Avatar></Avatar>
                    <div className="mail_header2LeftSender">
                        <h3>{sender}</h3>
                        <p>to me</p>
                    </div>
                </div>
                <div className="mail_header2Right">
                    <p>{time}</p>
                    <StarIcon />
                    <ReplyIcon />
                    <MoreVertIcon />
                </div>
            </div>
            <div className="mail_message">
                <p>{message}</p> 
            </div>
        </div>
    )
}

export default Mail
