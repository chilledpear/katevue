<template>
  <section class="mt-6" data-aos-id-4>
    <div class="relative max-w-7xl mx-auto">

      <!-- Background -->
      <div
        class="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 border-2 border-slate-100 pointer-events-none -z-10"
        aria-hidden="true"
      ></div>
      <div
        class="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 bg-linear-to-t from-white pointer-events-none -z-10"
        aria-hidden="true"
      ></div>
      
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="py-12 md:py-20">
          <div
            class="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row items-center"
          >
            <!-- Content -->
            <div class="w-[512px] max-w-full shrink-0">
              <!-- Heading -->
              <h2
                class="h2 mb-4"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-4]"
                data-aos-delay="100"
              >
                Stay Informed with Kate’s Alerts
              </h2>
              <!-- Paragraph -->
              <p
                class="text-lg text-slate-500 mb-6"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-4]"
                data-aos-delay="200"
              >
                Get ready for my next upgrade! I'll deliver real–time notifications for
                critical tweets, market movements, and influencer mentions—ensuring you never
                miss a beat in the crypto world. I’m always here to keep you updated.
              </p>
              <!-- Checklist Content -->
              <div
                class="sm:columns-2 mb-8 space-y-8 sm:space-y-0"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-4]"
                data-aos-delay="300"
              >
                <!-- Column #1: Alert Features -->
                <div>
                  <h5 class="font-bold mb-5">Alert Features</h5>
                  <ul class="inline-flex flex-col text-slate-500 space-y-2.5">
                    <li class="flex items-center">
                      <img
                        src="../images/check.png"
                        class="shrink-0 mr-3"
                        width="20"
                        height="20"
                        alt="checkmark"
                      />
                      <span>Critical Tweets</span>
                    </li>
                    <li class="flex items-center">
                      <img
                        src="../images/check.png"
                        class="shrink-0 mr-3"
                        width="20"
                        height="20"
                        alt="checkmark"
                      />
                      <span>Market Movements</span>
                    </li>
                    <li class="flex items-center">
                      <img
                        src="../images/check.png"
                        class="shrink-0 mr-3"
                        width="20"
                        height="20"
                        alt="checkmark"
                      />
                      <span>Influencer Mentions</span>
                    </li>
                    <li class="flex items-center">
                      <img
                        src="../images/check.png"
                        class="shrink-0 mr-3"
                        width="20"
                        height="20"
                        alt="checkmark"
                      />
                      <span>Crypto Trends</span>
                    </li>
                  </ul>
                </div>
                <!-- Column #2: Notification Channels -->
                <div>
                  <h5 class="font-bold mb-5">Notification Channels</h5>
                  <ul class="inline-flex flex-col text-slate-500 space-y-2.5">
                    <li class="flex items-center">
                      <img
                        src="../images/check.png"
                        class="shrink-0 mr-3"
                        width="20"
                        height="20"
                        alt="checkmark"
                      />
                      <span>Telegram Alerts</span>
                    </li>
                    <li class="flex items-center">
                      <img
                        src="../images/check.png"
                        class="shrink-0 mr-3"
                        width="20"
                        height="20"
                        alt="checkmark"
                      />
                      <span>Email Updates</span>
                    </li>
                    <li class="flex items-center">
                      <img
                        src="../images/check.png"
                        class="shrink-0 mr-3"
                        width="20"
                        height="20"
                        alt="checkmark"
                      />
                      <span>Push Notifications</span>
                    </li>
                    <li class="flex items-center">
                      <img
                        src="../images/check.png"
                        class="shrink-0 mr-3"
                        width="20"
                        height="20"
                        alt="checkmark"
                      />
                      <span>SMS Alerts</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <!-- Button -->
              <div
                class="max-w-xs mx-auto sm:max-w-none"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-4]"
                data-aos-delay="300"
              >
                <div>
                  <router-link
                    class="btn-sm inline-flex items-center text-blue-50 bg-blue-500 hover:bg-blue-600 group shadow-xs"
                    href="https://t.me/twitterkate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Stay Tuned
                    <span
                      class="tracking-normal text-sky-400 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2"
                    >
                      <svg
                        class="fill-current"
                        width="12"
                        height="10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z"
                        />
                      </svg>
                    </span>
                  </router-link>
                </div>
              </div>
            </div>
            <!-- Image -->
            <div class="w-full max-w-sm md:max-w-none md:ml-8 mt-8 md:mt-0">
              <div class="relative -mx-8 md:mx-0">
                <img
                  src="../images/features-04.png"
                  class="md:max-w-none ml-auto"
                  width="496"
                  height="496"
                  alt="Kate's Alerts Illustration"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-4]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script>
export default {
  name: "Section04",
};
</script>
