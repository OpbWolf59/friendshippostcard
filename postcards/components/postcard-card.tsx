"use client"

import { useState } from "react"

interface PostcardCardProps {
  quality: string
  delay: number
}

const qualityDetails: Record<string, { emoji: string; message: string }> = {
  "You light up the room": {
    emoji: "✨",
    message:
      "Your presence brings joy and brightness to every space. People naturally gravitate towards you because you make them feel happier just by being there.",
  },
  "Your laugh is contagious": {
    emoji: "😄",
    message:
      "Your laughter is infectious and brings genuine happiness to everyone around you. It's one of the most beautiful sounds.",
  },
  "You're genuinely kind": {
    emoji: "💝",
    message:
      "Your kindness comes from a real place. You care deeply about others' feelings and always show compassion in everything you do.",
  },
  "You inspire others": {
    emoji: "🚀",
    message:
      "The way you pursue your dreams and live your life inspires me to be better. You show others what's possible.",
  },
  "Your creativity knows no bounds": {
    emoji: "🎨",
    message:
      "Your creative mind sees possibilities where others see limits. The unique ideas and perspective you bring are truly remarkable.",
  },
  "You're an amazing listener": {
    emoji: "👂",
    message:
      "You have this gift of making people feel heard and understood. Your empathy and attention are truly precious.",
  },
  "You make everything fun": {
    emoji: "🎉",
    message:
      "Even ordinary moments become adventures when you're around. You have this magical ability to bring fun and laughter to anything.",
  },
  "Your optimism is infectious": {
    emoji: "☀️",
    message: "In tough times, your positive outlook lifts everyone up. Your belief in better days ahead is inspiring.",
  },
  "You're fiercely loyal": {
    emoji: "🦁",
    message:
      "Your loyalty is unwavering. You stand by the people you care about no matter what, and that's incredibly rare.",
  },
  "You have the biggest heart": {
    emoji: "❤️",
    message: "Your compassion and generosity know no bounds. The way you love and care for people is truly beautiful.",
  },
  "You're incredibly thoughtful": {
    emoji: "🤔",
    message:
      "You remember the little things and go out of your way to show people they matter. Your thoughtfulness is deeply appreciated.",
  },
  "You bring out the best in people": {
    emoji: "⭐",
    message: "Being around you makes people want to be the best version of themselves. That's a special gift.",
  },
  "Your passion is beautiful": {
    emoji: "🔥",
    message: "The way you pursue what you love with such intensity and authenticity is truly inspiring and beautiful.",
  },
  "You're one of a kind": {
    emoji: "🌈",
    message: "There's no one quite like you. Your uniqueness and individuality are what make you so special.",
  },
  "You make the world brighter": {
    emoji: "💫",
    message: "Simply knowing you exist makes the world a better place. Your impact is far greater than you realize.",
  },
  "You're braver than you believe": {
    emoji: "💪",
    message: "You face challenges with courage even when you doubt yourself. That takes real strength.",
  },
  "Your talent is remarkable": {
    emoji: "🎯",
    message: "The skills and abilities you have are genuinely impressive. You're so talented at what you do.",
  },
  "You're a true friend": {
    emoji: "🤝",
    message: "Friendship means something real to you. You show up, care deeply, and make others feel valued.",
  },
  "You have impeccable taste": {
    emoji: "👑",
    message: "Whether it's in style, music, or just how you live your life, your taste is refined and beautiful.",
  },
  "You're absolutely unforgettable": {
    emoji: "💌",
    message: "Once someone meets you, they never forget you. You leave a lasting, positive impression wherever you go.",
  },
}

const colors = [
  "bg-postcard-peach border-accent-coral",
  "bg-postcard-mint border-accent-teal",
  "bg-postcard-lavender border-accent-purple",
  "bg-postcard-yellow border-accent-orange",
  "bg-postcard-rose border-accent-pink",
  "bg-postcard-sky border-accent-blue",
]

export default function PostcardCard({ quality, delay }: PostcardCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const details = qualityDetails[quality] || { emoji: "💌", message: quality }
  const colorClass = colors[delay % colors.length]

  return (
    <div
      className="h-80 cursor-pointer perspective"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{
        animation: `slideUp 0.6s ease-out ${delay * 0.1}s both`,
      }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 preserve-3d"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className={`absolute w-full h-full ${colorClass} rounded-2xl border-4 p-6 flex flex-col items-center justify-center shadow-lg`}
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <div className="text-6xl mb-4">{details.emoji}</div>
          <h2 className="text-2xl font-bold text-primary text-center text-balance">{quality}</h2>
          <div className="absolute bottom-4 right-4 text-xl opacity-50">📨</div>
        </div>

        <div
          className={`absolute w-full h-full ${colorClass} rounded-2xl border-4 p-6 flex flex-col items-center justify-center shadow-lg`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-sm md:text-base text-primary leading-relaxed text-center text-balance">
            {details.message}
          </p>
          <div className="absolute top-4 left-4 text-xl opacity-30">✉️</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
