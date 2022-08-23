import React, { useState } from 'react'
import PropTypes from 'prop-types'
export default function CenterSection(props) {
    let Weight_Value = (event)=>{
        console.log("ckick");
        
        setweight(event.target.value);
    }
    
   
    let Calori_Value =(event)=>{
        console.log("Calor");
        
        setcalori(event.target.value);
         
        
    }
    
    let[weight, setweight]=useState(Number(0));
    let[calori, setcalori]= useState(Number(0));
    
 
    
    
    
    return(
       <>
          <section id='Center'>
                  <h1>{props.h1Title}</h1>
               <form action="" id='FORM'>
                  <legend>Totall Weight In KG
                   <input className='INPUTS' type="text" name="User_Weight" id="User_Weight" placeholder={props.User_Weight}
                    value={weight}  onChange={Weight_Value}/>
                  </legend>
                  <legend> Calories Intake Each Day
                   <input className='INPUTS' type="text" name="UserCelories_Intake_Day" id="UserCelories_Intake_Day"
                    placeholder={props.Celories_Intake_Day} value={calori} onChange={Calori_Value}/>
                  </legend>
                  <legend>Without Lossing Calories:=
                    <div id='Weight_After_Celories'>
                       {props.Users_Weight_After_Celories}={Number(weight)+ (Number(calori) * 0.00012959782)}
                       <br/>
                       {props.You_Gained } {((Number(calori) * 0.00012959782)).toFixed(4)} {props.Grams}
                       <br/>
                       {props.You_Gained } {((Number(calori) * 0.00012959782) * (0.00220462)).toFixed(10)} {props.Pounds}
                        <br/>
                       {props.You_Gained_Weekly } {(((Number(calori) * 0.00012959782)).toFixed(4)) * (7)} {props.Kg}
                        <br/>
                       {props.You_Gained_Month } {(((Number(calori) * 0.00012959782)).toFixed(4)) * (31)} {props.Kg}
                        <br/>
                       {props.You_Gained_Year } {(((Number(calori) * 0.00012959782)).toFixed(2)) * (365)} {props.Kg}

                    </div>
                 </legend>
               </form>
                 
          </section>
        </>
    )
}



CenterSection.propTypes={
    h1Title: PropTypes.string,
    User_Weight: PropTypes.any,
    Celories_Intake_Day: PropTypes.any,
    You_Gained: PropTypes.any,
    Grams: PropTypes.string,
    Pounds: PropTypes.string,
    You_Gained_Weekly: PropTypes.string,
    Kg: PropTypes.string,
    You_Gained_Month: PropTypes.string,
    You_Gained_Year: PropTypes.string,
};
CenterSection.defaultProps={
    h1Title: "Title",
    User_Weight: "Users_Weight ?",
    Celories_Intake_Day: "UserCelories_Intake_Day ?",
    Users_Weight_After_Celories: `Your Weight After Each Day `,
    You_Gained:"User Gained weight ",
    Grams:"Grams ",
    Pounds:"Pounds ",
    You_Gained_Weekly:"User Gained Weekly Weight ",
     Kg:"KG ",
     You_Gained_Month:"User Gained Monthly Weight ",
     You_Gained_Year:"User Gained Yearly Weight ",
}
