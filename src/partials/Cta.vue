<template>
  <section class="relative">
    <!-- Background -->
    <div class="absolute inset-0 bg-slate-800 -z-10" aria-hidden="true"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6" data-aos="fade-up">
      <div class="py-12 md:py-20">
        <div class="sm:flex sm:flex-col lg:flex-row justify-between items-center">
          <!-- CTA content -->
          <div class="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
            <p class="text-xl text-blue-500 font-[550] mb-3">
              Ready to revolutionize your Twitter experience?
            </p>
            <h2 class="h2 text-slate-100">
              Get All Your Twitter Insights in One Chat
            </h2>
            <p class="mt-4 text-base text-slate-300">
              With Kate AI, you no longer need to toggle between Twitter and Telegram. Kate aggregates real‑time Twitter analytics, curated data summaries, and instant video downloads—delivering everything directly into your Telegram chat.
            </p>
          </div>

          <!-- Buttons -->
          <div class="shrink-0">
            <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 md:mb-0">
              <div>
                <a
                  class="btn-sm w-full inline-flex items-center text-blue-50 bg-blue-500 hover:bg-blue-600 group shadow-xs"
                  href="https://t.me/KateDownload_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Add Kate AI
                  <span class="tracking-normal text-sky-400 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                    <svg class="fill-current" width="12" height="10" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                    </svg>
                  </span>
                </a>
              </div>
              <div>
                <a
                  class="btn-sm w-full inline-flex items-center text-white bg-slate-700 hover:bg-slate-800 shadow-xs relative before:absolute before:inset-0 before:bg-blue-400/60 before:-z-10 before:rounded-full"
                  href="https://t.me/twitterkate"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Community
                </a>
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
  name: 'Cta',
}
</script>
