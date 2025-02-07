<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-28 md:pb-20">
        <!-- Video Example at the Top -->
        <div class="mb-8">
          <video controls autoplay loop muted class="w-full rounded-lg">
            <source src="../images/example.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <!-- Items -->
        <div class="max-w-sm mx-auto grid gap-12 md:grid-cols-3 md:-mx-9 md:gap-0 items-start md:max-w-none text-left" data-aos="fade-up">
          <!-- 1st item -->
          <div class="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-slate-200 last:after:hidden" data-aos="fade-up">
            <div class="mb-3">
              <img src="../images/icon1.png" alt="Add Kate on Telegram" class="w-14 h-14 object-contain mr-3" />
            </div>
            <h4 class="text-xl font-bold mb-1">Add Kate on Telegram</h4>
            <p class="text-slate-500">
              Invite Kate AI into your Telegram group and unlock seamless Twitter aggregation—receive real‑time updates directly in your chat.
            </p>
          </div>

          <!-- 2nd item -->
          <div class="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-slate-200 last:after:hidden" data-aos="fade-up" data-aos-delay="100">
            <div class="mb-3">
              <img src="../images/icon2.png" alt="Chat with Kate" class="w-14 h-14 object-contain mr-3" />
            </div>
            <h4 class="text-xl font-bold mb-1">Chat with Kate</h4>
            <p class="text-slate-500">
              Start a conversation with Kate AI and get curated Twitter insights, trending topics, and data summaries right in your chat.
            </p>
          </div>

          <!-- 3rd item -->
          <div class="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-slate-200 last:after:hidden" data-aos="fade-up" data-aos-delay="200">
            <div class="mb-3">
              <img src="../images/icon3.png" alt="One App, All Insights" class="w-14 h-14 object-contain mr-3" />
            </div>
            <h4 class="text-xl font-bold mb-1">One App, All Insights</h4>
            <p class="text-slate-500">
              Consolidate all your Twitter data in one place. Kate AI brings you real‑time analytics and personalized updates so you never miss a beat.
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section01',
}
</script>
