<template>
    <div>
            <router-link :to="{ name: 'detaileContest', params: { ContestId: contest.id } }" style="  text-decoration: none;
  outline: none;
  ">
    <!-- start i need it -->
    <div class="container">

        <div class="row mt-0">
            <div class="col-8"> <!-- start Card -->
        
                <div class="container d-flex mt-4 p-4 pb-1 pt-0">
                    <div class="card">
                        <!-- <div class="card mb-3" style="max-width:540px;">  -->
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="../assets/images/Capture.png"
                                    class="img-fluid rounded" style="max-width: 100%;" alt="...">
                            </div>
                            <div class="col-md-8 ps-3">
                                <h5>
                                    {{ contest.name }}
                                </h5>
                                <div class="pt-2 d-flex">
                                    <p>
                                        date start contest:</p>
                                    <h6 class="text-black pt-1 ps-1">
                                        {{ contest.start_at }}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4 container  mt-4 p-4 pt-0">
                <div class="d-flex">
                    <h6 class="font-c">Create by :</h6>
                    <p class="text-black"> {{ contest.owner }}</p>
                </div>
                <div class="pt-0 d-flex">
                                    <p>
                                        time of contest:</p>
                                    <p class="text-black">
                                        {{ contest.contest_time }}
                                    </p>
                                </div>
            </div>
        </div>
        <div class="Divider"></div>


        <!-- end i need it -->
    </div>
</router-link>
</div>
</template>
<script>

export default {
    props:{
        contest:{
        type: Object,
      required: true,
    }
    },
    components: {
    },
    data() {
        return {
            NameExam: 'exam ',
            date: '25/5/2024',
            time: '2h',
            nameTeacher:'Noha'

        }
    }
}
</script>
<style scoped>
.card {
    border: none;
}

p {
    color: var(--GreenOpacity);
}

.card .img-fluid {
    height: 5rem;
    width: 10rem;
    max-width: 100%;

}

.Divider {
    border-top: 1px solid var(--LightGreen) !important;
    /* border-bottom: 1px solid  var(--LightGreen)!important; */
    /* height: 0.5px; */
	/* margin: 0 100px; */
    margin-left: 100px;
	margin-right: 300px;
}

/* .Divider {
    border-top: 1px solid var(--LightGreen) !important;
    margin-left: 100px;
	margin-right: 200px;
} */

.text-muted {
    color: var(--LightGreen);
}

.font-c {
    color: var(--GreenColor);
}
</style>