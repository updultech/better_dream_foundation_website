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
    }, 5000)

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
    setIsAutoplay(false)
  }

  return (
    <section className="relative bg-white dark:bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Impact in Action
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See the real stories and transformations happening across Ghana through our programs
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-2xl bg-gray-200">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
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

            {/* Dark overlay with title */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="w-full p-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {carouselImages[currentIndex].title}
                </h3>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-900 rounded-full p-3 transition-all duration-200 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-900 rounded-full p-3 transition-all duration-200 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'bg-blue-600 w-3 h-3'
                    : 'bg-gray-400 hover:bg-gray-500 w-2 h-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Autoplay Indicator */}
          <div className="text-center mt-6 text-gray-600 dark:text-gray-400 text-sm">
            {isAutoplay ? 'Autoplay: ON' : 'Autoplay: OFF'}
          </div>
        </div>
      </div>
    </section>
  )
}
