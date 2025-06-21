import Index from "../pages/Index.vue";
import TeamPage from "../pages/teamPage.vue";
import UserPage from "../pages/userPage.vue";
import searchPage from "../pages/searchPage.vue";
import editUserPage from "../pages/editUserPage.vue";
import userResultPage from "../pages/userResultPage.vue";

// 路由配置
const routes = [
    { path: '/', component: Index },
    { path: '/team', component: TeamPage },
    { path: '/user', component: UserPage},
    { path: '/search', component: searchPage },
    { path: '/user/edit', component: editUserPage },
    { path: '/user/list', component: userResultPage },
]

export default routes;