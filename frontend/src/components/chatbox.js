import React, { useState, useEffect, useRef } from "react";
import "../styles/chatbox.css";
import robotIcon from "../assets/images/icons.avif";

const ChatbotPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const messagesEndRef = useRef(null);

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { sender: "You", text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");

        try {
            const response = await fetch("http://127.0.0.1:5000/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input }),
            });

            const data = await response.json();
            const botMessage = {
                sender: "Bot",
                text: data.response || "Sorry, I didn’t quite catch that.",
            };

            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error("Error:", error);
            setMessages((prev) => [
                ...prev,
                { sender: "Bot", text: "Oops! Something went wrong." },
            ]);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    };

    return (
        <>
            {/* Floating Chatbot Icon */}
            <div className="chatbot-icon" onClick={toggleChatbot}>
                <img src={robotIcon} alt="Chatbot" />
            </div>

            {/* Chatbot Popup */}
            {isOpen && (
                <div className="chatbot-popup">
                    <div className="chatbot-header">
                        <h3>CeiTcs Chatbot</h3>
                        <button className="close-btn" onClick={toggleChatbot}>✖</button>
                    </div>
                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`chatbot-message ${
                                    msg.sender === "You" ? "user-message" : "bot-message"
                                }`}
                            >
                                <strong>{msg.sender}:</strong> {msg.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="chatbot-input-container">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="chatbot-input"
                            placeholder="Type a message..."
                        />
                        <button onClick={sendMessage} className="chatbot-send-btn">
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatbotPopup;
