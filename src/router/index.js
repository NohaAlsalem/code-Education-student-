
import { createRouter, createWebHistory } from "vue-router"
import splashSc from "../pages/splashSc.vue";
import TopBar from '@/components/TopBar.vue';
import NavBar from '@/components/NavBar.vue';
import logIn from "../pages/logIn.vue";
import signup from "../pages/signup.vue";
import ProblemS from "../pages/problems/ProblemS.vue";
import detailsProblem from "@/pages/problems/detailsProblem.vue";
import detailSolution from "@/pages/problems/detailSolution.vue";
import MySolution from "@/pages/problems/component/mySolution.vue";
import ContestS from "../pages/contests/ContestS.vue";
import detaileContest from "../pages/contests/detaileContest.vue";
import Students from "../pages/contests/Students.vue";
import ExamS from "../pages/Exam/ExamS.vue";
import ClasseS from "../pages/catygries/ClasseS.vue";
import detailAssesment from "../pages/catygries/detailAssesment.vue"
import myContests from "../pages/contests/comonents/myContests.vue";
import joinContets from "../pages/contests/comonents/joinContests.vue";
import createContests from "../pages/contests/comonents/creatContests.vue";
import detailProblemCon from "../pages/contests/detailProblemCon.vue";
import ProfilE from "../pages/Profile/ProfilE.vue";
import Astudents from "@/pages/Adminp/Astudents.vue";
import Subjects from "@/pages/Adminp/Subjects.vue";
import TeachersAddEdit from "@/pages/Adminp/TeachersAddEdit.vue";
import StudentsClass from "@/pages/Adminp/StudentsClass.vue";
import Exams from "@/pages/Adminp/Exams.vue";
import detailExam from "@/pages/Exam/detailExam.vue";


const routes = [
    //to admin
{
    name:'students',
    path:'/studentsA',
    component:Astudents,

},
{
name:'Subjects',
path:'/subjectsA',
component:Subjects,
},
{
name:'TeachersAddEdit',
path:'/teachersA',
component:TeachersAddEdit,
},
{
    name:'StudentsClass',
    path:'/lm',
    component:StudentsClass,
},
{
    name:'Exams',
    path:'/examsA',
    component:Exams,
},

//
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
        name: 'detailProblem',
        path: '/detailProblem/:ProblemId',
        component: detailsProblem,
        props: true
    },

    {
        name:'detailSolution',
        path:'/detailSolution',
        component:detailSolution,
    
    },
    {
name:'mySolution',
path:'/mySolution/:SolutionId',
component:MySolution,
props:true
    },
    {
        name: 'contests',
        path: '/contests',
        component: ContestS,
    },
    {
        name: 'myContests',
        path: '/myContests',
        component: myContests,
    },
    {
        name:'detaileContest',
        path:'/detaileContest/:ContestId',
        component:detaileContest,
        props:true
    },
    {
        name: 'detailProblemCon',
        path: '/detailProblemCon/:ProblemId',
        component: detailProblemCon,
        props: route => ({
          ProblemId: route.params.ProblemId,
          ContestId: route.query.ContestId
        })
      },

    {
        name: 'joinContets',
        path: '/joinContets',
        component: joinContets,
    },
    {
        name: 'createContests',
        path: '/createContests',
        component: createContests,
    },
    {
        name:'Students',
        path:'/students',
        component:Students,
    },
    {
        name: 'classes',
        path: '/classes',
        component: ClasseS,
    },
    {
        name: 'detailAssesment',
        path: '/detailAssesment/:Problemid',
        component: detailAssesment,
        props:true
        // props: route => ({
        //   ProblemId: route.params.ProblemId,
        //   ContestId: route.query.ContestId
        // })
      },

    {
        name: 'exams',
        path: '/exams',
        component: ExamS,
 
    },

    {
        name:'detailExam',
        path:'/detailExam/ :examId',
        component:detailExam,
        props:true
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