<template>
  <div class="card-body" style="height:100vh; overflow-y: auto">
    <h5 class="card-title">{{ problem.name }}</h5>
    <h6 class="card-title">{{ problem.diffculty }}</h6>
    <p class="card-text">
{{  problem.description }}
    </p>
    <div class="d-flex mt-3">
      <h6 class="card-title me-2">level :</h6>
      <p >{{ problem.level }}</p>
      </div>
    
      <div class="d-flex mt-1">
        <h6 class="card-title me-2">Time Limit :</h6>
        <p>{{ problem.time_limit_ms }}</p>
      </div>
    
      <div class="d-flex mt-1">
        <h6 class="card-title me-2">Status :</h6>
        <p>{{ problem.status }}</p>
      </div>

 



    <div class="ex mt-4">
      <h6 class="card-title">Examble1</h6>
      <div class="d-flex">
        <p class="title">Input:</p>
        <p>{{ test_case.input}}</p>
      </div>
      <div class="d-flex">
        <p class="title">Output:</p>
        <p >{{ test_case.output}}</p>
      </div>
      <!-- <div class="d-flex">
        <p class="title">Explanation:</p>
        <p>{{ problem.test_case.input}}</p>
      </div> -->
    </div>

    <!-- <div class="ex mt-4">
      <h6 class="card-title">Examble2</h6>
      <div class="d-flex">
        <p class="title">Input:</p>
        <p>nums=[2,7,11,15] ,target=9</p>
      </div>
      <div class="d-flex">
        <p class="title">Output:</p>
        <p>[0,1]</p>
      </div>
      <div class="d-flex">
        <p class="title">Explanation:</p>
        <p>nums=[2,7,11,15] ,target=9</p>
      </div>

    </div> -->


    <div class="Divider mt-4"></div>
    <div class="row mb-3">
      <div class="col d-flex">
        <font-awesome-icon :icon="['fas', 'tag']" class="i m-1" />
        <p style="color: var(--GreenColor);">tags:</p>
      </div>
      <div class=" col mt-0" style="text-align: end;">
        <p>
          <font-awesome-icon :icon="['fas', 'angle-down']" class="i" data-bs-toggle="collapse"
            data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1" />
        </p>
        </div>
        <div class="collapse" id="collapse1" style="justify-self: start; text-align: left;">
          <div class="d-flex" >
            <div class="spans me-4" v-for="tag in problem.tags">{{ tag.name }}</div>
            <!-- <div class="spans ">Hash Table</div> -->
          </div>
      </div>

    </div>
    <div class="Divider"></div>
    <div class="row mb-3">
      <div class="col d-flex">
        <font-awesome-icon :icon="['far', 'lightbulb']" class="i m-1" />
        <p style="color: var(--GreenColor);">Hints 1:</p>
      </div>
      <div class=" col mt-0" style="text-align: end;">
        <p>
          <font-awesome-icon :icon="['fas', 'angle-down']" class="i" data-bs-toggle="collapse"
            data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2" />
        </p>
        </div>
        <div class="collapse" id="collapse2" style="justify-self: start; text-align: left;">
          <div class="d-flex">
            <div class="spans me-4">{{ problem.hint1 }}</div>
          
          </div>
      </div>
    </div>
    <div class="Divider"></div>
    <div class="row mb-3">
      <div class="col d-flex">
        <font-awesome-icon :icon="['far', 'lightbulb']" class="i m-1"/>
        <p style="color: var(--GreenColor);">Hints 2:</p>
      </div>
      <div class=" col mt-0" style="text-align: end;">
        <p>
          <font-awesome-icon :icon="['fas', 'angle-down']" class="i" data-bs-toggle="collapse"
            data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3" />
        </p>
        </div>
        <div class="collapse" id="collapse3" style="justify-self: start; text-align: left;">
          <div class="d-flex">
            <div class="spans me-4">{{ problem.hint2 }}</div>
          
          </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props:{
    problem:{},
    test_case:{},
  },
  data(){
    return{

    }
  },
  methods: {
    toggleCollapse() {
      const collapseElement = document.getElementById('collapseExample');
      const isExpanded = collapseElement.getAttribute('aria-expanded') === 'true';
      collapseElement.setAttribute('aria-expanded', !isExpanded);
    }
  }
};
</script>

<style scoped>
.title {
  color: var(--GreenOpacity);
  margin-right: 10px;
}

p {
  margin: 0;
}

h6 {
  color: var(--GreenColor);
  font-weight: bold;
}

.i {
  color: var(--GreenColor);
}

.spans {
  background: var(--LightGreen);
  color: var(--GreenColor);
  padding: 5px;
  margin: 5px;
  border-radius: 15px;
}

.card-body {
  border: 1px solid var(--GreenOpacity);
  height: 100vh;
}

.Divider {
  border-top: 1px solid var(--LightGreen) !important;
  /* border-bottom: 1px solid  var(--LightGreen)!important; */
  /* height: 0.5px; */
  /* margin: 0px 100px; */
}
.btn {
    background: var(--GreenColor);
}
</style>
