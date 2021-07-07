import React, { useEffect } from 'react';
import './App.css';
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Mail from './EmailList/Mail/Mail'
import EmailList from './EmailList/EmailList'
import SendMail from './SendMail/SendMail'
import { useSelector } from 'react-redux'
import Login from './Login/Login'
import { useDispatch } from 'react-redux'
import { getMails } from '../actions/mails'
import decode from 'jwt-decode'

function App() {
  const dispatch = useDispatch()
  const { sendMailOpen } = useSelector((state) => state.mails)
  const { authData } = useSelector((state) => state.users)
  const user = JSON.parse(localStorage.getItem('profile'))

  useEffect(() => {
    if(user)
    {
      dispatch({ type: 'LOGIN', data: user })

      const token = user?.token
      if(token) {
        const decodedToken = decode(token)

        if(decodedToken.exp * 1000 < new Date().getTime())
          dispatch({ type: 'LOGOUT' })
      }
    }

    dispatch(getMails())

  }, [dispatch])


  const { selectedMail } = useSelector((state) => state.mails)

  return (
    <Router>
      {!authData && !user ? <Login /> : (
      <div className="App">
        <Header />
        <div className="app_body">
          <Sidebar />
          <Switch>
            <Route path="/:id">
              <Mail id={selectedMail.id} subject={selectedMail.subject} time={selectedMail.time} message={selectedMail.description} sender={selectedMail.sender} />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
        {sendMailOpen && <SendMail />}
      </div>
      )}
    </Router>
  );
}

export default App;
