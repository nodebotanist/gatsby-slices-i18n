import * as React from 'react'
import { Slice } from 'gatsby'


const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Slice alias="header"></Slice>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>  
    </div>
  )
}

export default Layout