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
    const [loading, setLoading] = useState<boolean>(false); // Loading state
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
        setLoading(true); // Start loading

        try {
            const res = await fetch(`https://13.60.191.141/v1/chat/user/${user.uid}`, { // TODO: Update this URL with backend server URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    //'Authorization': `Bearer ${user.accessToken}`
                },
                body: JSON.stringify({ "query": query }),
            });

            const data = await res.json();
            const jsonResponse = JSON.parse(data.response);
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'server', text: jsonResponse.response },
            ]);
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setLoading(false); // End loading
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

    // Helper function to render messages with code blocks
    const formatMessage = (text: string) => {
        // Split the text by lines and process each line
        const lines = text.split('\n');
        let formattedElements = [];
        let insideCodeBlock = false;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (line.startsWith('```')) {
                // Toggle code block mode on/off
                insideCodeBlock = !insideCodeBlock;
                if (insideCodeBlock) {
                    formattedElements.push(<pre key={i} style={{ backgroundColor: '#2d2d2d', padding: '8px', borderRadius: '4px' }}><code>{line.replace('```', '')}</code></pre>);
                } else {
                    formattedElements.push(<pre key={i}><code>{line.replace('```', '')}</code></pre>);
                }
            } else if (insideCodeBlock) {
                // If inside code block, treat lines as code
                formattedElements.push(<pre key={i}><code>{line}</code></pre>);
            } else {
                // If not inside code block, treat as normal text
                formattedElements.push(
                    <span key={i}>
                        {line}
                        <br />
                    </span>
                );
            }
        }

        return formattedElements;
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
                    <div className="flex w-11/12 max-w-5xl p-5 mt-28 justify-center">
                        This is still under testing. Please do not make your decision based on this data only
                        </div>
                    <div
                        ref={chatContainerRef}
                        className="flex-1 w-11/12 max-w-5xl p-5 overflow-y-auto bg-black rounded-xl custom-scrollbar"
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
                        {loading && (
                            <div className="flex justify-center mt-2">
                                <div className="loading-container">
                                    <div className="loading-dot"></div>
                                    <div className="loading-dot"></div>
                                    <div className="loading-dot"></div>
                                </div>
                            </div>
                        )}
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
                    <style jsx>{`
                        .loading-container {
                            display: flex;
                            align-items: center;
                        }
                        .loading-dot {
                            height: 10px;
                            width: 10px;
                            background-color: #a0aec0; /* Gray color */
                            border-radius: 50%;
                            margin: 0 2px;
                            animation: bounce 0.6s infinite alternate;
                        }
                        .loading-dot:nth-child(2) {
                            animation-delay: 0.2s;
                        }
                        .loading-dot:nth-child(3) {
                            animation-delay: 0.4s;
                        }
                        @keyframes bounce {
                            0% {
                                transform: translateY(0);
                            }
                            100% {
                                transform: translateY(-10px);
                            }
                        }
                    `}</style>
                </>
            )}
        </div>
    );
};
