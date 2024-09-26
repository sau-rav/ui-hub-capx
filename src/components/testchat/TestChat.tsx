import { useState, useEffect, useRef, FormEvent, KeyboardEvent } from 'react';
import { FaRobot } from 'react-icons/fa';
import { useUser } from "../../context/user"; // Import the useUser hook

interface Message {
    sender: 'user' | 'server';
    text: string;
}

export const TestChat = (): JSX.Element => {
  const [query, setQuery] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const userContextValue = useUser();
  const { user } = userContextValue ?? {};

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    if (!user) return; // Do nothing if user is not authenticated

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', text: query },
    ]);

    setQuery('');

    try {
      const res = await fetch(`https://13.60.191.141/v1/chat/user/${user.uid}`, { // TODO: Update this URL with backend server URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': `Bearer ${user.accessToken}`
        },
        body: JSON.stringify({ "query" : query }),
      });

      const data = await res.json();
      const jsonResponse = JSON.parse(data.response);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'server', text: jsonResponse.response },
      ]);

    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as FormEvent);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 100)}px`;
    }
  }, [query]);

  // Helper function to convert line breaks to <br> tags
  const formatMessage = (text: string) => {
    return text.split('\n').map((item, index) => (
      <span key={index}>
        {item}
        <br />
      </span>
    ));
  };

  return (
    <div className="flex flex-col h-screen items-center bg-black text-gray-300">
      {!user ? (
        <div className="flex flex-col justify-center items-center h-full text-center text-white">
          <h1 className="text-2xl">404 | Page not found</h1>
          <p className="mt-4 text-xl">Please login to use chat functionality</p>
        </div>
      ) : (
        <>
          <div
            ref={chatContainerRef}
            className="flex-1 w-11/12 max-w-5xl p-5 mt-28 overflow-y-auto bg-black rounded-xl custom-scrollbar"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'server' && (
                  <FaRobot className="text-gray-400 mr-2 mt-1" />
                )}
                <div
                  className={`inline-block px-4 py-2 rounded-lg text-gray-400 ${
                    message.sender === 'user' ? 'bg-gray-900 max-w-[75%]' : 'bg-black'
                  }`}
                  style={{ maxWidth: message.sender === 'user' ? '75%' : '100%' }}
                >
                  {formatMessage(message.text)}
                </div>
              </div>
            ))}
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center p-3 rounded-2xl shadow-md mt-2 mb-2 w-11/12 max-w-5xl"
          >
            <textarea
              ref={textareaRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              className="flex-1 p-3 rounded-3xl bg-gray-900 text-gray-300 border border-gray-900 outline-none mr-3"
              rows={1}
              style={{ 
                resize: 'none', 
                overflow: 'hidden',
                maxHeight: '100px', // Set maximum height
              }}
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-3xl bg-gray-900 text-gray-200"
            >
              Send
            </button>
          </form>
        </>
      )}
    </div>
  );
};
