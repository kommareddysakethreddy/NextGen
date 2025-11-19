'use client'

import { useRef, useState } from 'react'
import { dataportfolio } from '../data/portfoliodata'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import SectionTitle from './SectionTitle'

const filters = ['all', 'web', 'ml'] as const
type FilterType = (typeof filters)[number]

const ProjectScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')

  const filteredProjects = dataportfolio.filter((item) =>
    activeFilter === 'all' ? true : item.category === activeFilter
  )

  // Scroll by roughly one card
  const scrollByCard = (direction: 'left' | 'right') => {
    const container = containerRef.current
    if (!container) return

    const firstCard =
      container.querySelector<HTMLDivElement>('[data-card="project-card"]')
    const cardWidth = firstCard?.clientWidth ?? 320
    const gap = 16 // matches space-x-4
    const distance = direction === 'left' ? -(cardWidth + gap) : cardWidth + gap

    container.scrollBy({
      left: distance,
      behavior: 'smooth',
    })
  }

  return (
    <section className="px-6 py-16 bg-white relative" id="projects">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Projects" />

        {/* Filters */}
        <div className="flex justify-start space-x-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter)
                if (containerRef.current) {
                  containerRef.current.scrollTo({ left: 0, behavior: 'smooth' })
                }
              }}
              className={`px-4 py-2 rounded-full border transition duration-200 hover:bg-black hover:text-white ${
                activeFilter === filter
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-gray-400'
              }`}
            >
              {filter === 'all'
                ? 'All'
                : filter === 'web'
                ? 'Web Dev'
                : 'Machine Learning'}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel + arrows (max width so only up to 3 cards show) */}
      <div className="relative flex items-center max-w-5xl mx-auto">
        {/* Left button */}
        <button
          onClick={() => scrollByCard('left')}
          className="hidden sm:flex absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-200"
        >
          <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
        </button>

        {/* Scrollable container */}
        <div
          ref={containerRef}
          className="flex items-stretch space-x-4 overflow-x-auto scroll-smooth w-full py-2"
        >
          {filteredProjects.map((item) => (
            <div
              key={item.title}
              data-card="project-card"
              className={clsx(
                'rounded-xl shadow-md relative overflow-hidden group flex-shrink-0',
                'transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl',
                'w-80 sm:w-80' // <= ensures max ~3 cards in 5xl container
              )}
            >
              <img
                src={item.img}
                alt={item.description}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-center py-2 text-lg font-semibold">
                {item.title}
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white text-center px-6">
                <p className="mb-4 text-base">{item.description}</p>
                <a
                  href={item.link}
                  className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Know More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right button */}
        <button
          onClick={() => scrollByCard('right')}
          className="hidden sm:flex absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-200"
        >
          <ChevronRightIcon className="h-6 w-6 text-gray-800" />
        </button>
      </div>
    </section>
  )
}

export default ProjectScroll
