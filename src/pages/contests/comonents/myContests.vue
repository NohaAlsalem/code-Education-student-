<template>
   <!-- start i need it -->
		<div class="container">
        <div class="row mt-0">
           
            <div class="col-8"> <!-- start Card -->
                <div class="container d-flex mt-4 p-4 pb-2 pt-0">
                    <router-link to="/detaileContest" style="text-decoration: none; color: inherit;">
                    <div class="card">
                        <!-- <div class="card mb-3" style="max-width:540px;">  -->
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
                                    class="img-fluid rounded" alt="...">
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
          
        </div>
<div class="Divider"></div>
        
<!-- end i need it -->



 <!-- start i need it -->
        <div class="row mt-0">
            <div class="col-8"> <!-- start Card -->
                <div class="container d-flex mt-4 p-4 pb-2 pt-0">
                    <div class="card">
                        <!-- <div class="card mb-3" style="max-width:540px;">  -->
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
                                    class="img-fluid rounded" alt="...">
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
                </div>
            </div>
            <div class="col-4 container d-flex mt-4 p-4 pt-0">
                <p class="font-c">Contest Writer :</p>
                <p>  Noha</p>
            </div>
        </div>
<div class="Divider"></div>
<!-- end i need it -->

 <!-- start i need it -->
 <div class="row mt-0">
            <div class="col-8"> <!-- start Card -->
                <div class="container d-flex mt-4 p-4 pb-2 pt-0">
                    <router-link to="/detaileContest" style="text-decoration: none; color: inherit;">
                    <div class="card">
                        <!-- <div class="card mb-3" style="max-width:540px;">  -->
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
                                    class="img-fluid rounded" alt="...">
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
        </div>
<div class="Divider"></div>
<!-- end i need it -->

 <!-- start i need it -->
 <div class="row mt-0">
            <div class="col-8"> <!-- start Card -->
                <div class="container d-flex mt-4 p-4 pb-2 pt-0">
                    <div class="card">
                        <!-- <div class="card mb-3" style="max-width:540px;">  -->
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
                                    class="img-fluid rounded" alt="...">
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
                </div>
            </div>
            <div class="col-4 container d-flex mt-4 p-4 pt-0">
                <p class="font-c">Contest Writer :</p>
                <p>  Noha</p>
            </div>
        </div>
<div class="Divider"></div>
<!-- end i need it -->



		</div>
</template>

<script>

export default{
components:{
},
data(){
	return{
		NameContest:'Cntests Programing 1',
		EndOfContest:'end',
	}
}
}
</script>

<style  scoped>
.card {
    border: none;
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