import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { CLOSE_SEND_MAIL } from '../../actionTypes'
import { createMail } from '../../actions/mails'

function SendMail() {
    const { email } = JSON.parse(localStorage.getItem('profile'))?.user

    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        dispatch(createMail(data, email))
    };

    const cancelSendMail = () => {
        dispatch({ type: CLOSE_SEND_MAIL })
    }

    return (
        <div className="sendMail">
            <div className="sendMail_header">
                <h3>New Message</h3>
                <CloseIcon className="sendMail_close" onClick={cancelSendMail} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="To" {...register("to", {required: true} )} />
                {errors.to && <p className="sendMail_error">To is required!</p>}
                <input type="text" placeholder="Subject" {...register("subject", {required: true})} />
                {errors.subject && <p className="sendMail_error">Subject is required!</p>}
                <input type="text" placeholder="Message..." className="sendMail_message" {...register("message", {required: true})}/>
                {errors.message && <p className="sendMail_error">Message is required!</p>}
                <div className="sendMail_options">
                    <Button type="submit" className="sendMail_send">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
