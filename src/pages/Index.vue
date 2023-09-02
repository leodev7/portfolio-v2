<template>
  <div style="padding: 0 2rem 2rem">
    <h1>Olá, eu sou o leonardo!</h1>

    <transition appear class="animated flash" style="--animate-duration: 2s">
      <p style="font-size: 20px" class="text-white">O céu não é o limite! 🚀</p>
      <p>Netlify</p>
    </transition>

    <q-btn class="link-arrow text-capitalize" :to="route">
      <span>Sobre</span>	
        <transition appear class="animated headShake infinite" style="--animate-duration: 3s;">
          <img src="/img/ArrowRight.svg" alt="">
        </transition>
    </q-btn>
  </div>
</template>

<script>

export default {
  name: 'Index',
  data () {
    return {
      route: 'about'
    }
  }
}
</script>
