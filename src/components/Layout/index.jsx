import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Logo from '../common/Logo'

const index = ({ children, customHeight, noHero, noNav, img }) => {
    
    setInterval(() => {
      console.log('hi')
    }, 1);
    return (
      <div className="flex bg-white animate-pulse relative flex-col">
        <div className='fixed bg-white opacity-30 z-50 inset-0 h-screen w-full'>
        
        </div>
        {noNav ? (
          <div className="mx-auto">
            <Logo />
          </div>
        ) : (
          <Navbar isImg={img?.length > 0 ? true : false} />
        )}
        {img && !noHero && (
          <div
            style={{
              background: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), url(${img})`,
            }}
            className="w-full absolute inset-0 !bg-norepeat !bg-cover min-h-[50rem] sm:min-h-[40rem] lg:min-h-[40rem] !bg-center max-h-[70vh]"
            alt="img"
          ></div>
        )}
        {img && noHero && (
          <div
            style={{
              background: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), url(${img})`,
            }}
            className={`w-full max-w-[100vw] absolute inset-0 !bg-norepeat !bg-cover md:aspect-video !bg-center ${
              customHeight
                ? customHeight
                : 'min-h-[30rem] lg:min-h-[40rem]  max-h-[70vh]'
            }  `}
            alt="img"
          ></div>
        )}
        <main className="flex-1 min-h-screen ">{children}</main>
        <Footer />
      </div>
    )
}

export default index
