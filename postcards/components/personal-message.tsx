"use client"

interface PersonalMessageProps {
  name: string
  onNextClick: () => void
  onBackClick: () => void
}

const getPersonalMessage = (name: string): string => {
  const messages: Record<string, string> = {
    Vibhushi: `Thank you for being in my life ${name}. I really love you and care about you. Your friendship is the best thing I get in my entire life. You bring so much joy and meaning to my world, and I'm grateful every single day for you.`,
    Sarah: `Thank you for being in my life ${name}. You're such a wonderful friend, and I genuinely appreciate everything you do. Your friendship means the world to me, and I can't imagine life without you.`,
    Emma: `Thank you for being in my life ${name}. I'm so grateful to have you by my side. Your friendship is truly a blessing, and you make every moment brighter just by being there.`,
    Alex: `Thank you for being in my life ${name}. You've shown me what true friendship looks like, and I'm forever grateful. You're not just a friend, you're family, and that means everything to me.`,
    Jordan: `Thank you for being in my life ${name}. Your kindness and support mean more to me than words can express. I'm so lucky to have someone like you in my corner.`,
    Casey: `Thank you for being in my life ${name}. You make every day better just by being in it. Your friendship is the most precious gift I could ever ask for.`,
    Morgan: `Thank you for being in my life ${name}. Through thick and thin, you've always been there for me. Your loyalty and love are truly remarkable, and I cherish you deeply.`,
    Taylor: `Thank you for being in my life ${name}. You bring out the best in me, and I'm so grateful for that. Your friendship is a treasure I'll always hold close to my heart.`,
    Riley: `Thank you for being in my life ${name}. You've filled my life with so many wonderful memories and moments of laughter. I'm truly blessed to call you my friend.`,
    Jamie: `Thank you for being in my life ${name}. Your friendship has changed my life for the better. You're an incredible person, and I'm so thankful for you.`,
  }

  return (
    messages[name] ||
    `Thank you for being in my life ${name}. I really love you and care about you. Your friendship is the best thing I get in my entire life.`
  )
}

export default function PersonalMessage({ name, onNextClick, onBackClick }: PersonalMessageProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-soft-pink via-soft-blue to-soft-lavender p-6 flex items-center justify-center">
      <div className="max-w-2xl w-full space-y-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border-4 border-accent-rose/20 animate-fade-in">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">{name}</h1>
            <p className="text-lg text-primary/80 leading-relaxed">{getPersonalMessage(name)}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center">
          <button
            onClick={onNextClick}
            className="px-8 py-4 bg-accent-coral text-white rounded-full font-bold text-lg hover:shadow-lg hover:scale-110 transition-all duration-300"
          >
            Things i like about you
          </button>
          <button onClick={onBackClick} className="px-6 py-2 text-primary font-medium hover:underline transition-all">
            ← Back
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </main>
  )
}
