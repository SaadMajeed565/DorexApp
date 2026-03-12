<script setup lang="ts">
const config = useRuntimeConfig()
const appName = config.public.appName

useSeoMeta({
  title: `${appName} - ISP Management Software`,
  description: 'Complete management platform for ISPs and Cable TV operators. Manage customers, automate billing, handle support tickets, and grow your business.',
  ogTitle: `${appName} - Run Your ISP Like a Pro`,
  ogDescription: 'The all-in-one platform to manage customers, automate billing, and scale your internet service business effortlessly.',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
})

const features = [
  { 
    icon: 'ph:users-three-duotone', 
    title: 'Customer Management', 
    description: 'Complete CRM with profiles, history, and smart segmentation.',
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    icon: 'ph:credit-card-duotone', 
    title: 'Smart Billing', 
    description: 'Automated invoicing with multiple payment gateways.',
    color: 'from-violet-500 to-purple-500'
  },
  { 
    icon: 'ph:chart-line-up-duotone', 
    title: 'Analytics', 
    description: 'Real-time dashboards with actionable business insights.',
    color: 'from-amber-500 to-orange-500'
  },
  { 
    icon: 'ph:headset-duotone', 
    title: 'Support System', 
    description: 'Ticket management with SLA tracking and automation.',
    color: 'from-emerald-500 to-teal-500'
  },
]

const stats = [
  { value: '500+', label: 'ISPs Trust Us', suffix: '' },
  { value: '1M', label: 'Customers Managed', suffix: '+' },
  { value: '99.9', label: 'Uptime', suffix: '%' },
]

const testimonials = [
  {
    quote: "This platform transformed how we run our ISP. Billing that took days now happens automatically.",
    author: "Ahmed Hassan",
    role: "CEO, FastNet",
    avatar: "AH"
  },
  {
    quote: "The customer support module alone saved us 20 hours a week. Incredible software.",
    author: "Sara Khan",
    role: "Operations Head, LinkWave",
    avatar: "SK"
  },
  {
    quote: "Finally, software that understands what ISPs actually need. Highly recommended.",
    author: "Omar Ali",
    role: "Founder, SpeedConnect",
    avatar: "OA"
  },
]
</script>

