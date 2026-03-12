<script setup lang="ts">
useSeoMeta({
  title: 'Pricing - ISP Management Software',
  description: 'Simple, transparent pricing for ISPs of all sizes. Start with a 14-day free trial. No credit card required.',
  ogTitle: 'Simple, Transparent Pricing',
  ogDescription: 'Choose the plan that fits your business. All plans include a 14-day free trial.',
})

const isAnnual = ref(false)

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small ISPs',
    monthlyPrice: 4999,
    annualPrice: 3999,
    customers: 'Up to 500',
    popular: false,
    features: [
      'Up to 500 customers',
      'Basic billing & invoicing',
      '3 staff accounts',
      'Email support',
      'Standard reports',
    ]
  },
  {
    name: 'Professional',
    description: 'For growing businesses',
    monthlyPrice: 12999,
    annualPrice: 10999,
    customers: 'Up to 2,500',
    popular: true,
    features: [
      'Up to 2,500 customers',
      'Advanced billing & automation',
      '10 staff accounts',
      'WhatsApp integration',
      'Priority support',
      'Advanced reports',
      'API access',
    ]
  },
  {
    name: 'Enterprise',
    description: 'For large operations',
    monthlyPrice: 24999,
    annualPrice: 20999,
    customers: 'Unlimited',
    popular: false,
    features: [
      'Unlimited customers',
      'Full automation suite',
      'Unlimited staff accounts',
      'All integrations',
      'Dedicated support',
      'Custom reports',
      'White-label option',
      'SLA guarantee',
    ]
  },
]

const faqs = [
  { q: 'Is there a free trial?', a: 'Yes! All plans include a 14-day free trial. No credit card required to start.' },
  { q: 'Can I switch plans later?', a: 'Absolutely. Upgrade or downgrade anytime. Changes take effect immediately.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit/debit cards, bank transfers, and JazzCash/EasyPaisa.' },
  { q: 'Is my data secure?', a: 'Yes. We use industry-standard encryption and security practices. Your data is safe with us.' },
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
          <Icon name="ph:tag-duotone" class="w-4 h-4" />
          Pricing
        </div>
        <h1 class="text-5xl font-bold text-gray-900 mb-6">Simple, Transparent<br><span class="gradient-text">Pricing</span></h1>
        <p class="text-xl text-gray-500 max-w-2xl mx-auto mb-10">Choose the plan that fits your business. All plans include a 14-day free trial.</p>

        <!-- Toggle -->
        <div class="inline-flex items-center gap-4 p-1.5 bg-gray-100 rounded-full">
          <button 
            @click="isAnnual = false"
            class="px-6 py-2.5 text-sm font-medium rounded-full transition-all"
            :class="!isAnnual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'"
          >
            Monthly
          </button>
          <button 
            @click="isAnnual = true"
            class="px-6 py-2.5 text-sm font-medium rounded-full transition-all flex items-center gap-2"
            :class="isAnnual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'"
          >
            Annual
            <span class="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">Save 20%</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Plans -->
    <section class="py-12 pb-24">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="grid lg:grid-cols-3 gap-8">
          <div 
            v-for="plan in plans" 
            :key="plan.name"
            class="relative bg-white rounded-3xl p-8 border-2 transition-all duration-300"
            :class="plan.popular 
              ? 'border-indigo-500 shadow-xl shadow-indigo-500/10 scale-105 z-10' 
              : 'border-gray-100 hover:border-gray-200 hover:shadow-xl'"
          >
            <!-- Popular badge -->
            <div v-if="plan.popular" class="absolute -top-4 left-1/2 -translate-x-1/2">
              <span class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg">
                Most Popular
              </span>
            </div>

            <div class="mb-8">
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ plan.name }}</h3>
              <p class="text-gray-500">{{ plan.description }}</p>
            </div>

            <div class="mb-8">
              <div class="flex items-baseline gap-1">
                <span class="text-4xl font-bold text-gray-900">
                  Rs. {{ (isAnnual ? plan.annualPrice : plan.monthlyPrice).toLocaleString() }}
                </span>
                <span class="text-gray-500">/month</span>
              </div>
              <p class="text-sm text-indigo-600 font-medium mt-2">{{ plan.customers }} customers</p>
            </div>

            <ul class="space-y-4 mb-8">
              <li v-for="feature in plan.features" :key="feature" class="flex items-start gap-3">
                <div class="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="ph:check-bold" class="w-3 h-3 text-emerald-600" />
                </div>
                <span class="text-gray-600">{{ feature }}</span>
              </li>
            </ul>

            <NuxtLink 
              to="/register"
              class="w-full justify-center btn-lg"
              :class="plan.popular ? 'btn-primary' : 'btn-secondary'"
            >
              Start Free Trial
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        </div>
        
        <div class="space-y-4">
          <details v-for="faq in faqs" :key="faq.q" class="group bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <summary class="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900">
              {{ faq.q }}
              <Icon name="ph:caret-down-bold" class="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
            </summary>
            <div class="px-6 pb-6 text-gray-600 -mt-2">{{ faq.a }}</div>
          </details>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Need a custom plan?</h2>
        <p class="text-xl text-gray-500 mb-8">Contact us for enterprise pricing and custom requirements.</p>
        <NuxtLink to="/contact" class="btn-primary btn-lg">Contact Sales</NuxtLink>
      </div>
    </section>
  </div>
</template>
