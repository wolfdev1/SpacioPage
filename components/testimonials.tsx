import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Technologies used on Spacio</h2>
            <p className="text-xl text-gray-400">We are not hiding and these are all the technologies behind Spacio, we want to encourage the free use of code by showing every aspect of the development of Spacio.</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" />

                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— JDA (Java Discord API) is the basis of Spacio, it is a beautiful library that we love at RedSierra and we have been with it for 3 years in constant development. We currently use the most recent version.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Java Discord API</cite> - <a className="text-xcol-100 hover:text-gray-200 transition duration-150 ease-in-out" href="https://github.com/discord-jda/JDA">GitHub</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage02} width={48} height={48} alt="Testimonial 02" />
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— LavaPlayer is the library that amuses us the most of all, it is in charge of providing us with the music reproduction service in Spacio, an essential function that we seek in RedSierra.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">LavaPlayer</cite> - <a className="text-xcol-100 hover:text-gray-200 transition duration-150 ease-in-out" href="https://github.com/sedmelluq/lavaplayer">GitHub</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" />
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— MongoDB, it doesn't need much explanation, it is our database where everything is stored, we have many functions that fully depend on MDB and it is stored in Mongo DB Atlas.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">MongoDB</cite> - <a className="text-xcol-100 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.mongodb.com">Website</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
