<template>
  <q-layout>
    <div class="row">

      <div class="col-2">
        <div class="leftNavBar">
          <div>
            <q-img src="https://leodev7.github.io/portfolio/img/leo-logo.png" width="10rem" />
          </div>
          <div>
            <q-btn class="text-white transformMail" dense flat rounded icon="fa-solid fa-envelope" href="mailto:leop.contato@gmail.com" target="_blank" />
          </div>
        </div>
      </div>

      <div class="col-10">
        <nav style="display: flex">
          <ul class="q-gutter-md q-mt-xs" style="display: flex; list-style: none">
            <li v-for="page in pages" :key="page.id">
              <a :href="page.route" style="text-decoration: none; color: white">{{ page.name }}</a>
            </li>
          </ul>
          <q-space />
          <ul class="q-col-gutter-md q-mt-xs q-mr-lg" style="display: flex; list-style: none; color: white">
            <li v-for="social in socials" :key="social.id">
              <q-btn flat rounded :icon="social.icon" :href="social.url" target="_blank" style="border: none" />
            </li>
          </ul>
        </nav>

        <q-page-container>
          <router-view />
        </q-page-container>
      </div>

    </div>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
    data () {
    return {
      pages: [
        { name: 'home', route: '/' },
        { name: 'projects', route: 'projects' },
        { name: 'about', route: 'about' }
      ],

      socials: [
        { icon: 'fa-brands fa-github', url: 'https://github.com/leodev7/' },
        { icon: 'fa-brands fa-linkedin', url: 'https://www.linkedin.com/in/leonardodev7/' },
        { icon: 'telegram', url: 'https://t.me/Leop7' },
        { icon: 'fa-brands fa-instagram-square', url: 'https://instagram.com/leonardodev7' }
      ]
    }
  }
}
</script>
