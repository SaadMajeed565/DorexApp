<script setup lang="ts">
const config = useRuntimeConfig()
const appName = config.public.appName

useSeoMeta({
  title: `Terms of Service - ${appName}`,
  description: `Read the terms of service for ${appName}. Understand your rights and obligations when using our ISP management platform.`,
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0 grid-pattern"></div>
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-100 to-transparent rounded-full blur-3xl opacity-50"></div>
      
      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div class="section-badge mx-auto mb-6 w-fit">
          <Icon name="ph:file-text-duotone" class="w-4 h-4" />
          Legal
        </div>
        <h1 class="text-5xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        <p class="text-xl text-gray-500 max-w-2xl mx-auto">Last updated: January 1, 2024</p>
      </div>
    </section>

    <!-- Content -->
    <section class="py-16">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <div class="prose prose-gray max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using {{ appName }} ("the Service"), you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree to these terms, you should not use the Service.</p>

          <h2>2. Description of Service</h2>
          <p>{{ appName }} provides a cloud-based ISP management platform that includes customer management, billing, invoicing, ticketing, and related features. The Service is provided "as is" and we reserve the right to modify, suspend, or discontinue any aspect of the Service at any time.</p>

          <h2>3. Account Registration</h2>
          <p>To use the Service, you must:</p>
          <ul>
            <li>Provide accurate and complete registration information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Be at least 18 years old or have legal authority to enter into this agreement</li>
            <li>Be responsible for all activities that occur under your account</li>
          </ul>

          <h2>4. Subscription and Payments</h2>
          <p>By subscribing to a paid plan, you agree to:</p>
          <ul>
            <li>Pay all applicable fees as described in your chosen plan</li>
            <li>Provide accurate billing information</li>
            <li>Authorize us to charge your payment method on a recurring basis</li>
            <li>Understand that fees are non-refundable except as required by law</li>
          </ul>

          <h2>5. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Service for any illegal purpose</li>
            <li>Transmit any malicious code or attempt to hack the system</li>
            <li>Interfere with other users' access to the Service</li>
            <li>Resell or redistribute the Service without authorization</li>
            <li>Use the Service to send spam or unsolicited communications</li>
          </ul>

          <h2>6. Data and Privacy</h2>
          <p>Your use of the Service is also governed by our <NuxtLink to="/privacy" class="text-indigo-600 hover:text-indigo-700">Privacy Policy</NuxtLink>. You retain ownership of your data, and we will handle it in accordance with our privacy practices.</p>

          <h2>7. Intellectual Property</h2>
          <p>The Service, including all content, features, and functionality, is owned by {{ appName }} and is protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, or distribute any part of the Service without our written permission.</p>

          <h2>8. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, {{ appName }} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising from your use of the Service.</p>

          <h2>9. Service Availability</h2>
          <p>While we strive for 99.9% uptime, we do not guarantee uninterrupted access to the Service. We may perform maintenance or updates that temporarily affect availability. We will notify users of planned maintenance when possible.</p>

          <h2>10. Termination</h2>
          <p>Either party may terminate this agreement at any time. Upon termination:</p>
          <ul>
            <li>Your access to the Service will be revoked</li>
            <li>You may export your data within 30 days</li>
            <li>We may delete your data after the export period</li>
          </ul>

          <h2>11. Changes to Terms</h2>
          <p>We may update these terms from time to time. We will notify you of significant changes via email or through the Service. Continued use after changes constitutes acceptance of the new terms.</p>

          <h2>12. Governing Law</h2>
          <p>These terms shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions.</p>

          <h2>13. Contact Us</h2>
          <p>If you have questions about these Terms of Service, please contact us at:</p>
          <ul>
            <li>Email: legal@dorex.io</li>
            <li>Address: Lahore, Pakistan</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.prose h2 {
  @apply text-xl font-bold text-gray-900 mt-10 mb-4;
}
.prose p {
  @apply text-gray-600 mb-4 leading-relaxed;
}
.prose ul {
  @apply list-disc list-inside mb-4 text-gray-600 space-y-2 ml-4;
}
.prose li {
  @apply leading-relaxed;
}
</style>

