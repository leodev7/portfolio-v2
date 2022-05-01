<template>
  <div style="padding: 0 2rem 2rem">
    <div class="row">
      <div class="col-xs-12 col-sm-4 text-center">
        <q-img src="img/user_photo.jpeg" class="userImage" />
      </div>

      <div class="col-xs-12 col-sm-8">
        <p class="resumeAbout">Sou formado em Análise e desenvolvimento de sistemas. A área de desenvolvedor front-end sempre despertou meu interesse, onde realizei projetos freelancer para amigos, familiares e pequenos projetos. Com experiência desde 2020 atuando como desenvolvedor front-end, utilizando tecnologias como: JAVASCRIPT | QUASAR | VUE JS | JQUERY | WORDPRESS | TAILWIND | BOOTSTRAP | MATERIALIZE | SASS e outros. Já realizei diversos cursos na web, tais como: Origamid, Danki-code, Udemy, Rocketseat e Digital Innovation.</p>

        <q-btn class="link-arrow text-capitalize" :to="route">
          <span>Projetos</span>	
          <img src="/img/ArrowRight.svg" alt="">
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      route: 'projects'
    }
  }
}
</script>

<style lang="sass">
.userImage
  width: 15rem
  margin-top: 5rem
  border-radius: 50%

@media (min-width: 600px) and (max-width: 800px)
  .userImage
    width: 10rem

</style>