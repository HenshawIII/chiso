import { getCloudinaryImages, getCloudinaryImagesByFolder } from '../../cloudiImages';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const cloudinaryImages = await getCloudinaryImages();
    const folderImages = await getCloudinaryImagesByFolder('birthday');
    
    // Combine both results, removing duplicates
    const allImages = [...cloudinaryImages];
    folderImages.forEach(folderImage => {
      if (!allImages.find(img => img.id === folderImage.id)) {
        allImages.push(folderImage);
      }
    });

    return NextResponse.json({ images: allImages });
  } catch (error) {
    console.error('Error fetching images:', error);
    return NextResponse.json({ images: [] }, { status: 500 });
  }
}
