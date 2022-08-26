import React, { useState, useRef } from 'react';
import { connect } from "react-redux";
import { styles } from '../../styles'
import 'material-icons/iconfont/material-icons.css';
import '../../App.css';
import { useDispatch } from 'react-redux';
import { inputSuccess, messageSuccess } from '../../features/chatreducer';


const Chatbot = ({ messages }) => {

 
    const dispatch = useDispatch();
   
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    const [text, setText] = useState("");
    const [clickType, setClickType] = useState(false);


    const endOfMessages = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true)
    }

    const scrollToBottom = () => {
        endOfMessages.current.scrollIntoView({ behavior: "smooth" });
      };
    //   useEffect(scrollToBottom, [messages]);
    
      //  Function that handles user submission
      const handleClick = async (e) => {
        scrollToBottom()
        
        
        const code = e.keyCode || e.which;
        
        // 20.115.10.86:8005/nurse
        // http://localhost:5005/webhooks/rest/webhook

        // Checking if Enter key was pressed?
        if (code === 13) {
          dispatch(inputSuccess(text));

                // The below url is a random api taken from Google 
                // Here, the response URL can be set for the input messages that we feed in
                let temp=""
                const response=await fetch("https://jsonplaceholder.typicode.com/todos");
                const jsonData= await response.json();
                const final = jsonData[0]['title'];
                temp=final;  

          dispatch(messageSuccess(temp));
          setText("");
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
                    Ganeshbot
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
                        Ganeshbot
                    </div>
                    <div style={styles.historyContainer}>
                        {messages.length === 0  ? "" : (messages.map((msg) => { 
                            if(msg.type == "user"){
                                return <div style={styles.userBackground}>
                                 <p style={styles.userMessage}>{msg.message}</p>
                            </div> }
                            else if(msg.type == "bot"){
                                if(clickType){
                                    return <div  onClick={() => { setText(msg.message);  }} style={styles.botBackground}>
                                        <p style={styles.botMessage}>{msg.message}</p>
                                        </div>
                                }
                                else{
                                    return <div style={styles.botBackground}>
                                        <p style={styles.botMessage}>{msg.message}</p>
                                        </div>
                                }

                            }
                            else {
                                return 'Oops, Something went wrong'
                            }

                        }))}
                        
                        
                         <div ref={endOfMessages}></div>
                    </div >
                     
                    <input
                             style={styles.chatBottom}
                             className="box"
                             name="text"
                             onChange={e => setText(e.target.value)}
                             onKeyPress={handleClick}
                             placeholder='Type your message here'
                           
                    />
                    <button type="submit" style={styles.chatSubmit} id="chat-submit" ><i className="material-icons">send</i></button>
                  
                
             </div>
    )

}



function mapStateToProps(state) {
    const { messages } = state.chat.chatReducer
    return { messages }
  }
  
  export default connect(mapStateToProps)(Chatbot)
  