<template>
    <!-- start i need it -->
    <div class="container">
        <div class="row mt-0">
            <div class="col-8"> <!-- start Card -->
                <div class="container d-flex mt-4 p-4 pb-1 pt-0">
                    <div class="card">
                        <!-- <div class="card mb-3" style="max-width:540px;">  -->
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
                                    class="img-fluid rounded" alt="...">
                            </div>
                            <div class="col-md-8 ps-3">
                                <h5>
                                    {{ NameExam }}
                                </h5>
                                <div class="pt-2 d-flex">
                                    <p>
                                        date exam:</p>
                                    <h6 class="text-black pt-1 ps-1">
                                        {{ date }}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4 container  mt-4 p-4 pt-0">
                <div class="d-flex">
                    <h6 class="font-c">Teacher :</h6>
                    <p class="text-black"> {{ nameTeacher }}</p>
                </div>
                <div class="pt-0 d-flex">
                                    <p>
                                        time of exam:</p>
                                    <p class="text-black">
                                        {{ time }}
                                    </p>
                                </div>
            </div>
        </div>
        <div class="Divider"></div>

        <!-- end i need it -->
    </div>
</template>
<script>

export default {
    components: {
    },
    data() {
        return {
            NameExam: 'exam Programing 1',
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

}

.Divider {
    border-top: 1px solid var(--LightGreen) !important;
    /* border-bottom: 1px solid  var(--LightGreen)!important; */
    /* height: 0.5px; */
    margin-left: 100px;
	margin-right: 200px;
}

.text-muted {
    color: var(--LightGreen);
}

.font-c {
    color: var(--GreenColor);
}
</style>