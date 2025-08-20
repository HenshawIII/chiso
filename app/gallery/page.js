import ServerGallery from './server-gallery';
import ClientGallery from './client-gallery';

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Header */}
      <header className="text-center py-8 bg-white/80 backdrop-blur-sm shadow-lg">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-black to-gray-900 bg-clip-text text-transparent font-dancing">
          📸 Birthday Gallery
        </h1>
        <p className="text-xl text-gray-600 mt-2">Share and view memories from the celebration</p>
      </header>

      {/* Upload Section - Client Component */}
      <ClientGallery />

      {/* Existing Images - Server Component */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-transparent backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 font-dancing">
            🌟 Celebration Memories
          </h2>
          <ServerGallery />
        </div>
      </section>
      <footer className="text-center py-8 bg-white/80 backdrop-blur-sm mt-16">
        <p className="text-gray-600">Made by <a href="https://www.X.com/devansa01" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-dancing font-bold">😎</a>  </p>
      </footer>
    </div>
  );
}
