import { Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative">
        <ImageWithFallback
          src={participant.image}
          alt={participant.description}
          className="w-full h-64 object-cover"
        />
        <button
          onClick={onToggleLike}
          className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 ${
            isLiked
              ? 'bg-red-500 text-white shadow-lg scale-110'
              : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white'
          }`}
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
        </button>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-800">{participant.name}</h3>
          <span className="text-sm text-gray-500">{participant.age} років</span>
        </div>
        <p className="text-gray-600">{participant.description}</p>
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








