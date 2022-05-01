
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'r_home', component: () => import('pages/Index.vue') },
      { path: 'projects', name: 'r_projects', component: () => import('pages/Projects.vue') },
      { path: 'about', name: 'r_about', component: () => import('pages/About.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
