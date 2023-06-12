import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FeatureCard } from '@/components/FeatureCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <section className='hero'>
        <div className="hero-content flex-col md:flex-row">
          <Image className="w-full md:w-1/2" src="/moutain_climb.png" width={768} height={512} alt="moutain_climb" />
          <div className="w-full md:w1/2">
            <h1 className="text-5xl font-bold py-3">
              Have fun tracking you goals using OKR
            </h1>
            <h2 className='text-xl pb-3'>
              OKR is a proven methotology used by intel, google, and many other companies to track their goals.
            </h2>
            <span className="btn btn-primary">
              Learn more
            </span>
          </div>
        </div>

      </section>
      <section className='text-center mt-4'>
        <h3 className='text-xl pb-3'>Our features</h3>
        <div className='flex w-full md:justify-around flex-col md:flex-row'>
          <FeatureCard className="w-full md:w-1/4" title="Argument1" description="This is really cool" image="/moutain_climb.png" />
          <FeatureCard className="w-full md:w-1/4" title="Argument2" description="This is really cool" image="/moutain_climb.png" />
          <FeatureCard className="w-full md:w-1/4" title="Argument3" description="This is really cool" image="/moutain_climb.png" />

        </div>
      </section>

    </main>
  )
}
