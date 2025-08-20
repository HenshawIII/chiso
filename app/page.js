"use client"
import Image from "next/image";
import { useState } from "react";

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

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Page Background Image */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 100 60' className="w-full h-full" preserveAspectRatio='none'>
          <defs>
            <pattern id="geometric-pattern" x="0" y="0" width="100" height="60" patternUnits="userSpaceOnUse">
              <rect fill='#A46ECC' width='100' height='60'/>
              <g fill-opacity='1'>
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
                  <a href="/gallery" onClick={closeMenu} className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors duration-200 p-3 rounded-lg hover:bg-gray-50">
                    <span className="text-2xl">📸</span>
                    <span className="text-lg">Photo Gallery</span>
                  </a>
                </li>
                <li>
                  <a href="#outfits" onClick={closeMenu} className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors duration-200 p-3 rounded-lg hover:bg-gray-50">
                    <span className="text-2xl">👗</span>
                    <span className="text-lg">Outfit Inspiration</span>
                  </a>
                </li>
                <li>
                  <a href="#paint" onClick={closeMenu} className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors duration-200 p-3 rounded-lg hover:bg-gray-50">
                    <span className="text-2xl">🎨</span>
                    <span className="text-lg">Sip & Paint</span>
                  </a>
                </li>
                <li>
                  <a href="#rsvp" onClick={closeMenu} className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors duration-200 p-3 rounded-lg hover:bg-gray-50">
                    <span className="text-2xl">📝</span>
                    <span className="text-lg">RSVP</span>
                  </a>
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
                  <h3 className="font-semibold text-gray-800 mb-2">Sarah Johnson</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Phone:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-800">+1 (555) 123-4567</span>
                      <button
                        onClick={() => copyToClipboard('+1 (555) 123-4567', 'phone1')}
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
                  <h3 className="font-semibold text-gray-800 mb-2">Michael Chen</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Phone:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-800">+1 (555) 987-6543</span>
                      <button
                        onClick={() => copyToClipboard('+1 (555) 987-6543', 'phone2')}
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
            <div className="relative w-full h-full bg-white/40 backdrop-blur-sm rounded-2xl shadow-xl mb-16 border border-gray-200">
              <Image 
                src="/happp.png" 
                alt="Birthday celebration background" 
                width={400}
                height={400}
                className="object-contain w-full h-auto"
                priority
              />
            </div>
            
            <div className="space-y-4 xl:hidden">
              {/* Mobile Introduction Tab */}
              <div className="">
                <div className="text-center mb-4">
                  <h3 className="text-4xl font-semibold md:text-5xl font-dancing text-gray-800 mb-4">You're Invited! 🎊</h3>
                  <div className="text-center text-lg text-gray-700 ">
                  <p> 30th Birthday Bash Chisom Ekaette🎉</p>
                  <p className="mt-1"></p>
                </div>
                </div>
                
                {/* Quick Navigation Pills */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-lg font-medium">📸 Gallery</span>
                  <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-lg font-medium">👗 Outfits</span>
                  <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-lg font-medium">🎨 Paint</span>
                  <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-lg font-medium">📝 RSVP</span>
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
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">📸</div>
                    <p className="text-sm">Photo {num}</p>
                    {/* <p className="text-xs">Add celebrant image here</p> */}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Outfit Inspiration Section */}
        <section id="outfits" className="bg-transparent backdrop-blur-sm rounded-2xl p-8 shadow-xl mx-8 mb-16 border border-gray-200">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 font-dancing">
            👗 Outfit Inspiration 👔
          </h2>
          
          {/* Women's Outfits */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center mb-6 text-gray-700">For the Ladies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="text-3xl mb-2">👗</div>
                      <p className="text-sm">Outfit {num}</p>
                      <p className="text-xs">Elegant & stylish</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Men's Outfits */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-6 text-gray-700">For the Gentlemen</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="text-3xl mb-2">👔</div>
                      <p className="text-sm">Outfit {num}</p>
                      <p className="text-xs">Classy & dapper</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">🖼️</div>
                    <p className="text-sm">Painting {num}</p>
                    <p className="text-xs">Beautiful artwork</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-sm font-medium">Click to view details</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
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

        {/* Footer */}
        <footer className="text-center py-8 bg-transparent backdrop-blur-sm rounded-2xl mx-8 mb-8 border border-gray-200">
          <p className="text-gray-600">Made by <a href="https://www.X.com/devansa01" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-dancing font-bold">😎</a>  </p>
        </footer>
      </div>

      {/* Right Half - Fixed Image */}
      <div className="hidden bg-white xl:flex xl:w-1/2 fixed right-0 top-0 h-screen  items-center justify-center">
      
        <div className="text-center px-8 ">
          {/* Balloons */}
          <div className="flex justify-center items-center">
            <Image src="/balloon.png" alt="Birthday celebration background" width={300} height={300} className="object-contain  h-auto" />
          </div>
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-2 font-dancing">
              30TH BIRTHDAY
            </h1>
            <h2 className="text-5xl md:text-6xl font-bold text-amber-800 font-dancing">
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
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-full shadow-lg border border-gray-200">🍸Food & Drinks</span>
              <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-full shadow-lg border border-gray-200">🎨 Sip & Paint</span>
              <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-full shadow-lg border border-gray-200">📸 Photo Memories</span>
            </div>
        </div>
      </div>
    </div>
  );
}
