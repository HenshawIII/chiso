import { getCloudinaryImages, getCloudinaryImagesByFolder } from '../cloudiImages';
import Image from 'next/image';

export default async function ServerGallery() {
  // Fetch images server-side using Cloudinary SDK
  const cloudinaryImages = await getCloudinaryImages();
  const folderImages = await getCloudinaryImagesByFolder('birthday');
  
  // Combine both results, removing duplicates
  const allImages = [...cloudinaryImages];
  folderImages.forEach(folderImage => {
    if (!allImages.find(img => img.id === folderImage.id)) {
      allImages.push(folderImage);
    }
  });

  if (allImages.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">📷</div>
        <p className="text-gray-600 text-lg">No images found yet. Upload some images to get started!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {allImages.map((image) => (
        <div
          key={image.id}
          className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
        >
          <div className="aspect-square relative overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </div>
          
          {/* Image overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
          
          {/* Image info overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* <p className="text-white text-sm truncate">{image.alt}</p> */}
            <p className="text-white/80 text-xs">
              {new Date(image.uploadedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
