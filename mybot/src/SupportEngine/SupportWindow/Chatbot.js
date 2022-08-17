import React, { useEffect, useState, useRef } from 'react';
import { connect } from "react-redux";
import { styles } from '../../styles'
import 'material-icons/iconfont/material-icons.css';
import '../../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { inputSuccess, messageSuccess } from '../../features/chatreducer';
// const dispatch = useDispatch();

// import { getPosts } from '../../features/postsSlice'

// import Posts from '../../features/Posts';

// const { messages } = useSelector((store) => store.chat);

const Chatbot = ({ messages }) => {

    // const Chatbot = ({ messages, title }) => {

    const dispatch = useDispatch();
    // const { messages } = useSelector((store) => store.chat);
    // const { title } = useSelector((store) => store.posts);
    console.log('PRINTING TITLE')
    // console.log(title[0]['message'])

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    const [text, setText] = useState("");
    const [clickType, setClickType] = useState(false);
    const [triggerInput, setTriggerInput] = useState(false);

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
        console.log('Printing Enter keycode')
        console.log(e)
        const code = e.keyCode || e.which;
        
        // 20.115.10.86:8005/nurse
        // http://localhost:5005/webhooks/rest/webhook

        if (code === 13) {
          dispatch(inputSuccess(text));


        //   await fetch('http://20.115.10.86:8005/nurse', {
        //         method: 'POST',
        //         headers: {
        //           'Accept': 'application/json',
        //           'Content-Type': 'application/json',
        //           'charset':'UTF-8',
        //          },
        //         // credentials: "same-origin",
        //         body: JSON.stringify({ "disease": "diabetes", "mobility": "1", "fulltime": "1", "cost": "500" }),
        // })
        // .then(response => response.json())
        // .then((response) => {
        //         if(response){
        //             // const temp = response[0];
        //             // const recipient_id = temp["recipient_id"];
        //             // const recipient_msg = temp["text"];
        //             console.log(response[0])
        //          }
        // })
            
        // dispatch(getPosts({ limit: 5 }))
        
            // const getData=async()=>{
                let temp=""
                const response=await fetch("https://jsonplaceholder.typicode.com/todos");
                
                const jsonData= await response.json();
                console.log('2')
                const final = jsonData[0]['title'];
                // title = final;
                temp=final;
                console.log('PRINTING TITLE INSIDE ASYNC')
                console.log(temp)
                // console.log('1')
                // console.log(jsonData[0]['title'])
                // console.log('Final')
                // console.log(final)
                // setText(final);
                // return final;
            // }
            console.log('Printing TEXT')
            console.log(text)
            // getData();
            // useEffect(()=> {
            //     console.log('PRINTING TITLE OUTSIDE ASYNC')
            //     console.log(title)
            // },[title])
           

        //     console.log('Outside function');
        //     console.log('Printing temp data');

        //     console.log(temp)
            
        //     // const temp1 = temp.json()
        //     console.log('Printing temp1 data');

        //     console.log(temp1)


        //   text =  title[0]['title'];
        //  dispatch(getPosts())
        //  getPosts()
        //   console.log('TEXXXXXXXXXXXXT');
          
        // //   console.log(title[0]['message'])
        //   console.log('BEFORE ASSIGNING TO TEXT')
        //   console.log(title)
        // //   const tem = title[0]['message']
        // //   console.log(tem)
        // //   setText(title[0]['message'])
        // // setText(tem)
        // //   text = title[0]['message'];
        //   console.log('AFTER ASSIGNING TO TEXT')
        //   console.log(title)
            
        
            

          dispatch(messageSuccess(temp));
          setText("");


        //     // Handling clickType
        //   function  handleClickType (val) {
        //     setTriggerInput(true);
        //     setText(val);
        //     handleClick();

        //     }

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







                            //     return <div style={styles.botBackground}>
                            //      <p style={styles.botMessage}>{msg.message}</p>
                            // </div>



                            }
                            else {
                                return 'Oops, Something went wrong'
                            }

                        }))}
                        
                        
                         <div ref={endOfMessages}></div>
                    </div>
                     
                    
                     
                    <input
                             style={styles.chatBottom}
                             className="box"
                             name="text"
                             onChange={e => setText(e.target.value)}
                             onKeyPress={handleClick}
                             placeholder='Type your message here'
                            //  onSubmit={handleMessage()}
                    />
                    <button type="submit" style={styles.chatSubmit} id="chat-submit" ><i className="material-icons">send</i></button>
                  
                
             </div>
    )

}

function mapStateToProps(state) {
    const { messages } = state.chat.chatReducer
    // const { title } = state.posts.postReducer
    // return { messages, title }
    return { messages }
  }
  
  export default connect(mapStateToProps)(Chatbot)
  