import { motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import { Button } from '@mui/material';
// import FeatureSection from './components/Feature';
import Image from 'next/image';
import Link from 'next/link';
// import Person from './components/Person';
const row1 = [
  {
    n: 'Amit',
    p: 'https://i.pravatar.cc/150?u=1',
    c: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  },
  {
    n: 'Sonal',
    p: 'https://i.pravatar.cc/150?u=2',
    c: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  },
  {
    n: 'Shriyansh Sahu',
    p: 'https://i.pravatar.cc/150?u=1',
    c: 'https://download.logo.wine/logo/Flipkart/Flipkart-Logo.wine.png',
  },
  {
    n: 'Meghana',
    p: 'https://i.pravatar.cc/150?u=2',
    c: 'https://download.logo.wine/logo/Flipkart/Flipkart-Logo.wine.png',
  },
  {
    n: 'Abhishek',
    p: 'https://i.pravatar.cc/150?u=3',
    c: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  },
  {
    n: 'Taksheel',
    p: 'https://i.pravatar.cc/150?u=4',
    c: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  },
  {
    n: 'Nabajyoti',
    p: 'https://i.pravatar.cc/150?u=5',
    c: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  },
  {
    n: 'Rahul',
    p: 'https://i.pravatar.cc/150?u=7',
    c: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png',
  },
  {
    n: 'Yashwant',
    p: 'https://i.pravatar.cc/150?u=10',
    c: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  },
];
const row2 = [
  {
    n: 'Rahul',
    p: 'https://i.pravatar.cc/150?u=3',
    c: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png',
  },
  {
    n: 'Priya',
    p: 'https://i.pravatar.cc/150?u=4',
    c: 'https://download.logo.wine/logo/Flipkart/Flipkart-Logo.wine.png',
  },
  {
    n: 'Shriyansh Sahu',
    p: 'https://i.pravatar.cc/150?u=1',
    c: 'https://download.logo.wine/logo/Flipkart/Flipkart-Logo.wine.png',
  },
  {
    n: 'Meghana',
    p: 'https://i.pravatar.cc/150?u=2',
    c: 'https://download.logo.wine/logo/Flipkart/Flipkart-Logo.wine.png',
  },
  {
    n: 'Abhishek',
    p: 'https://i.pravatar.cc/150?u=3',
    c: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  },
  {
    n: 'Taksheel',
    p: 'https://i.pravatar.cc/150?u=4',
    c: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  },
  {
    n: 'Nabajyoti',
    p: 'https://i.pravatar.cc/150?u=5',
    c: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  },
  {
    n: 'Rahul',
    p: 'https://i.pravatar.cc/150?u=7',
    c: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png',
  },
  {
    n: 'Yashwant',
    p: 'https://i.pravatar.cc/150?u=10',
    c: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  },
];
const templates = [
  { id: 'compact', src: '/templates/compact.png' },
  { id: 'elegant', src: '/templates/elegant.png' },
  { id: 'modern', src: '/templates/executive.png' },
  { id: 'professional', src: '/templates/contemporary.png' },
];
const HomeLayout = () => {
  // const controls = useAnimation();

  // const hoverEnter = { scale: 1.04, y: -8 };
  // const hoverLeave = { scale: 1, y: 0 };

  const fadeUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' as const },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="scroll-smooth bg-white"
    >
      {/* Premium Navbar - AmbitionBox Style */}
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 backdrop-blur-xl bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/hero.jpg" alt="HireNext" width={42} height={42} />
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              HireNext
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="https://hirenext-alpha.vercel.app/all-jobs"
              className="text-gray-700 hover:text-indigo-600 font-medium transition"
            >
              Find Jobs
            </Link>
            <Link
              href="https://hirenext-alpha.vercel.app/companies"
              className="text-gray-700 hover:text-indigo-600 font-medium transition"
            >
              Companies
            </Link>
            <Link
              href="/builder"
              className="text-gray-700 hover:text-indigo-600 font-medium transition"
            >
              Resume Builder
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button
                variant="outlined"
                className="border-gray-300 text-gray-700 hover:border-indigo-600"
              >
                Login
              </Button>
            </Link>
            <Link href="/builder">
              <Button
                variant="contained"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg hover:shadow-xl"
              >
                Build Free
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - AmbitionBox Level Trust & Conversion */}

      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <motion.div {...fadeUp} className="space-y-8">
              <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
                <span className="mr-2">✨</span> Used by 5M+ professionals in India
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Build a{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Job-Winning Resume
                </span>
                <br />
                in Minutes
              </h1>

              <p className="text-xl text-gray-600 max-w-2xl">
                Trusted by candidates at top companies. ATS-friendly templates. 10,000+ people got
                their dream job using HireNext.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/builder">
                  <Button
                    size="large"
                    variant="contained"
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-2 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
                  >
                    ⚡ Start Building — It's Free
                  </Button>
                </Link>

                <Link href="https://hirenext-alpha.vercel.app/home" target="_blank">
                  <Button size="large" variant="outlined" className="border-2 border-gray-300">
                    Apply for jobs
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-8 pt-10 flex-wrap">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">5M+</div>
                  <div className="text-gray-600">Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">50K+</div>
                  <div className="text-gray-600">Resumes Built Daily</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">4.9★</div>
                  <div className="text-gray-600">User Rating</div>
                </div>
              </div>
            </motion.div>

            {/* Right - Hero Image with floating effect */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="relative z-10">
                <Image
                  src="/hero.jpg"
                  alt="Professional Resume Preview"
                  width={650}
                  height={750}
                  className="rounded-2xl shadow-2xl border border-gray-100 my-8"
                  priority
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-15 right- left-5 bg-yellow-400 text-yellow-900 px-5 py-2 my-10 rounded-xl shadow-lg font-bold animate-bounce">
                +300% More Interviews
              </div>
              <div className="absolute -bottom-13 left-48 right-1 bg-green-500 text-white px-6 py-2 rounded-xl shadow-lg font-bold">
                ATS Passed ✓
              </div>
            </motion.div>
          </div>
        </div>

        <br></br>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>
      {/* ===== Our Users Work At (Square + Smooth Movement) ===== */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="w-full px-0">
          <h3 className="text-center text-3xl font-bold text-gray-900 mb-12">
            Our Users Work At Top Companies
          </h3>

          {/* Row 1 */}
          <div className="marquee-wrapper">
            <div className="animate-marquee">
              {[...row1, ...row1].map((item, i) => (
                <div
                  key={i}
                  className="w-48 h-48 bg-white border border-gray-200
                   rounded-xl flex flex-col items-center justify-center
                   shadow-sm hover:shadow-md transition"
                >
                  <img src={item.p} alt={item.n} className="w-16 h-16 rounded-full mb-3" />
                  <p className="font-semibold text-gray-900 text-center">{item.n}</p>
                  <img src={item.c} alt="company" className="h-6 mt-3 opacity-80" />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="marquee-wrapper mt-10">
            <div className="animate-marquee-reverse">
              {[...row2, ...row2].map((item, i) => (
                <div
                  key={i}
                  className="w-48 h-48 bg-white border border-gray-200
                   rounded-xl flex flex-col items-center justify-center
                   shadow-sm hover:shadow-md transition"
                >
                  <img src={item.p} alt={item.n} className="w-16 h-16 rounded-full mb-3" />
                  <p className="font-semibold text-gray-900 text-center">{item.n}</p>
                  <img src={item.c} alt="company" className="h-6 mt-3 opacity-80" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-10 text-lg">Trusted by professionals at</p>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-10 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            {/* Google */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="Google"
              className="h-10 mx-auto"
              loading="lazy"
              onLoad={() => console.log('Google loaded!')}
              onError={(e) => console.log('Google failed:', e)}
            />

            {/* Amazon */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              alt="Amazon"
              className="h-10 mx-auto"
              loading="lazy"
              onLoad={() => console.log('Amazon loaded!')}
              onError={(e) => console.log('Amazon failed:', e)}
            />

            {/* Microsoft */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
              alt="Microsoft"
              className="h-12 mx-auto"
              loading="lazy"
              onLoad={() => console.log('Microsoft loaded!')}
              onError={(e) => console.log('Microsoft failed:', e)}
            />

            {/* Flipkart - Fresh Working SVG */}
            <img
              src="https://cdn.worldvectorlogo.com/logos/flipkart.svg"
              alt="Flipkart"
              className="h-10 mx-auto"
              loading="lazy"
              onLoad={() => console.log('Flipkart loaded!')}
              onError={(e) => console.log('Flipkart failed:', e)}
            />

            {/* Paytm - Fresh Working Standalone SVG */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg"
              alt="Paytm"
              className="h-10 mx-auto"
              loading="lazy"
              onLoad={() => console.log('Paytm loaded!')}
              onError={(e) => console.log('Paytm failed:', e)}
            />

            {/* Zomato - Fresh Working SVG */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.svg"
              alt="Zomato"
              className="h-11 mx-auto"
              loading="lazy"
              onLoad={() => console.log('Zomato loaded!')}
              onError={(e) => console.log('Zomato failed:', e)}
            />
          </div>
        </div>
      </section>

      {/* ==================== 1. Feature Highlights (Like AmbitionBox) ==================== */}
      <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why 5 Million+ Indians Choose{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                HireNext
              </span>
            </h2>
            <p className="mt-4 text-xl text-gray-600">Everything you need to get hired faster</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚀',
                title: 'ATS-Optimized Resumes',
                desc: 'Beat 99% of applicant tracking systems used by Google, Amazon, Deloitte',
              },
              {
                icon: '✨',
                title: '1-Click Apply',
                desc: 'Apply to 100+ jobs in seconds with pre-filled details',
              },
              {
                icon: '⭐',
                title: 'Expert Reviewed Templates',
                desc: 'Designed by recruiters from FAANG & top Indian startups',
              },
              {
                icon: '📈',
                title: '300% More Interview Calls',
                desc: 'Users report 3x higher response rate within 7 days',
              },
              {
                icon: '🆓',
                title: '100% Free Forever',
                desc: 'No hidden charges. No credit card. Unlimited downloads',
              },
              {
                icon: '🔒',
                title: '100% Private & Secure',
                desc: 'Your data is encrypted. We never sell or share it',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 2. Resume Templates Showcase ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose From <span className="text-indigo-600">50+</span> Stunning Templates
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Freshers • Experienced • Designers • Managers • Tech • Non-Tech
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {templates.map((template, i) => (
              <motion.div
                key={template.id}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src={template.src}
                    alt={`Template ${i + 1}`}
                    width={400}
                    height={550}
                    className="transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  <div className="absolute bottom-4 left-4 text-white font-bold opacity-0 group-hover:opacity-100 transition">
                    Use This Template →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <Link href="/builder">
            <Button
              size="large"
              variant="contained"
              className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 px-12 py-4 text-lg font-bold"
            >
              Explore All Templates →
            </Button>
          </Link>
        </div>
      </section>

      {/* ==================== 3. Success Stories / Testimonials ==================== */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Dream Jobs Unlocked with HireNext
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                role: 'SDE-1 at Google',
                prev: 'Tier-3 College',
                img: '/person1.jpg',
                story: 'Got 7 offers including Google & Microsoft after using HireNext template',
              },
              {
                name: 'Rahul Verma',
                role: 'Product Manager at Flipkart',
                prev: '0 Experience',
                img: '/person2.jpg',
                story: 'Landed PM role with 28 LPA within 21 days of building resume',
              },
              {
                name: 'Anjali Mehta',
                role: 'UX Designer at Swiggy',
                prev: 'Career Gap 2 Years',
                img: '/person3.jpg',
                story: 'Returned to work with 42% salary hike using designer template',
              },
            ].map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-900">{person.name}</h4>
                    <p className="text-indigo-600 font-medium">{person.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{person.story}"</p>
                <div className="mt-4 flex text-yellow-500">★★★★★</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 4. How It Works (3-Step) ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Hired in Just <span className="text-indigo-600">3 Simple Steps</span>
          </h2>
          <p className="text-xl text-gray-600 mb-16">Takes less than 10 minutes</p>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: '1',
                title: 'Choose Template',
                desc: 'Pick from 50+ ATS-friendly designs',
                icon: '🎨',
              },
              {
                step: '2',
                title: 'Fill Your Details',
                desc: 'Auto-suggestions & smart content tips',
                icon: '✍️',
              },
              {
                step: '3',
                title: 'Download & Apply',
                desc: 'Get PDF in 1 click. Start applying instantly',
                icon: '🚀',
              },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-8xl mb-6">{item.icon}</div>
                <div className="text-6xl font-bold text-indigo-600 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 5. Final CTA Section (Last Push Before Footer) ==================== */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-xl text-indigo-100 mb-10">
            Join 5 Million+ professionals who built their career with HireNext
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/builder">
              <Button
                size="large"
                variant="contained"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-12 py-5 text-xl font-bold shadow-2xl"
              >
                ⚡ Build My Resume Free
              </Button>
            </Link>
            <Link href="https://hirenext-alpha.vercel.app/all-jobs">
              <Button
                size="large"
                variant="outlined"
                className="border-white text-white hover:bg-white/10 px-12 py-5 text-xl font-bold"
              >
                Browse 50,000+ Jobs
              </Button>
            </Link>
          </div>
          <p className="text-indigo-200 mt-8 text-sm">
            ✓ No signup required • ✓ Takes only 5 minutes • ✓ 100% Free
          </p>
        </div>
      </section>

      {/* Modern High-Conversion Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand + Description */}
            <div className="space-y-5">
              <div className="flex items-center space-x-3">
                <Image
                  src="/hero.jpg"
                  alt="HireNext"
                  width={42}
                  height={42}
                  className="rounded-lg"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  HireNext
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                India's most trusted resume builder & job platform. Used by{' '}
                <strong>5M+ professionals</strong> to land jobs at top companies.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-600 transition"
                >
                  <BsGithub size={24} />
                </a>
                <a href="#" className="text-gray-500 hover:text-indigo-600 transition">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-500 hover:text-indigo-600 transition">
                  Twitter
                </a>
              </div>
            </div>

            {/* For Job Seekers */}
            <div>
              <h3 className="font-bold text-gray-900 mb-5">For Job Seekers</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <Link href="/all-jobs" className="hover:text-indigo-600 transition">
                    Browse Jobs
                  </Link>
                </li>
                <li>
                  <Link href="/companies" className="hover:text-indigo-600 transition">
                    Top Companies
                  </Link>
                </li>
                <li>
                  <Link href="/builder" className="hover:text-indigo-600 transition">
                    Resume Builder
                  </Link>
                </li>
                <li>
                  <Link href="/salary-insights" className="hover:text-indigo-600 transition">
                    Salary Insights
                  </Link>
                </li>
                <li>
                  <Link href="/interview-prep" className="hover:text-indigo-600 transition">
                    Interview Prep
                  </Link>
                </li>
              </ul>
            </div>

            {/* For Employers */}
            <div>
              <h3 className="font-bold text-gray-900 mb-5">For Employers</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <Link href="/post-job" className="hover:text-indigo-600 transition">
                    Post a Job
                  </Link>
                </li>
                <li>
                  <Link href="/search-resumes" className="hover:text-indigo-600 transition">
                    Search Resumes
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-indigo-600 transition">
                    Pricing Plans
                  </Link>
                </li>
                <li>
                  <Link href="/employer-branding" className="hover:text-indigo-600 transition">
                    Employer Branding
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-gray-900 mb-5">Company</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <Link href="/about" className="hover:text-indigo-600 transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-indigo-600 transition">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-indigo-600 transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-indigo-600 transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-indigo-600 transition">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-indigo-600 transition">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; 2025 HireNext Technologies Pvt. Ltd. All rights reserved. Made in India 🇮🇳</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="flex items-center">
                <span className="text-green-600 mr-1">✓</span> ATS Friendly
              </span>
              <span className="flex items-center">
                <span className="text-indigo-600 mr-1">✓</span> 100% Free Resume Builder
              </span>
              <span className="flex items-center">
                <span className="text-purple-600 mr-1">✓</span> Trusted by 5M+ Users
              </span>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default HomeLayout;
