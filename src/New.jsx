import React from 'react';
import {Outlet} from 'react-router-dom';
function New() {
  return (
    <div>
      i am new
      <Outlet />
    </div>
  )
}

export default New;