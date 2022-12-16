import { createRouter, createWebHistory } from 'vue-router'
import PageNotFoundVue from '../views/PageNotFound.vue'
import HomeView from '../views/HomeView.vue'
import ContactManagerVue from '@/views/ContactManager.vue'
import AddContactVue from '@/views/AddContact.vue'
import ViewContactVue from '@/views/ViewContact.vue'
import EditContactVue from '@/views/EditContact.vue'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFoundVue
  },
  {
    path: '/',
    name: 'home',
    redirect: "/contacts",
    component: HomeView
  },
  {
    path: '/contacts',
    name: 'ContactManager',
    component: ContactManagerVue
  },
  {
    path: '/contacts/add',
    name: 'AddContact',
    component: AddContactVue
  },
  {
    path: '/contacts/view/:contactId',
    name: 'ViewContact',
    component: ViewContactVue
  },
  {
    path: '/contacts/edit/:contactId',
    name: 'EditContact',
    component: EditContactVue
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
