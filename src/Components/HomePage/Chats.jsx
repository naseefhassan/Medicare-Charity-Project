import { useEffect, useState } from "react";
import io from "socket.io-client";
import axiosInstance from "../../api/axios";
import axios from "axios";
import Header from "../Header/Header";

function Chats() {
  const [socket, setSocket] = useState(null);
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [message, setMessage] = useState("");
  const [receivedMsg, setReceivedMsg] = useState([]);

  useEffect(() => {
    const SocketIo = io("http://13.48.192.26", {
      transports: ["websocket"],
    });
    setSocket(SocketIo);
  }, [message]);

  useEffect(() => {
    if (!socket) return;

    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/user/getUser");
        const senderEmail = res.data.userInfo.email;
        setSender(senderEmail);

        const response = await axiosInstance.get("/admin/adminemail");
        setReceiver(response.data.admin.email);

        const chat = await axios.get(
          "http://13.48.192.26/io/message/getMessage"
        );
        const messages = chat.data.message;
        const filteredMessages = messages.filter((msg) => {
          return (
            (msg.sender === sender && msg.receiver === receiver) ||
            (msg.sender === receiver && msg.receiver === sender)
          );
        });

        setReceivedMsg(filteredMessages);

        socket.emit("userConnection", { sender: senderEmail });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [socket, sender, receiver]);

  useEffect(() => {
    if (!socket) return;
    socket.on("message", ({ message, sender }) => {
      setReceivedMsg((prevMsg) => [
        ...prevMsg,
        { message: message.trim(), sender },
      ]);
    });
    return () => {
      socket.off("message");
    };
  }, [socket]);

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = async () => {
    if (!socket || !message.trim()) return;
    socket.emit("message", {
      sender: sender,
      receiver: receiver,
      message: message.trim(),
    });

    try {
      await axios.post("http://13.48.192.26/io/message/saveMessage", {
        message: message,
        sender: sender,
        receiver: receiver,
      });

      setReceivedMsg((prevMessages) => [
        ...prevMessages,
        { Msg: message.trim(), sender: sender },
      ]);

      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="flex  flex-col items-center justify-center w-screen min-h-screen   text-gray-800 bg-gray-100">
      <div className="mb-10">
        <Header />
      </div>
      <div className="flex  flex-col h-[450px]  w-full max-w-xl overflow-hidden bg-fixed rounded-lg shadow-xl">
        <div className="h-16 p-4 flex item-center justify-between text-2xl text-center bg-blue-600">
          <h1 className="text-white font-bold">Chat With Founder</h1>
          <h1 className="bg-white rounded-full w-10 h-10 flex justify-center item-center">
            A
          </h1>
        </div>

        <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
          {receivedMsg.map((msg, index) => (
            <div
              key={index}
              className={`flex mb-4 ${
                msg.sender === sender ? "justify-end" : "justify-start"
              }`}
            >
              <div>
                <div
                  className={`${
                    msg.sender === sender
                      ? "bg-blue-400 rounded-bl-xl rounded-tl-xl rounded-tr-xl text-white"
                      : "bg-gray-400 rounded-br-xl rounded-tr-xl rounded-tl-xl text-white"
                  } py-3 px-4 mr-2`}
                >
                  <p className="text-sm">{msg.message}</p>
                </div>
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
