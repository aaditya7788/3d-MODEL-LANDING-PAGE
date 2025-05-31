import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';


const Hero = () => {
  return (
    <main className="relative flex flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)] overflow-hidden">
      {/* TEXT CONTENT */}
      <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"
       className="relative z-10 max-w-xl mx-auto px-4 lg:px-0 lg:ml-[5%] mt-[80%] lg:mt-[0%] md:mt-[60%] text-center lg:text-left">
        {/* Tag Box */}
        <div className="relative mx-auto lg:mx-0 sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
            <i className="bx bx-diamond"></i>
            INTRODUCING
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
          EMAIL FOR <br /> DEVELOPERS
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem] mx-auto lg:mx-0">
          A powerful email client designed specifically for developers, offering seamless integration with your favorite tools and a sleek, modern interface.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 justify-center lg:justify-start">
          <a
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 ease-in-out hover:bg-[#1a1a1a] hover:text-white"
            href="#"
          >
            Documentation
            <i className="bx bx-link-external"></i>
          </a>

          <a
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 ease-in-out hover:bg-[#1a1a1a] hover:text-white bg-gray-300 text-black"
            href="#"
          >
            GetStarted
            <i className="bx bx-link-external"></i>
          </a>
        </div>
      </div>

      {/* SPLINE ROBOT */}
      <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="2000" data-aos-offset="0"
      className="absolute lg:relative w-full h-[400px] sm:h-[500px]  lg:h-auto lg:w-1/2 mt-[-3rem] lg:mt-0 z-0">
        <Spline scene="https://prod.spline.design/4g471eTiz7rloEdP/scene.splinecode" />
      </div>


    </main>
  );
};

export default Hero;
