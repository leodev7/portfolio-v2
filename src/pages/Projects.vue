<template>
  <div style="padding: 0 2rem 2rem">
    <q-table class="no-shadow" style="background: transparent" hide-pagination row-key="id" :rows="projectsData" :columns="projectsColumns" :rows-per-page-options="[0]">

      <template v-slot:body="props">
        <transition appear class="animated jackInTheBox" style="--animate-duration: 2s;">
          <q-tr class="row q-mb-xl q-pa-lg" :props="props" style="flex-direction: row-reverse">
            <div class="row full-width" :style="props.rowIndex % 2 === 0 ? 'flex-direction: row' : 'flex-direction: row-reverse'">
              <div class="col-sm-6 col-xs-12" :class="props.rowIndex % 2 === 0 ? '' : 'text-right'">
                <q-img class="rounded-borders image" :src="props.row.imageUrl" :ratio="1" />
              </div>

              <div class="col-sm-6 col-xs-12">
                  <p class="titleText">{{ props.row.title }}</p>
                <p class="sumaryText">{{ props.row.summary }}</p>
                <div class="text-right q-gutter-sm">
                  <q-btn color="red" label="Ver demo" :href="props.row.demoUrl" target="_blank" />
                  <q-btn color="red" label="Ver github" :href="props.row.githubUrl" target="_blank" />
                </div>
              </div>
            </div>
          </q-tr>
        </transition>
      </template>

      <template v-slot:no-data>
        <div class="row full-width">
          <div class="q-mt-xs q-px-xs col-12">
            <p>Nenhum registro encontrado</p>
          </div>
        </div>
      </template>

    </q-table>

    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="purple" />
    </q-page-scroller>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      projectsColumns:[],
      projectsData: [
        {
          "id": 0,
          "imageUrl": "img/projects/site-techno.png",
          "title": "Techno",
          "summary": "Site criado a partir do projeto da Origamid, usando a biblioteca Vue.",
          "demoUrl": "https://leodev7.github.io/portfolio/projetos-criados/vue/",
          "githubUrl": "https://github.com/leodev7/portfolio/tree/master/projetos-criados/vue"
        },
        {
          "id": 1,
          "imageUrl": "img/projects/site-proffy.png",
          "title": "Proffy",
          "summary": "Site criado a partir da NLW #2 da Rocketseat, usando a biblioteca React.",
          "demoUrl": "https://nlw2-sandy.vercel.app/",
          "githubUrl": "https://github.com/leodev7/nlw2"
        },
        {
          "id": 2,
          "imageUrl": "img/projects/site-animais-fantasticos.png",
          "title": "Animais fantásticos",
          "summary": "Site criado a partir do projeto da Origamid. Um curso incrível para quem é/deseja ser desenvolvedor.",
          "demoUrl": "https://leodev7.github.io/portfolio/projetos-criados/animais-fantasticos/index.html",
          "githubUrl": "https://github.com/leodev7/portfolio/tree/master/projetos-criados/animais-fantasticos"
        },
        {
          "id": 3,
          "imageUrl": "img/projects/site-mozaostore.png",
          "title": "Mozão Store",
          "summary": "Site criado para trabalho de faculdade, utilizando framework Materialize.",
          "demoUrl": "https://leodev7.github.io/portfolio/projetos-criados/mozaostore/index.html",
          "githubUrl": "https://github.com/leodev7/portfolio/tree/master/projetos-criados/mozaostore"
        },
        {
          "id": 4,
          "imageUrl": "img/projects/site-soart.png",
          "title": "So Art",
          "summary": "Primeiro projeto criado completamente sozinho, com o intuito apenas de aprendizado.",
          "demoUrl": "https://leodev7.github.io/portfolio/projetos-criados/soart/index.html",
          "githubUrl": "https://github.com/leodev7/portfolio/tree/master/projetos-criados/soart"
        },
        {
          "id": 5,
          "imageUrl": "img/projects/site-ecoleta.png",
          "title": "Ecoleta",
          "summary": "Site criado a partir do projeto da Rocketseat. Uma semana incrível de desenvolvimento profissional e pessoal.",
          "demoUrl": "https://leodev7.github.io/portfolio/projetos-criados/nlw/index.html",
          "githubUrl": "https://github.com/leodev7/portfolio/tree/master/projetos-criados/nlw"
        },
        {
          "id": 6,
          "imageUrl": "img/projects/site-crypto.png",
          "title": "Crypto price",
          "summary": "Ver os valores de algumas criptomoedas, assim como o histórico das mesmas.",
          "demoUrl": "https://dacxi.netlify.app/#/",
          "githubUrl": "https://github.com/leodev7/dacxi-test"
        },
        {
          "id": 7,
          "imageUrl": "img/projects/site-spaceflight.png",
          "title": "Space flight",
          "summary": "Projeto utilizando API pública com informações relacionadas a voos espaciais.",
          "demoUrl": "https://space-flight.netlify.app/",
          "githubUrl": "https://github.com/leodev7/space-flight"
        }
      ]
    }
  }
}
</script>

<style lang="sass">
.q-table tbody
  display: flex
  flex-wrap: wrap
  flex-direction: column-reverse

.image
  width: 30vw
  max-width: 400px

.titleText
  font-size: 2rem
  font-weight: bold
  margin: 0
  color: white

  &:after
    margin: 0.5rem 0 2.5rem
    display: grid
    content: ""
    width: 150px
    height: 2px
    background-color: white

.sumaryText
  font-size: 1.1rem
  color: white

@media (max-width: 611px)
  .q-space
    flex-grow: 0 !important

@media (max-width: 599px)
  .q-tr.row
    text-align: center !important

  .image
    width: 65vw
    margin-bottom: 1rem
</style>
