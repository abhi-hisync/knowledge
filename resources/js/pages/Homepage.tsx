import { Head } from '@inertiajs/react';
import type { SharedData } from '@/types';
import type { HomepageData } from '@/types/homepage';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import TeaserVideo from '@/components/TeaserVideo';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

interface HomepageProps {
  auth: SharedData['auth'];
  homepageData: HomepageData;
}

export default function Homepage({ auth, homepageData }: HomepageProps) {
  return (
    <>
      <Head title="Knowledge Heist - From Zero to Hero">
        <meta
          name="description"
          content="Transform your career with Nepal's most loved online classes. Join 50,000+ successful students who achieved their dreams with live interactive classes, expert mentorship, and proven placement assistance."
        />
        <meta name="keywords" content="online education, career transformation, live classes, Nepal, programming, coding bootcamp, job placement" />
        <meta property="og:title" content="Knowledge Heist - From Zero to Hero" />
        <meta
          property="og:description"
          content="Transform your career with Nepal's most loved online classes. Live interactive sessions, expert mentorship, and proven results."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Knowledge Heist - From Zero to Hero" />
        <meta
          name="twitter:description"
          content="Transform your career with Nepal's most loved online classes. Live interactive sessions, expert mentorship, and proven results."
        />
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
      </Head>

      {/* Page structure */}
      <div className="min-h-screen bg-background text-foreground">
        {/* Navbar */}
        <Navbar isAuthenticated={!!auth.user} />

        {/* Main content */}
        <main className="pt-16">
          {/* Hero Section */}
          <Hero />

          {/* Manifesto Section */}
          <Manifesto />

          {/* Teaser Video Section */}
          <TeaserVideo />

          {/* Features Section */}
          <Features />

          {/* Testimonials Section */}
          <Testimonials />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
