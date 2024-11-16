'use client'
import FeaturesSectionDemo from '@/components/blocks/features-section-demo-3';
import { ModeToggle } from '@/components/screen-mode';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { BackgroundLines } from '@/components/ui/background-lines';

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: 'AP Major & ',
    designation: 'Product Manager/Owners at Major Butta',
    src: '/drawing4.jpg',
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: 'Michael Rodriguez',
    designation: 'CTO at InnovateSphere',
    src: '/drawing3.png',
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: 'Emily Watson',
    designation: 'Operations Director at CloudScale',
    src: 'https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: 'James Kim',
    designation: 'Engineering Lead at DataPro',
    src: 'https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote:
      'The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.',
    name: 'Lisa Thompson',
    designation: 'VP of Technology at FutureNet',
    src: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];
const testimonials1 = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: 'Coins',
    designation: 'Product Manager at TechFlow',
    src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: 'Michael Rodriguez',
    designation: 'CTO at InnovateSphere',
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: 'Emily Watson',
    designation: 'Operations Director at CloudScale',
    src: 'https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: 'James Kim',
    designation: 'Engineering Lead at DataPro',
    src: 'https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote:
      'The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.',
    name: 'Lisa Thompson',
    designation: 'VP of Technology at FutureNet',
    src: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function Home() {
  return (
    <>
      <section className="">
        <div className="absolute top-1 right-2 z-10">
          <ModeToggle />
        </div>
        <BackgroundLines>
          <div className="w-full h-[100vh] flex flex-col items-center justify-center dark:text-white">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
              Major Butta, <br /> Sajana Textiles.
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
              Get the best advices from our experts, including expert artists,
              painters, marathon enthusiasts and RDX, totally free.
            </p>
          </div>
        </BackgroundLines>
      </section>

      <section className="max-w-[1440px] mx-auto">
        <div className='text-4xl font-bold px-3'><span className='text-gradient '>BioAbout</span></div>
        <div className="flex flex-row xs:flex-col">
          <AnimatedTestimonials testimonials={testimonials} />
          {/* <AnimatedTestimonials testimonials={testimonials1} /> */}
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto">
      <div className='text-4xl font-bold px-3'><span className='text-gradient'>Music</span></div>
      <FeaturesSectionDemo/>
      </section>
    </>
  );
}
