import slsaxios  from '../axios/axios.js'
export default {
    state:{
        studentList:[]
    },
    mutations:{
     updateStudentList:(state,data)=>{
         state.studentList = data
     }
    },
    getters:{
      getStudentList:(state)=>{
          return state.studentList
      }
    },
    actions:{
      getStudentList: async ({commit},payload)=>{
        const resp = await (slsaxios.post('/getAllStudent/'+payload.selectedClassNo))
        commit('updateStudentList',resp.data)
        return resp
      },
      addStudent: async ({state},payload)=>{
        const resp = await (slsaxios.post('/addStudent',payload))
        state.studentList.push(resp.data)
        return resp
      },
      deleteStudent:async (payload)=>{
        const resp = await (slsaxios.post('/deleteStudent',payload))
        return resp
      },
    }
}