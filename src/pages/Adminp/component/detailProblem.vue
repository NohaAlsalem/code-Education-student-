<template>
  <div class="card-body m-5 " style="border: none;">
    <div class="row mb-3">
      <div class="col">
    <h6>{{ exam.subject }}</h6>
  </div>
  <div class="col" >
    <h6> {{ exam.exam_date }}</h6>
  </div>
  </div>
    <h5 class="card-title">{{ problem.name }}</h5>
    <h6 class="card-title">{{ problem.diffculty }}</h6>
    <p class="card-text">
     {{ problem.description}}
    </p>
    <div class="ex mt-4" v-for="(test,index) in tests" :key="index">
      <h6 class="card-title" >Examble {{ index+1 }}</h6>
      <div class="d-flex">
        <p class="title">Input:</p>
        <p>{{ test.input }} </p>
      </div>
      <div class="d-flex">
        <p class="title">Output:</p>
        <p>{{test.output}}</p>
      </div>
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
        <div class="d-flex">
          <div class="spans me-4" v-for="tag in tags">{{ tag.name }}</div>
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
        <font-awesome-icon :icon="['far', 'lightbulb']" class="i m-1" />
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
      <div class="row">
        <div class="col-8">
      <div class="backg p-4 mt-5">
           
            <p>
              {{ exam.teacher_solve_code }}
            </p>
          </div>

        </div>
        <div class="col-4"></div>
      </div>
      <div class="choose mt-4">
        <h6>2.Choose the correct answer</h6>
        <div  v-for="(question,index) in questions" :key="question.id">
        <p> {{index+1 }} {{ question.question_text }}</p>
        <div class="radios ">
          <div class="form-check mt-0">
            <input class="form-check-input" type="radio" :name="'flexRadioDefault'+index" :id="'flexRadioDefault'+index">
            <p>{{question.choise1  }}</p>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio"  :name="'flexRadioDefault'+index" :id="'flexRadioDefault'+index" checked>
            <p>{{ question.choise2 }}</p>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio"  :name="'flexRadioDefault'+index" :id="'flexRadioDefault'+index" checked>
            <p>{{ question.choise3 }}</p>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio"  :name="'flexRadioDefault'+index" :id="'flexRadioDefault'+index" checked>
            <p>{{ question.choise4 }}</p>
          </div>
        </div>
        <!-- <p>2-What will be the output of the following code snippet</p>
        <div class="ps-2 p-1" style="background: black; color: white; width: 50%; height: auto;">
          <p>java</p>
          <p>int x=4</p>
        </div>

        <div class="radios mt-2 mb-5">
          <div class="form-check mt-0">
            <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1">
           
            <p>int x=10</p>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault2" checked>
            <p>x=10</p>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault2" checked>
            <p>x=10</p>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault2" checked>
            <p>x=10</p>
          </div>
        </div> -->
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'detailProblem',
  props: {
    exam: {},
    problem:{},
    tests:[],
    tags:[],
  
    questions:[],
  },
  data() {
    return {

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
.backg {
    background: var(--WhiteColor);
    padding: 5px;
    border-radius: 10px;
    border: 1px solid var(--borderColor);
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