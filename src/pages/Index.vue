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
      route: 'r_projects'
    }
  }
}
</script>
