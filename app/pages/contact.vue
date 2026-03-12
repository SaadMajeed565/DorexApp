<script setup lang="ts">
useSeoMeta({
  title: 'Contact Us - Get in Touch',
  description: 'Have questions about our ISP management software? Contact our sales team for a demo or get support. We respond within 24 hours.',
  ogTitle: "Let's Start a Conversation",
  ogDescription: 'Have questions? We\'d love to hear from you. Contact our team today.',
})

const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  customers: '',
  message: '',
})

const customerRanges = [
  'Less than 100',
  '100 - 500',
  '500 - 1,000',
  '1,000 - 5,000',
  '5,000+',
]

const isSubmitting = ref(false)
const isSubmitted = ref(false)

async function handleSubmit() {
  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))
  isSubmitting.value = false
  isSubmitted.value = true
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0 grid-pattern"></div>
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-100 to-transparent rounded-full blur-3xl opacity-50"></div>
      
      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div class="section-badge mx-auto mb-6 w-fit">
          <Icon name="ph:chat-circle-duotone" class="w-4 h-4" />
          Contact
        </div>
        <h1 class="text-5xl font-bold text-gray-900 mb-6">Let's Start a<br><span class="gradient-text">Conversation</span></h1>
        <p class="text-xl text-gray-500 max-w-2xl mx-auto">Have questions? We'd love to hear from you.</p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-12 pb-24">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="grid lg:grid-cols-5 gap-12">
          <!-- Contact Info -->
          <div class="lg:col-span-2">
            <h2 class="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            
            <div class="space-y-6">
              <a href="mailto:sales@dorex.io" class="flex items-center gap-4 group">
                <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow">
                  <Icon name="ph:envelope-duotone" class="w-6 h-6" />
                </div>
                <div>
                  <p class="text-sm text-gray-500">Email</p>
                  <p class="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">sales@dorex.io</p>
                </div>
              </a>

              <a href="tel:+923001234567" class="flex items-center gap-4 group">
                <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-shadow">
                  <Icon name="ph:phone-duotone" class="w-6 h-6" />
                </div>
                <div>
                  <p class="text-sm text-gray-500">Phone</p>
                  <p class="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">+92 300 123 4567</p>
                </div>
              </a>

              <a href="https://wa.me/923001234567" class="flex items-center gap-4 group">
                <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40 transition-shadow">
                  <Icon name="ph:whatsapp-logo-duotone" class="w-6 h-6" />
                </div>
                <div>
                  <p class="text-sm text-gray-500">WhatsApp</p>
                  <p class="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">Chat with us</p>
                </div>
              </a>
            </div>

            <div class="mt-10 pt-10 border-t border-gray-200">
              <h3 class="font-semibold text-gray-900 mb-4">Office Hours</h3>
              <div class="space-y-2 text-gray-600">
                <p>Monday - Saturday: 9AM - 7PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-3">
            <div class="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 p-8 lg:p-10">
              <Transition
                enter-active-class="transition duration-300"
                enter-from-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100"
                mode="out-in"
              >
                <div v-if="isSubmitted" class="text-center py-12">
                  <div class="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30">
                    <Icon name="ph:check-bold" class="w-10 h-10 text-white" />
                  </div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p class="text-gray-500 mb-8">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button @click="isSubmitted = false" class="btn-secondary">Send Another Message</button>
                </div>

                <form v-else @submit.prevent="handleSubmit" class="space-y-6">
                  <div class="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label class="label">Name</label>
                      <input v-model="form.name" type="text" required class="input" placeholder="Your name">
                    </div>
                    <div>
                      <label class="label">Email</label>
                      <input v-model="form.email" type="email" required class="input" placeholder="you@company.com">
                    </div>
                  </div>

                  <div class="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label class="label">Phone</label>
                      <input v-model="form.phone" type="tel" required class="input" placeholder="+92 300 1234567">
                    </div>
                    <div>
                      <label class="label">Company / ISP Name</label>
                      <input v-model="form.company" type="text" class="input" placeholder="Your ISP name">
                    </div>
                  </div>

                  <div>
                    <label class="label">Number of Customers</label>
                    <select v-model="form.customers" class="input">
                      <option value="" disabled>Select range</option>
                      <option v-for="range in customerRanges" :key="range" :value="range">{{ range }}</option>
                    </select>
                  </div>

                  <div>
                    <label class="label">Message</label>
                    <textarea v-model="form.message" rows="4" class="input resize-none" placeholder="Tell us about your requirements..."></textarea>
                  </div>

                  <button type="submit" :disabled="isSubmitting" class="btn-primary btn-lg">
                    <Icon v-if="isSubmitting" name="ph:spinner-bold" class="w-5 h-5 mr-2 animate-spin" />
                    {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                    <Icon v-if="!isSubmitting" name="ph:paper-plane-tilt-duotone" class="w-5 h-5 ml-2" />
                  </button>
                </form>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
