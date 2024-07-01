<template>

		<div class="container">
        <!-- <div class="row mt-0">
           
            <div class="col-8"> 
                <div class="container d-flex mt-4 p-4 pb-2 pt-0">
                    <router-link to="/detaileContest" style="text-decoration: none; color: inherit;">
                    <div class="card">
                       
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
                                    class="img-fluid rounded" style="max-width: 100%;" alt="...">
                            </div>
                            <div class="col-md-8 ps-4">
                                <h5>
                                   {{ NameContest }} 
                                </h5>
                                <p class="pt-2">
                                    <small class="text-muted">
                                        {{ EndOfContest }}
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </router-link>
                </div>
            </div>
            <div class="col-4 container d-flex mt-4 p-4 pt-0">
                <p class="font-c">Contest Writer :</p>
                <p>  Noha</p>
            </div>
          
        </div> -->
        <!-- <itemContest ></itemContest>
        <itemContest ></itemContest>
        <itemContest ></itemContest> -->
       <div v-for="contest in Contests" :key="contest.id">
        <itemContest :contest="contest"></itemContest>
        <!-- <div class="Divider"></div> -->
    </div>


		</div>
</template>

<script>
import itemContest from '@/components/itemContest.vue';
import { BASE_URL } from "@/assets/config";
import axios from 'axios';
export default{
components:{
    itemContest
},
mounted(){
        this.getMycontests();
    },
    
data(){
	return{
		NameContest:'Cntests1 ',
		EndOfContest:'end',
        Contests:[],
        token: localStorage.getItem('token'),
        
	}
},
methods:{
    
    getMycontests() {
       axios.get( BASE_URL + 'contests',{ headers: {
                     Authorization: `Bearer ${localStorage.getItem('token')}`,
                 }}).then((response) => {
                    console.log(this.token);
         this.Contests = response.data;
         console
       }).catch((error) => {
         console.log(error)
         this.errMessage = 'error retrieving data'
       })
    },
}
}
</script>

<style  scoped>
.card {
    border: none;
    /* background: var(--WhiteColor);  */
}

.card .img-fluid {
    height: 5rem;
    width: 10rem;

}
.Divider {
    border-top: 1px solid var(--LightGreen) !important;
    /* border-bottom: 1px solid  var(--LightGreen)!important; */
    /* height: 0.5px; */
	/* margin: 0 100px; */
    margin-left: 100px;
	margin-right: 300px;
}
.text-muted{
	color: var(--LightGreen);
}
.font-c{
	color: var(--GreenColor);
}
</style>