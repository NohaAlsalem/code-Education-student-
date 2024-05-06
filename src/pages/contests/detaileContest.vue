<template>
  <div >
    <NavBar></NavBar>
    <div class="card-body container" style="height:100%;margin-top: 40px;margin-left: 20px; ">
      <div class="row">
        <div class="col-6">
          <h6 class="card-title m-3">Contest Name:</h6>
          <h5 class="card-title m-3">{{ ContestName }}</h5>
          <h6 class="card-title m-3 mt-5 ">Contest Description:
          </h6>
        </div>
        <div class="col-2"></div>
        <div class="col-4">
          <div class="d-flex">
            <h6 class="card-title m-3">you can start contest:</h6>
            <button type="button" class="btn   m-2 fw-b">
              Start Contest
            </button>
          </div>
          <div class="backg">
            <div class="row">
              <div class="col-6">
                <h6>Contest Data :</h6>
                <h6>Contest Time :
                </h6>
                <h6>Contest Time :</h6>
              </div>
              <div class="col-6">
                <p>{{ ContestDate }}</p>
                <p>{{ ContestTime }}</p>
                <p>{{ ContestTime }}</p>
              </div>
            </div>

            <!-- <div class="row m-0">
              <div class="col"><h6>Contest Data :</h6></div>
              <div class="col"><p>{{ ContestDate }}</p></div>
              <div class="w-100"></div>
              <div class="col "><h6>Contest Time :</h6></div>
              <div class="col "><p>{{ ContestTime }}</p></div>
              <div class="w-100 mb-0"></div>
              <div class="col  "><h6> Id</h6></div>
              <div class="col  "><p>{{ ContestId }}</p></div>
            </div> -->
          </div>
        </div>
      </div>
      <div class="row ms-2 me-5 mt-3">
        <p class="card-text text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, amet
          dolor? Ab neque quam reprehenderit vero, fugiat laudantium doloribus unde
          necessitatibus, consequuntur nisi dolorem? Dolor accusamus vero autem, sit
          culpa nam repellendus minima optio rerum dolore qui a deleniti minus illo
          iure sed facilis et veritatis recusandae consequuntur! Itaque omnis
          voluptas modi facere, enim, non, maxime rem obcaecati exercitationem quasi
          suscipit placeat doloremque. Ut, quis quasi? Hic enim distinctio sequi
          perspiciatis molestiae, vel vero. Pariatur, tempora ratione est obcaecati
          quasi amet magnam veniam temporibus nostrum laboriosam, consectetur, iste
          a odio et. Laborum quia placeat neque suscipit autem dolores nam ipsam.

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, amet
          dolor? Ab neque quam reprehenderit vero, fugiat laudantium doloribus unde
          necessitatibus, consequuntur nisi dolorem? Dolor accusamus vero autem, sit
          culpa nam repellendus minima optio rerum dolore qui a deleniti minus illo
          iure sed facilis et veritatis recusandae consequuntur! Itaque omnis
          voluptas modi facere, enim, non, maxime rem obcaecati exercitationem quasi
          suscipit placeat doloremque. Ut, quis quasi? Hic enim distinctio sequi
          perspiciatis molestiae, vel vero. Pariatur, tempora ratione est obcaecati
          quasi amet magnam veniam temporibus nostrum laboriosam, consectetur, iste
          a odio et. Laborum quia placeat neque suscipit autem dolores nam ipsam.

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, amet
          dolor? Ab neque quam reprehenderit vero, fugiat laudantium doloribus unde
          necessitatibus, consequuntur nisi dolorem? Dolor accusamus vero autem, sit
          culpa nam repellendus minima optio rerum dolore qui a deleniti minus illo
          iure sed facilis et veritatis recusandae consequuntur! Itaque omnis
          voluptas modi facere, enim, non, maxime rem obcaecati exercitationem quasi
          suscipit placeat doloremque. Ut, quis quasi? Hic enim distinctio sequi
          perspiciatis molestiae, vel vero. Pariatur, tempora ratione est obcaecati
          quasi amet magnam veniam temporibus nostrum laboriosam, consectetur, iste
          a odio et. Laborum quia placeat neque suscipit autem dolores nam ipsam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, amet
          dolor? Ab neque quam reprehenderit vero, fugiat laudantium doloribus unde
          necessitatibus, consequuntur nisi dolorem? Dolor accusamus vero autem, sit
          culpa nam repellendus minima optio rerum dolore qui a deleniti minus illo
          iure sed facilis et veritatis recusandae consequuntur! Itaque omnis
          voluptas modi facere, enim, non, maxime rem obcaecati exercitationem quasi
          suscipit placeat doloremque. Ut, quis quasi? Hic enim distinctio sequi
          perspiciatis molestiae, vel vero. Pariatur, tempora ratione est obcaecati
          quasi amet magnam veniam temporibus nostrum laboriosam, consectetur, iste
          a odio et. Laborum quia placeat neque suscipit autem dolores nam ipsam.
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
                <tr>
                    <td>
                        
                        <router-link to="/problems" style="text-decoration: none; color: inherit;">
                        <p>
                            Matrix Similarity After Cyclic Shifts
                        </p>
                        </router-link>
                    </td>
                    <!-- <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td> -->
                </tr>
                <tr>
                    <td>
                        
                        <router-link to="/problems" style="text-decoration: none; color: inherit;">
                        <p>
                            Count Beautiful Substring |
                        </p>
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <td>
                        
                        <router-link to="/contests" style="text-decoration: none; color: inherit;">
                        <p>
                            Make Lexicographically Smallest Array by Swapping Elements
                        </p>
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <td>
                        
                        <router-link to="/contests" style="text-decoration: none; color: inherit;">
                        <p> Count Beautiful Substring ||
                        </p>
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>
                            Make Lexicographically Smallest Array by Swapping Elements
                        </p>
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
                <tr>
                    <td>
                        
                     
                        <p>
                            abd
                        </p>
                       
                    </td>
                
                </tr>
                <tr>
                    <td>
                        
                        <p>
                            loujain
                        </p>
                       
                    </td>
                </tr>
                <tr>
                    <td>
                        
                        
                        <p>
                           moazz
                        </p>
                     
                    </td>
                </tr>
                <tr>
                    <td>
                        
                      
                        <p>Noha
                        </p>
                   
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>
                            kassem
                        </p>
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
export default {
  components: { NavBar },
  data() {
    return {
      ContestName: 'provide a better contest',
      ContestDate: '12/5/2020',
      ContestTime: '12:00:00',
      ContestId: '188'

    };
  },
  methods: {
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
        width: 70%; /* Adjust the width as needed */
    }
.rounded-table {
        border-collapse: separate;
        border-radius: 10px 10px; /* Adjust the value as needed */
        overflow: hidden;
}
.table {
  border:1px solid var(--borderColor) ;
  /* border: none; */
    border-radius: 10px 0px;
}

.custom-button,
.btn:hover {
  color: var(--GreenColor);
  font-weight: bold;
}
</style>