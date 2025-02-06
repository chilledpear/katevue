<template>
  <section class="mt-12 md:mt-20" data-aos-id-6>
    <div class="relative max-w-7xl mx-auto">
      <!-- Background -->
      <div
        class="absolute inset-0 rounded-tl-[100px] mb-24 md:mb-0 bg-linear-to-b from-slate-100 pointer-events-none -z-10"
        aria-hidden="true"
      ></div>

      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="py-12 md:py-20">
          <div class="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row items-center justify-end">
            
            <!-- Left Side: Content -->
            <div class="w-[512px] max-w-full shrink-0 md:order-1">
              <!-- New Header -->
              <h2
                class="h2 mb-4"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-6]"
                data-aos-delay="100"
              >
                Transforming Twitter Data into Actionable Insights
              </h2>
              <!-- New Paragraph -->
              <p
                class="text-lg text-slate-500 mb-6"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-6]"
                data-aos-delay="200"
              >
                Kate AI is your all‑in‑one Twitter aggregator that delivers real‑time analytics, sentiment insights, trending topics, and personalized data summaries directly into Telegram. No more switching between apps—Kate brings all the essential Twitter data to you.
              </p>
              <!-- New Bullet List with check.png -->
              <ul
                class="inline-flex flex-col text-slate-500 space-y-2.5"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-6]"
                data-aos-delay="300"
              >
                <li class="flex items-center">
                  <img
                    src="../images/check.png"
                    class="shrink-0 mr-3"
                    width="20"
                    height="20"
                    alt="checkmark"
                  />
                  <span>Real-time Twitter Analytics</span>
                </li>
                <li class="flex items-center">
                  <img
                    src="../images/check.png"
                    class="shrink-0 mr-3"
                    width="20"
                    height="20"
                    alt="checkmark"
                  />
                  <span>Advanced Sentiment Insights</span>
                </li>
                <li class="flex items-center">
                  <img
                    src="../images/check.png"
                    class="shrink-0 mr-3"
                    width="20"
                    height="20"
                    alt="checkmark"
                  />
                  <span>Trending Topic Aggregation</span>
                </li>
                <li class="flex items-center">
                  <img
                    src="../images/check.png"
                    class="shrink-0 mr-3"
                    width="20"
                    height="20"
                    alt="checkmark"
                  />
                  <span>Personalized Data Summaries</span>
                </li>
              </ul>
            </div>

            <!-- Right Side: Carousel (Pure Images) -->
            <div
              class="w-full max-w-sm md:max-w-none md:mr-8 mt-12 md:mt-0"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-6]"
            >
              <div class="relative max-w-sm mx-auto">
                <!-- Optional Background Overlay -->
                <div
                  class="absolute inset-0 mb-10 -mt-14 -mx-14 bg-slate-100 -z-10"
                  aria-hidden="true"
                ></div>

                <!-- Carousel built with Swiper.js -->
                <div class="swiper-container max-w-sm mx-auto sm:max-w-none testimonial-carousel">
                  <div class="swiper-wrapper">
                    <!-- Slide #1: Pure Image -->
                    <div class="swiper-slide flex items-center justify-center shadow-2xl">
                      <img
                        src="../images/feature-01.jpg"
                        class="md:max-w-none"
                        width="384"
                        height="180"
                        alt="Feature Image 1"
                      />
                    </div>
                    <!-- Slide #2: Pure Image -->
                    <div class="swiper-slide flex items-center justify-center shadow-2xl">
                      <img
                        src="../images/feature-02.jpg"
                        class="md:max-w-none"
                        width="384"
                        height="180"
                        alt="Feature Image 2"
                      />
                    </div>
                    <!-- Add additional slides as needed -->
                  </div>
                </div>

                <!-- Carousel Pagination -->
                <div class="mt-4">
                  <div class="testimonial-carousel-pagination text-center"></div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Import Swiper modules and required CSS
import Swiper, { Pagination, EffectFade } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
Swiper.use([Pagination, EffectFade])

export default {
  name: 'Section06',
  mounted() {
    new Swiper('.testimonial-carousel', {
      slidesPerView: 1,
      watchSlidesProgress: true,
      effect: 'fade',
      pagination: {
        el: '.testimonial-carousel-pagination',
        clickable: true
      }
    })
  }
}
</script>
