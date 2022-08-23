import logo from './logo.svg';
import './App.css';
import CenterSection from'./components/CenterSection'
function App() {
  return (
    <>
       <CenterSection
       h1Title="How Much Weight Gain By How Much Celoreis ?"
       User_Weight="Your Weight ?"
       Celories_Intake_Day="Your Celories Intake Each Day ?"
       />
    </>
  );
}

export default App;
