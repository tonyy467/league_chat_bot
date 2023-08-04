import { useState } from 'react'
import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator} from "@chatscope/chat-ui-kit-react";

function App() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am ChatGPT!",
      sender: "ChatGPT"
    }
  ]) // []

  const sendMessage = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    }
      //process message to chatgpt and then issue a response bot
        //updates message box again
    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
  }


  return (
    <div className="App">
        <div style={{position: 'relative', height: '600px', width: '500px'}}>
          <MainContainer> 
            <ChatContainer> 
              <MessageList>
                {messages.map((message, i) => {
                  return <Message key={i} model={message} />
                })}
              </MessageList>
              <MessageInput placeholder='Type here' onSend={sendMessage}/>
            </ChatContainer>
          </MainContainer>
        </div>
    </div>
  )
}

export default App
