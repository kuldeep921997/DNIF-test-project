import React from 'react'
import BgImg from "../assets/workonprogress.jpg"

const WorkOnProgress = ({ text, page }) => {
    return (
        <div className='w-full h-full container'>
            <div className='inner-container w-full h-full'>
                <div className='image-container flex flex-col w-full min-h-screen bg-no-repeat 
          bg-cover items-center justify-center'
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(${BgImg})`,
                        width: "100%", height: "100%", objectFit: "cover"
                    }}>
                    <div className='text-xl font-normal mb-3'>{page}</div>
                    <div className='text-2xl font-normal' >
                        {text}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkOnProgress