import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between pt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        WhatGeorgeSaw.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 italic">
          My misadventures and various escapades through the wonderful ride that is <span className='underline underline-offset-2'>life</span>.
      </h4>
    </section>
  )
}

export default Intro
