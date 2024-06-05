<template>
    <div class="container text-center col-md-12" style="margin-top: 10px; margin-bottom: 10px">
      <div class="card text-start">
        <div class="card-header d-flex ">
          <h6 class="custom-button m-2">Language Information:</h6>
          <select class="drop" id="lnag" name="lang" v-model="formData.lang" placeholder="Lnguage" autocomplete="country-name" >
            <option class="opt" value="1">Java</option>
            <option class="opt" value="2">C++</option>
                  
                </select>

             
             


        </div>
        <div class="card-body">
          <textarea class="form-control" id="javaCode" rows="10" v-model="formData.code" @input="highlightCode"></textarea>
          <pre v-html="highlightedCode"></pre>
        </div>
        <div class="card-footer text-muted " style="justify-content: end;display: flex;">
          <button class="bttn m-1 mr-4" style="background: var( --WhiteColor); color: var(--GreenColor); padding: 1px 20px;">Run</button>
          <button class="bttn m-1" @click="Solve">Submit</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import 'prismjs/components/prism-java';
  import { BASE_URL } from "@/assets/config";
  import axios from 'axios';
  import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';
  export default {
    props:{
      problemId:Number,
    },
    data() {
      return {
      
        highlightedCode: '',
       formData:{
        code:'',
        lang:1,
     
           }
      }
    },

    methods: {


        toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
      },
     


      Solve(problemId) {
      //  if (this.isValidEmail && this.isValidPassword) {
      axios.post( BASE_URL + `problems/solve/${problemId}`,this.formData,{ headers: {
                     Authorization: `Bearer ${ localStorage.getItem('token')}`,
                 }})
        .then((response) => {
        console.log(response)
          // <router-link to="/home"></router-link>
        })
        .catch((error) => {
          console.log(error);
          this.error = error;
        });
    },
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



.editor {
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	gap: 0;
}

.editor pre,
.editor textarea {
	grid-area: 1 / 1 / 2 / 2;
}
pre,
.editor textarea {
	background-color: #f7f7f7;
	color: #272727;
	display: block;
	line-height: 1.5;
	margin: 0 0 1.5625em;
	overflow: auto;
	padding: 0.8125em;
	white-space: pre-wrap;
	word-break: break-all;
}

code {
	word-wrap: break-word;
}

pre,
code,
.editor textarea {
	font-family: Menlo, Monaco, "Courier New", monospace;
	font-size: 0.875em;
}

pre code {
	color: inherit;
	font-size: 1em;
}
.editor textarea {
	background-color: transparent;
	border: none;
	color: transparent;
	caret-color: #000;
	overflow: hidden;
	resize: none;
	width: 100%;
}








/* <pre><code class="language-javascript">
function helloWorld() {
  int x=1;
  cout>>frcedui
  console.log('Hello, world!');
}
</code></pre> */
.hljs {
  display: block;
  padding: 0.5em;
  background: #f5f5f5;
  color: #333;
}
.hljs-comment,
.hljs-quote {
  color: #777;
  font-style: italic;
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-name {
  color: #007acc;
}
.hljs-attribute,
.hljs-meta {
  color: #f08d49;
}
.hljs-number,
.hljs-regexp,
.hljs-link {
  color: #d36363;
}
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-subst {
  color: #50a14f;
}
.hljs-title,
.hljs-section {
  color: #4078f2;
}
.hljs-emphasis {
  font-style: italic;
}
.hljs-strong {
  font-weight: bold;
}
  </style>
  