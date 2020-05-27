<template>
  <v-container fluid>
      <v-row class="ml-3">
          <v-col cols="3">
               <span style="font-size:20px">Select Class No</span>
               <v-autocomplete @change="updateStudentList()" v-model="selectedClassNo"  dense  :items="classList">
              </v-autocomplete>
          </v-col>
           <v-col align="right" cols="9">
              <v-btn icon color="green">
                  <v-icon>mdi mdi-plus</v-icon>
                  Add Student
              </v-btn>
          </v-col>
           <v-col v-if="studentList.length>0" cols="12">
               <v-simple-table>
                    <thead>
                      <tr>  
                        <th>
                            Sr.No
                        </th>
                        <th>
                            Roll No
                        </th>   
                        <th>
                            Student Name 
                        </th> 
                        <th>
                            Father Name 
                        </th>
                        <th>
                            Father Phone No 
                        </th>
                       <th>
                           Actions
                       </th>
                      </tr>  
                    </thead>
                    <tbody>
                       <tr v-for="(student,index) in studentList" :key="'student'+index">
                           <td>{{index+1}}</td>
                           <td>{{student.rollNo}}</td>
                           <td>
                               {{student.firstName+' '+student.lastName}}
                           </td>
                           <td>
                               {{student.fatherName}}
                           </td>
                            <td>
                               {{student.fatherMobileNo}}
                           </td>
                          <td>
                              <v-menu offset-x>
                                <template v-slot:activator="{ on }">
                                    <span v-on="on" class="material-icons">
                                          more_vert
                                    </span>
                                </template>
                                <v-list>
                                    <v-list-item>
                                    <v-list-item-title @click="showStudentDetail(student.rollNo)">Show Detail</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item>
                                    <v-list-item-title @click="updateStudentDetail(student.rollNo)">Update</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item>
                                    <v-list-item-title  @click="deleteStudent(student.id)">Delete</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                                </v-menu>
                           
                          </td>
                       </tr> 
                    </tbody> 
               </v-simple-table>
           </v-col>
           <v-col class="text-center" v-else cols="12">
               <span class="headline">No student records found</span>
           </v-col>
      </v-row>
  </v-container>    
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
      return{
          selectedClassNo:"4",
          classList:["1","2","3","4","5"],
      }
    },
    mounted(){
      this.$store.commit('updateHeaderName',"Student List")  
      this.getAllStudentList()
    },
    methods:{
        ...mapActions([
            'getStudentList',
            'deleteStudent'
        ]),
        getAllStudentList(){
            this.getStudentList({selectedClassNo:this.selectedClassNo})
        },
        showStudentDetail(rollNo){
            this.$router.push('studentDetail/'+rollNo)
        },
        updateStudentList(){
           this.getStudentList({selectedClassNo:this.selectedClassNo})
        },
        updateStudentDetail(rollNo){
           this.$router.push('addStudent/'+rollNo)
        },
        deleteStudentData(id){
           this.deleteStudent({id:id})
        } 
    },
    computed:{
        studentList:{
            get(){
                return this.$store.state.student.studentList
            }
        }
    }
    
}
</script>

<style>

</style>