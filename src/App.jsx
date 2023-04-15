import React, { useState, useEffect } from 'react'
import './App.scss';
import AllMessages from './components/AllMessages/AllMessages';
import ShowTheMessage from './components/ShowTheMessage/ShowTheMessage';
// import Cursor from './components/Cursor/Cursor'
import axios from 'axios'

function App() {

  const [messages, setMessages] = useState([])
  const [selectState, setSelectState] = useState(null)
  const [showMessage, setShowMessage] = useState(false)
  const [msg, setMsg] = useState({
    id: '',
    name: '',
    email: '',
    descriptin: ''
  })

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    axios.get('https://my-portfolio-server-nu.vercel.app/api/messages')
      .then((res) => {
        setMessages(res.data.reverse())
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="App">
      {/* <Cursor /> */}
      <div className="wrapper">
        <AllMessages
          getData={getData}
          selectState={selectState}
          setSelectState={setSelectState}
          setMessages={setMessages}
          messages={messages}
          setMsg={setMsg}
          msg={msg}
          setShowMessage={setShowMessage}
          showMessage={showMessage} />
        <ShowTheMessage
          setShowMessage={setShowMessage}
          showMessage={showMessage}
          selectState={selectState}
          msg={msg}
        />
      </div>
    </div>
  );
}

export default App;
