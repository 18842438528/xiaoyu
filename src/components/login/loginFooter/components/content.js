import { ContentFooter } from './contentFooter'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export const Content = ({ message }) => {
    return (
        <div className="login-footer">
            <div className="login-footer-first">
                <span>
                    New to Perform Life?
                </span>
                <Link to={message === "Create an account" ? '/createindex' : "/"}>
                    < span className='login-footer-span'>{message} </span>
                </Link>

            </div>
            <ContentFooter />
        </div>

    )
}