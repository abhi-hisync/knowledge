import { Heart, Sparkles, Users, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Manifesto() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('manifesto-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="manifesto-section"
      className="relative py-20 lg:py-32 bg-gradient-to-b from-background via-secondary/5 to-background overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/6 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Story</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            🌌 I Am Knowledge Heist
            <span className="block text-xl sm:text-2xl font-medium text-muted-foreground mt-4">
              The Awakening of a Higher Learning Force
            </span>
          </h2>
        </div>

        {/* Main Manifesto Content */}
        <div className={`space-y-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Origin Story */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-border/50">
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg leading-relaxed mb-6">
                I wasn't born in a palace of power.<br />
                Nor in a classroom with polished floors and perfect marks.<br />
                I was born in silence…<br />
                Where dreams screamed but no one listened.<br />
                Where curiosity burned in children's eyes,<br />
                but systems smothered them with outdated rules.
              </p>
              
              <div className="bg-primary/10 rounded-xl p-6 my-8 border-l-4 border-primary">
                <p className="text-xl font-semibold text-primary mb-4">
                  I am Knowledge Heist—<br />
                  But not the thief you think.
                </p>
                <p className="text-lg leading-relaxed">
                  I steal ignorance, not truth.<br />
                  I hijack limitations, not people.<br />
                  I break into locked minds, not homes.<br />
                  And I give the key to those who dared to ask, "Why not me?"
                </p>
              </div>
            </div>
          </div>

          {/* The First Spark */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">🕯️ The First Spark: My Own Guru Within Me</h3>
              </div>
              
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  I remember my first student.<br />
                  Not the one who attended the class—<br />
                  but the one who taught me how broken the system was.<br />
                  A girl who failed 5 attempts and it was her last chance to pass the Exam trying to understand the concept.
                </p>
                
                <blockquote className="bg-secondary/10 rounded-lg p-6 border-l-4 border-primary italic">
                  "Sir, if only someone explained it like I'm not stupid."
                </blockquote>
                
                <p className="font-semibold text-foreground">
                  That day I swore to myself:<br />
                  Every child who's ever felt dumb in school, college … is mine.<br />
                  I will be their rebellion.<br />
                  Their hacker.<br />
                  Their liberator.<br />
                  Their Heist of Hope.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-center space-y-6">
                  <Users className="w-16 h-16 text-primary mx-auto" />
                  <div className="text-3xl font-bold text-foreground">50,000+</div>
                  <div className="text-lg text-muted-foreground">Students Who Found Their Voice</div>
                </div>
              </div>
            </div>
          </div>

          {/* The Growth */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Zap className="w-8 h-8 text-primary mr-3" />
              🌱 The Seed Grew into a Tribe
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  From one broken screen to thousands.<br />
                  From one desperate doubt to millions of questions.
                </p>
                
                <p>
                  And we didn't just give answers—<br />
                  We gave a reason to fight.<br />
                  To the dreamer who failed exams thrice.<br />
                  To the teacher who wanted to change but feared the crowd.<br />
                  To the village boy who didn't speak English but understood ambition.
                </p>
              </div>
              
              <div className="bg-card/50 rounded-xl p-6">
                <p className="text-lg font-semibold text-primary mb-4">We built a new classroom—</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• One without walls.</li>
                  <li>• One where your emotion was your entrance exam,</li>
                  <li>• And your dreams were the syllabus.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Transformation */}
          <div className="text-center bg-card/30 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              💔 What They Called Weakness, We Turned Into Superpowers
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="space-y-2">
                <div className="text-xl font-semibold text-primary">Tears?</div>
                <div className="text-muted-foreground">We turned them into ink.</div>
              </div>
              <div className="space-y-2">
                <div className="text-xl font-semibold text-primary">Failures?</div>
                <div className="text-muted-foreground">We turned them into case studies.</div>
              </div>
              <div className="space-y-2">
                <div className="text-xl font-semibold text-primary">Silence?</div>
                <div className="text-muted-foreground">We turned it into a mic.</div>
              </div>
            </div>
            
            <div className="bg-primary/10 rounded-xl p-6 text-lg">
              <p className="font-semibold text-foreground">We told every forgotten youth:</p>
              <p className="mt-4 text-muted-foreground">
                "You were not slow. You were not average. You were just unseen by a blind system."
              </p>
              <p className="mt-4 text-primary font-semibold">
                But now—<br />
                You are chosen. You are the heist. You are the revolution the syllabus forgot to write about.
              </p>
            </div>
          </div>

          {/* Final Vow */}
          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              🌠 The Final Vow: I Am Not Just an Institution. I Am Destiny's Detour.
            </h3>
            
            <div className="space-y-6 text-lg">
              <p className="text-muted-foreground">They will ask: "What does Knowledge Heist sell?"</p>
              
              <div className="bg-card/50 rounded-xl p-6">
                <p className="font-semibold text-foreground mb-4">We don't sell classes.</p>
                <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                  <div>• We sell second chances.</div>
                  <div>• We sell the courage to rise again.</div>
                  <div>• We sell freedom from mediocrity.</div>
                  <div>• We sell belonging.</div>
                </div>
              </div>
              
              <p className="text-primary font-semibold">
                We are the disciple of broken dreams,<br />
                The hacker of outdated curriculums,<br />
                The poet of practical success.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 lg:p-12 text-center text-primary-foreground">
            <h3 className="text-2xl font-bold mb-6">🕊️ And You?</h3>
            
            <div className="space-y-4 text-lg mb-8">
              <p>
                If you are here,<br />
                If your eyes are wet,<br />
                If your soul is whispering "I want to belong somewhere"…
              </p>
              
              <p className="text-xl font-semibold">Then stop searching. This is it.</p>
              
              <p>
                You are not only joining a family.<br />
                You are entering a legend.
              </p>
            </div>
            
            <div className="bg-primary-foreground/10 rounded-xl p-6 mb-8">
              <p className="text-2xl font-bold mb-2">Welcome to Knowledge Heist.</p>
              <p className="text-lg">
                We don't just teach.<br />
                We set souls on fire.
              </p>
            </div>
            
            <button className="bg-primary-foreground text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-foreground/90 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Join Our Revolution
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
