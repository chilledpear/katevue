<template>
  <footer class="relative">
    <!-- Background -->
    <div class="absolute inset-0 bg-slate-800 -z-10" aria-hidden="true"></div>

    <!-- Illustration -->
    <div
      class="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10"
      aria-hidden="true"
    >
      <img class="max-w-none" src="../images/footer-illustration.svg" width="1940" height="381" alt="Footer Illustration" />
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Blocks -->
      <div class="grid sm:grid-cols-12 lg:grid-cols-10 gap-8 py-8 border-t border-slate-700">
        <!-- 1st block: Brand -->
        <div class="sm:col-span-12 lg:col-span-2 lg:max-w-xs">
          <!-- Logo -->
          <router-link class="block" to="/" aria-label="Kate AI">
            <img src="../images/logo.png" alt="Kate AI Logo" width="120" class="object-contain" />
          </router-link>
        </div>

        <!-- 2nd block: Features -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-sm text-slate-100 font-bold mb-3">Features</h6>
          <ul class="text-sm font-medium space-y-2">
            <li>
              <a class="text-slate-400 hover:text-pink-500 transition duration-150 ease-in-out" href="#section03">
                Twitter Data Aggregation
              </a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-pink-500 transition duration-150 ease-in-out" href="#section02">
                Instant Video Downloads
              </a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-pink-500 transition duration-150 ease-in-out" href="#section04">
                Real-Time Notifications
              </a>
            </li>
          </ul>
        </div>

        <!-- 4th block: Community -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-sm text-slate-100 font-bold mb-3">Community</h6>
          <ul class="text-sm font-medium space-y-2">
            <li>
              <a class="text-slate-400 hover:text-pink-500 transition duration-150 ease-in-out" href="https://x.com/Kate_Ai_" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-pink-500 transition duration-150 ease-in-out" href="https://t.me/twitterkate" target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
            </li>
            <li>
              <!-- Updated the Kate AI link here -->
              <a class="text-slate-400 hover:text-pink-500 transition duration-150 ease-in-out" href="https://www.katechatbot.fun/" target="_blank" rel="noopener noreferrer">
                Kate AI
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom area -->
      <div class="pb-4 md:pb-8">
        <div class="text-xs text-slate-500">
          © {{ new Date().getFullYear() }} Kate AI. All rights reserved. &nbsp;|&nbsp;
          <a class="font-medium underline hover:text-pink-500 transition duration-150 ease-in-out" href="#0">
            Privacy Policy
          </a>
          &nbsp;|&nbsp;
          <a class="font-medium underline hover:text-pink-500 transition duration-150 ease-in-out" href="#0">
            Terms of Service
          </a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>
