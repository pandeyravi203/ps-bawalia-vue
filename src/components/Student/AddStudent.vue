<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <span style="font-size:25px">Personal Information</span>
            </v-col>
            <v-col class="pa-3" cols="6">
                <v-text-field :readonly="editMode" required v-model="studentObj.rollNo" :rules="requiredRule" label="Roll Number" clearable></v-text-field>
            </v-col>
            <v-col class="pa-3" cols="6">
                <v-select :readonly="editMode" required v-model="studentObj.classNo" :rules="requiredRule" label="Select Class No" :items="classList"></v-select>
            </v-col>
            <v-col class="pa-3" cols="6">
               <v-text-field required v-model="studentObj.firstName" :rules="requiredRule" label="First Name" clearable></v-text-field>
            </v-col>
            <v-col class="pa-3" cols="6">
               <v-text-field required v-model="studentObj.lastName" :rules="requiredRule" label="Last Name" clearable></v-text-field>
            </v-col>
            <v-col class="pa-3" cols="6">
               <v-text-field required v-model="studentObj.fatherName" :rules="requiredRule" label="Father Name" clearable></v-text-field>
            </v-col>
            <v-col class="pa-3" cols="6">
               <v-text-field required v-model="studentObj.motherName" :rules="requiredRule" label="Mother Name" clearable></v-text-field>
            </v-col>
            <v-col class="pa-3" cols="6">
               <v-text-field required v-model="studentObj.fatherMobileNo" :rules="requiredRule" label="Father Mobile No" clearable></v-text-field>
            </v-col>

            <v-col class="pa-3" cols="6">
               <v-file-input v-model="imageData"  label="Choose Profile Photo"></v-file-input> 
            </v-col>
      
             <v-col cols="12">
                <span style="font-size:25px">Address Information</span>
            </v-col>
             <v-col class="pa-3" cols="6">
                <v-text-field required v-model="studentObj.address.line1" :rules="requiredRule" label="Line no 1" clearable></v-text-field>
            </v-col>
            <v-col class="pa-3" cols="6">
                 <v-text-field required v-model="studentObj.address.line2" :rules="requiredRule" label="Line no 2" clearable></v-text-field>
            </v-col>
            <v-col class="pa-3" cols="6">
               <v-text-field required v-model="studentObj.address.post" :rules="requiredRule" label="Post Name" clearable></v-text-field>
            </v-col>
            <v-col class="pa-3" cols="6">
               <v-text-field required v-model="studentObj.address.tehseel" :rules="requiredRule" label="Tehseel Name" clearable></v-text-field>
            </v-col>
            <v-col class="pa-3" cols="6">
               <v-text-field v-model="studentObj.address.district" required :rules="requiredRule" label="District Name" clearable></v-text-field>
            </v-col>
            <v-col class="pa-3" cols="6">
               <v-text-field v-model="studentObj.address.state" required :rules="requiredRule" label="State" clearable></v-text-field>
            </v-col>
             <v-col cols="12"  class="text-right">
               <v-btn color="success" @click="addStudentData()">Submit</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
export default {
    data(){
        return{
          studentObj:{
            rollNo:'',
            classNo:'',
            firstName:'',
            lastName:'',
            fatherName:'',
            motherName:'',
            fatherMobileNo:'',
            studentProfileImage:'',
            address:{
                line1:'',
                line2:'',
                post:'',
                tehseel:'',
                district:'',
                state:'',
                pincode:''
            }
          },
          imageData:'',
          editMode:false,  
          classList:["1","2","3","4","5"],
          requiredRule:[(v)=>!!v||"This field is required"]
        }
    },
    mounted(){
       this.$store.commit('updateHeaderName',"Add Student")
       if(this.$route.params && this.$route.params.rollNo){
          let studentList = this.getStudentList()
          this.studentObj = studentList.find(student=>{return student.rollNo==this.$route.params.rollNo})
          this.editMode = true
      }  
    },
    methods:{
           ...mapActions([
            'addStudent'
        ]),
        ...mapGetters(['getStudentList']),
        addStudentData(){
           const reader = new FileReader()
           let vm = this
           reader.onload=()=>{
              let payload = {}
              payload.student = this.studentObj
              payload.imageData = reader.result
              vm.addStudent(payload) 
           }
           reader.readAsDataURL(this.imageData)
        }
    }


}
</script>