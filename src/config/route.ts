import Index from "../pages/Index.vue";
import TeamPage from "../pages/teamPage.vue";
import UserPage from "../pages/userPage.vue";
import searchPage from "../pages/searchPage.vue";
import editUserPage from "../pages/editUserPage.vue";
import userResultPage from "../pages/userResultPage.vue";
import userLoginPage from "../pages/UserLoginPage.vue";
import teamAddPage from "../pages/TeamAddPage.vue";
import teamUpdatePage from "../pages/TeamUpdatePage.vue";
import TeamJoinPage from "../pages/teamJoinPage.vue";
import teamCreatePage from "../pages/teamCreatePage.vue";
import userUpdatePage from "../pages/UserUpdatePage.vue";

// 路由配置
const routes = [
    { path: '/', component: Index },
    { path: '/team', title: '找队伍', component: TeamPage },
    { path: '/team/join', title: '加入队伍', component: TeamJoinPage },
    { path: '/team/add', title: '创建队伍', component: teamAddPage },
    { path: '/team/update', title: '更新队伍', component: teamUpdatePage },
    { path: '/team/create', title: '创建队伍', component: teamCreatePage },
    { path: '/user', title: '个人中心', component: UserPage},
    { path: '/search', title: '搜索', component: searchPage },
    { path: '/user/edit', title: '编辑信息', component: editUserPage },
    { path: '/user/list', title: '用户列表', component: userResultPage },
    { path: '/user/login', title: '登录', component: userLoginPage },
    { path: '/user/update', title: '更新信息', component: userUpdatePage },
]

export default routes;