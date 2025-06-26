import Index from "../pages/Index.vue";
import TeamPage from "../pages/TeamPage.vue";
import UserPage from "../pages/UserPage.vue";
import UserSearchPage from "../pages/UserSearchPage.vue";
import UserEditPage from "../pages/UserEditPage.vue";
import UserResultPage from "../pages/UserResultPage.vue";
import userLoginPage from "../pages/UserLoginPage.vue";
import teamAddPage from "../pages/TeamAddPage.vue";
import teamUpdatePage from "../pages/TeamUpdatePage.vue";
import TeamJoinPage from "../pages/TeamJoinPage.vue";
import TeamCreatePage from "../pages/TeamCreatePage.vue";
import userUpdatePage from "../pages/UserUpdatePage.vue";

// 路由配置
const routes = [
    { path: '/', component: Index },
    { path: '/team', title: '找队伍', component: TeamPage },
    { path: '/team/join', title: '加入队伍', component: TeamJoinPage },
    { path: '/team/add', title: '创建队伍', component: teamAddPage },
    { path: '/team/update', title: '更新队伍', component: teamUpdatePage },
    { path: '/team/create', title: '创建队伍', component: TeamCreatePage },
    { path: '/user', title: '个人中心', component: UserPage},
    { path: '/search', title: '搜索', component: UserSearchPage },
    { path: '/user/edit', title: '编辑信息', component: UserEditPage },
    { path: '/user/list', title: '用户列表', component: UserResultPage },
    { path: '/user/login', title: '登录', component: userLoginPage },
    { path: '/user/update', title: '更新信息', component: userUpdatePage },
]

export default routes;