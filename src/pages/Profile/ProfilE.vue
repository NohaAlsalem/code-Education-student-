<template>
    <div>
        <NavBar></NavBar>
        <div class="screen w-100">

            <div class="prof ms-0">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div>
                                        <font-awesome-icon :icon="['fas', 'id-card']" :size="['6x']" />
                                <!-- <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                    alt="avatar" class="rounded-circle img-fluid" style="width: 150px;"> -->
                                </div>
                                <div>
                                <h5 class="my-3 mx-3">John Smith</h5>
                                <div class="mb-1 my-3 mx-3 d-flex" style="color: var(--GreenColor);">
                                    <p>Rank:~</p>
                                    <p >{{ Rank }}</p>
                            </div></div>
                                </div>

                                <button type="button" class="" style="width: 100%;">Edit Profile</button>
                                
                            </div>
                        </div>
               
                    </div>


                    <div class="col-lg-8">

                     
     <div class="row"> 
                            <div class="col-md-6 ">
                                <div class="card mb-3">
                                    <div class="card-body">

                                    </div>
                                </div>
                                
                                <div class="card mb-4 mb-md-0">
                                    <div class="card-body">
                                        <p class="mb-4"><span class="text-primary font-italic me-1">assigment</span>
                                            Project Status
                                        </p>
                                        <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
  <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div>
                                        <p class="mb-1" style="font-size: .77rem;">Web Design</p>
                                        <div class="progress rounded" style="height: 5px;">
                                            <div class="progress-bar" role="progressbar" style="width: 80%"
                                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p class="mt-4 mb-1" style="font-size: .77rem;">Website Markup</p>
                                        <div class="progress rounded" style="height: 5px;">
                                            <div class="progress-bar" role="progressbar" style="width: 72%"
                                                aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p class="mt-4 mb-1" style="font-size: .77rem;">One Page</p>
                                        <div class="progress rounded" style="height: 5px;">
                                            <div class="progress-bar" role="progressbar" style="width: 89%"
                                                aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p class="mt-4 mb-1" style="font-size: .77rem;">Mobile Template</p>
                                        <div class="progress rounded" style="height: 5px;">
                                            <div class="progress-bar" role="progressbar" style="width: 55%"
                                                aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p class="mt-4 mb-1" style="font-size: .77rem;">Backend API</p>
                                        <div class="progress rounded mb-2" style="height: 5px;">
                                            <div class="progress-bar" role="progressbar" style="width: 66%"
                                                aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          <div class="col-md-6"></div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import PieChart from './PieChart.vue';
export default {
    components: {
        NavBar,
        PieChart
    },
    data(){
        return{
            Rank:'200.000',
        }
    }
}
</script>

<style scoped>
.screen {
    padding: 40px 40px;
    background: var(--WhiteColor);
    height: 100vh;
    /* height: calc(100vh-72px); */
}
h5{
    color: var(--GreenColor);
    font-weight: bold;
}

.card{
    border: 1px solid var(--borderColor);
    border-radius: 10px;
}
</style>