import { useState } from 'react'


function App() {
  let [klikken, setklikken] = useState(0)
 
  
  const handelklikken1 = ()=>{
    setklikken(klikken+=1)
  }
  // const handelklikken2 = ()=>{
  //   setklikken(klikken+=1)
  // }
  // const handelklikken3 = ()=>{
  //   setklikken(klikken+=1)
  // }
  // const handelklikken4 = ()=>{
  //   setklikken(klikken+=1)
  // }

  return (
  <div>
  <div>
    <div>
      <h1>thriller</h1>
      <button onClick={handelklikken1}>like</button> <p>{klikken}</p>
    </div>
    <div>
      <h1>comedie</h1>
      <button onClick={handelklikken1}>like</button> <p>{klikken}</p>
    </div>
    <div>
      <h1>actie</h1>
      <button onClick={handelklikken1}>like</button> <p>{klikken}</p>
    </div>
    <div>
      <h1>romantisch</h1>
      <button onClick={handelklikken1}>like</button> <p>{klikken}</p>
    </div>
  </div>
</div>
  )
}

export default App
