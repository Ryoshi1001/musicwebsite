'use client';
import FeaturesSectionDemo from '@/components/blocks/features-section-demo-3';
import { FloatingDock, FloatingDockDemo } from '@/components/FloatingDock';

import { ModeToggle } from '@/components/screen-mode';
import { TextGenerateAbout } from '@/components/TextGenerateAbout';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { BackgroundLines } from '@/components/ui/background-lines';
import Image from 'next/image';
import Link from 'next/link';



const testimonials = [
  {
    quote:
      'Major Butta is a alternative independent music group that includes AP MAJOR, a masked rapper, SOLBUTTA, a soulful singer, and KRD a diligent and methodical producer. Bred out of the Oakland, California, Major Butta is known for thought provoking body moving bangers like “FUNKY SH!T” and “DOUBLE DOWN”. Their music is original-- entwined in latin electronic, soul, and pays homage to the originators of hip hop and funk, with lyrics that explore political and self hypocrisies, invoking self power that challenges power paradigms.',
    name: 'AP Major & SOLBUTTA ',
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
    src: '/drawing2.jpg',
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: 'James Kim',
    designation: 'Engineering Lead at DataPro',
    src: '/drawing1.jpg',
  },
  {
    quote:
      'The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.',
    name: 'Lisa Thompson',
    designation: 'VP of Technology at FutureNet',
    src: '/drawing6.png',
  },
];
// const testimonials1 = [
//   {
//     quote:
//       "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
//     name: 'Coins',
//     designation: 'Product Manager at TechFlow',
//     src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     quote:
//       "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
//     name: 'Michael Rodriguez',
//     designation: 'CTO at InnovateSphere',
//     src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     quote:
//       "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
//     name: 'Emily Watson',
//     designation: 'Operations Director at CloudScale',
//     src: 'https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     quote:
//       "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
//     name: 'James Kim',
//     designation: 'Engineering Lead at DataPro',
//     src: 'https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     quote:
//       'The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.',
//     name: 'Lisa Thompson',
//     designation: 'VP of Technology at FutureNet',
//     src: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
// ];

export default function Home() {
  return (
    <div className='relative'>
         <div className="absolute top-1 right-2 z-10">
          <ModeToggle />
        </div>
      <section className="relative">
     
        <BackgroundLines>
          <div className="w-full h-[100vh] flex flex-col items-center justify-center dark:text-white">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
              Major Butta, <br /> Next Stop Your City.
            </h2>
            <div className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
             

                
            
              Major Butta is a dynamic duo that includes Oakland California’s
              masked rapper AP MAJOR and sultry songstress soul singer SOLBUTTA.
              They are known for their thought provoking body moving bangers
              with lyrics that challenge power paradigms. They will be releasing
              an EP soon entitled “Corona Cyrus Miley Virus”
            </div>
          </div>
        </BackgroundLines>
      </section>

      <section className="max-w-[1440px] mx-auto">
        <div className="text-4xl font-bold px-3">
          <span className="text-gradient ">About</span>
        </div>
        <div className="text-3xl text-center my-3 font-bold px-3">
          <span className="text-gradient ">Who We Are: Meet the Artists Behind the Music
          </span>
        </div>
        <div className="flex flex-row xs:flex-col">
          <AnimatedTestimonials testimonials={testimonials} />
          {/* <AnimatedTestimonials testimonials={testimonials1} /> */}
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto">
        <div className="text-4xl font-bold px-3">
          <span className="text-gradient">Music</span>
        </div>
        <div className="text-3xl text-center my-3 font-bold px-3">
          <span className="text-gradient ">Soundtrack of Our Lives: Dive into Our Music Collection
          </span>
        </div>
        {/* <FeaturesSectionDemo /> */}
      </section>

      <section className="max-w-[1440px] mx-auto">
        <div className="text-4xl font-bold px-3">
          <span className="text-gradient ">Book, Support, Contribute</span>
          <div className="text-3xl text-center my-3 font-bold px-3">
          <span className="text-gradient ">Get Involved: Book Us for Your Event or Support Our Work
          </span>
        </div>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-8 py-8">
          <Link href={'https://www.paypal.com/ncp/payment/B55DWKAQ22782'}
          target='_blank'
          >
          <BackgroundGradient className="rounded-[22px] max-w-md p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <Image
              src={`/drawing1.jpg`}
              alt="jordans"
              height="800"
              width="800"
              className="object-contain"
            />
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              Book Us Online for a Local Show Here!
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Book Major Butta for 1-Local Show Includes: Two performers (Rapper
              and Singer) 6-8 Alternative, Hip Hop Songs.
            </p>
            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span>Buy now </span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                $500
              </span>
            </button>
          </BackgroundGradient>
          </Link>
          

          <Link href={'https://www.paypal.com/donate/?hosted_button_id=ZQJVUE7MV3LKU'}
          target='_blank'
          >
          <BackgroundGradient className="rounded-[22px]  max-w-md p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <Image
              src={`/drawing2.jpg`}
              alt="jordans"
              height="800"
              width="800"
              className="object-cover"
            />
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              Support Art and Activism
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
            We are Major Butta an music group from Oakland California traveling the world to spread our message of liberation and music. 

            </p>
            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span>Tax Deductible Contributions? </span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                $100
              </span>
            </button>
          </BackgroundGradient>
          </Link>

          <Link href={'https://majorbutta.bandcamp.com/'} target='_blank'>
          
        

          <BackgroundGradient className="rounded-[22px] max-w-md p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <Image
              src={`/drawing1.jpg`}
              alt="jordans"
              height="800"
              width="800"
              className="object-contain"
            />
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              Air Jordan 4 Retro Reimagined
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Major Butta is a dynamic duo that includes Oakland California’s masked rapper AP MAJOR and sultry songstress soul singer SOLBUTTA. 
            </p>
            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span>BandCamp </span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                $100
              </span>
            </button>
          </BackgroundGradient>
          </Link>
        </div>
      </section>



    </div>
  );
}
