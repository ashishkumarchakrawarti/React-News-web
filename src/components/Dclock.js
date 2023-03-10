import React, { useState } from 'react'


const Dclock = () => {
    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);
    let date = new Date().toLocaleDateString();
    const [cdate, setCdate] = useState(date);

    const UpdateTime=()=>{
        time = new Date().toLocaleTimeString();
        setCtime(time)
    }



    setInterval(UpdateTime,1000);
  return (
    <div>
        <h6 className='btn2'>{ctime}<div>{cdate}</div></h6>
        {/* <h6 className='btn2'>{cdate}</h6> */}

      {/* <button onClick={()=>setTime(new Date().toLocaleTimeString())}></button> */}
    </div>
  )
}

export default Dclock