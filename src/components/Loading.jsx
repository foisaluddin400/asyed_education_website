import React from 'react'

const Loading = () => {
    //asdf
  return (
<div className=" flex items-center h-[80vh] justify-center">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[green] border-r-primary animate-spin-slow" />
        <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-primary border-l-[green] animate-spin-slow [animation-direction:reverse] [animation-delay:400ms]" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[green] to-secondary animate-pulse shadow-lg" />
        </div>
      </div>
    </div>
  )
}

export default Loading

