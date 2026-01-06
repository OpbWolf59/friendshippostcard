"use client"

import { useEffect, useState } from "react"

interface QualityPostcardProps {
  quality: string
  delay: number
}

const colors = [
  { bg: "bg-postcard-peach", accent: "from-accent-coral to-accent-peach" },
  { bg: "bg-postcard-mint", accent: "from-accent-mint to-accent-teal" },
  { bg: "bg-postcard-lavender", accent: "from-accent-lavender to-accent-purple" },
  { bg: "bg-postcard-yellow", accent: "from-accent-yellow to-accent-orange" },
  { bg: "bg-postcard-rose", accent: "from-accent-rose to-accent-pink" },
  { bg: "bg-postcard-sky", accent: "from-accent-sky to-accent-blue" },
]

export default function QualityPostcard({ quality, delay }: QualityPostcardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const colorScheme = colors[delay % colors.length]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className={`transform transition-all duration-500 ${
        isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <div
        className={`${colorScheme.bg} rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-rotate-1 transition-all duration-300 min-h-[280px] flex flex-col justify-between relative overflow-hidden group`}
      >
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/30 blur-sm group-hover:animate-pulse"></div>
        <div className="absolute bottom-6 left-4 w-6 h-6 rounded-full bg-white/40 blur-sm group-hover:animate-pulse"></div>

        {/* Card stamp effect */}
        <div className="absolute top-2 right-2 w-12 h-12 border-2 border-white/50 rotate-12 opacity-40 group-hover:opacity-60 transition-opacity"></div>

        {/* Main content */}
        <div className="relative z-10">
          <div className="text-3xl mb-3 animate-bounce" style={{ animationDelay: `${delay * 100}ms` }}>
            {getEmoji(quality)}
          </div>
          <p className="text-xl md:text-2xl font-bold text-primary leading-tight">{quality}</p>
        </div>

        {/* Corner decorations */}
        <div className="relative z-10 flex gap-2 mt-4">
          <div className="w-2 h-2 rounded-full bg-white/60"></div>
          <div className="w-2 h-2 rounded-full bg-white/60"></div>
          <div className="w-2 h-2 rounded-full bg-white/60"></div>
        </div>
      </div>
    </div>
  )
}

function getEmoji(quality: string): string {
  const emojiMap: { [key: string]: string } = {
    "You light up the room": "💫",
    "Your laugh is contagious": "😄",
    "You're genuinely kind": "💝",
    "You inspire others": "🚀",
    "Your creativity knows no bounds": "🎨",
    "You're an amazing listener": "👂",
    "You make everything fun": "🎉",
    "Your optimism is infectious": "☀️",
    "You're fiercely loyal": "🤝",
    "You have the biggest heart": "❤️",
    "You're incredibly thoughtful": "🌸",
    "You bring out the best in people": "✨",
    "Your passion is beautiful": "🔥",
    "You're one of a kind": "👑",
    "You make the world brighter": "🌟",
    "You're braver than you believe": "💪",
    "Your talent is remarkable": "🎯",
    "You're a true friend": "🌈",
    "You have impeccable taste": "💎",
    "You're absolutely unforgettable": "🦋",
  }
  return emojiMap[quality] || "✨"
}
