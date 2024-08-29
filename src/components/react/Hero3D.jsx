import Spline from '@splinetool/react-spline'

const Hero3D = () => {
  return (
    <div className="md:relative md:h-[120vh]">
      <div className="text-white text-center app-container flex flex-col gap-12 items-center justify-center z-10 relative pointer-events-none">
        <h1 className="text-7xl font-semibold pt-12">
        Experience the Magic of Web AR!
        </h1>
        <p className="max-w-[768px] px-4 text-primary-100 text-xl">
       Whether you’re curious about cutting-edge tech or just looking to see AR in action, you’re in the right place. Check out my skills and see what’s possible with Web AR!
        </p>
        <br/>
      </div>
      
      {/* <Spline
  className="md:absolute top-0 left-0 pointer-events-none"
  scene="https://prod.spline.design/5XvR4dixCVJOJytk/scene.splinecode"
/> */}

{/* <Spline
        scene="https://prod.spline.design/mtEBcX1eE5Z1XPrN/scene.splinecode" 
      /> */}

      <Spline
      className="md:absolute top-0 left-0"
        scene="https://prod.spline.design/31WGcjAD-YyAoOgi/scene.splinecode" 
        // width={1200}
        // height={1200}
      />

    </div>
  )
}

export default Hero3D
