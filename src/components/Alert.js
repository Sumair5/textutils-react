import React from 'react'

export default function Alert(props) {
const captalize=(word)=>{
   const lower=word.toLowerCase(); // Convert to lowercase
   return lower.charAt(0).toUpperCase()+ lower.slice(1); // Capitalize first letter

}

  return (
    <div>
     {props.alert && <div className={`alert alert-${props.alert.type}  alert-dismissible fade show`} role="alert">
  <strong>{captalize(props.alert.type)}</strong>:  {props.alert.msg}
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>}
    </div>
  )
}
