import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Home from '../views/Home'
import StudentList from '../components/Student/StudentList'
import AddStudent from '../components/Student/AddStudent'
import StudentDetail from '../components/Student/StudentDetail'
const routes = [
   {
     path:'/home',
     component:Home
   },
   {
    path:'/studentList',
    component:StudentList
   },
   {
    path:'/addStudent/:rollNo?',
    component:AddStudent
   },
   {
    path:'/studentDetail/:rollNo',
    component:StudentDetail
   }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
