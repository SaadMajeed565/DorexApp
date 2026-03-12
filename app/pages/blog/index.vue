<script setup lang="ts">
useSeoMeta({
  title: 'Blog - ISP Industry Insights & Tips',
  description: 'Tips, guides, and insights to help you run a successful ISP business. Learn about billing, customer retention, and growth strategies.',
  ogTitle: 'ISP Industry Insights & Resources',
  ogDescription: 'Tips, guides, and insights to help you run a successful ISP business.',
})

const posts = [
  {
    slug: 'how-to-grow-your-isp-business',
    title: 'How to Grow Your ISP Business in 2024',
    excerpt: 'Learn the key strategies successful ISPs are using to acquire new customers and retain existing ones.',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Business',
    image: null,
  },
  {
    slug: 'billing-automation-benefits',
    title: '5 Benefits of Automating Your ISP Billing',
    excerpt: 'Discover how automated billing can save you time, reduce errors, and improve cash flow.',
    date: '2024-01-10',
    readTime: '4 min read',
    category: 'Tips',
    image: null,
  },
  {
    slug: 'customer-retention-strategies',
    title: 'Customer Retention Strategies for ISPs',
    excerpt: 'Keeping customers is cheaper than acquiring new ones. Here are proven retention strategies.',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Business',
    image: null,
  },
  {
    slug: 'whatsapp-business-for-isp',
    title: 'Using WhatsApp Business for Customer Communication',
    excerpt: 'How to leverage WhatsApp to improve customer support and send automated notifications.',
    date: '2024-01-01',
    readTime: '4 min read',
    category: 'Tips',
    image: null,
  },
  {
    slug: 'choosing-right-isp-software',
    title: 'How to Choose the Right ISP Management Software',
    excerpt: 'A comprehensive guide to evaluating and selecting the best software for your ISP business.',
    date: '2023-12-28',
    readTime: '7 min read',
    category: 'Guide',
    image: null,
  },
  {
    slug: 'common-billing-mistakes',
    title: 'Common Billing Mistakes ISPs Make (And How to Avoid Them)',
    excerpt: 'Avoid these costly billing errors that can hurt your revenue and customer relationships.',
    date: '2023-12-20',
    readTime: '5 min read',
    category: 'Tips',
    image: null,
  },
]

const categories = ['All', 'Business', 'Tips', 'Guide', 'News']
const selectedCategory = ref('All')

const filteredPosts = computed(() => {
  if (selectedCategory.value === 'All') return posts
  return posts.filter(post => post.category === selectedCategory.value)
})

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
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
          <Icon name="ph:newspaper-duotone" class="w-4 h-4" />
          Blog
        </div>
        <h1 class="text-5xl font-bold text-gray-900 mb-6">Insights & <span class="gradient-text">Resources</span></h1>
        <p class="text-xl text-gray-500 max-w-2xl mx-auto">Tips, guides, and insights to help you run a successful ISP business</p>
      </div>
    </section>

    <!-- Blog Content -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <!-- Categories -->
        <div class="flex flex-wrap gap-2 mb-10">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="selectedCategory = cat"
            class="px-5 py-2.5 rounded-full text-sm font-medium transition-all"
            :class="selectedCategory === cat 
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25' 
              : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:shadow-md'"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Posts Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink 
            v-for="post in filteredPosts" 
            :key="post.slug"
            :to="`/blog/${post.slug}`"
            class="group"
          >
            <article class="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
              <!-- Image placeholder -->
              <div class="aspect-video bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
                <Icon name="ph:article-duotone" class="w-12 h-12 text-indigo-300" />
              </div>
              
              <div class="p-6 flex-1 flex flex-col">
                <div class="flex items-center gap-3 mb-3">
                  <span class="text-xs font-semibold px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full">{{ post.category }}</span>
                  <span class="text-xs text-gray-400">{{ post.readTime }}</span>
                </div>
                
                <h2 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {{ post.title }}
                </h2>
                
                <p class="text-sm text-gray-500 mb-4 flex-1 leading-relaxed">{{ post.excerpt }}</p>
                
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span class="text-xs text-gray-400">{{ formatDate(post.date) }}</span>
                  <span class="text-indigo-600 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more
                    <Icon name="ph:arrow-right-bold" class="w-3 h-3" />
                  </span>
                </div>
              </div>
            </article>
          </NuxtLink>
        </div>

        <!-- Empty state -->
        <div v-if="filteredPosts.length === 0" class="text-center py-16">
          <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="ph:article-duotone" class="w-10 h-10 text-gray-300" />
          </div>
          <p class="text-gray-500">No posts in this category yet.</p>
        </div>
      </div>
    </section>

    <!-- Newsletter CTA -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <div class="section-badge mx-auto mb-6 w-fit">
          <Icon name="ph:envelope-duotone" class="w-4 h-4" />
          Newsletter
        </div>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
        <p class="text-gray-500 mb-8">Get the latest ISP industry tips and Dorex updates delivered to your inbox.</p>
        <form class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder="Enter your email" class="input flex-1">
          <button type="submit" class="btn-primary">
            Subscribe
            <Icon name="ph:paper-plane-tilt-duotone" class="w-4 h-4 ml-2" />
          </button>
        </form>
        <p class="text-xs text-gray-400 mt-4">No spam, unsubscribe anytime.</p>
      </div>
    </section>
  </div>
</template>

