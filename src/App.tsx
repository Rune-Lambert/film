import { useState } from 'react'


function App() {
  const [klikken, setklikken] = useState(true)

  const handelklikken = ()=>{
    setklikken(klikken)
  }

  return (
   <div>
    <div>
      <button onClick={handelklikken}>
        klikhier
      </button>
      <p>{klikken && 1}</p>
    </div>
   </div>
  )
}

export default App
