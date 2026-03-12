<script setup lang="ts">
const config = useRuntimeConfig()
const appName = config.public.appName

useSeoMeta({
  title: `About Us - ${appName}`,
  description: `Learn about ${appName}, the company behind the leading ISP management software. Our mission, values, and the team building the future of ISP operations.`,
  ogTitle: 'Building the Future of ISP Management',
  ogDescription: "We're on a mission to help ISPs modernize their operations, delight their customers, and grow their businesses.",
})

const stats = [
  { value: '2019', label: 'Founded' },
  { value: '500+', label: 'ISPs Trust Us' },
  { value: '50+', label: 'Team Members' },
  { value: '15+', label: 'Countries' },
]

const values = [
  {
    icon: 'ph:heart-duotone',
    title: 'Customer First',
    description: 'Every decision we make starts with our customers. Your success is our success.',
    color: 'from-rose-500 to-pink-500'
  },
  {
    icon: 'ph:lightning-duotone',
    title: 'Innovation',
    description: 'We constantly push boundaries to bring you the latest technology and features.',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: 'ph:shield-check-duotone',
    title: 'Trust & Security',
    description: 'Your data security is our top priority. We use industry-leading practices.',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: 'ph:users-duotone',
    title: 'Collaboration',
    description: 'We work closely with ISPs to understand their needs and build solutions together.',
    color: 'from-indigo-500 to-purple-500'
  },
]

const team = [
  { name: 'Ahmed Khan', role: 'CEO & Founder', avatar: 'AK' },
  { name: 'Sara Ali', role: 'CTO', avatar: 'SA' },
  { name: 'Omar Hassan', role: 'Head of Product', avatar: 'OH' },
  { name: 'Fatima Malik', role: 'Head of Customer Success', avatar: 'FM' },
]

const milestones = [
  { year: '2019', title: 'Founded', description: 'Started with a vision to simplify ISP management' },
  { year: '2020', title: 'First 100 Customers', description: 'Reached our first major milestone' },
  { year: '2021', title: 'Launched v2.0', description: 'Complete platform rebuild with new features' },
  { year: '2022', title: '500+ ISPs', description: 'Expanded across multiple countries' },
  { year: '2023', title: 'WhatsApp Integration', description: 'Added automated messaging features' },
  { year: '2024', title: 'AI Features', description: 'Introducing smart automation and insights' },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0 grid-pattern"></div>
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-100 to-transparent rounded-full blur-3xl opacity-50"></div>
      
      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div class="section-badge mx-auto mb-6 w-fit">
          <Icon name="ph:buildings-duotone" class="w-4 h-4" />
          About Us
        </div>
        <h1 class="text-5xl font-bold text-gray-900 mb-6">Building the Future of<br><span class="gradient-text">ISP Management</span></h1>
        <p class="text-xl text-gray-500 max-w-2xl mx-auto">We're on a mission to help ISPs modernize their operations, delight their customers, and grow their businesses.</p>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-16 border-y border-gray-100 bg-gray-50/50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-4xl font-bold text-gray-900 mb-1">{{ stat.value }}</div>
            <div class="text-gray-500">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Story -->
    <section class="py-24">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="section-badge mb-6 w-fit">
              <Icon name="ph:book-open-duotone" class="w-4 h-4" />
              Our Story
            </div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Started by ISP Operators, Built for ISP Operators</h2>
            <div class="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {{ appName }} was born out of frustration. Our founders ran ISPs for over a decade and experienced firsthand the chaos of managing customers, billing, and operations with outdated tools and spreadsheets.
              </p>
              <p>
                After trying every solution on the market and finding them lacking, they decided to build the platform they wished existed. One that truly understood the unique challenges of running an ISP.
              </p>
              <p>
                Today, we power hundreds of ISPs across multiple countries, helping them serve millions of customers with ease. But we're just getting started.
              </p>
            </div>
          </div>
          
          <div class="relative">
            <div class="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
            <div class="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl aspect-square flex items-center justify-center border border-gray-200">
              <Icon name="ph:buildings-duotone" class="w-32 h-32 text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16">
          <div class="section-badge mx-auto mb-6 w-fit">
            <Icon name="ph:star-duotone" class="w-4 h-4" />
            Our Values
          </div>
          <h2 class="text-3xl font-bold text-gray-900 mb-4">What We Believe In</h2>
          <p class="text-xl text-gray-500 max-w-2xl mx-auto">The principles that guide everything we do</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div 
            v-for="value in values" 
            :key="value.title"
            class="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow"
          >
            <div 
              class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br text-white shadow-lg"
              :class="value.color"
            >
              <Icon :name="value.icon" class="w-7 h-7" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ value.title }}</h3>
            <p class="text-gray-500 leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16">
          <div class="section-badge mx-auto mb-6 w-fit">
            <Icon name="ph:path-duotone" class="w-4 h-4" />
            Our Journey
          </div>
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Milestones</h2>
          <p class="text-xl text-gray-500">Key moments in our growth story</p>
        </div>

        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 hidden md:block"></div>

          <div class="space-y-8">
            <div 
              v-for="(milestone, index) in milestones" 
              :key="milestone.year"
              class="relative flex gap-8"
            >
              <!-- Dot -->
              <div class="relative z-10 w-16 h-16 bg-white rounded-2xl border-2 border-indigo-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                <span class="text-sm font-bold text-indigo-600">{{ milestone.year }}</span>
              </div>
              <!-- Content -->
              <div class="bg-white rounded-2xl border border-gray-100 p-6 flex-1 shadow-sm hover:shadow-lg transition-shadow">
                <h3 class="text-lg font-bold text-gray-900 mb-1">{{ milestone.title }}</h3>
                <p class="text-gray-500">{{ milestone.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16">
          <div class="section-badge mx-auto mb-6 w-fit">
            <Icon name="ph:users-three-duotone" class="w-4 h-4" />
            Our Team
          </div>
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Meet the Team</h2>
          <p class="text-xl text-gray-500">A passionate team dedicated to your success</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="member in team" 
            :key="member.name"
            class="text-center group"
          >
            <div class="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 group-hover:scale-105 transition-all">
              {{ member.avatar }}
            </div>
            <h3 class="font-bold text-gray-900">{{ member.name }}</h3>
            <p class="text-sm text-gray-500">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-12 md:p-16">
          <div class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div class="relative text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Want to Join Our Team?</h2>
            <p class="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              We're always looking for talented people to help us build the future of ISP management at {{ appName }}.
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:careers@dorex.io" class="btn bg-white text-indigo-600 hover:bg-gray-100 btn-lg shadow-xl shadow-indigo-900/20">
                View Open Positions
                <Icon name="ph:arrow-right-bold" class="w-5 h-5 ml-2" />
              </a>
              <NuxtLink to="/contact" class="btn bg-white/10 text-white hover:bg-white/20 border border-white/20 btn-lg backdrop-blur">
                Contact Us
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

