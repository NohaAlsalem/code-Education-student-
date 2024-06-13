<template>
  <div>
    <NavBarA></NavBarA>
    <div class="container ms-2 mt-4">
      <div class="row">
        <div class="col-8" style="height:100vh; overflow-y: auto">
          <h6 class="ms-3">My test</h6>

          <div class="card ms-0" style="border: none;">
            <div class="card-body pb-0">
              <!-- <h5 class="card-title">Top Selling <span>| Today</span></h5> -->

              <table class="table table-borderless ">
                <thead>
                  <tr>
                    <th scope="col">#id</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">E-mail</th>
                  </tr>

                </thead>

                <tbody>

                  <tr>
                    <td scope="row">gjnk</td>

                    <!-- <td>
                <router-link :to="{ name: 'detailProblem', params: { ProblemId: problem.id } }" class="text-primary fw-bold">{{ problem.name }}</router-link>
            </td> -->
                    <td>
                      <p>not Solved</p>
                    </td>
                    <td>dd</td>
                    <td class="fw-bold">kcj</td>
                    <td>gokd</td>
                  </tr>

                </tbody>
              </table>


            </div>
          </div>


        </div>
        <div class="col-4">
          <div class="mb-4">
            <h6>Forget password requests</h6>
            <div class="card" style="border-radius: 0;">
              <table class="table table-borderless w-100">
                <thead>
                  <tr>
                    <th class="col-8">name</th>

                    <th class="col-4">operation</th>
                  </tr>
                  <!-- <tr class="Divider"></tr> -->
                </thead>

                <tbody>

                  <tr class="mb-3">
                    <td class="col-8">name</td>

                    <td class="col-4">
                      <button class="btn">Generate</button>
                      <!-- <p>not Solved</p> -->
                    </td>
                  </tr>
                  <tr class="mb-3">
                    <td class="col-8">name</td>

                    <td class="col-4">
                      <button type="button" class="btn" data-bs-toggle="modal"
                        data-bs-target="#generateModal">Generate</button>
                      <!-- <p>not Solved</p> -->
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- modal generate -->
              <div class="modal fade p-5" id="generateModal" aria-hidden="true" style="background: var(--whiteColor);">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content m-5">
                    <div class="modal-header d-flex">

                      <h6 class="modal-title me-2">Student name :</h6>
                      <h6 class="modal-title ">name</h6>
                    </div>
                    <div class="modal-body" style="justify-content: center;">
                      <p>Enter password</p>
                      <input class="w-100 mb-2">
                      <button class="btn" data-bs-dismiss="modal">Generate</button>
                    </div>

                  </div>
                </div>
              </div>



            </div>
          </div>

          <div>
            <h6>Change class requests</h6>
            <div class="card " style="border-radius: 0;">
              <table class="table table-borderless w-100">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Class</th>
                    <th scope="col">New Class</th>
                  </tr>

                </thead>

                <tbody>

                  <tr class="trow" data-bs-toggle="modal" data-bs-target="#classModal">
                    <td scope="row">gjnk</td>
                    <td>dd</td>
                    <td>kcj</td>
                    <td>gokd</td>
                  </tr>
                  <tr class="trow" data-bs-toggle="modal" data-bs-target="#classModal">
                    <td scope="row">gjnk</td>
                    <td>dd</td>
                    <td>kcj</td>
                    <td>gokd</td>
                  </tr>
                   <tr class="trow m-5" data-bs-toggle="modal" data-bs-target="#classModal">
                    <td >gjnk</td>
                    <td>dd</td>
                    <td>kcj</td>
                    <td>gokd</td>
                  </tr>

                </tbody>
              </table>

              <div class="modal fade p-5" id="classModal" aria-hidden="true" >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content m-5" >

                    <div class="modal-body" style="justify-content: center;">
                      <div class=" d-flex">
                        <h6 class=" me-2 mt-1">name :</h6>
                        <h7>name</h7>
                      </div>
                      <div class=" d-flex">
                        <h6 class=" me-2 mt-1">subject :</h6>
                        <h7>sub</h7>
                      </div>
                      <div class=" d-flex ">
                        <div class="d-flex me-5">
                          <h6 class=" me-2 mt-1">old class :</h6>
                          <h7>old</h7>
                        </div>
                        <div class="d-flex ms-5">
                          <h6 class=" me-2 mt-1">new class :</h6>
                          <h7>new</h7>
                        </div>
                    </div>
                    <h6 class=" mt-1">the reason :</h6>
                    <input class="w-100 mb-2">
                    <button class="btn" data-bs-dismiss="modal">Agree</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import NavBarA from './component/NavBarA.vue';
export default {
  components: {
    NavBarA
  },
  data() {
    return {
      NumberOfTest: 'first test',
      NumberOfClass: 'class2',
      TecherName: 'noha',
      SubjectName: 'programming',
      MySubjectName: 'programming',
      MyNumberOfClass: 'class22',
      material: 'programming1',
      numberc: 1,
    }
  }
}
</script>

<style scoped>
p {
  color: var(--GreenOpacity);
}

h6 {
  color: var(--GreenColor);
}

.table th {
  background: var(--GreenColor);
  color: white;
}

.table .trow td {
  /* background: var(--WhiteColor); */
  padding: 5px;

}

.btn {
  border-radius: 10px;
  background: var(--GreenColor);
  padding: 2px 10px;
  border: 0;
  color: white;
}

.backg {
  background: var(--WhiteColor);
  padding: 10px;
  border-radius: 10px;
}
</style>