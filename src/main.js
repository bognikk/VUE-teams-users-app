import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: '/', component: TeamsList }, //or line under so we aways have /teams in URL
    { path: '/', redirect: '/teams' }, //or add alias: '/' to the line under
    {
      path: '/teams',
      component: TeamsList,
      children: [
        { path: ':teamId', component: TeamMembers, props: true }, // this rout will be active if user enters /teams/anythigAfterThat ===> nested rout
        // { path: '/teams/new' }, // this this is a different scenarion from one above
      ],
    }, //our-domain.com/teams => TeamsList
    { path: '/users', component: UsersList },
    { path: '/:notFound(.*)', component: NotFound }, // catches anything that doesn't exist and loads notFoud rout
    { path: '/:notFound(.*)', redirect: './teams' }, //catches anything that doesn't exist and redirect to /teams
  ],
  linkActiveClass: 'active-router', // change from router-link-active
});

const app = createApp(App);

app.use(router);

app.mount('#app');
