import React from 'react'

function Counter({passengerCount,setPassengerCount}) {
  return (
    <div className='flex flex-row justify-center'>
        <button className='border-y-2 border-l-2 border-black h-12 w-12 text-center text-3xl' onClick={()=>setPassengerCount(prevValue=>{if(prevValue>0)return prevValue-1; else return 0 })}>-</button>
        <div className='border-2 border-black h-12 w-12 text-center text-3xl'>{passengerCount}</div>
        <button className='border-y-2 border-r-2 border-black h-12 w-12 text-center text-3xl' onClick={()=>setPassengerCount(prevValue=>prevValue+1)}>+</button>
    </div>
  )
}

export default Counter