<template>
    <div>
<NavBar></NavBar>
<div class="container mt-4 p-0">
                    <h6>My test</h6>
                </div>
<div class="d-flex">
    <p>show today's tests: </p>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        <p>Yes</p>
                        <!-- <label class="form-check-label" for="flexRadioDefault1">
   privet
  </label> -->
                    </div>
                    <div class="form-check ms-4">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                            checked>
                        <p>No</p>
                        <!-- <label class="form-check-label" for="flexRadioDefault2">
    public
  </label> -->
                    </div>
                </div>
    </div>
</template>

<script>
import NavBar from'@/components/NavBar.vue';
export default{
components:{
    NavBar
}
}
</script>

<style  scoped>

</style>