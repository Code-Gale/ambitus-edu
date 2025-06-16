
import { useEffect } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal = ({ isOpen, onClose }: VideoModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl mx-auto glass-card rounded-3xl overflow-hidden animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 
                   text-white rounded-full flex items-center justify-center transition-colors duration-300"
          aria-label="Close video"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Video Container */}
        <div className="aspect-video">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
            title="Ambitus Welcome Video"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Video Info */}
        <div className="p-6 bg-gradient-to-r from-forest-800 to-forest-900">
          <h3 className="text-xl font-semibold text-white mb-2">Welcome to Ambitus</h3>
          <p className="text-gray-300">
            Discover how our end-to-end study abroad guidance can help you achieve your international education dreams. 
            Join thousands of Nigerian students who have successfully navigated their journey with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
