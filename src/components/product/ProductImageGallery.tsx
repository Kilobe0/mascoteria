// src/components/product/ProductImageGallery.tsx
'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ZoomIn, Maximize2, X } from 'lucide-react';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Navegação pelas imagens
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Navegação por teclado
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        prevImage();
        break;
      case 'ArrowRight':
        e.preventDefault();
        nextImage();
        break;
      case 'Escape':
        if (isFullscreen) {
          setIsFullscreen(false);
        } else if (isZoomed) {
          setIsZoomed(false);
        }
        break;
      case ' ':
        e.preventDefault();
        setIsZoomed(!isZoomed);
        break;
      case 'Enter':
        e.preventDefault();
        setIsFullscreen(!isFullscreen);
        break;
    }
  }, [nextImage, prevImage, isZoomed, isFullscreen]);

  // Clique na thumbnail
  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const currentImage = images[currentImageIndex];

  return (
    <>
      <div
        className="relative group focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 rounded-lg"
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label="Galeria de imagens do produto"
      >
        {/* Imagem principal */}
        <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={currentImage}
            alt={`${productName} - Imagem ${currentImageIndex + 1} de ${images.length}`}
            fill
            className={`object-cover transition-transform duration-300 ${
              isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          />

          {/* Controles de navegação */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                aria-label="Imagem anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                aria-label="Próxima imagem"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Botões de ação */}
          <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              aria-label={isZoomed ? "Diminuir zoom" : "Aumentar zoom"}
            >
              <ZoomIn size={20} />
            </button>
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              aria-label="Tela cheia"
            >
              <Maximize2 size={20} />
            </button>
          </div>

          {/* Indicador de imagem */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="mt-4 grid grid-cols-4 sm:grid-cols-5 gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`relative aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${
                  index === currentImageIndex
                    ? 'border-blue-500'
                    : 'border-transparent hover:border-gray-300'
                }`}
                aria-label={`Ver imagem ${index + 1} de ${images.length}`}
                aria-pressed={index === currentImageIndex}
              >
                <Image
                  src={image}
                  alt={`${productName} - Miniatura ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 25vw, 20vw"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modal de tela cheia */}
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsFullscreen(false)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Galeria em tela cheia"
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-10"
              aria-label="Fechar tela cheia"
            >
              <X size={24} />
            </button>

            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <Image
                src={currentImage}
                alt={`${productName} - Tela cheia`}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>

            {/* Controles no modal */}
            {images.length > 1 && (
              <div className="flex justify-center mt-4 gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="bg-white/20 text-white p-3 rounded-full hover:bg-white/30"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="bg-white/20 text-white p-3 rounded-full hover:bg-white/30"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}