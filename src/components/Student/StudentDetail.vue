<template>
    <v-container>
        <v-row>
            <v-col cols="4">
                <v-row>
                    <v-col cols="12">
                        <span class="student-profile-header">Student Profile Photo</span>
                    </v-col>
                     <v-col cols="12">
                         <v-img src="https://i.ytimg.com/vi/7Xu_s1YJhyg/maxresdefault.jpg" height="400" width="400"></v-img>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="2"></v-col>
            <v-col cols="6" class="mt-5">
                <v-row>
                     <v-col class="student-detail-row" cols="12">
                      <span class="headline">Personal Information</span>                           
                    </v-col>
                    <v-col class="student-detail-row" cols="6">
                       Roll No                          
                    </v-col>
                    <v-col class="student-detail-row" cols="6">
                        {{studentData.rollNo}}                          
                    </v-col>
                    <v-col class="student-detail-row" cols="6">
                      Class                          
                    </v-col>
                    <v-col class="student-detail-row" cols="6">
                        {{studentData.classNo}}                          
                    </v-col>
                     <v-col class="student-detail-row" cols="6">
                       Name                          
                    </v-col>
                    <v-col class="student-detail-row" cols="6">
                        {{fullName}}                          
                    </v-col>
                     <v-col class="student-detail-row" cols="6">
                       Father name                      
                    </v-col>
                    <v-col class="student-detail-row" cols="6">
                        {{studentData.fatherName}}                          
                    </v-col>
                    <v-col class="student-detail-row" cols="6">
                       Mother name                      
                    </v-col>
                    <v-col class="student-detail-row" cols="6">
                        {{studentData.motherName}}                          
                    </v-col>
                    <v-col class="student-detail-row" cols="6">
                       Father phone no                      
                    </v-col>
                    <v-col class="student-detail-row" cols="6">
                        {{studentData.fatherMobileNo}}                          
                    </v-col>
                    <v-col class="student-detail-row" cols="12">
                      <span class="headline">Address Information</span>                           
                    </v-col>
                    <v-col class="student-detail-row" cols="6">
                       Line 1                      
                    </v-col>
                    <v-col class="student-detail-row" cols="6">
                        {{studentData.address.line1}}                          
                    </v-col>
                    <v-col class="student-detail-row" cols="6">
                       Line 2                      
                    </v-col>
                    <v-col class="student-detail-row" cols="6">
                        {{studentData.address.line2}}                          
                    </v-col>
                    <v-col class="student-detail-row" cols="6">
                       Post                     
                    </v-col>
                    <v-col class="student-detail-row" cols="6">
                        {{studentData.address.post}}                          
                    </v-col>
                    <v-col class="student-detail-row" cols="6">
                       Tehseel                      
                    </v-col>
                    <v-col class="student-detail-row" cols="6">
                        {{studentData.address.tehseel}}                          
                    </v-col>
                    <v-col class="student-detail-row" cols="6">
                       District                      
                    </v-col>
                    <v-col class="student-detail-row" cols="6">
                        {{studentData.address.district}}                          
                    </v-col>
                    <v-col class="student-detail-row" cols="6">
                       State                      
                    </v-col>
                    <v-col class="student-detail-row" cols="6">
                        {{studentData.address.state}}                          
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container> 
</template>

<script>
import { mapGetters } from 'vuex'
export default {
   data(){
       return{
         studentData:{}
       }
   },
   mounted(){
       this.$store.commit('updateHeaderName',"Student Detail")
       this.getStudentDetail()
   },
   methods:{
       getStudentDetail(){
         let studentList = this.getStudentList
         let rollNo = this.$route.params.rollNo
         this.studentData = studentList.find(student=>{return student.rollNo==rollNo})
       }
   },
   computed:{
       ...mapGetters(['getStudentList']),
       fullName(){
           return this.studentData.firstName+' '+this.studentData.lastName
       }
   } 
}
</script>

<style>
.student-profile-header{
  font-size: 20px;
  font-weight: bold;
}
.student-detail-row{
   font-size: 18;
   font-weight: bold;
   padding: 10px;
}

</style>