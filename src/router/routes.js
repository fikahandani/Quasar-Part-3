
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'stepper', component: () => import('pages/Stepper.vue') },
      { path: 'stepper2', component: () => import('pages/Stepper2.vue') },
      { path: 'stepperRegis', component: () => import('pages/StepperRegis.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
