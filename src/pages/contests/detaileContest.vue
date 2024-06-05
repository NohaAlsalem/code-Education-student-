<template>
  <div>
    <NavBar></NavBar>
    <div class="card-body container" style="height:100%;margin-top: 40px;margin-left: 20px; ">
      <div class="row">
        <div class="col-6">
          <h6 class="card-title m-3">Contest Name:</h6>
          <h5 class="card-title m-3">{{ contest.name }}</h5>
          <h6 class="card-title m-3 mt-5 ">Contest Description:
          </h6>
        </div>
        <div class="col-2"></div>
        <div class="col-4">
          <!-- <div class="d-flex">
            <h6 class="card-title m-3">you can start contest:</h6>
            <button type="button" class="btn   m-2 fw-b">
              Start Contest
            </button>
          </div> -->
          <div class="backg">
            <div class="row">
              <div class="col-6">
                <h6>Contest Data :</h6>
                <h6>Contest Time :
                </h6>
                <h6>Contest ID :</h6>
              </div>
              <div class="col-6">
                <p>{{ contest.start_at }}</p>
                <p>{{ contest.contest_time+'' }}</p>
                <p>{{ contest.id }}</p>
              </div>
            </div>

     
          </div>
        </div>
      </div>
      <div class="row ms-2 me-5 mt-3">
        <p class="card-text text-black">
          {{ contest.description }}
        </p>
      </div>
      <div class="row m-5">
        <div class="col-6">

          <table class="table table-bordered    narrow-table me-0">
            <thead>
              <tr>
                <th scope="col ">
                  <h6>
                    Problem list
                  </h6>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="problem in contest.problems" :key="problem.id">
                <td>
                  <router-link :to="{ name: 'detailProblem', params: { ProblemId: problem.id } }" style="  text-decoration: none;
  outline: none;
">
                    <p>
                      {{ problem.name }}
                      <!-- Matrix Similarity After Cyclic Shifts -->
                    </p>
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>

        </div>

        <div class="col-6">
          <table class="table  table-bordered narrow-table ms-0" style="border-radius: 10px;">
            <thead>
              <tr>
                <th scope="col">
                  <h6>
                    Ranking
                  </h6>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="student in students" :key="student.id">
                <td>
                  <div class="col">
                    <p>{{ student.name }}</p>
                  </div>
                  <div class="col mt-0" style="text-align: end;">
                    <p>{{ student.rank }}</p>
                  </div>

                 

                </td>

              </tr>

            </tbody>
          </table>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import { BASE_URL } from "@/assets/config";
import axios from 'axios';
export default {
  components: { NavBar },
  data() {
    return {
      ContestName: 'provide a better contest',
      ContestDate: '12/5/2020',
      ContestTime: '12:00:00',
      ContestId: '188',
      contest: {},
      students: [],

    };
  },
  mounted() {
    const ContestId = this.$route.params.ContestId;
    this.getcontest(ContestId);
  },


  methods: {
    getcontest(ContestId) {
      axios.get( BASE_URL +`contests/${ContestId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      }).then((response) => {
        this.contest = response.data.contest;
        this.students = response.data.students;
        console
      }).catch((error) => {
        console.log(error)
        this.errMessage = 'error retrieving data'
      })
    },
    selectButton(buttonNumber) {
      this.selectedButton = buttonNumber;
      if (this.selectedButton === 1) {
        this.description = true;
        this.solution = false;
      } else {
        this.solution = true;
        this.description = false;
      }
    },
  },
};
</script>

<style scoped>
.backg {
  background: var(--WhiteColor);
  border: 1px solid var(--borderColor);
  border-radius: 5px;
  padding: 10px;
  margin-right: 80px;
}

p {
  color: var(--GreenOpacity);
  margin: 0;
}

h6 {
  color: var(--GreenColor);
}

.btn {
  background: var(--GreenColor);
  color: white;
}

.table th {
  background: var(--darkwhite);

}

.table td {
  color: var(--GreenOpacity)
}

.narrow-table {
  width: 70%;
  /* Adjust the width as needed */
}

.rounded-table {
  border-collapse: separate;
  border-radius: 10px 10px;
  /* Adjust the value as needed */
  overflow: hidden;
}

.table {
  border: 1px solid var(--borderColor);
  /* border: none; */
  border-radius: 10px 0px;
}

.custom-button,
.btn:hover {
  color: var(--GreenColor);
  font-weight: bold;
}
</style>