import React, { useState, useEffect } from 'react'
import 'tailwindcss/tailwind.css'
import { FaPause, FaPlay } from 'react-icons/fa'
import image2 from '../../assets/ar1.jpg'
import image1 from '../../assets/ar3.jpg'

const About = () => {
  const [imageIndex, setImageIndex] = useState(0)
  const [progress1, setProgress1] = useState(0)
  const [progress2, setProgress2] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const data = [
    {
      image: image1,
      heading: 'Discover Web AR',
      paragraph:
        'Web AR brings Augmented Reality directly to your browser, eliminating the need for dedicated apps. By using modern web technologies, Web AR allows users to interact with 3D models and immersive experiences on any device—smartphones, tablets, or desktops.',
    },
    {
      image: image2,
      heading: 'Why Web AR Matters',
      paragraph:
        'Web AR makes augmented reality more accessible by allowing users to experience it through a webpage. This simplifies access for a wide audience and offers new ways for businesses, educators, and creatives to engage users with virtual product displays, interactive tours, and more.',
    },
  ]

  useEffect(() => {
    if (!isPaused) {
      const interval1 = setInterval(() => {
        setProgress1((prev) => {
          if (prev >= 100) {
            clearInterval(interval1)
            setProgress2(0) // reset progressbar 2
            setImageIndex((prevIndex) => (prevIndex + 1) % data.length) // change image
            return prev
          }
          return prev + 1
        })
      }, 30)

      return () => clearInterval(interval1)
    }
  }, [progress1, isPaused])

  useEffect(() => {
    if (progress1 >= 100 && !isPaused) {
      const interval2 = setInterval(() => {
        setProgress2((prev) => {
          if (prev >= 100) {
            clearInterval(interval2)
            setProgress1(0) // reset progressbar 1
            setProgress2(0) // reset progressbar 2
            setImageIndex((prevIndex) => (prevIndex + 1) % data.length) // change image
            return prev
          }
          return prev + 1
        })
      }, 30)

      return () => clearInterval(interval2)
    }
  }, [progress1, progress2, isPaused])

  const handlePlayPause = () => {
    setIsPaused(!isPaused)
  }

  return (
    <div className="app-container py-8 flex flex-col items-center md:flex-row md:justify-between">
      <div className="flex flex-col items-center md:items-start py-7">
        <h2 className="text-4xl text-primary-50 mb-4">About Web AR</h2>
        <br />
        <img
          src={data[imageIndex].image.src}
          alt="XDE Studios"
          className="w-full h-auto max-w-[640px] max-h-[580px] object-cover rounded-xl"
        />
      </div>
      <div className="w-full max-w-[448px] h-auto mt-4 md:mt-0 md:ml-8 flex flex-col justify-center p-4  bg-black  rounded-md">
        <h2 className="text-4xl text-primary-50">{data[imageIndex].heading}</h2>
        <p className="text-primary-500 text-xl mt-4">
          {data[imageIndex].paragraph}
        </p>
      </div>

      <div className="hidden md:flex flex-col items-center space-y-4 ml-4 pr-5">
        <div className="relative h-[200px] w-[8px] border border-primary-500 rounded-full">
          <div
            className="absolute top-0 bg-white w-full rounded-full"
            style={{ height: `${progress1}%` }}
          ></div>
        </div>
        <br />
        <div className="relative h-[200px] w-[8px] border border-primary-500 rounded-full">
          <div
            className="absolute top-0 bg-white w-full rounded-full"
            style={{ height: `${progress2}%` }}
          ></div>
        </div>
        <button
          className="mt-4 w-12 h-12 bg-gray-600 bg-opacity-50 text-white rounded-full flex items-center justify-center"
          onClick={handlePlayPause}
        >
          {isPaused ? <FaPlay /> : <FaPause />}
        </button>
      </div>
    </div>
  )
}

export default About
