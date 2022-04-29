<template>
  <q-page>
    <div class="row">

      <div class="col-2">
        <div class="leftNavBar">
          <div class="transformLogo">
            <q-img src="https://leodev7.github.io/portfolio/img/leo-logo.png" width="10rem" />
          </div>
          <p>Email</p>
        </div>
      </div>

      <div class="col-10">
        <nav style="display: flex">
          <ul class="q-col-gutter-md q-mt-xs" style="display: flex; list-style: none">
            <li v-for="page in pages" :key="page.id">
              <a target="_blank" :href="page.route" style="text-decoration: none; color: white">{{ page.name }}</a>
            </li>
          </ul>
          <q-space />
          <ul class="q-col-gutter-md q-mt-xs q-mr-lg" style="display: flex; list-style: none; color: white">
            <li v-for="social in socials" :key="social.id">
              <q-btn :icon="social.icon" :href="social.url" target="_blank" />
            </li>
          </ul>
        </nav>
        <div class="container">
          <h1>Olá, eu sou o leonardo!</h1>
        </div>
      </div>

    </div>
  </q-page>
</template>

<script>

export default {
  name: 'IndexPage',
  data () {
    return {
      pages: [
        { name: 'home', route: 'home' },
        { name: 'about me', route: 'about-me' },
        { name: 'blog', route: 'blog' },
        { name: 'portfolio', route: 'portfolio' }
      ],

      socials: [
        { icon: 'currency_bitcoin', url: 'https://github.com/leodev7/' },
        { icon: 'link', url: 'https://www.linkedin.com/in/leonardodev7/' },
        { icon: 'telegram', url: 'https://t.me/Leop7' },
        { icon: 'photo_camera', url: 'https://instagram.com/leonardodev7' }
      ]
    }
  }
}
</script>
