'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ClientGallery() {
  const [loaded, setLoaded] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Cloudinary configuration
  const CLOUDINARY_CLOUD_NAME = 'dgqczyv20';
  const CLOUDINARY_UPLOAD_PRESET = 'chi_birthday';

  // Load Cloudinary Upload Widget script
  useEffect(() => {
    const uwScript = document.getElementById('uw');
    if (!loaded && !uwScript) {
      const script = document.createElement('script');
      script.setAttribute('async', '');
      script.setAttribute('id', 'uw');
      script.src = 'https://upload-widget.cloudinary.com/global/all.js';
      script.addEventListener('load', () => setLoaded(true));
      document.body.appendChild(script);
    }
  }, [loaded]);

  const processResults = (error, result) => {
    if (result.event === 'close') {
      setIsDisabled(false);
    }
    if (result && result.event === 'success') {
      const secureUrl = result.info.secure_url;
      const previewUrl = secureUrl.replace(
        '/upload/',
        '/upload/w_400/f_auto,q_auto/'
      );
      
      // Create a proper image object for the new upload
      const newImage = {
        id: result.info.public_id,
        src: secureUrl,
        alt: result.info.original_filename || 'Uploaded image',
        category: 'uploaded',
        publicId: result.info.public_id,
        uploadedAt: new Date().toISOString()
      };
      
      // Add to both arrays to ensure it shows up everywhere
      setUploadedImages((prevImages) => [...prevImages, previewUrl]);
      setIsDisabled(false);
      
      console.log('New image uploaded successfully:', newImage);
      
      // Show success message
      alert('Image uploaded successfully! It will appear in the gallery below.');
    }
    if (error) {
      console.error('Upload error:', error);
      setIsDisabled(false);
    }
  };

  const uploadWidget = () => {
    setIsDisabled(true);
    window.cloudinary.openUploadWidget(
      {
        cloudName: CLOUDINARY_CLOUD_NAME,
        uploadPreset: CLOUDINARY_UPLOAD_PRESET,
        sources: ['local', 'url'],
        tags: ['birthdayy'],
        clientAllowedFormats: ['image'],
        resourceType: 'image',
        folder: 'birthday', // Specify the folder where images should be uploaded
      },
      processResults
    );
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowImageModal(true);
  };

  const closeImageModal = () => {
    setShowImageModal(false);
    setSelectedImage(null);
  };

  return (
    <>
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
              <h2 className="text-2xl font-bold text-center text-gray-800">Menu</h2>
            </div>
            
            {/* Menu Items */}
            <nav className="py-6 px-8">
              <ul className="space-y-4">
                <li>
                  <a href="/" onClick={closeMenu} className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors duration-200 p-3 rounded-lg hover:bg-gray-50">
                    <span className="text-2xl">🏠</span>
                    <span className="text-lg">Home</span>
                  </a>
                </li>
                <li>
                  <a href="/gallery" onClick={closeMenu} className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors duration-200 p-3 rounded-lg hover:bg-gray-50">
                    <span className="text-2xl">📸</span>
                    <span className="text-lg">Gallery</span>
                  </a>
                </li>
                <li>
                    <Link href="/#outfits"  onClick={closeMenu} className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors duration-200 p-3 rounded-lg hover:bg-gray-50">
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
          </div>
        </>
      )}

      {/* Upload Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-transparent backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 font-dancing">
            🎉 Share Your Memories
          </h2>
          
          <div className="text-center space-y-4">
            <div className="text-sm text-gray-500 max-w-2xl mx-auto">
              {/* <p className="mb-3">📸 <strong>How it works:</strong></p> */}
              
                
                <p>Only images can be uploaded.</p>
              
            </div>
            
            <button
              disabled={isDisabled}
              className={`bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
              type="button"
              onClick={uploadWidget}
            >
              {isDisabled ? 'Opening Widget' : 'Upload Image'}
            </button>
          </div>
        </div>
      </section>

      {/* Newly Uploaded Images Section */}
      {uploadedImages.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 font-dancing">
              ✨ Newly Uploaded Images
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {uploadedImages.map((uploadedImage, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => handleImageClick({ src: uploadedImage, alt: 'Uploaded image', category: 'uploaded' })}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={uploadedImage}
                      alt="uploaded image"
                      fill
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Image Modal */}
      {showImageModal && selectedImage && (
        <>
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={closeImageModal}
          ></div>
          
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 bg-white/80 backdrop-blur-sm z-10"
              aria-label="Close image modal"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Image Display */}
            <div className="p-4">
              <div className="relative">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                />
              </div>
              
              {/* Image Info */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{selectedImage.alt}</h3>
                <p className="text-gray-600">
                  Category: <span className="font-medium capitalize">{selectedImage.category}</span>
                </p>
                {selectedImage.category === 'uploaded' && (
                  <p className="text-green-600 text-sm mt-1">✨ Newly uploaded</p>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Footer */}
      
    </>
  );
}
