
"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch('/api/s3images');
        const data = await res.json();
        
        // Log to ensure data is correct
        console.log("Fetched Images Data:", data);

        console.log(data.images)

        setImages(data.images);
      } catch (error) {
        console.error('Error fetching images from API:', error);
      }
    }
    fetchImages();
  }, []);

  return (
    <div>
      <h1>Trash Detection Image Data</h1>
      
      {images.length > 0 ? (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Image URL</th>
              <th>Location (Lat, Long)</th>
              <th>Timestamp</th>
              <th>File Size (KB)</th>
            </tr>
          </thead>
          <tbody>
            {images.map((image, index) => (
              <tr key={index}>
                <td>
                  <a href={image.url} target="_blank" rel="noopener noreferrer">{image.url}</a>
                </td>
                <td>{image.location ? image.location : 'Unknown'}</td>
                <td>{image.timestamp ? image.timestamp.replace('_', ' ') : 'Unknown'}</td>
                <td>{(image.size / 1024).toFixed(2)} KB</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No images found.</p>
      )}
    </div>
  );
}
