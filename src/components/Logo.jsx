import React, { useEffect, useState } from 'react'

const Intro = () => {
  const [loading, setLoading] = useState(true)
  const [moveToTop, setMoveToTop] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      setMoveToTop(true)
    }, 3000) 

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`bg-[#081D32] flex items-center justify-center transition-all duration-700 ${
        moveToTop ? 'items-start pt-4' : 'h-screen'
      }`}
      style={{
        height: moveToTop ? '80px' : '100vh',
        background: moveToTop ? 'transparent' : '#081D32',
        transition: 'height 0.7s, background 0.7s'
      }}
    >
      {loading ? (
        <div className="flex flex-col items-center">
          <img
            src="../src/assets/logo.jpeg"
            alt="Logo"
            className="block mb-4"
            style={{ width: '80px', height: '80px' }}
          />
          <div className="horizontal-loader" />
        </div>
      ) : (
        <img
          src="../src/assets/logo.jpeg"
          alt="Logo"
          className="block"
          style={{
            width: '80px',
            height: '80px',
            transform: moveToTop ? 'translateY(-40px)' : 'none',
            transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)'
          }}
        />
      )}
      {/* Horizontal Loader CSS */}
      <style>
        {`
          .horizontal-loader {
            width: 80px;
            height: 8px;
            background: #fff;
            border-radius: 4px;
            overflow: hidden;
            position: relative;
            margin-top: 8px;
          }
          .horizontal-loader::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 0%;
            background: #3498db;
            animation: horizontal-load 3s linear forwards;
            border-radius: 4px;
          }
          @keyframes horizontal-load {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}
      </style>
    </div>
  )
}

export default Intro