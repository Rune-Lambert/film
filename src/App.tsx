import { useState } from 'react'


function App() {
  const [klikken, setklikken] = useState(!false)

  const handelklikken = ()=>{
    setklikken(klikken)
  }

  return (
  //  <div>
  //   <div>
  //     <button onClick={handelklikken}>
  //       klikhier
  //     </button>
  //     <p>{klikken && 1}</p>
  //   </div>
  //  </div>
  <div>
  <div>
    <div>
      trhiller
    </div>
    <div>
      comedie
    </div>
    <div>
      actie
    </div>
    <div>
      romantisch
    </div>
  </div>
</div>
  )
}

export default App
