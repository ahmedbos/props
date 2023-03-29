import React from 'react'
import PropTypes from "prop-types";
const Profile = ({fullname="user",bio="good bio",profession="lucrative job"}) => {
    
  return (
    <div>
      <h1 style={{color:"orange" , fontWeight:"bold"}}>{fullname}</h1>
      <h2 style={{color:"grey"}}>Bio:{bio}</h2>
      <h2 style={{color:"grey"}}>Profession:{profession}</h2>
    </div>
   
  )
}
Profile.propTypes = {
  anyProp: PropTypes.any,
  booleanProp: PropTypes.bool,
  numberProp: PropTypes.number,
  stringProp: PropTypes.string,
  functionProp: PropTypes.func
 };
export default Profile
