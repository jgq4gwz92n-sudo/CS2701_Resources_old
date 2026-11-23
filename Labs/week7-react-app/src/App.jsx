import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RegistrationForm from "./components/RegistrationForm";
import "./App.css";

export default function App() {
  return (
    <>
      
    <Header
      img={{
        src: "/SharingFood.jpg",
        alt: "Fresh food banner"
      }}
    />


      <div className="page-layout">
        <Sidebar />
        <RegistrationForm />
      </div>
    </>
  );
}