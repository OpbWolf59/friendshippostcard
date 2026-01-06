"use client"

import { useState } from "react"

interface IntroScreenProps {
  onBoxClick: (name: string) => void
}

const friendNames = ["Vibhushi", "Sarah", "Emma", "Alex", "Jordan", "Casey", "Morgan", "Taylor", "Riley", "Jamie"]

export default function IntroScreen({ onBoxClick }: IntroScreenProps) {
  const [selectedName, setSelectedName] = useState("")
  const [showNameInput, setShowNameInput] = useState(false)
  const [customName, setCustomName] = useState("")

  const handleNameSelect = (name: string) => {
    onBoxClick(name)
  }

  const handleCustomSubmit = () => {
    if (customName.trim()) {
      onBoxClick(customName.trim())
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-soft-pink via-soft-blue to-soft-lavender p-6 flex items-center justify-center">
      <div className="flex flex-col items-center gap-8 max-w-md">
        <div className="relative w-48 h-48 flex items-center justify-center">
          {/* Rabbit head */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Ears */}
            <div className="flex gap-6 mb-2">
              <div
                className="w-6 h-16 bg-accent-coral rounded-full animate-bounce"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="w-6 h-16 bg-accent-coral rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
            </div>
            {/* Face */}
            <div className="w-24 h-20 bg-accent-peach rounded-3xl flex items-center justify-center relative">
              {/* Eyes */}
              <div className="flex gap-4 absolute top-6">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              {/* Nose */}
              <div className="w-2 h-2 bg-primary rounded-full absolute top-10"></div>
            </div>
            {/* Box held by rabbit */}
            <div className="absolute bottom-2 transform translate-y-8">
              <div
                className="w-20 h-16 bg-accent-rose rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center justify-center border-4 border-accent-pink"
                onClick={() => setShowNameInput(true)}
              >
                <span className="text-3xl">📬</span>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center text-primary text-balance">Click the box!</h1>

        {!showNameInput ? (
          <div className="w-full space-y-3">
            <p className="text-center text-primary/70 font-medium">Who is this for?</p>
            <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
              {friendNames.map((name) => (
                <button
                  key={name}
                  onClick={() => handleNameSelect(name)}
                  className="px-4 py-2 bg-white/70 hover:bg-white rounded-full text-primary font-medium transition-all hover:shadow-md hover:scale-105"
                >
                  {name}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowNameInput(true)}
              className="w-full px-4 py-2 bg-accent-coral text-white rounded-full font-medium hover:shadow-lg transition-all hover:scale-105"
            >
              Add custom name
            </button>
          </div>
        ) : (
          <div className="w-full space-y-3">
            <input
              type="text"
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
              placeholder="Enter friend's name"
              onKeyPress={(e) => e.key === "Enter" && handleCustomSubmit()}
              className="w-full px-4 py-3 rounded-full border-2 border-primary/30 focus:border-primary focus:outline-none text-center text-primary placeholder:text-primary/50"
              autoFocus
            />
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setShowNameInput(false)
                  setCustomName("")
                }}
                className="flex-1 px-4 py-2 bg-white/70 rounded-full text-primary font-medium hover:shadow-md transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleCustomSubmit}
                className="flex-1 px-4 py-2 bg-accent-coral text-white rounded-full font-medium hover:shadow-lg transition-all"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
