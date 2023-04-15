import React from 'react'
import s from './ShowTheMessage.module.scss'
import { ChevronLeft } from 'react-bootstrap-icons'

const ShowTheMessage = ({ msg, selectState, showMessage, setShowMessage }) => {
    return (
        <section className={`${s.main} ${showMessage ? s.show : ''}`}>
            {
                msg.id === selectState
                    ? <div>
                        <div className={s.back}>
                            <p onClick={() => setShowMessage(false)}><ChevronLeft /> <span>Back</span></p>
                        </div>
                        <div className={s.message}>
                            <h1 className={s.name}>{msg.name}</h1>
                            <h3 className={s.email}>{msg.email}</h3>
                            <p className={s.description}>{msg.description}</p>
                        </div>
                    </div>
                    : ''
            }
        </section>
    );
};
export default ShowTheMessage