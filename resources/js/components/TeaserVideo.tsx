import { Play } from 'lucide-react';
import { useState } from 'react';

export default function TeaserVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    // In a real implementation, you would replace the placeholder with actual video
  };

  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-16">
          {/* Section header */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              See How We're <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Changing Lives
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Watch real stories of transformation from our students who went from complete beginners to industry professionals.
            </p>
          </div>

          {/* Video container */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-secondary to-background border border-border shadow-2xl">
              {!isPlaying ? (
                <>
                  {/* Video thumbnail placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary to-primary/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-6">
                        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border border-primary/30">
                          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                            <Play className="w-8 h-8 text-primary-foreground ml-1" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold text-foreground">Student Success Stories</h3>
                          <p className="text-muted-foreground">3:45 min</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Play button overlay */}
                  <button
                    onClick={handlePlayClick}
                    className="absolute inset-0 w-full h-full group cursor-pointer"
                    aria-label="Play video"
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                        <Play className="w-8 h-8 text-primary-foreground ml-1" />
                      </div>
                    </div>
                  </button>
                </>
              ) : (
                /* Video placeholder - In production, replace with actual video embed */
                <div className="absolute inset-0 bg-black flex items-center justify-center">
                  <div className="text-center text-white space-y-4">
                    <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div>
                    <p>Loading video...</p>
                    <p className="text-sm text-white/70">
                      In production, this would be a real video embed (YouTube, Vimeo, etc.)
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Video stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 text-center">
              <div className="p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl font-bold text-foreground">1M+</div>
                <div className="text-sm text-muted-foreground">Views</div>
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Positive Reviews</div>
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl font-bold text-foreground">4.9/5</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
