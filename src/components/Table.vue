<template>
    
  <div class="col-12">
    <div class="card ms-5">
      <div class="card-body pb-0">
        <table class="table table-borderless " >
          <thead>
            <tr>
              <th scope="col" class="headt">#</th>
              <th scope="col" class="headt">Title</th>
              <th scope="col" class="headt">Statuse</th>
              <th scope="col" class="headt">Difficulty</th>
              <th scope="col" class="headt">Level</th>
              <th scope="col" class="headt">Num of solutions</th>
            </tr>
            <tr class="Divider"></tr>
          </thead>
        
          <tbody>
          
            <tr v-for="problem in problems" :key="problem.id">
              <th scope="row">{{ problem.id }}</th>

              <td><router-link :to="{ name: 'detailProblem', params: { ProblemId: problem.id } }" class="text-primary fw-bold">{{ problem.name }}</router-link></td>
              <td ><p v-if="problem.active==0">not Solved</p>
                <p v-else> Solved</p></td>
              <td>{{ problem.diffculty }}</td>
              <td class="fw-bold">{{ problem.level }}</td>
              <td>{{ problem.solutions }}</td>
            </tr>
           
          </tbody>
        </table>

      </div>

    </div>
  </div>


  </template>
  
  <script>
    export default {
      props: {
    problems: {
      type: Array,
      required: true,
      default: () => []
    },},
      data() {
        return {
         
        }
      }
    }
  </script>

<style scoped>
.card{
  margin-right:20rem;
  border: 0;
 
}
.table .Divider {
 
    border-top: 1px solid var(--LightGreen) !important;
 
    margin: 100px 100px;
}

.table .headt{
    color: var(--GreenColor);
    margin-bottom: 0;
}

</style>