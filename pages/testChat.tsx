import { NavBar } from "../src/components/NavBar";
import { TestChat } from '../src/components/testchat/TestChat';
import type { NextPage } from "next";


const Chat: NextPage = () => {
  
  return (
    <div>
      <NavBar />
      <TestChat />
    </div>
  );
};

export default Chat;
