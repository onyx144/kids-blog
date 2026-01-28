import { Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface Participant {
  id: number;
  name: string;
  age: number;
  category: string;
  description: string;
  image: string;
  likes: number;
}

interface ParticipantCardProps {
  participant: Participant;
  isLiked: boolean;
  onToggleLike: () => void;
}

export function ParticipantCard({ participant, isLiked, onToggleLike }: ParticipantCardProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; isLike: boolean }>>([]);

  const handleLikeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsAnimating(true);
    
    // Создаем частицы для эффекта взрыва при лайке
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    if (!isLiked) {
      // Эффект взрыва при добавлении лайка
      const newParticles = Array.from({ length: 12 }, (_, i) => ({
        id: Date.now() + i,
        x: centerX,
        y: centerY,
        isLike: true,
      }));
      setParticles(newParticles);
      setTimeout(() => setParticles([]), 800);
    } else {
      // Более мягкий эффект при снятии лайка
      const newParticles = Array.from({ length: 6 }, (_, i) => ({
        id: Date.now() + i,
        x: centerX,
        y: centerY,
        isLike: false,
      }));
      setParticles(newParticles);
      setTimeout(() => setParticles([]), 600);
    }
    
    onToggleLike();
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <style>{`
        @keyframes heartPulse {
          0% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.3);
          }
          50% {
            transform: scale(0.9);
          }
          75% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes heartBurst {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
        
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        
        @keyframes particle {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--dx), var(--dy)) scale(0);
            opacity: 0;
          }
        }
        
        @keyframes particleLike {
          0% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translate(calc(var(--dx) * 0.5), calc(var(--dy) * 0.5)) scale(1.2) rotate(180deg);
            opacity: 0.8;
          }
          100% {
            transform: translate(var(--dx), var(--dy)) scale(0) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes particleUnlike {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--dx), var(--dy)) scale(0.5);
            opacity: 0;
          }
        }
        
        .heart-animate {
          animation: heartPulse 0.6s ease-out;
        }
        
        .heart-burst {
          animation: heartBurst 0.4s ease-out;
        }
        
        .ripple-effect {
          position: absolute;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.3);
          pointer-events: none;
          animation: ripple 0.6s ease-out;
        }
        
        .particle {
          position: fixed;
          width: 8px;
          height: 8px;
          background: radial-gradient(circle, #ef4444, #f87171);
          border-radius: 50%;
          pointer-events: none;
          z-index: 1000;
          animation: particleLike 0.8s ease-out forwards;
        }
        
        .particle-unlike {
          position: fixed;
          width: 6px;
          height: 6px;
          background: radial-gradient(circle, #9ca3af, #d1d5db);
          border-radius: 50%;
          pointer-events: none;
          z-index: 1000;
          animation: particleUnlike 0.6s ease-out forwards;
        }
      `}</style>
      <div className="relative">
        <ImageWithFallback
          src={participant.image}
          alt={participant.description}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4">
          {isAnimating && isLiked && (
            <div className="ripple-effect w-12 h-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          )}
          <button
            onClick={handleLikeClick}
            className={`relative p-2 rounded-full transition-all duration-300 ${
              isLiked
                ? 'bg-red-500 text-white shadow-lg scale-110'
                : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white'
            } ${isAnimating ? 'heart-animate' : ''}`}
          >
            <Heart className={`w-5 h-5 transition-all duration-300 ${isLiked ? 'fill-current' : ''} ${isAnimating && isLiked ? 'heart-burst' : ''}`} />
          </button>
        </div>
        {/* Частицы для эффекта взрыва */}
        {particles.map((particle, index) => {
          const angle = (index * 360) / particles.length;
          const distance = particle.isLike ? 60 : 40;
          const dx = Math.cos((angle * Math.PI) / 180) * distance;
          const dy = Math.sin((angle * Math.PI) / 180) * distance;
          
          return (
            <div
              key={particle.id}
              className={particle.isLike ? 'particle' : 'particle-unlike'}
              style={{
                left: `${particle.x}px`,
                top: `${particle.y}px`,
                '--dx': `${dx}px`,
                '--dy': `${dy}px`,
              } as React.CSSProperties}
            />
          );
        })}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-800">{participant.name}</h3>
          <span className="text-sm text-gray-500">{participant.age} років</span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{participant.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-600">
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
            <span className="text-sm font-semibold">{participant.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}








