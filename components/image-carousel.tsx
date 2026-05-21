'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselImage {
  src: string
  alt: string
  title: string
}

const carouselImages: CarouselImage[] = [
  {
    src: '/images/carousel-community-1.jpg',
    alt: 'Community gathering',
    title: 'Community Impact',
  },
  {
    src: '/images/carousel-education-2.jpg',
    alt: 'Education program',
    title: 'Education for All',
  },
  {
    src: '/images/carousel-healthcare-3.jpg',
    alt: 'Healthcare initiative',
    title: 'Healthcare Access',
  },
  {
    src: '/images/carousel-women-empowerment-4.jpg',
    alt: 'Women empowerment',
    title: 'Women Empowerment',
  },
  {
    src: '/images/carousel-youth-leadership-5.jpg',
    alt: 'Youth leadership',
    title: 'Future Leaders',
  },
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  useEffect(() => {
    if (!isAutoplay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [isAutoplay])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
    setIsAutoplay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
    setIsAutoplay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoplay(true)
  }

  return (
    <section className="relative w-full bg-white dark:bg-gray-900 py-0">
      <div className="relative w-full max-w-full">
        {/* Main Carousel Container */}
        <div className="relative w-full min-h-screen md:min-h-[600px] overflow-hidden">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1200 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === currentIndex}
                quality={90}
              />
            </div>
          ))}

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content Overlay - Left Side */}
          <div className="absolute inset-0 flex flex-col justify-center items-start z-10">
            <div className="container mx-auto px-6 md:px-12">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                  {carouselImages[currentIndex].title}
                </h2>
                <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                  Transforming lives and building stronger communities through meaningful action and dedicated service across Ghana.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/donate" className="px-8 py-3 bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-semibold rounded transition-colors duration-300 inline-block">
                    Donate Now
                  </a>
                  <a href="/get-involved" className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-[#1e3a8a] font-semibold rounded transition-colors duration-300 inline-block">
                    Volunteer With Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#1e3a8a] rounded-full p-2 transition-all duration-200 hover:scale-110 shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#1e3a8a] rounded-full p-2 transition-all duration-200 hover:scale-110 shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dot Indicators at Bottom */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex justify-center items-center gap-3">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full border-2 ${
                index === currentIndex
                  ? 'bg-white border-white w-4 h-4'
                  : 'bg-transparent border-white/60 hover:border-white w-3 h-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
