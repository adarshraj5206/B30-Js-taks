// Array of image URLs
const imageUrls = [
    'https://images.unsplash.com/photo-1725126210190-497eb2cfb6cd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1644955727336-e50fcd5e533e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1646807936293-3e1d81864d05?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1615903040611-e599dfaa6752?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1627924751020-c555a024b83b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1600657644140-aa5b5e003829?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1598525126402-2a4bdacea93a?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];
  
  // Select gallery and lightbox elements
  const gallery = document.querySelector('#gallery');
  const lightbox = document.querySelector('#lightbox');
  const lightboxImage = document.querySelector('#lightbox-image');
  const closeLightbox = document.querySelector('#close-lightbox');
  
  //images
  imageUrls.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Gallery Image';
    gallery.appendChild(img);
    img.addEventListener('click', () => openLightbox(url));
  });
  
  // Open lightbox
  function openLightbox(url) {
    lightboxImage.src = url;
    lightbox.style.display = 'block';
  }
  
  // Close lightbox
  closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
  
  // Close lightbox on outside click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
  