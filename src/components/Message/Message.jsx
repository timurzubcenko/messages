import React, { useState } from 'react'
import { ThreeDotsVertical } from 'react-bootstrap-icons'
import s from './Message.module.scss'

const Message = ({ deleteMessage, selectState, setSelectState, setMsg, msg, showMessage, setShowMessage }) => {

    const [stateMenu, setStateMenu] = useState(false)
    const [indexMenu, setIndexMenu] = useState(null)

    const selectMessage = (number, id, name, email, description) => {
        setSelectState(number)
        setMsg({
            id,
            name,
            email,
            description,
        })
        setStateMenu(false)
    }

    const moreOptions = (number) => {
        setStateMenu(!stateMenu)
        setIndexMenu(number)
    }

    const removeMessage = (id) => {
        deleteMessage(id)
        setStateMenu(false)
        selectState === id ? setSelectState(null) : setSelectState(selectState)
    }

    const showTheMsg = () => {
        setShowMessage(!showMessage)
    }

    return (
        <div className={s.block_massage}>
            <div onClick={() => {
                selectMessage(msg._id, msg._id, msg.name, msg.email, msg.description)
                showTheMsg()
            }} className={`${s.message} ${selectState === msg._id ? s.active : ''}`}>
                <h2>{msg.name}</h2>
                <p>{msg.description}</p>
                <div className={s.btns}>
                    <div onClick={(e) => {
                        e.stopPropagation()
                        moreOptions()
                        setIndexMenu(msg._id)
                    }} className={s.more}>
                        <ThreeDotsVertical />
                    </div>
                </div>
            </div>
            <div className={`${s.options} ${stateMenu && indexMenu === msg._id ? s.active : ''}`}>
                <ul>
                    <li onClick={() => removeMessage(msg._id)} className={s.remove}>Delete</li>
                </ul>
            </div>
        </div>
    );
};
export default Message