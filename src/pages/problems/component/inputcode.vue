<template>
    <div class="container text-center col-md-12" style="margin-top: 10px; margin-bottom: 10px">
      <div class="card text-start">
        <div class="card-header d-flex ">
          <h6 class="custom-button m-2">Language Information:</h6>
          <select class="drop" id="lnag" name="lang" v-model="Language" placeholder="Lnguage" autocomplete="country-name">
            <option class="opt">Java</option>
            <option class="opt">C++</option>
                  <!-- <option v-for="star in stars" :key="star.id" :value="star.id" >{{ star.name }}
                  </option> -->
                  <!-- <p>The selected fruit IDs are {{ selectedstarId }}.</p> -->
                </select>
          <!-- <button @click="switchLanguage('java')">Java</button> -->
        </div>
        <div class="card-body">
          <textarea class="form-control" id="javaCode" rows="10" v-model="code" @input="highlightCode"></textarea>
          <pre v-html="highlightedCode"></pre>
        </div>
        <div class="card-footer text-muted">
            <!-- Footer content goes here -->
            This is the footer of the card.
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import 'prismjs/components/prism-java'
  
  export default {
    data() {
      return {
        code: '',
        highlightedCode: '',
        Language:'Java',
      }
    },
    methods: {
        toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
      },
      highlightCode() {
        this.highlightedCode = Prism.highlight(this.code, Prism.languages.java, 'java');
      },
      switchLanguage(language) {
      
      }
    }
  };
  </script>
  
  <style scoped>
  .card{
    border: 1px solid var(--GreenOpacity);
  }
  .drop{
    background: var(--darkwhite);
    border: none;
    color: var(--GreenColor);
    border-radius: 5px;
  }
  .opt{
    background: var(--WhiteColor);
  }
  .card-body {
    border: 1px solid var(--GreenOpacity);
    height: 100vh;
  }
  .custom-button {
    color: var(--GreenColor);
    font-weight: bold;
  }
  .Divider {
  border-top: 1px solid var(--LightGreen) !important;

}
  </style>
  