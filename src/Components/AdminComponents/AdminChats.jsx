import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import io from "socket.io-client";
import axios from "axios";
function AdminChats() {
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const [receivers, setReceivers] = useState([]);
  const [filteredReceivers, setFilteredReceivers] = useState([]);
  const [selectedReceiver, setSelectedReceiver] = useState(null);
  const [sender, setSender] = useState("");
  const [receivedMsg, setReceivedMsg] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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
        setReceivers(allUsers.data.getAlluser);
        setFilteredReceivers(allUsers.data.getAlluser);

        SocketIo.emit("AdminConnection", { admin });
        setSocket(SocketIo);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!socket) return;
    socket.on("message", ({ message, sender, receiver }) => {
      setReceivedMsg((prevMsg) => [
        ...prevMsg,
        { message: message.trim(), sender },
      ]);
    });
    // Clean up the event listener when the component unmounts
    return () => {
      socket.off("message");
    };
  }, [socket]);

  const handleSend = async () => {
    if (!socket || !selectedReceiver?.email || !message.trim()) return;

    try {
      await axios.post("http://localhost:3333/message/saveMessage", {
        message: message.trim(),
        sender: sender,
        receiver: selectedReceiver.email,
      });

      socket.emit("message", {
        sender: sender,
        receiver: selectedReceiver.email,
        message: message.trim(),
      });

      const sentMessage = { message: message.trim(), sender: sender };
      setReceivedMsg((prevMsg) => [...prevMsg, sentMessage]);
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleReceiverClick = async (receiver) => {
    const chat = await axios.get("http://localhost:3333/message/getMessage");
    const messages = chat.data.message;
    const filteredMessages = messages.filter((msg) => {
      return (
        (msg.sender === sender && msg.receiver === receiver.email) ||
        (msg.sender === receiver.email && msg.receiver === sender)
      );
    });
    setReceivedMsg(filteredMessages);
    setSelectedReceiver(receiver);
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredReceivers = receivers.filter((receiver) => {
      return receiver.username.toLowerCase().includes(query);
    });

    if (query === "") {
      setFilteredReceivers(receivers);
    } else {
      setFilteredReceivers(filteredReceivers);
    }
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
              value={searchQuery}
              onChange={handleSearch}
              className="w-full px-2 border-2 border-gray-200 rounded-2xl"
            />
          </div>
          {filteredReceivers.map((receiver, index) => (
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

        <div className="relative flex flex-col w-full ">
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
            {receivedMsg.map((msg, index) => (
              <div
                key={index}
                className={`flex mb-4 ${
                  msg.sender === sender ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`${
                    msg.sender === sender
                      ? "bg-blue-400 rounded-bl-xl rounded-tl-xl rounded-tr-xl text-white"
                      : "bg-gray-400 rounded-br-xl rounded-tr-xl rounded-tl-xl text-white"
                  } py-3 px-4 mr-2`}
                >
                  {msg.message}
                </div>
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
