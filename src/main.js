import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/teams', component: TeamsList }, //our-domain.com/teams => TeamsList
    { path: '/users', component: UsersList },
    { path: '/teams/:teamId', component: TeamMembers, props: true }, // this rout will be active if user enters /teams/anythigAfterThat
    // { path: '/teams/new' }, // this this is a different scenarion from one above
  ],
  linkActiveClass: 'active-router', // change from router-link-active
});

const app = createApp(App);

app.use(router);

app.mount('#app');
