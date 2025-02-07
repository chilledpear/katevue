<template>
  <header class="absolute w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Site branding (logo is static, not a link) -->
        <div class="shrink-0 mr-4">
          <img
            src="../images/logo.png"
            alt="Kate AI Logo"
            width="30"
            height="30"
            class="object-contain"
          />
        </div>

        <!-- Desktop navigation -->
        <nav class="flex grow">
          <!-- Desktop navigation button -->
          <ul class="flex grow justify-end flex-wrap items-center">
            <li class="ml-3">
              <a
                class="btn-sm inline-flex items-center text-slate-100 bg-slate-800 hover:bg-slate-900 group shadow-xs"
                href="https://www.katechatbot.fun/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat with Kate
                <span class="tracking-normal text-sky-400 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                  <svg
                    class="fill-current"
                    width="12"
                    height="10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </nav>

      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>
