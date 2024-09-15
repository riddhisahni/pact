import React, { useState } from 'react';

// Functional React component to handle photo uploads
const PhotoUpload: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Handle file selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      // Generate a URL to preview the selected image
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
    }
  };

  // Handle form submission (you can replace this with any upload logic)
  const handleSubmit = () => {
    if (selectedImage) {
      // Logic to upload the image goes here, e.g., sending it to a server
      console.log('Uploading:', selectedImage);
    }
  };

  return (
    <div>
      <h2>Upload a Photo: </h2>
      
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      
      {/* Preview selected image */}
      {previewUrl && (
        <div>
          <h3>Preview:</h3>
          <img src={previewUrl} alt="Selected" style={{ width: '200px', height: 'auto' }} />
        </div>
      )}

      {/* Submit button to handle file upload */}
      <button onClick={handleSubmit} disabled={!selectedImage}>
        Upload Photo
      </button>
    </div>
  );
};

export default PhotoUpload;
