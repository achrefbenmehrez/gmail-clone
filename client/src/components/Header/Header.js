import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core'
import FilterListIcon from '@material-ui/icons/FilterList';
import HelpIcon from '@material-ui/icons/Help';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core'
import { useDispatch } from 'react-redux'

function Header() {
    const user = JSON.parse(localStorage.getItem('profile'))?.user
    const dispatch = useDispatch()

    const signOut = () => {
        dispatch({ type: 'LOGOUT' })
    }

    return (
        <div className="header">
            <div className="header_left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img
                    src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
                    alt="Gmail"
                />
            </div>

            <div className="header_middle">
                <SearchIcon />
                <input type="text" placeholder="Search mail" />
                <IconButton>
                    <FilterListIcon />
                </IconButton>
            </div>

            <div className="header_right">
                <IconButton>
                    <HelpIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton onClick={signOut}>
                    { user?.imageUrl ? 
                        <Avatar src={user?.imageUrl} /> :
                        <Avatar>{user?.email[0]}</Avatar>
                    }
                </IconButton>
            </div>
        </div>
    )
}

export default Header
