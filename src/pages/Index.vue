<template>
  <div style="padding: 0 2rem 2rem">
    <h1>Olá, eu sou o leonardo!</h1>

    <transition appear enter-active-class="animated flash slow">
      <p style="font-size: 20px" class="text-white">O céu não é o limite! 🚀</p>
    </transition>

    <q-btn class="link-arrow text-capitalize" :to="route">
      <span>Projetos</span>	
      <img src="/img/ArrowRight.svg" alt="">
    </q-btn>
  </div>
</template>

<script>

export default {
  name: 'Index',
  data () {
    return {
      route: 'projects'
    }
  }
}
</script>

<style lang="sass">
.link-arrow
  font-size: 1.1rem
  font-weight: lighter
  border: 1px solid #b1b1b1
  border-radius: 10px
  padding: 1.3rem 3.4rem
  width: fit-content
  color: white
  text-decoration: none
  display: flex
  align-items: center
  position: relative

.link-arrow span
  display: inline-block

.link-arrow img
  position: absolute
  right: -3.5rem
  top: 0.6rem
  transition: all 0.2s ease

.link-arrow:hover img
  right: -4.2rem

</style>