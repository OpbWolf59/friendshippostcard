"use client"
import PostcardCard from "@/components/postcard-card"

interface PostcardsGridProps {
  qualities: string[]
  name: string
  onBackClick: () => void
}

export default function PostcardsGrid({ qualities, name, onBackClick }: PostcardsGridProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-soft-pink via-soft-blue to-soft-lavender p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Things I love about {name}</h1>
          <p className="text-primary/70 font-medium">Click a postcard to reveal the message</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {qualities.map((quality, index) => (
            <PostcardCard key={`${quality}-${index}`} quality={quality} delay={index} />
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={onBackClick}
            className="px-6 py-3 bg-white/70 hover:bg-white text-primary rounded-full font-medium transition-all hover:shadow-md hover:scale-105"
          >
            ← Back
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-accent-coral text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all"
          >
            See Different Qualities
          </button>
        </div>
      </div>
    </main>
  )
}