<template>
  <div class="overflow-hidden">
    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center">
      <!-- Background -->
      <div class="absolute inset-0 grid-pattern"></div>
      <div class="absolute top-20 -left-40 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse-soft"></div>
      <div class="absolute bottom-20 -right-40 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse-soft" style="animation-delay: 1.5s;"></div>
      
      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div class="text-center max-w-4xl mx-auto">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 mb-8">
            <span class="flex h-2 w-2 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span class="text-sm font-medium text-gray-700">Trusted by 500+ ISPs worldwide</span>
          </div>

          <!-- Heading -->
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
            Run Your ISP
            <span class="block gradient-text">Like a Pro</span>
          </h1>

          <!-- Subheading -->
          <p class="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            The all-in-one platform to manage customers, automate billing, and scale your internet service business effortlessly.
          </p>

          <!-- CTA -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <NuxtLink to="/register" class="btn-primary btn-lg group">
              Start Free Trial
              <Icon name="ph:arrow-right-bold" class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </NuxtLink>
            <NuxtLink to="/contact" class="btn-secondary btn-lg">
              <Icon name="ph:play-circle-duotone" class="w-5 h-5 mr-2" />
              Watch Demo
            </NuxtLink>
          </div>

          <!-- Trust -->
          <p class="text-sm text-gray-400">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>

        <!-- Dashboard Preview -->
        <div class="mt-16 relative">
          <div class="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20 animate-gradient"></div>
          <div class="relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl p-2 shadow-2xl">
            <div class="bg-gray-900 rounded-xl overflow-hidden">
              <!-- Browser bar -->
              <div class="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-gray-700/50">
                <div class="flex gap-1.5">
                  <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div class="flex-1 flex justify-center">
                  <div class="px-4 py-1 bg-gray-700/50 rounded-md text-xs text-gray-400">app.dorex.io/dashboard</div>
                </div>
              </div>
              <!-- Dashboard content -->
              <div class="aspect-[16/9] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div class="text-center">
                  <Icon name="ph:chart-pie-slice-duotone" class="w-20 h-20 text-indigo-500/50 mx-auto mb-4" />
                  <p class="text-gray-500">Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-20 border-y border-gray-100 bg-gray-50/50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="grid md:grid-cols-3 gap-12">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-5xl font-bold text-gray-900 mb-2">
              {{ stat.value }}<span class="text-indigo-600">{{ stat.suffix }}</span>
            </div>
            <div class="text-gray-500 font-medium">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-24">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16">
          <div class="section-badge mx-auto mb-6 w-fit">
            <Icon name="ph:sparkle-duotone" class="w-4 h-4" />
            Features
          </div>
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Everything You Need</h2>
          <p class="text-xl text-gray-500 max-w-2xl mx-auto">Powerful tools designed specifically for ISPs to manage every aspect of their business.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div 
            v-for="(feature, index) in features" 
            :key="feature.title"
            class="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500"
          >
            <div 
              class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br text-white shadow-lg"
              :class="feature.color"
            >
              <Icon :name="feature.icon" class="w-7 h-7" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ feature.title }}</h3>
            <p class="text-gray-500 leading-relaxed">{{ feature.description }}</p>
            
            <div class="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <Icon name="ph:arrow-up-right-bold" class="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/features" class="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all">
            Explore all features
            <Icon name="ph:arrow-right-bold" class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16">
          <div class="section-badge mx-auto mb-6 w-fit">
            <Icon name="ph:rocket-duotone" class="w-4 h-4" />
            How It Works
          </div>
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Get Started in Minutes</h2>
          <p class="text-xl text-gray-500">Three simple steps to transform your ISP operations</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="relative text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg shadow-indigo-500/30">
              1
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Create Account</h3>
            <p class="text-gray-500">Sign up in under 2 minutes. No credit card needed.</p>
            
            <!-- Connector -->
            <div class="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-indigo-200 to-transparent"></div>
          </div>

          <div class="relative text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg shadow-purple-500/30">
              2
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Import Data</h3>
            <p class="text-gray-500">Upload your customers via Excel or add them manually.</p>
            
            <!-- Connector -->
            <div class="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-purple-200 to-transparent"></div>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg shadow-pink-500/30">
              3
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Start Managing</h3>
            <p class="text-gray-500">You're ready! Begin managing and growing your ISP.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-24">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16">
          <div class="section-badge mx-auto mb-6 w-fit">
            <Icon name="ph:quotes-duotone" class="w-4 h-4" />
            Testimonials
          </div>
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Loved by ISPs</h2>
          <p class="text-xl text-gray-500">See what our customers have to say</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div 
            v-for="testimonial in testimonials" 
            :key="testimonial.author"
            class="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow"
          >
            <div class="flex gap-1 mb-6">
              <Icon v-for="i in 5" :key="i" name="ph:star-fill" class="w-5 h-5 text-amber-400" />
            </div>
            <p class="text-gray-600 mb-8 leading-relaxed text-lg">"{{ testimonial.quote }}"</p>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                {{ testimonial.avatar }}
              </div>
              <div>
                <p class="font-semibold text-gray-900">{{ testimonial.author }}</p>
                <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-12 md:p-20">
          <!-- Background decoration -->
          <div class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div class="relative text-center">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your ISP?</h2>
            <p class="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Join 500+ ISPs already using {{ appName }} to streamline operations and grow their business.</p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
              <NuxtLink to="/register" class="btn bg-white text-indigo-600 hover:bg-gray-100 btn-lg shadow-xl shadow-indigo-900/20">
                Start Free Trial
                <Icon name="ph:arrow-right-bold" class="w-5 h-5 ml-2" />
              </NuxtLink>
              <NuxtLink to="/pricing" class="btn bg-white/10 text-white hover:bg-white/20 border border-white/20 btn-lg backdrop-blur">
                View Pricing
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
