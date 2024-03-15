import { useEffect, useState } from "react";
import io from "socket.io-client";
import axiosInstance from "../../api/axios";
import axios from "axios";

function Chats() {
  const [socket, setSocket] = useState(null); // Define socket state
  const [sender, SetSender] = useState("");
  const [receiver, SetReceiver] = useState("");
  const [message, setMessage] = useState("");
  const [receivedMsg, SetReceivedMsg] = useState([])

  useEffect(() => {
    const SocketIo = io("http://localhost:3333", {
      transports: ["websocket"],
    });
    setSocket(SocketIo); // Set the socket in the state
    const fetchData = async () => {
      const res = await axiosInstance.get("/user/getUser");
      const sender = res.data.userInfo.email;
      SetSender(sender);

      const response = await axiosInstance.get("/admin/adminemail");
      console.log(response);
      SetReceiver(response.data.admin.email);

      SocketIo.emit("userConnection", { sender });
      console.log(sender);

      setSocket(SocketIo);
    };
    fetchData();
    
  }, []); 

  console.log(sender,'sender',receiver)
  useEffect(() => {
    if (!socket) return;
    socket.on('message',({message, sender, receiver})=>{
         console.log(message);
    if(sender === sender || receiver === receiver ){
      SetReceivedMsg((prevMsg)=>[
        ...prevMsg,
        {Msg:message.trim(), sender}
      ])
    }
  })
}, [socket]);
console.log(receivedMsg);

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = async () => {
    if (!socket || !message.trim()) return;
  
    console.log(sender);
    console.log(sender, receiver, message.trim());
  
    socket.emit("message", {
      sender: sender,
      receiver: receiver,
      message: message.trim(),
    });
  
    try {
      // const response = await axios.post(
      //   "http://localhost:3333/message/saveMessage",
      //   { message: message.trim(), sender: sender, receiver:receiver }
      // );
  
      SetReceivedMsg((prevMessages) => [
        ...prevMessages,
        { Msg: message.trim(), sender: sender },
      ]);
  
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }
  
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen p-10 text-gray-800 bg-gray-100">
      <div className="flex flex-col flex-grow w-full max-w-xl overflow-hidden bg-fixed rounded-lg shadow-xl">
        <div className="h-10 text-center bg-blue-600 ">user</div>
        <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
 
  {receivedMsg.map((Msg, index) => (
    <div
      key={index}
      className={`flex mb-4 ${
        Msg.sender === sender
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div>
        <div className={`${
                    Msg.sender === sender
                      ? "bg-blue-400 rounded-bl-xl rounded-tl-xl rounded-tr-xl text-white"
                      : "bg-gray-400 rounded-br-xl rounded-tr-xl rounded-tl-xl text-white"
                  } py-3 px-4 mr-2`}>
          <p className="text-sm">{Msg.Msg}</p>
        </div>
        <span className="text-xs leading-none text-gray-500">
          2 min ago
        </span>
      </div>
    </div>
  ))}
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
