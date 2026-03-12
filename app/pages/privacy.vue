<script setup lang="ts">
const config = useRuntimeConfig()
const appName = config.public.appName

useSeoMeta({
  title: `Privacy Policy - ${appName}`,
  description: `Learn how ${appName} collects, uses, and protects your personal information. Your privacy is our priority.`,
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
          <Icon name="ph:shield-check-duotone" class="w-4 h-4" />
          Legal
        </div>
        <h1 class="text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p class="text-xl text-gray-500 max-w-2xl mx-auto">Last updated: January 1, 2024</p>
      </div>
    </section>

    <!-- Content -->
    <section class="py-16">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <div class="prose prose-gray max-w-none">
          <p class="text-lg">At {{ appName }}, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our ISP management platform.</p>

          <h2>1. Information We Collect</h2>
          
          <h3>Information You Provide</h3>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, phone number, company name</li>
            <li><strong>Billing Information:</strong> Payment method details, billing address</li>
            <li><strong>Customer Data:</strong> Information about your ISP customers that you input into the system</li>
            <li><strong>Communications:</strong> Messages you send to our support team</li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <ul>
            <li><strong>Usage Data:</strong> Features used, pages visited, actions taken within the platform</li>
            <li><strong>Device Information:</strong> Browser type, IP address, device type, operating system</li>
            <li><strong>Cookies:</strong> Session cookies for authentication and preferences</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Provide, maintain, and improve our Service</li>
            <li>Process payments and send billing-related communications</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send important updates about the Service</li>
            <li>Detect and prevent fraud or abuse</li>
            <li>Analyze usage patterns to improve user experience</li>
          </ul>

          <h2>3. Data Sharing and Disclosure</h2>
          <p>We do not sell your personal information. We may share your information only in these circumstances:</p>
          <ul>
            <li><strong>Service Providers:</strong> With trusted third parties who help us operate our business (payment processors, hosting providers)</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>We implement robust security measures to protect your data:</p>
          <ul>
            <li>SSL/TLS encryption for all data transmission</li>
            <li>Encrypted data storage at rest</li>
            <li>Regular security audits and vulnerability testing</li>
            <li>Access controls and authentication requirements</li>
            <li>Employee training on data protection</li>
          </ul>

          <h2>5. Your Data Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Correction:</strong> Update or correct inaccurate information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data</li>
            <li><strong>Export:</strong> Receive your data in a portable format</li>
            <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
          </ul>

          <h2>6. Data Retention</h2>
          <p>We retain your data for as long as your account is active or as needed to provide services. After account termination:</p>
          <ul>
            <li>You have 30 days to export your data</li>
            <li>We delete your data within 90 days of termination</li>
            <li>Some data may be retained for legal or audit purposes</li>
          </ul>

          <h2>7. Cookies and Tracking</h2>
          <p>We use cookies for:</p>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for the platform to function</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our service</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
          </ul>
          <p>You can control cookies through your browser settings, but some features may not work properly without them.</p>

          <h2>8. Third-Party Services</h2>
          <p>Our Service may integrate with third-party services (payment gateways, communication APIs). These services have their own privacy policies, and we encourage you to review them.</p>

          <h2>9. Children's Privacy</h2>
          <p>Our Service is not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.</p>

          <h2>10. International Data Transfers</h2>
          <p>Your data may be processed in countries other than your own. We ensure appropriate safeguards are in place for international transfers.</p>

          <h2>11. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of significant changes via email or through the Service. The "Last updated" date will be revised accordingly.</p>

          <h2>12. Contact Us</h2>
          <p>For privacy-related questions or to exercise your data rights, contact us at:</p>
          <ul>
            <li>Email: privacy@dorex.io</li>
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
.prose h3 {
  @apply text-lg font-semibold text-gray-800 mt-6 mb-3;
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

