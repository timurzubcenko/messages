import React from 'react'
import s from './AllMessages.module.scss'
import { Search } from 'react-bootstrap-icons'
import axios from 'axios'
import Message from '../Message/Message';

const AllMessages = ({ getData, selectState, setSelectState, messages, setMsg, showMessage, setShowMessage }) => {

    const deleteMessage = async (id) => {
        try {
            await axios.delete('https://my-portfolio-server-nu.vercel.app/api/messages/delete/' + id, { id })
                .then(() => {
                    getData()
                })
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <section className={s.main}>
            <div className={s.search_bar}>
                <input placeholder='Search' type="text" />
                <button className={s.btn}><Search /></button>
            </div>
            <div className={s.messages}>
                {
                    messages.length !== 0
                        ? messages.map((msg) =>
                            <Message key={msg._id} showMessage={showMessage} setShowMessage={setShowMessage} msg={msg} setMsg={setMsg} selectState={selectState} setSelectState={setSelectState} deleteMessage={deleteMessage} />
                        )
                        : <h3 className={s.notice}>Сообщений нет</h3>

                }
            </div>
        </section >
    );
};
export default AllMessages