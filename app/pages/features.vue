<script setup lang="ts">
useSeoMeta({
  title: 'Features - ISP Management Software',
  description: 'Explore all features of our ISP management platform: Customer management, billing automation, support tickets, analytics, and more.',
  ogTitle: 'Powerful Features for Modern ISPs',
  ogDescription: 'Everything you need to run a successful ISP business, all in one platform.',
})

const featureGroups = [
  {
    title: 'Customer Management',
    description: 'Everything to manage your customer base',
    icon: 'ph:users-three-duotone',
    color: 'from-blue-500 to-cyan-500',
    features: [
      { name: 'Customer Profiles', desc: 'Complete profiles with history' },
      { name: 'Area Management', desc: 'Organize by location/zone' },
      { name: 'Smart Search', desc: 'Find anyone instantly' },
      { name: 'Bulk Actions', desc: 'Manage thousands at once' },
    ]
  },
  {
    title: 'Billing & Payments',
    description: 'Automate your revenue collection',
    icon: 'ph:credit-card-duotone',
    color: 'from-violet-500 to-purple-500',
    features: [
      { name: 'Auto Invoicing', desc: 'Generate bills automatically' },
      { name: 'Payment Gateway', desc: 'Accept online payments' },
      { name: 'Due Reminders', desc: 'Automated payment alerts' },
      { name: 'Collection Reports', desc: 'Track every rupee' },
    ]
  },
  {
    title: 'Subscriptions',
    description: 'Flexible plan management',
    icon: 'ph:package-duotone',
    color: 'from-amber-500 to-orange-500',
    features: [
      { name: 'Plan Builder', desc: 'Create unlimited plans' },
      { name: 'Add-ons', desc: 'Upsell extra services' },
      { name: 'Auto Renewal', desc: 'Never miss a renewal' },
      { name: 'Expiry Alerts', desc: 'Proactive notifications' },
    ]
  },
  {
    title: 'Support System',
    description: 'Keep customers happy',
    icon: 'ph:headset-duotone',
    color: 'from-emerald-500 to-teal-500',
    features: [
      { name: 'Ticket System', desc: 'Track every issue' },
      { name: 'SLA Tracking', desc: 'Meet your promises' },
      { name: 'Task Assignment', desc: 'Delegate to your team' },
      { name: 'Resolution Reports', desc: 'Measure performance' },
    ]
  },
  {
    title: 'Communication',
    description: 'Stay connected with customers',
    icon: 'ph:chats-circle-duotone',
    color: 'from-pink-500 to-rose-500',
    features: [
      { name: 'WhatsApp', desc: 'Send via WhatsApp' },
      { name: 'SMS Alerts', desc: 'Text notifications' },
      { name: 'Email', desc: 'Professional emails' },
      { name: 'Bulk Messages', desc: 'Reach everyone' },
    ]
  },
  {
    title: 'Analytics',
    description: 'Data-driven decisions',
    icon: 'ph:chart-line-up-duotone',
    color: 'from-indigo-500 to-blue-500',
    features: [
      { name: 'Dashboard', desc: 'Real-time overview' },
      { name: 'Growth Reports', desc: 'Track expansion' },
      { name: 'Revenue Analytics', desc: 'Financial insights' },
      { name: 'Export Data', desc: 'Excel & PDF export' },
    ]
  },
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
          <Icon name="ph:cube-duotone" class="w-4 h-4" />
          Features
        </div>
        <h1 class="text-5xl font-bold text-gray-900 mb-6">Powerful Features for<br><span class="gradient-text">Modern ISPs</span></h1>
        <p class="text-xl text-gray-500 max-w-2xl mx-auto">Everything you need to run a successful ISP business, all in one platform.</p>
      </div>
    </section>

    <!-- Features -->
    <section class="py-24">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="space-y-24">
          <div 
            v-for="(group, index) in featureGroups" 
            :key="group.title"
            class="grid lg:grid-cols-2 gap-12 items-center"
            :class="{ 'lg:flex-row-reverse': index % 2 === 1 }"
          >
            <!-- Content -->
            <div :class="{ 'lg:order-2': index % 2 === 1 }">
              <div 
                class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br text-white shadow-lg"
                :class="group.color"
              >
                <Icon :name="group.icon" class="w-7 h-7" />
              </div>
              <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ group.title }}</h2>
              <p class="text-xl text-gray-500 mb-8">{{ group.description }}</p>
              
              <div class="grid sm:grid-cols-2 gap-4">
                <div 
                  v-for="feature in group.features" 
                  :key="feature.name"
                  class="flex items-start gap-3"
                >
                  <div class="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="ph:check-bold" class="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">{{ feature.name }}</p>
                    <p class="text-sm text-gray-500">{{ feature.desc }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Visual -->
            <div :class="{ 'lg:order-1': index % 2 === 1 }">
              <div class="relative">
                <div 
                  class="absolute -inset-4 rounded-3xl blur-2xl opacity-20"
                  :class="`bg-gradient-to-br ${group.color}`"
                ></div>
                <div class="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl aspect-square flex items-center justify-center border border-gray-200">
                  <Icon :name="group.icon" class="w-24 h-24 text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Ready to experience these features?</h2>
        <p class="text-xl text-gray-500 mb-8">Start your 14-day free trial. No credit card required.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/register" class="btn-primary btn-lg">
            Start Free Trial
            <Icon name="ph:arrow-right-bold" class="w-5 h-5 ml-2" />
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-secondary btn-lg">Request Demo</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
