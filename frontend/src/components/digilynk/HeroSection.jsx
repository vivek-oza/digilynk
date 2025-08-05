import React, { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import RotatingText from "../reactbits/TextAnimations/RotatingText/RotatingText";
import { useNavigate } from "react-router-dom";
import { cn } from "../../lib/utils";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function HeroSection() {
  const navigate = useNavigate();

  function handleContactClick() {
    navigate("/contact");
  }
  function handleLearnmoreClick() {
    navigate("/services");
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <>
      <div className="bg-gray-50 min-h-screen py-12">

        <motion.section
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="max-w-7xl mx-auto px-4"
        >
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[80vh]">

            {/* Welcome Card */}
            <motion.div
              variants={fadeInUp}
              className="md:col-span-5 bg-white rounded-3xl p-8 flex flex-col justify-center shadow-sm border border-gray-100 relative group cursor-pointer transition-all duration-300 hover:shadow-lg"
            >
              <div className="absolute inset-0 rounded-3xl border-4 border-blue-200/0 group-hover:border-blue-200/60 transition-all duration-500 ease-out pointer-events-none"></div>
              <h1 className="text-4xl md:text-5xl text-gray-900 mb-6 leading-tight font-playfair ">
                <motion.div
                  className="italic mb-4 inline-block relative overflow-hidden"
                  variants={fadeInUp}
                >
                  <span className="relative z-10 text-white">Welcome to</span>
                  <motion.div
                    className="absolute inset-0 bg-blue-600/90 -z-0"
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    viewport={{ once: false }}
                    transition={{
                      delay: 0.8,
                      duration: 0.8,
                      ease: "easeOut"
                    }}
                  />
                </motion.div> <span className="text-blue-600 text-5xl md:text-6xl font-semibold font-poppins">Digilynk</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Results-driven digital solutions specializing in website development and software testing.
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={handleContactClick}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium"
                >
                  Get Started
                </Button>
                <Button
                  onClick={handleLearnmoreClick}
                  variant="outline"
                  className="border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>

            {/* Carousel Card */}
            <motion.div
              variants={fadeInUp}
              className="md:col-span-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl overflow-hidden shadow-sm border border-gray-100 relative group cursor-pointer transition-all duration-300 hover:shadow-lg"
            >
              <div className="absolute inset-0 rounded-3xl border-4 border-indigo-300/0 group-hover:border-indigo-300/60 transition-all duration-500 ease-out pointer-events-none z-10"></div>
              <EmblaCarousel />
            </motion.div>

            {/* Stats Card */}
            <motion.div
              variants={fadeInUp}
              className="md:col-span-3 bg-gray-900 text-white rounded-3xl p-6 flex flex-col justify-between shadow-sm relative group cursor-pointer transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute inset-0 rounded-3xl border-4 border-purple-400/0 group-hover:border-purple-400/60 transition-all duration-500 ease-out pointer-events-none"></div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Our Impact</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-blue-400">10+</div>
                    <div className="text-gray-300 text-sm">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400">5+</div>
                    <div className="text-gray-300 text-sm">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-400">2+</div>
                    <div className="text-gray-300 text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Services Preview */}
            <motion.div
              variants={fadeInUp}
              className="md:col-span-6 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 relative group cursor-pointer transition-all duration-300 hover:shadow-lg"
            >
              <div className="absolute inset-0 rounded-3xl border-4 border-green-300/0 group-hover:border-green-300/60 transition-all duration-500 ease-out pointer-events-none"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Do</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="bg-blue-50 rounded-xl p-4 transition-all duration-300 ease-in-out hover:bg-blue-100 hover:shadow-md cursor-pointer">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg mb-2"></div>
                  <h4 className="font-medium text-gray-900 text-sm">Web Development</h4>
                  <p className="text-xs text-gray-600 mt-1">Modern websites</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4 transition-all duration-300 ease-in-out hover:bg-green-100 hover:shadow-md cursor-pointer">
                  <div className="w-8 h-8 bg-green-600 rounded-lg mb-2"></div>
                  <h4 className="font-medium text-gray-900 text-sm">Software Testing</h4>
                  <p className="text-xs text-gray-600 mt-1">Quality assurance</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 transition-all duration-300 ease-in-out hover:bg-purple-100 hover:shadow-md cursor-pointer col-span-2 md:col-span-1">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg mb-2"></div>
                  <h4 className="font-medium text-gray-900 text-sm">Graphics Design</h4>
                  <p className="text-xs text-gray-600 mt-1">Visual branding</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              variants={fadeInUp}
              className="md:col-span-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-6 flex flex-col justify-center shadow-sm relative group cursor-pointer transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute inset-0 rounded-3xl border-4 border-pink-300/0 group-hover:border-pink-300/60 transition-all duration-500 ease-out pointer-events-none"></div>
              <h3 className="text-2xl font-bold mb-2">Ready to Transform?</h3>
              <p className="text-blue-100 mb-4">Let's build something amazing together</p>
              <Button
                onClick={handleContactClick}
                className="bg-white text-blue-600 hover:bg-gray-100 w-fit px-6 py-2 rounded-xl font-medium"
              >
                Start Your Project
              </Button>
            </motion.div>

          </div>
        </motion.section>
        
        {/* Animated Wave */}
        <div className="relative -mb-1">
          <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
            <style>
              {`
                .path-0{
                  animation:pathAnim-0 4s;
                  animation-timing-function: linear;
                  animation-iteration-count: infinite;
                }
                @keyframes pathAnim-0{
                  0%{
                    d: path("M 0,400 L 0,300 C 210.2666666666667,281.73333333333335 420.5333333333334,263.46666666666664 567,262 C 713.4666666666666,260.53333333333336 796.1333333333334,275.8666666666667 931,260 C 1065.8666666666666,244.13333333333335 1252.9333333333334,197.06666666666666 1440,150 L 1440,400 L 0,400 Z");
                  }
                  25%{
                    d: path("M 0,400 L 0,300 C 119.33333333333331,294.4 238.66666666666663,288.8 390,273 C 541.3333333333334,257.2 724.6666666666667,231.2 905,209 C 1085.3333333333333,186.8 1262.6666666666665,168.4 1440,150 L 1440,400 L 0,400 Z");
                  }
                  50%{
                    d: path("M 0,400 L 0,300 C 174.66666666666663,310 349.33333333333326,320 517,302 C 684.6666666666667,284 845.3333333333335,238.00000000000003 998,208 C 1150.6666666666665,177.99999999999997 1295.3333333333333,164 1440,150 L 1440,400 L 0,400 Z");
                  }
                  75%{
                    d: path("M 0,400 L 0,300 C 194.8,306.1333333333333 389.6,312.2666666666667 554,300 C 718.4,287.7333333333333 852.4000000000001,257.06666666666666 995,229 C 1137.6,200.93333333333334 1288.8,175.46666666666667 1440,150 L 1440,400 L 0,400 Z");
                  }
                  100%{
                    d: path("M 0,400 L 0,300 C 210.2666666666667,281.73333333333335 420.5333333333334,263.46666666666664 567,262 C 713.4666666666666,260.53333333333336 796.1333333333334,275.8666666666667 931,260 C 1065.8666666666666,244.13333333333335 1252.9333333333334,197.06666666666666 1440,150 L 1440,400 L 0,400 Z");
                  }
                }
                .path-1{
                  animation:pathAnim-1 4s;
                  animation-timing-function: linear;
                  animation-iteration-count: infinite;
                }
                @keyframes pathAnim-1{
                  0%{
                    d: path("M 0,400 L 0,400 C 161.59999999999997,414 323.19999999999993,428 485,420 C 646.8000000000001,412 808.8,382 968,350 C 1127.2,318 1283.6,284 1440,250 L 1440,400 L 0,400 Z");
                  }
                  25%{
                    d: path("M 0,400 L 0,400 C 181.86666666666667,395.06666666666666 363.73333333333335,390.1333333333333 504,379 C 644.2666666666667,367.8666666666667 742.9333333333334,350.53333333333336 892,328 C 1041.0666666666666,305.46666666666664 1240.5333333333333,277.73333333333335 1440,250 L 1440,400 L 0,400 Z");
                  }
                  50%{
                    d: path("M 0,400 L 0,400 C 189.7333333333333,423.4666666666667 379.4666666666666,446.93333333333334 549,436 C 718.5333333333334,425.06666666666666 867.8666666666668,379.73333333333335 1013,343 C 1158.1333333333332,306.26666666666665 1299.0666666666666,278.1333333333333 1440,250 L 1440,400 L 0,400 Z");
                  }
                  75%{
                    d: path("M 0,400 L 0,400 C 170.93333333333334,388.4 341.8666666666667,376.8 487,374 C 632.1333333333333,371.2 751.4666666666667,377.2 906,358 C 1060.5333333333333,338.8 1250.2666666666667,294.4 1440,250 L 1440,400 L 0,400 Z");
                  }
                  100%{
                    d: path("M 0,400 L 0,400 C 161.59999999999997,414 323.19999999999993,428 485,420 C 646.8000000000001,412 808.8,382 968,350 C 1127.2,318 1283.6,284 1440,250 L 1440,400 L 0,400 Z");
                  }
                }
                .path-2{
                  animation:pathAnim-2 4s;
                  animation-timing-function: linear;
                  animation-iteration-count: infinite;
                }
                @keyframes pathAnim-2{
                  0%{
                    d: path("M 0,400 L 0,500 C 138.66666666666669,521.4666666666667 277.33333333333337,542.9333333333334 422,520 C 566.6666666666666,497.06666666666666 717.3333333333333,429.7333333333334 888,394 C 1058.6666666666667,358.2666666666666 1249.3333333333335,354.1333333333333 1440,350 L 1440,400 L 0,400 Z");
                  }
                  25%{
                    d: path("M 0,400 L 0,500 C 168.2666666666667,508.66666666666663 336.5333333333334,517.3333333333333 479,502 C 621.4666666666666,486.6666666666667 738.1333333333334,447.33333333333337 894,418 C 1049.8666666666666,388.66666666666663 1244.9333333333334,369.3333333333333 1440,350 L 1440,400 L 0,400 Z");
                  }
                  50%{
                    d: path("M 0,400 L 0,500 C 184.2666666666667,508.93333333333334 368.5333333333334,517.8666666666667 505,510 C 641.4666666666666,502.1333333333333 730.1333333333334,477.4666666666667 878,448 C 1025.8666666666666,418.5333333333333 1232.9333333333334,384.26666666666665 1440,350 L 1440,400 L 0,400 Z");
                  }
                  75%{
                    d: path("M 0,400 L 0,500 C 144.13333333333333,511.06666666666666 288.26666666666665,522.1333333333333 429,517 C 569.7333333333333,511.8666666666667 707.0666666666668,490.5333333333333 875,460 C 1042.9333333333332,429.4666666666667 1241.4666666666667,389.73333333333335 1440,350 L 1440,400 L 0,400 Z");
                  }
                  100%{
                    d: path("M 0,400 L 0,500 C 138.66666666666669,521.4666666666667 277.33333333333337,542.9333333333334 422,520 C 566.6666666666666,497.06666666666666 717.3333333333333,429.7333333333334 888,394 C 1058.6666666666667,358.2666666666666 1249.3333333333335,354.1333333333333 1440,350 L 1440,400 L 0,400 Z");
                  }
                }
              `}
            </style>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="5%" stopColor="#9900ef"></stop>
                <stop offset="95%" stopColor="#8ED1FC"></stop>
              </linearGradient>
            </defs>
            <path d="M 0,400 L 0,300 C 210.2666666666667,281.73333333333335 420.5333333333334,263.46666666666664 567,262 C 713.4666666666666,260.53333333333336 796.1333333333334,275.8666666666667 931,260 C 1065.8666666666666,244.13333333333335 1252.9333333333334,197.06666666666666 1440,150 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.4" className="transition-all duration-300 ease-in-out delay-150 path-0"></path>
            <path d="M 0,400 L 0,400 C 161.59999999999997,414 323.19999999999993,428 485,420 C 646.8000000000001,412 808.8,382 968,350 C 1127.2,318 1283.6,284 1440,250 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-1"></path>
            <path d="M 0,400 L 0,500 C 138.66666666666669,521.4666666666667 277.33333333333337,542.9333333333334 422,520 C 566.6666666666666,497.06666666666666 717.3333333333333,429.7333333333334 888,394 C 1058.6666666666667,358.2666666666666 1249.3333333333335,354.1333333333333 1440,350 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-2"></path>
          </svg>
        </div>
      </div>

      {/* Second Section */}
      <motion.section
        className="relative bg-white py-16 md:py-24 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={container}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <motion.div
            className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
            variants={fadeInUp}
          >
            <span className="font-playfair italic">We Build</span>
            <RotatingText
              texts={["Smarter", "Faster", "Better"]}
              colors={["text-blue-600", "text-green-600", "text-purple-600"]}
              bgColors={["bg-blue-100", "bg-green-100", "bg-purple-100"]}
              mainClassName="px-3 sm:px-4 md:px-6 py-2 md:py-3 overflow-hidden justify-center rounded-2xl shadow-sm border border-gray-200"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2500}
            />
            <span className="font-playfair italic">Websites</span>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-light"
            variants={fadeInUp}
          >
            We design and develop websites, apps and digital experiences that help
            our clients <span className="font-medium text-blue-600">grow</span>, <span className="font-medium text-green-600">innovate</span>, and <span className="font-medium text-purple-600">transform</span>. We listen, learn and
            understand before we build. We identify your goals together, then use
            our expertise to find that sweet spot of realistic and impactful.
          </motion.div>
          
          {/* Decorative Elements */}
          <motion.div 
            className="flex justify-center mt-12 space-x-2"
            variants={fadeInUp}
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

// Embla Carousel Component
const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );

  const images = [
    'https://plus.unsplash.com/premium_photo-1720287601013-69bed792f481?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fit=crop',
    'https://plus.unsplash.com/premium_photo-1661412938808-a0f7be3c8cf1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dfit=crop',
    'https://plus.unsplash.com/premium_photo-1722156533682-8d298432585e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fit=crop',
    'https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fit=crop',
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop'
  ];

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full h-full">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((src, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === selectedIndex
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
              }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};