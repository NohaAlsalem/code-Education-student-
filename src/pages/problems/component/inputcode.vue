<template>
    <div class="container text-center col-md-12" style="margin-top: 10px; margin-bottom: 10px">
      <div class="card text-start">
        <div class="card-header d-flex ">
          <h6 class="custom-button m-2">Language Information:</h6>
          <select class="drop" id="lnag" name="lang" v-model="Language" placeholder="Lnguage" autocomplete="country-name">
            <option class="opt">Java</option>
            <option class="opt">C++</option>
                  
                </select>

        </div>
        <div class="card-body">
          <textarea class="form-control" id="javaCode" rows="10" v-model="code" @input="highlightCode"></textarea>
          <pre v-html="highlightedCode"></pre>
        </div>
        <div class="card-footer text-muted " style="justify-content: end;display: flex;">
          <button class="bttn m-1 mr-4" style="background: var( --WhiteColor); color: var(--GreenColor); padding: 1px 20px;">Run</button>
          <button class="bttn m-1">Submit</button>
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
    height: 93vh;
  }
  .custom-button {
    color: var(--GreenColor);
    font-weight: bold;
  }
  /* .btn {
    background: var( --LightGreen);
    padding: 0px 2px;
} */
.bttn {
    background: var(--GreenColor);
    color: white;
    padding: 0 20px;
    border-radius: 10px;
    border: none;
}
.custom-button,
.btn:hover
{
    color: var(--GreenColor);
    font-weight: bold;
}
.bttn:hover {
    /* color: var(--GreenColor); */
    font-weight: bold;
    /* color: aliceblue; */
}
  </style>
  