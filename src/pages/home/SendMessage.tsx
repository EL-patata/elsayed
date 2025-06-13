import React, { useState } from "react";

const SendMessage = () => {
  const [messages, setMessages] = useState([
    { text: "مرحبًا! كيف يمكنني مساعدتك اليوم؟", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "أنا مجرد روبوت، لكنني هنا للمساعدة! 😊", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 bg-white shadow-lg rounded-lg border border-gray-200 flex">
      {/* الصورة */}
      <div className="w-1/3 b 0 flex items-center justify-center p-4">
        <img
          src="src/assets/images/ll.png"
          alt="Robot"
          className="w-full h-auto object-cover rounded-l-lg"
        />
      </div>

      {/* منطقة الدردشة */}
      <div className="w-2/3 flex flex-col">
        {/* العنوان */}
        <div className="p-4 bg-green-600 text-white text-center font-bold text-lg rounded-tr-lg">
          🤖 شات بوت المساعد
        </div>

        {/* منطقة الرسائل */}
        <div className="h-80 overflow-y-auto p-4 space-y-3 bg-gray-50 flex flex-col">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 max-w-xs rounded-lg shadow-md ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white self-end ml-auto"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* إدخال الرسائل */}
        <div className="p-4 border-t flex items-center bg-white">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="اكتب رسالتك..."
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleSend}
            className="ml-3 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition shadow-md"
          >
            إرسال 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
