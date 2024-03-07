import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3333",{transports:['websocket']});

function Chats() {
  // const  token = localStorage.getItem('jwtToken')
  // console.log(token)
  // const [message, setMessage] = useState("");
  // const [sendmsg, setSendmsg] = useState([]);
   
  // useEffect(()=>{
  //   socket.emit('addUser',token)
  // }, [])
  
  // useEffect(() => {
  //   socket.on("chat_message", (msg) => {
  //     console.log(msg);
  //     setSendmsg([...sendmsg, msg]);
  //   });
  //   return () => {
  //     socket.off("chat_message");
  //   };
  // }, [sendmsg]);

  // const handleMessage = (e) => {
  //   setMessage(e.target.value);
  // };

  // const handleSend = () => {
  //   if (message.trim() !== "") {
  //     //   setSendmsg([...sendmsg, { text: message, sender: "user" }]);
  //     socket.emit("chat_msg",{message:'hello'});
  //     setMessage("");
  //   }
  // };
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen p-10 text-gray-800 bg-gray-100">
      <div className="flex flex-col flex-grow w-full max-w-xl overflow-hidden bg-fixed rounded-lg shadow-xl">
        <div className="h-10 text-center bg-blue-600 ">user</div>
        <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
          {/* {sendmsg.map((msg, index) => ( */}
            <div
              // key={index}
              className="flex justify-end w-full max-w-xs mt-2 ml-auto space-x-3"
            >
              <div>
                <div className="p-3 text-white bg-blue-600 rounded-l-lg rounded-br-lg">
                  <p className="text-sm">
                    {/* {msg.text} */}
                    </p>
                </div>
                <span className="text-xs leading-none text-gray-500">
                  2 min ago
                </span>
              </div>
              <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full"></div>
            </div>
          {/* ))} */}
        </div>

        <div className="flex gap-2 p-4 bg-gray-300">
          <input
            className="flex items-center w-full h-10 px-3 text-sm rounded"
            type="text"
            placeholder="Type your message…"
            value={message}
            onChange={handleMessage}
          />
          <button
            className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full"
            onClick={handleSend}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 -rotate-45"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chats;
