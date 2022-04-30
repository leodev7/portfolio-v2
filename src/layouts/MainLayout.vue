<template>
  <q-layout>
    <div class="row">

      <div class="col-sm-0 col-md-2">
        <div class="leftNavBar">
          <div class="q-ma-md">
            <q-img src="https://leodev7.github.io/portfolio/img/leo-logo.png" width="10rem" />
          </div>
          <div>
            <q-btn class="text-white transformMail" dense flat rounded icon="fa-solid fa-envelope" href="mailto:leop.contato@gmail.com" target="_blank" />
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-10">
        <nav style="display: flex; flex-wrap: wrap; justify-content: center;">
          <ul class="q-mt-md" style="display: flex; list-style: none; padding-inline-start: 0">
            <li v-for="page in pages" :key="page.id">
              <q-btn flat :to="page.route" style="text-decoration: none; color: white">{{ page.name }}</q-btn>
            </li>
          </ul>
          <q-space />
          <ul class="q-mt-md oi" style="display: flex; list-style: none; color: white; padding-inline-start: 0">
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
        { name: 'início', route: '/' },
        { name: 'projetos', route: 'projects' },
        { name: 'sobre', route: 'about' }
      ],

      socials: [
        { icon: 'fa-brands fa-github', url: 'https://github.com/leodev7/' },
        { icon: 'fa-brands fa-linkedin', url: 'https://www.linkedin.com/in/leonardodev7/' },
        { icon: 'telegram', url: 'https://t.me/Leop7' },
        { icon: 'fa-brands fa-instagram-square', url: 'https://instagram.com/leonardodev7' },
        { icon: 'fa-solid fa-envelope', url: 'mailto:leop.contato@gmail.com' }
      ]
    }
  }
}
</script>

<style lang="sass">
ul.oi li:last-child
  display: none

@media (max-width: 1024px)
  ul.oi li:last-child
    // display: initial

  .leftNavBar
    display: none
</style>