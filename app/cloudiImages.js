import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dgqczyv20',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function getCloudinaryImages() {
  try {
    // Search for images with the 'birthdayy' tag
    const result = await cloudinary.search
      .expression('resource_type:image AND tags:birthdayy')
      .sort_by('created_at', 'desc')
      .max_results(100)
      .execute();

    const images = result.resources.map(resource => ({
      id: resource.public_id,
      src: resource.secure_url,
      alt: resource.public_id.split('/').pop() || 'Birthday image',
      category: 'uploaded',
      publicId: resource.public_id,
      uploadedAt: resource.created_at,
      width: resource.width,
      height: resource.height,
      format: resource.format
    }));

    console.log(`Found ${images.length} images with tag 'birthdayy'`);
    return images;
  } catch (error) {
    console.error('Error fetching Cloudinary images:', error);
    return [];
  }
}

export async function getCloudinaryImagesByFolder(folderName = 'birthday') {
  try {
    // Search for images in a specific folder
    const result = await cloudinary.search
      .expression(`resource_type:image AND folder:${folderName}`)
      .sort_by('created_at', 'desc')
      .max_results(100)
      .execute();

    const images = result.resources.map(resource => ({
      id: resource.public_id,
      src: resource.secure_url,
      alt: resource.public_id.split('/').pop() || 'Birthday image',
      category: 'uploaded',
      publicId: resource.public_id,
      uploadedAt: resource.created_at,
      width: resource.width,
      height: resource.height,
      format: resource.format
    }));

    console.log(`Found ${images.length} images in folder '${folderName}'`);
    return images;
  } catch (error) {
    console.error('Error fetching Cloudinary images by folder:', error);
    return [];
  }
}
