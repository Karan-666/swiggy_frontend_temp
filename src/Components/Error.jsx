import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {

    const err = useRouteError();
    // console.log(err);

  return (
    <div>
      <h1>Oops....</h1>
      {/* <h1>{err.error.message}</h1> */}
      <h1>Status: {err.status}</h1>
      <h1>{err.statusText}</h1>

    </div>
  )
}

export default Error
