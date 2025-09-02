"use client"
import Image from "next/image";
import { useState } from "react";
import Link from "next/link"
import AnimatedContent from "./AnimatedContent";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState(false);
  const [copiedItems, setCopiedItems] = useState({});

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const openRSVPModal = () => setIsRSVPModalOpen(true);
  const closeRSVPModal = () => setIsRSVPModalOpen(false);

  const copyToClipboard = async (text, itemId) => {
    try {
      await navigator.clipboard.writeText(text);
      
      // Show check mark for this specific item
      setCopiedItems(prev => ({ ...prev, [itemId]: true }));
      
      // Hide check mark after 2 seconds
      setTimeout(() => {
        setCopiedItems(prev => ({ ...prev, [itemId]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };  

  const paintImages = [
    '/sip1.jpg',
    '/sip2.jpg',
    '/sip3.jpg',
    '/sip4.jpg',
    '/sip5.jpg',
    '/sip6.jpg',
    
  ]

  const ladiesImages = [
    '/pg1.jpg',
    '/pg2.jpg',
    
  ]
  const mensImages = [
    '/wshirt.jpg',
    '/wpant.jpg',
   
  ]

  const celebrantImages = [
    '/chi2.jpg',
    '/chi1.jpg',
    '/chi4.jpg',
    '/chi5.jpg',
    '/chi6.jpg',
    '/chi7.jpg',
  ]

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Page Background Image */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 100 60' className="w-full h-full" preserveAspectRatio='none'>
          <defs>
            <pattern id="geometric-pattern" x="0" y="0" width="100" height="60" patternUnits="userSpaceOnUse">
              <rect fill='#A46ECC' width='100' height='60'/>
              <g fillOpacity='1'>
                <rect fill='#A46ECC' width='11' height='11'/>
                <rect fill='#a570cd' x='10' width='11' height='11'/>
                <rect fill='#a672cd' y='10' width='11' height='11'/>
                <rect fill='#a774ce' x='20' width='11' height='11'/>
                <rect fill='#a975ce' x='10' y='10' width='11' height='11'/>
                <rect fill='#aa77cf' y='20' width='11' height='11'/>
                <rect fill='#ab79d0' x='30' width='11' height='11'/>
                <rect fill='#ac7bd0' x='20' y='10' width='11' height='11'/>
                <rect fill='#ad7dd1' x='10' y='20' width='11' height='11'/>
                <rect fill='#ae7fd2' y='30' width='11' height='11'/>
                <rect fill='#b080d2' x='40' width='11' height='11'/>
                <rect fill='#b182d3' x='30' y='10' width='11' height='11'/>
                <rect fill='#b284d3' x='20' y='20' width='11' height='11'/>
                <rect fill='#b386d4' x='10' y='30' width='11' height='11'/>
                <rect fill='#b488d5' y='40' width='11' height='11'/>
                <rect fill='#b58ad5' x='50' width='11' height='11'/>
                <rect fill='#b68bd6' x='40' y='10' width='11' height='11'/>
                <rect fill='#b88dd6' x='30' y='20' width='11' height='11'/>
                <rect fill='#b98fd7' x='20' y='30' width='11' height='11'/>
                <rect fill='#ba91d8' x='10' y='40' width='11' height='11'/>
                <rect fill='#bb93d8' y='50' width='11' height='11'/>
                <rect fill='#bc95d9' x='60' width='11' height='11'/>
                <rect fill='#bd96d9' x='50' y='10' width='11' height='11'/>
                <rect fill='#be98da' x='40' y='20' width='11' height='11'/>
                <rect fill='#bf9adb' x='30' y='30' width='11' height='11'/>
                <rect fill='#c19cdb' x='20' y='40' width='11' height='11'/>
                <rect fill='#c29edc' x='10' y='50' width='11' height='11'/>
                <rect fill='#c3a0dc' x='70' width='11' height='11'/>
                <rect fill='#c4a1dd' x='60' y='10' width='11' height='11'/>
                <rect fill='#c5a3dd' x='50' y='20' width='11' height='11'/>
                <rect fill='#c6a5de' x='40' y='30' width='11' height='11'/>
                <rect fill='#c7a7df' x='30' y='40' width='11' height='11'/>
                <rect fill='#c8a9df' x='20' y='50' width='11' height='11'/>
                <rect fill='#c9abe0' x='80' width='11' height='11'/>
                <rect fill='#cbade0' x='70' y='10' width='11' height='11'/>
                <rect fill='#ccaee1' x='60' y='20' width='11' height='11'/>
                <rect fill='#cdb0e1' x='50' y='30' width='11' height='11'/>
                <rect fill='#ceb2e2' x='40' y='40' width='11' height='11'/>
                <rect fill='#cfb4e3' x='30' y='50' width='11' height='11'/>
                <rect fill='#d0b6e3' x='90' width='11' height='11'/>
                <rect fill='#d1b8e4' x='80' y='10' width='11' height='11'/>
                <rect fill='#d2b9e4' x='70' y='20' width='11' height='11'/>
                <rect fill='#d3bbe5' x='60' y='30' width='11' height='11'/>
                <rect fill='#d4bde5' x='50' y='40' width='11' height='11'/>
                <rect fill='#d6bfe6' x='40' y='50' width='11' height='11'/>
                <rect fill='#d7c1e6' x='90' y='10' width='11' height='11'/>
                <rect fill='#d8c3e7' x='80' y='20' width='11' height='11'/>
                <rect fill='#d9c5e8' x='70' y='30' width='11' height='11'/>
                <rect fill='#dac6e8' x='60' y='40' width='11' height='11'/>
                <rect fill='#dbc8e9' x='50' y='50' width='11' height='11'/>
                <rect fill='#dccae9' x='90' y='20' width='11' height='11'/>
                <rect fill='#ddccea' x='80' y='30' width='11' height='11'/>
                <rect fill='#deceea' x='70' y='40' width='11' height='11'/>
                <rect fill='#dfd0eb' x='60' y='50' width='11' height='11'/>
                <rect fill='#e1d2eb' x='90' y='30' width='11' height='11'/>
                <rect fill='#e2d4ec' x='80' y='40' width='11' height='11'/>
                <rect fill='#e3d5ec' x='70' y='50' width='11' height='11'/>
                <rect fill='#e4d7ed' x='90' y='40' width='11' height='11'/>
                <rect fill='#e5d9ed' x='80' y='50' width='11' height='11'/>
                <rect fill='#E6DBEE' x='90' y='50' width='11' height='11'/>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geometric-pattern)"/>
        </svg>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Hamburger Menu Button - Fixed Position */}
      <button
        onClick={toggleMenu}
        className="fixed top-6 left-6 z-50 p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 hover:bg-white transition-all duration-300 lg:top-8 lg:left-8"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
          <span className={`w-5 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </div>
      </button>

      {/* Overlay Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={closeMenu}
          ></div>
          
          {/* Modal Menu Content */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] max-w-[90vw] max-h-[80vh] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden">
            {/* Close Button */}
          
            
            {/* Menu Header */}
            <div className="pt-12 pb-6 px-8 border-b border-gray-200">
              <h2 className="text-2xl text-center font-dancing font-bold text-gray-800">Menu</h2>
              {/* <p className="text-gray-600 mt-2">Navigate through the celebration</p> */}
            </div>
            
            {/* Menu Items */}
            <nav className="py-6 px-8">
              <ul className="space-y-4">
                <li>
                  <Link href="/gallery" onClick={closeMenu} className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors duration-200 p-3 rounded-lg hover:bg-gray-50">
                    <span className="text-2xl">📸</span>
                    <span className="text-lg">Photo Gallery</span>
                  </Link>
                </li>
                <li>
                  <Link href="/#outfits" onClick={closeMenu} className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors duration-200 p-3 rounded-lg hover:bg-gray-50">
                    <span className="text-2xl">👗</span>
                    <span className="text-lg">Outfit Inspiration</span>
                  </Link>
                </li>
                <li>
                  <Link href="/#paint" onClick={closeMenu} className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors duration-200 p-3 rounded-lg hover:bg-gray-50">
                    <span className="text-2xl">🎨</span>
                    <span className="text-lg">Sip & Paint</span>
                  </Link>
                </li>
                <li>
                  <Link href="/#rsvp" onClick={closeMenu} className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors duration-200 p-3 rounded-lg hover:bg-gray-50">
                    <span className="text-2xl">📝</span>
                    <span className="text-lg">RSVP</span>
                  </Link>
                </li>
              </ul>
            </nav>
            
            {/* Menu Footer */}
          
          </div>
        </>
      )}

      {/* RSVP Modal */}
      {isRSVPModalOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={closeRSVPModal}
          ></div>
          
          {/* RSVP Modal Content */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 max-w-[90vw] max-h-[80vh] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeRSVPModal}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Close RSVP modal"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Modal Header */}
            <div className="pt-12 pb-6 px-8 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-center text-gray-800 font-dancing">RSVP</h2>
              <p className="text-gray-600 mt-2 text-center">Contact us to confirm your attendance</p>
            </div>
            
            {/* Contact Information */}
            <div className="py-6 px-8">
              <div className="space-y-6">
                {/* First Contact */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Zipporah</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Phone:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-800">08137512130</span>
                      <button
                        onClick={() => copyToClipboard('08137512130', 'phone1')}
                        className="p-1 hover:bg-gray-200 rounded transition-colors duration-200"
                        title="Copy phone number"
                      >
                        {copiedItems['phone1'] ? (
                          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Second Contact */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Gift</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Phone:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-800">08034235269</span>
                      <button
                        onClick={() => copyToClipboard('08034235269', 'phone2')}
                        className="p-1 hover:bg-gray-200 rounded transition-colors duration-200"
                        title="Copy phone number"
                      >
                        {copiedItems['phone2'] ? (
                          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          
          </div>
        </>
      )}

      {/* Copy Tooltip */}
      {/* Removed as per edit hint */}

      {/* Left Half - Scrollable Content */}
      <div className="w-full xl:w-1/2 overflow-y-auto custom-scrollbar">
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-8 py-16 text-center">
          {/* Content */}
          <div className="relative z-10 w-full h-full">
            <AnimatedContent delay={200}>
            <div className="relative w-full h-full bg-white/40 backdrop-blur-sm rounded-2xl shadow-xl mb-16 border border-gray-200">
              <Image 
                src="/chi3.jpg" 
                alt="Birthday celebration background" 
                width={400}
                height={400}
                className="object-cover w-full h-auto"
                priority
              />
            </div>
            </AnimatedContent>

            <div className="space-y-4 xl:hidden">
              {/* Mobile Introduction Tab */}
              <div className="">
                <div className="text-center mb-6">
                  <h3 className="text-4xl font-semibold md:text-5xl font-dancing text-gray-800 mb-4">Chisoms 30th Birthday Bash! 🎊</h3>
                  <div className="text-center text-lg text-gray-700 ">
                  {/* <p> 30th Birthday Bash Chisom Ekaette🎉</p> */}
                  <p className="mt-1"></p>
                </div>
                </div>

                <div className="mb-6 mt-2 text-left max-w-sm mx-auto">
            <div className="space-y-3 text-sm md:text-base text-gray-800">
              <div className="flex items-start">
                <span className="font-semibold min-w-[60px]">Date:</span>
                <span className="ml-2">5th September 2025</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold min-w-[60px]">Time:</span>
                <span className="ml-2">12 noon</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold min-w-[60px]">Venue:</span>
                <span className="ml-2">Metro Park, 31 Isaac John Street, Ikeja Lagos</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold min-w-[60px]">Dress Code:</span>
                <span className="ml-2">Pink (Ladies) / White (Men)</span>
              </div>
            </div>
          </div>
                
                {/* Quick Navigation Pills */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <Link href="/gallery" className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-lg font-medium">📸 Gallery</Link>
                  <Link href="/#outfits" className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-lg font-medium">👗 Outfits</Link>
                  <Link href="/#paint" className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-lg font-medium">🎨 Paint</Link>
                  <Link href="/#rsvp" className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-lg font-medium">📝 RSVP</Link>
                </div>
                
                {/* Birthday Info */}
                {/* <div className="text-center text-3xl font-dancing text-gray-700 ">
                  <p>🎉 30th Birthday Bash</p>
                  <p className="mt-1">Chisom Ekaette</p>
                </div> */}
                
              </div>
            </div>
          </div>
        </section>

        {/* Celebrant Image Gallery Section */}
        <section id="gallery" className="bg-transparent backdrop-blur-sm rounded-2xl p-8 shadow-xl mx-8 mb-16 border border-gray-200">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 font-dancing">
            🌟 Meet the Birthday Girl 🌟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Placeholder images - replace with actual celebrant photos */}
            {celebrantImages.map((image, index) => (
              <AnimatedContent delay={index * 100} key={index}>
              <div key={index} className="group relative hover:scale-110  overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-gray-200  to-gray-300 flex items-center justify-center">
                    <Image src={image} alt="Celebrant" fill className="object-cover  w-full h-auto" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
              </AnimatedContent>
            ))}
          </div>
        </section>

        {/* About the Celebrant Section */}
        <AnimatedContent delay={200}>
        <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl mx-8 mb-16 border border-gray-200">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 font-dancing">
            🎂 About the Celebrant 🎂
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">✨</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 font-dancing mb-2">
                  Celebrating 30 Amazing Years!
                </h3>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-center text-lg mb-6">
                  Today we gather to celebrate an incredible milestone - 30 years of laughter, 
                  love, and unforgettable memories! Our dear celebrant has touched so many lives 
                  with their kindness, humor, and genuine spirit.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-800 font-dancing flex items-center">
                      <span className="mr-2">🌟</span>
                      What Makes Her Special
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        Always ready with a warm smile and helping hand
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        Master of making everyone feel included and valued
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        Brings joy and laughter to every gathering
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        A true friend who's always there when you need them
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-800 font-dancing flex items-center">
                      <span className="mr-2">🎉</span>
                      Fun Facts
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        Loves trying new adventures and experiences
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        Has an amazing collection of hobbies
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        Known for their incredible talent
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        Makes the best meals you'll ever taste
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center mt-8 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-200">
                  <p className="text-lg text-gray-700 font-medium">
                    "Here's to 30 years of being absolutely amazing, and to many more years 
                    of laughter, love, and wonderful memories ahead! 🥂" - <span className="font-dancing text-3xl">Chisom</span> 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </AnimatedContent>
        {/* Send a Wish Section */}
       

        {/* Outfit Inspiration Section */}
        <section id="outfits" className="bg-transparent backdrop-blur-sm rounded-2xl p-8 shadow-xl mx-8 mb-16 border border-gray-200">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 font-dancing">
            👗 Style Inspiration 👔
          </h2>
            
          {/* Women's Outfits */}
          <AnimatedContent delay={300}>
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center mb-6 text-gray-700">For the Ladies </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ladiesImages.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
    
                      <Image src={image} alt="Outfit"  fill className="object-cover w-full h-auto" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          </AnimatedContent>
          {/* Men's Outfits */}
          <AnimatedContent delay={400}>
          <div>
            <h3 className="text-2xl font-semibold text-center mb-6 text-gray-700">For the Gentlemen </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mensImages.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <Image src={image} alt="Outfit" fill className="object-cover w-full h-auto" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          </AnimatedContent>
        </section>

        {/* Sip and Paint Section */}
        <section id="paint" className="bg-transparent backdrop-blur-sm rounded-2xl p-8 shadow-xl mx-8 mb-16 border border-gray-200">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 font-dancing">
            🎨 Sip & Paint Gallery 🍷
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Get creative with these beautiful paintings! Choose your favorite and let your artistic side shine while enjoying refreshing beverages.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paintImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <Image src={image} alt="Painting" fill className="object-cover w-full h-auto" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  
                </div>
              </div>
            ))}
          </div>
        </section>

        <AnimatedContent delay={500}>
        <section className="bg-gradient-to-br from-pink-50 to-purple-50 backdrop-blur-sm rounded-2xl p-8 shadow-xl mx-8 mb-16 border border-pink-200">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-800 font-dancing">
              💌 Send a Birthday Wish 💌
            </h2>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/50 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Want to send a special birthday message? Share your warmest wishes, 
                favorite memories, or just say hello! Your kind words will make this 
                celebration even more meaningful.
              </p>
              
              <div className="max-w-2xl mx-auto">
                <label htmlFor="birthday-message" className="block text-left text-gray-700 font-medium mb-3">
                  Your Birthday Message:
                </label>
                <textarea
                  id="birthday-message"
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-gray-700 placeholder-gray-400"
                  placeholder="🎉 Happy 30th Birthday! 🎂

Wishing you an absolutely amazing day filled with joy, laughter, and wonderful memories! May this new decade bring you endless happiness, success, and all your heart desires. Have a fantastic celebration! 🥳✨

With love and best wishes! 💕"
                  defaultValue="🎉 Happy 30th Birthday! 🎂

Wishing you an absolutely amazing day filled with joy, laughter, and wonderful memories! May this new decade bring you endless happiness, success, and all your heart desires. Have a fantastic celebration! 🥳✨

With love and best wishes! 💕"
                ></textarea>
                
                <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => {
                      const messageText = document.getElementById('birthday-message').value;
                      if (!messageText.trim()) {
                        alert('Please enter a message before sending!');
                        return;
                      }
                      const message = encodeURIComponent(messageText);
                      const whatsappUrl = `https://wa.me/+2348132729805?text=${message}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                    className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Send Message
                  </button>
                  
                  <button
                    onClick={() => {
                      document.getElementById('birthday-message').value = "🎉 Happy 30th Birthday! 🎂\n\nWishing you an absolutely amazing day filled with joy, laughter, and wonderful memories! May this new decade bring you endless happiness, success, and all your heart desires. Have a fantastic celebration! 🥳✨\n\nWith love and best wishes! 💕";
                    }}
                    className="inline-flex items-center px-6 py-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Reset to Default
                  </button>
                </div>
              </div>
            </div>
            
            <div className="text-sm text-gray-500">
              <p>💡 <strong>Tip:</strong> Customize the message above or use the default greeting!</p>
            </div>
          </div>
        </section>
        </AnimatedContent>
        {/* Call to Action */}
        <AnimatedContent delay={500}>
        <section id="rsvp" className="opacity-90 text-center bg-gradient-to-r from-purple-400 via-purple-300 to-purple-200 rounded-2xl p-8 text-white shadow-xl mx-8 mb-16">
          <h2 className="text-3xl text-white font-bold font-dancing  opacity-100 mb-4">Ready to Celebrate? 🎊</h2>
          <p className="text-xl mb-6 opacity-100">Don't forget to dress your best and bring your creative spirit!</p>
          <button 
            onClick={openRSVPModal}
            className="bg-white font-dancing text-black px-8 py-3 rounded-full font-bold text-2xl hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            RSVP Now
          </button>
        </section>
        </AnimatedContent>
        {/* Footer */}
        <footer className="text-center py-8 bg-transparent backdrop-blur-sm rounded-2xl mx-8 mb-8 border border-gray-200">
          <p className="text-gray-600">Made by <a href="https://www.X.com/devansa01" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-dancing font-bold">😎</a>  </p>
        </footer>
      </div>

      {/* Right Half - Fixed Image */}
      <div className="hidden bg-white xl:flex xl:w-1/2 fixed right-0 top-0 h-screen  items-start justify-center">
      
        <div className="text-center px-8 ">
          {/* Balloons */}
          <div className="flex justify-center items-start">
            <Image src="/balloon.png" alt="Birthday celebration background" width={200} height={200} className="object-contain  h-auto" />
          </div>
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-amber-800 mb-2 font-dancing">
              30TH BIRTHDAY
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 font-dancing">
              BASH
            </h2>
          </div>
          

          {/* Name Box */}
          <div className="mb-2">
            <div className="border-2 border-amber-800 rounded-lg px-6 py-4 inline-block">
              <p className="text-2xl md:text-3xl font-bold text-amber-800 font-dancing">
                CHISOM EKAETTE
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mb-6">
            <p className="text-lg md:text-xl font-bold italic text-amber-800 font-dancing">
              JOIN ME TO CELEBRATE
            </p>
          </div>

          <div className="mb-6 text-left max-w-sm mx-auto">
            <div className="space-y-3 text-sm md:text-base text-amber-800">
              <div className="flex items-start">
                <span className="font-semibold min-w-[60px]">Date:</span>
                <span className="ml-2">5th September 2025</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold min-w-[60px]">Time:</span>
                <span className="ml-2">12 noon</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold min-w-[60px]">Venue:</span>
                <span className="ml-2">Metro Park, 31 Isaac John Street, Ikeja Lagos</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold min-w-[60px]">Dress Code:</span>
                <span className="ml-2">Pink (Ladies) / White (Men)</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <Link href="/#outfits" className="bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-full shadow-lg border border-gray-200">🍸Style Inspiration</Link>
              <Link href="/#paint" className="bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-full shadow-lg border border-gray-200">🎨 Sip & Paint</Link>
              <Link href="/gallery" className="bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-full shadow-lg border border-gray-200">📸 Photo Memories</Link>
            </div>
        </div>
      </div>
    </div>
  );
}
