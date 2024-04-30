
import { createRouter, createWebHistory } from "vue-router"
import TopBar from '@/components/TopBar.vue';
import NavBar from '@/components/NavBar.vue';
import splashSc from "../pages/splashSc.vue";
import signup from "../pages/signup.vue";
import ProblemS from "../pages/ProblemS.vue";
import ContestS from "../pages/contests/ContestS.vue";
import ExamS from "../pages/ExamS.vue";
import ClasseS from "../pages/ClasseS.vue";
import ProfilE from "../pages/ProfilE.vue";
import logIn from "../pages/logIn.vue";
import myContests from"../pages/contests/comonents/myContests.vue";
import joinContets from"../pages/contests/comonents/joinContests.vue";
import createContests from "../pages/contests/comonents/creatContests.vue";




const routes = [
    {
        name: 'topbar',
        path: '/topbar',
        component: TopBar,
    },
    {
        name: 'splash',
        path: '/',
        component: splashSc,
    },

  
    {
        path: '/NavBar',
        component: NavBar,
    },

    {
        name: 'signup',
        path: '/signup',
        component: signup,
    },
    {
        name: 'login',
        path: '/login',
        component: logIn,
    },
    {
        name: 'problem',
        path: '/problems',
        component: ProblemS,
    },
    {
        name: 'contests',
        path: '/contests',
        component: ContestS,
    },
    {
        name:'myContests',
        path:'/myContests',
        component:myContests,
    },
    {
        name:'joinContets',
        path:'/joinContets',
        component:joinContets,
    },
    {
        name:'createContests',
        path:'/createContests',
        component:createContests,
    },
    {
        name: 'classes',
        path: '/classes',
        component: ClasseS,
    },
    {
        name: 'exams',
        path: '/exams',
        component: ExamS,
    },
    {
        name: 'profile',
        path: '/profile',
        component: ProfilE,
    },


]


const router = Router();
router.push('/');
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    // export default router;
    return router;
}