import logo from './logo.svg';
import './App.css';
import CenterSection from'./components/CenterSection'
function App() {
  return (
    <>
       <CenterSection
       h1Title="How Much Weight Gain By How Much Celoreis ?"
      User_Weight ="Your Weight ?"
       Celories_Intake_Day="Your Celories Intake Each Day ?"
        You_Gained="Each Day You Gain = "
        You_Gained_Weekly="Each Week You Gain = "
        You_Gained_Month="Each Month You Gain (Days = 31)= "
        You_Gained_Year="Each Year You Gain (Days = 365)= "
       
       />
    </>
  );
}

export default App;
