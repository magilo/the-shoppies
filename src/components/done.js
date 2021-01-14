import React from 'react'
//stateless component

function Done(props){
  if (props.isDone === true){
    return (
      <h4>You're done! Thanks for participating</h4>
    )
  } else {
    return (
      <h4>select up to five nominees</h4>
    )
  }

}

export default Done
