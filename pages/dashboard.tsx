import { Dashboard } from "../src/components/dashboard";
import { NavBar } from "../src/components/NavBar";
import { NextPage } from "next";

const DashboardPage : NextPage = () => {
    return (
      <div className="bg-black">
        <NavBar/>
        <Dashboard/>
      </div>
    );
  };
  
  export default DashboardPage;