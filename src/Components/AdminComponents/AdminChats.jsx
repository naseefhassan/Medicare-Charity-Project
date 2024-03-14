import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import io from "socket.io-client";

function AdminChats() {
  const [message, setMessage] = useState("");
  const [sendmsg, setSendmsg] = useState({});
  const [socket, setSocket] = useState(null);
  const [receivers, SetReceiver] = useState([]);
  const [selectedReceiver, setSelectedReceiver] = useState(null);
  const [sender, setSender] = useState("");

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const SocketIo = io("http://localhost:3333", {
      transports: ["websocket"],
    });
    setSocket(SocketIo);
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/admin/getAdmin");
        const admin = res.data.admin;
        setSender(admin);

        const allUsers = await axiosInstance.get("/admin/getAlluser");
        SetReceiver(allUsers.data.getAlluser);

        SocketIo.emit("AdminConnection", { admin });
        setSocket(SocketIo);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleSend = () => {
    if (message.trim() !== "" && socket && selectedReceiver) {
      const newMessage = { text: message, sender: "admin" };
      const receiverId = selectedReceiver._id; // Assuming receiver has an _id field
      const updatedMessages = { ...sendmsg };

      if (!updatedMessages[receiverId]) {
        updatedMessages[receiverId] = [newMessage];
      } else {
        updatedMessages[receiverId] = [...updatedMessages[receiverId], newMessage];
      }

      setSendmsg(updatedMessages);
      setMessage("");

      socket.emit("message", {
        sender: sender,
        receiver: selectedReceiver.email,
        message: message.trim(),
      });
    }
  };

  const handleReceiverClick = (receiver) => {
    setSelectedReceiver(receiver);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-between px-5 py-5 bg-white border-b-2">
        <div className="text-2xl font-semibold">GoingChat</div>
        <div className="flex items-center justify-center w-12 h-12 p-2 font-semibold text-white bg-yellow-500 rounded-full">
          NH
        </div>
      </div>

      <div className="flex flex-row justify-between flex-grow overflow-hidden bg-fixed">
        <div className="flex flex-col w-2/5 overflow-y-auto border-r-2">
          <div className="px-2 py-4 border-b-2">
            <input
              type="text"
              placeholder="Search chatting"
              className="w-full px-2 border-2 border-gray-200 rounded-2xl"
            />
          </div>
          {receivers.map((receiver, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-5 px-2 py-4 border-b-2 border-l-4 border-blue-400"
              onClick={() => handleReceiverClick(receiver)}
            >
              <div className="flex items-center justify-center w-12 h-12 font-bold text-gray-700 bg-gray-300 rounded-full">
                {receiver.username.charAt(0).toUpperCase()}
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">{receiver.username}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative flex flex-col w-full">
          <div className="flex items-center w-full px-2 py-5 border-b-2">
            <div className="flex items-center justify-center w-12 h-12 font-bold text-gray-700 bg-gray-300 rounded-full">
              {selectedReceiver &&
                selectedReceiver.username.charAt(0).toUpperCase()}
            </div>
            <div className="ml-3 text-lg font-semibold">
              {selectedReceiver && selectedReceiver.username}
            </div>
          </div>
          <div className="flex flex-col flex-grow p-2 overflow-auto">
            {selectedReceiver &&
              sendmsg[selectedReceiver._id] &&
              sendmsg[selectedReceiver._id].map((msg, index) => (
                <div key={index} className="flex items-center justify-end mb-4">
                  <div className="px-4 py-3 mr-2 text-white bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl">
                    {msg.text}
                  </div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full" />
                </div>
              ))}
          </div>

          <div className="absolute bottom-0 flex items-center w-full">
            <input
              className="w-full px-3 py-5 pr-12 bg-gray-300 rounded-xl"
              type="text"
              placeholder="Type your message here..."
              value={message}
              onChange={handleMessage}
            />
            <button
              className="flex items-center justify-center w-10 h-10 ml-2 bg-blue-600 rounded-full"
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
    </div>
  );
}

export default AdminChats;
