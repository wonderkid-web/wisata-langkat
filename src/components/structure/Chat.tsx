"use client";
import { useState } from "react";

export default function Chat() {
  const [spin, setSpin] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    Array<{ text: string; isUser: boolean }>
  >([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { text: input, isUser: true }]);

    setSpin(true);

    // // Get bot response
    const response = await fetch("/api/chat/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: `input: ${input}` }),
    });

    const data = await response.json();

    // Add bot message
    setMessages((prev) => [...prev, { text: data.response, isUser: false }]);

    setSpin(false);

    // Clear input
    setInput("");
  };

  const formatMessage = (text: string) => {
    // Memisahkan string berdasarkan asterisk (*)
    const parts = text.split(/\s*\*\s*/);
    return parts.map((part, index) => {
      // Jika bagian dimulai dan diakhiri dengan **, berarti teks tebal
      if (part.startsWith("**") && part.endsWith("**")) {
        const strongText = part.slice(2, -2); // Menghapus ** di awal dan akhir
        return <strong key={index}>{strongText}</strong>;
      }
      // Jika bukan teks tebal, return sebagai teks biasa
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="shadow-md rounded-md">
        <div className="mb-4  h-[71.7vh] overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 ${message.isUser ? "text-right" : "text-left"}`}
            >
              <span
                className={`inline-block p-2 rounded-lg ${message.isUser ? "bg-slate-900 text-white" : "bg-gray-200 text-gray-700"}`}
              >
                {formatMessage(message.text)}
              </span>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 border-none leading-tight text-white focus:outline-none focus:shadow-outline bg-slate-800"
            placeholder="Type your message..."
          />
          <button
            type="submit"
            disabled={spin}
            className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2 flex justify-center items-center gap-2"
          >
            {spin && (
              <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
