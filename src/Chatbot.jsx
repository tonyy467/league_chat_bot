import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator} from "@chatscope/chat-ui-kit-react";

export function Chatbot () {
    // const API_KEY = '';4

  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am ChatGPT!",
      sender: "ChatGPT"
    }
  ]) 



  const sendMessage = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    }
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setTyping(true)
    await processMessageToGPT(newMessages)
  }


  async function processMessageToGPT (chatMessages) {
    //chatMessages {sender: "user"||"ChatGPT", message: "The content of the message"}
    //apiMessage {role: "user"||"assistant", content: "The content of the message"}
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

    const systemMessage = {
      role: "system",
      content: "Respond in such a way that a 10 years old could understand."
    }

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages
      ]
    }
    await fetch ("https://api.openai.com/v1/chat/completions", 
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
    body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log('data:', data);
      // setMessages(
      //   [...chatMessages, {
      //     message: data.choices[0].message.content,
      //     sender: "ChatGPT"
      //   }]
      //   );
        setTyping(false);
    });
  }
  const navigate = useNavigate();
  function backHome () {
    navigate('/')
  }
    return (
        <div className="App">
            <div style={{position: 'relative', height: '600px', width: '500px'}}>
              <MainContainer> 
                <ChatContainer> 
                  <MessageList
                    typingIndicator = {typing ? <TypingIndicator content="Your model is thinking..."/> : null}
                  >
                    {messages.map((message, i) => {
                      return <Message key={i} model={message} />
                    })}
                  </MessageList>
                  <MessageInput placeholder='Type here' onSend={sendMessage}/>
                </ChatContainer>
              </MainContainer>
            </div>
            <button onClick={backHome}> Go back home </button>
        </div>
      )
}

export default Chatbot