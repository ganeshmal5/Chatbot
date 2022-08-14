import React, { useEffect, useState, useRef } from 'react';
import { connect } from "react-redux";
import { styles } from '../../styles'
import Avatar from './Avatar'
import 'material-icons/iconfont/material-icons.css';
// import ChatContent from './ChatContent';
// import store from '../../store';

import '../../App.css';

import { userMessage, botMessage } from '../../actions/actions';

import { useDispatch, useSelector } from 'react-redux';

import { inputSuccess, inputFail, messageSuccess, messageFail } from '../../features/chatreducer';
// const dispatch = useDispatch();

const Chatbot = ({  userMessage, botMessage }) => {

    const dispatch = useDispatch();
    const { messages } = useSelector((store) => store.chat);
    console.log('Inside Chatbot')
    console.log(messages)
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    // const [userMessage, setUserMessage] = useState(null)

    const [message, setMessage] = useState("");
    const endOfMessages = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true)
        console.log('Sending Email', email)
    }

    const scrollToBottom = () => {
        endOfMessages.current.scrollIntoView({ behavior: "smooth" });
      };
    //   useEffect(scrollToBottom, [messages]);
    
      //  Function that handles user submission
      const handleClick = async (e) => {
        const code = e.keyCode || e.which;
        

        if (code === 13) {
          console.log('handle click');
          console.log(message)
          dispatch(inputSuccess(message));
          userMessage(message);
          console.log('After user message')
          console.log('1')
          botMessage(message);
          console.log('After bot message')
          console.log('2')
          setMessage("");
        }
      };

   

    if (!loading) { 
        return(
            <div
                style={{
                    ...styles.emailFormWindow,
                    ...{
                        height: '100%' ,
                        opacity:  '1' ,
                    }
                }}
            >
            <div style={{ height: '0px' }}>
                <div style={styles.stripe} />
            </div>
           
            <div 
                className='transition-5'
                style={{
                    ...styles.loadingDiv,
                    ...{ 
                        zIndex: loading ? '10' : '-1',
                        opacity: loading ? '0.33' : '0',
                    }
                }}
            />
        
            <div style={{ position: 'absolute', height: '100%', width: '100%', textAlign: 'center'}}>
                <div style={ styles.topText }>
                    Aurora support
                </div>
               
                <form
                    onSubmit={e => handleSubmit(e)}
                    style={{ position: 'relative', width: '100%', top:'40%' }}
                >
                    <input
                        style={styles.emailInput}
                        name="email"
                        onChange={e => setEmail(e.target.value)}
                        placeholder='Your Email'
                    />
                </form>
            
                <div style={styles.bottomText}>
                    Enter your email <br /> to get started.
                </div>           
            </div>
        </div>
        )
    }
    return(
          
            <div>
               
                    <div style={{postion: 'absolute', textAlign: 'center', width: '100%', height: '50px', backgroundColor: '#7a39e0', color: 'white', fontSize: '36px', top: '5%',padding: '10px'}}>
                        Aurora support
                    </div>
                    
                    <div style={styles.historyContainer}>
                        {/* {messages} */}
                        
                        {/* {chat.length === 0  ? "" : (chat.map((msg) => { return msg.message}))} */}
                        {/* {messages.length === 0  ? "" : (messages.map((msg) => { return msg.message}))}  */}
                         <div ref={endOfMessages}></div>
                    </div>
                     
                     {/* <div class="historyContainer">
                     {message}
                     </div> */}
                    <input
                             style={styles.chatBottom}
                             className="box"
                             name="userMessage"
                             onChange={e => setMessage(e.target.value)}
                             onKeyPress={handleClick}
                             placeholder='Type your message here'
                            //  onSubmit={handleMessage()}
                    />
                    <button type="submit" style={styles.chatSubmit} id="chat-submit" ><i className="material-icons">send</i></button>
                  
                
             </div>
    )

}

// const mapStateToProps = (state) => ({
//     xyz: state.chatreducer.messages
//   });
  
// const params =  connect(mapStateToProps, {userMessage, botMessage });

// Chatbot(params);


export default Chatbot;

// export default connect(mapStateToProps, { userMessage, botMessage })(Chatbot);
