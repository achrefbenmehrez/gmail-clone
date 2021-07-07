import { Checkbox, IconButton } from '@material-ui/core'
import React from 'react'
import './EmailList.css'
import RefreshIcon from '@material-ui/icons/Refresh';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Section from './Section/Section'
import EmailRow from './EmailRow/EmailRow'
import { useSelector } from 'react-redux'
import moment from 'moment'

function EmailList() {
    const { mails } = useSelector(state => state.mails)

    return (
        <div className="emailList">
            <div className="emailList_settings">
                <div className="emailList_settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailList_settingsRight">
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
            <div className="emailList_sections">
                <Section Icon={InboxIcon} title="Primary" color="#d93025" selected={true}/>
                <Section Icon={PeopleIcon} title="Social" color="#1A73E8"/>
                <Section Icon={LocalOfferIcon} title="Promotions" color="green"/>
            </div>
            <div className="emailList_list">
                {mails.map((mail) => (
                    <EmailRow 
                    id={mail._id}
                    key={mail._id}
                    title={mail.to}
                    subject={mail.subject}
                    description={mail.message}
                    sender={mail.sender}
                    time={moment(mail.createdAt).fromNow()}
                />
                ))}
            </div>
        </div>
    )
}

export default EmailList
