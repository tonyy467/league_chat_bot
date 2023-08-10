import { useState } from 'react'
import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator} from "@chatscope/chat-ui-kit-react";

const API_KEY = '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';

function App() {
  const [typing, setTyping] = useState(false);
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
    setTyping(true)
    await processMessageToGPT(newMessages)
  }

  async function processMessageToGPT (chatMessages) {
    //chatMessages {sender: "user" or "ChatGPT", message: "The content of the message"}
    //apiMessage {role: "user" or "assistant", content: "The content of the message"}
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === 'ChatGPT') {
        role = "assistant"
      }
      else {
        role = "user";
      }
      return {role: role, content: messageObject.message}
    });
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        ...apiMessages
      ]
    }
    await fetch ("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer" + API_KEY,
        "Content-Type": "application/json"
    },
    body: JSON.stringify(apiRequestBody)
    })
  }

  return (
    <div className="App">
        <div style={{position: 'relative', height: '600px', width: '500px'}}>
          <MainContainer> 
            <ChatContainer> 
              <MessageList
                typingIndicator = {typing ? <TypingIndicator content="ChatGPT is curating your message"/> : null}
              >
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
