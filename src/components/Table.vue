<template>
     <!-- Top Selling -->
  <div class="col-12">
    <div class="card ms-5">

      <!-- <div class="filter">
        <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
          <li class="dropdown-header text-start">
            <h6>Filter</h6>
          </li>

          <li><a class="dropdown-item" href="#">Today</a></li>
          <li><a class="dropdown-item" href="#">This Month</a></li>
          <li><a class="dropdown-item" href="#">This Year</a></li>
        </ul>
      </div> -->

      <div class="card-body pb-0">
        <!-- <h5 class="card-title">Top Selling <span>| Today</span></h5> -->

        <table class="table table-borderless ">
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
            <!-- <tr>
              <th scope="row">
                <p>{{ '#' }}</p></th>
              <td><p>{{ title }}</p></td>
              <td><p>{{ Statuse }}</p></td>
              <td class="fw-bold"><p>{{ Difficulty }}</p></td>
              <td><p>{{ level }}</p></td>
              <td><p>{{ Num of solutions }}</p></td>
            </tr> -->
            <tr>
              <th scope="row"><a href="#"><img src="assets/img/product-2.jpg" alt=""></a></th>
              <td><a href="#" class="text-primary fw-bold">doloremque</a></td>
              <td>$46</td>
              <td class="fw-bold">98</td>
              <td>$4,508</td>
            </tr>
            <tr>
              <th scope="row"><a href="#"><img src="assets/img/product-2.jpg" alt=""></a></th>
              <td><a href="#" class="text-primary fw-bold">doloremque</a></td>
              <td>$46</td>
              <td class="fw-bold">98</td>
              <td>$4,508</td>
            </tr>  <tr>
              <th scope="row"><a href="#"><img src="assets/img/product-2.jpg" alt=""></a></th>
              <td><a href="#" class="text-primary fw-bold">doloremque</a></td>
              <td>$46</td>
              <td class="fw-bold">98</td>
              <td>$4,508</td>
            </tr>  <tr>
              <th scope="row"><a href="#"><img src="assets/img/product-2.jpg" alt=""></a></th>
              <td><a href="#" class="text-primary fw-bold">doloremque</a></td>
              <td>$46</td>
              <td class="fw-bold">98</td>
              <td>$4,508</td>
            </tr>  <tr>
              <th scope="row"><a href="#"><img src="assets/img/product-2.jpg" alt=""></a></th>
              <td><a href="#" class="text-primary fw-bold">doloremque</a></td>
              <td>$46</td>
              <td class="fw-bold">98</td>
              <td>$4,508</td>
            </tr>
            <tr>
              <th scope="row"><a href="#"><img src="assets/img/product-3.jpg" alt=""></a></th>
              <td><a href="#" class="text-primary fw-bold">tationem</a></td>
              <td>$59</td>
              <td class="fw-bold">74</td>
              <td>$4,366</td>
            </tr>
            <tr>
              <th scope="row"><a href="#"><img src="assets/img/product-4.jpg" alt=""></a></th>
              <td><a href="#" class="text-primary fw-bold"> rerum error</a></td>
              <td>$32</td>
              <td class="fw-bold">63</td>
              <td>$2,016</td>
            </tr>
            <tr>
              <th scope="row"><a href="#"><img src="assets/img/product-5.jpg" alt=""></a></th>
              <td><a href="#" class="text-primary fw-bold"> repellendus</a></td>
              <td>$79</td>
              <td class="fw-bold">41</td>
              <td>$3,239</td>
            </tr>
            <tr>
              <th scope="row"><a href="#"><img src="assets/img/product-5.jpg" alt=""></a></th>
              <td><a href="#" class="text-primary fw-bold">s repellendus</a></td>
              <td>$79</td>
              <td class="fw-bold">41</td>
              <td>$3,239</td>
            </tr>
            <tr>
              <th scope="row"><a href="#"><img src="assets/img/product-5.jpg" alt=""></a></th>
              <td><a href="#" class="text-primary fw-bold">repellendus</a></td>
              <td>$79</td>
              <td class="fw-bold">41</td>
              <td>$3,239</td>
            </tr>
            <tr>
              <th scope="row"><a href="#"><img src="assets/img/product-5.jpg" alt=""></a></th>
              <td><a href="#" class="text-primary fw-bold">epellendus</a></td>
              <td>$79</td>
              <td class="fw-bold">41</td>
              <td>$3,239</td>
            </tr>
            <tr>
              <th scope="row"><a href="#"><img src="assets/img/product-5.jpg" alt=""></a></th>
              <td><a href="#" class="text-primary fw-bold"> repellendus</a></td>
              <td>$79</td>
              <td class="fw-bold">41</td>
              <td>$3,239</td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  </div>
  <!-- End Top Selling -->

  </template>
  
  <script>
    export default {
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