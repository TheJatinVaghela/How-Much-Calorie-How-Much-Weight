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
   
    let[weight, setweight]=useState(Number(30));
    let[calori, setcalori]= useState(Number(40));
    
    
    
    return(
       <>
          <section id='Center'>
                  <h1>{props.h1Title}</h1>
               <form action="" id='FORM'>

                   <textarea className='INPUTS' type="text" name="User_Weight" id="User_Weight" placeholder={props.User_Weight}
                    value={weight}  onChange={Weight_Value}/>
                   <input className='INPUTS' type="text" name="UserCelories_Intake_Day" id="UserCelories_Intake_Day"
                    placeholder={props.Celories_Intake_Day} value={calori} onChange={Calori_Value}/>

                  <div id='Weight_After_Celories'>{props.Users_Weight_After_Celories}-{weight}-{calori}- </div>
               </form>
                 
          </section>
        </>
    )
}



CenterSection.propTypes={
    h1Title: PropTypes.string,
    User_Weight: PropTypes.any,
    Celories_Intake_Day: PropTypes.any,
   
};
CenterSection.defaultProps={
    h1Title: "Title",
    User_Weight: "Users_Weight ?",
    Celories_Intake_Day: "UserCelories_Intake_Day ?",
    Users_Weight_After_Celories: `Your Weight After Each Day `,
}
