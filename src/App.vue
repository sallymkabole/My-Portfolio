<!-- eslint-disable -->
<template>
  <v-app>
    <v-app-bar color="#153956" app flat>
      <div class="d-flex align-center">
        <h5>SALLY MUSANGA KABOLE</h5>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        x-small
        href="https://github.com/sallymkabole"
        target="_blank"
        text
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn
        x-small
        href="https://www.linkedin.com/in/sally-musanga-55b354a5"
        target="_blank"
        text
      >
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
      <v-btn
        x-small
        href="https://twitter.com/sallythetechie"
        target="_blank"
        text
      >
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid fill-height class="bg">
         <v-card flat max-width="1000" color="#153956"  class="profile mx-auto">
           <v-row >
          <v-col md="6" xs="12" sm="12">
            <p class="text-h4  pin ">
          Hello World  ,
        </p>
         <p class="white--text">
         My name is <strong class="text-h6">Sally Musanga</strong>. I'm a passionate problem solver that brings an engineering perspective and creative problem solving to create products and experiences people love to use.My speciality is in website development where I have intermediate experience using React & VueJs for frontend and Python for the backend.
        </p>
        <v-btn  class="btn" color="#fff" outlined> Get in Touch</v-btn>
          </v-col>
          <v-col md="6" xs="12" sm="12">
                   <img class="avt" src="./assets/img/sally.png">

          </v-col>
        </v-row>
        <v-row >
          <v-col md="12" xs="12" sm="12">
              <p class="text-h5  pin ">
          About Me
        </p>
            <v-card flat class="abt pa-4">
             
        <p class="white--text">
          I'm a front-end web developer with a background in Statistics. My experience has given me a strong foundation for web development and building complex solutions. Recently, I graduated from the Mest Africa's Software Entrepreneurship Training Program. I am passionate about coding and solving problems through code, and I am excited to work alongside other amazing programmers and learn so much more!
        </p>
            </v-card>
          </v-col>
         
        </v-row>
        <v-row  >
           
          <v-col md="12" xs="12" sm="12">
              <p class="text-h5  pin ">
          Skills
        </p>
            <v-card flat class="abt pa-8">
             
        
        <v-row class="d-flex justify-space-around pa-2">
         <v-icon x-large color="#E44D26">mdi-language-html5</v-icon>
         
         <v-icon color="#384DE4" x-large>mdi-language-css3</v-icon>
         <v-icon color="#F6DF24" x-large>mdi-language-javascript</v-icon>
         <v-icon color="#6ADBFB" x-large>mdi-react</v-icon>
        </v-row>
        <v-row class="justify-space-around pa-2">
         <v-icon color="#fff" x-large>mdi-responsive</v-icon>
         <v-icon color="#346AA1" x-large>mdi-jquery</v-icon>
          <v-icon color="#265078" x-large>mdi-language-python</v-icon>
         <v-icon color="#000" x-large>mdi-database-search</v-icon>
        </v-row>
        
       
            </v-card>
          </v-col>
         
        </v-row>
        <v-row >
          <v-col md="12" xs="12" sm="12">
              <p class="text-h5 pin  ">
          Projects
        </p>
            <v-card class="projects pa-4">
            
        <v-row>
          <v-col md="4" xs="12" sm="12">
            <img src="./assets/img/bakery.png" width="200" alt="">
          </v-col>
          <v-col md="8" xs="12" sm="12"><h1 class="bg">The Bakery</h1>
          <p class="bg">A simple landing page for online bakery made with Vue JS . Shop, add to your cart, and see your total.</p>
          <h3 class="bg">Tech Used : VueJs, Flask, Postgres</h3>
          <span class="d-flex d-inline-flex"><h3 class="bg mr-4"><a target="_blank" href="https://bakery-web.netlify.app/">LIVE SITE</a></h3><h3 class="bg"><a target="_blank" href="https://github.com/sallymkabole/vue-bakery-web">GITHUB</a></h3></span></v-col>
        </v-row>
        <v-row>
          <v-col md="8" xs="12" sm="12"><h1 class="bg">Movein</h1>
          <p class="bg">A web platform that enables user search for houses in given locations, book, and pay deposit if they like the house.</p>
          <h3 class="bg">Tech Used : VueJs, Flask, Postgres</h3>
          <span class="d-flex d-inline-flex"><h3 class="bg mr-4"><a target="_blank" href="https://movein-cli.herokuapp.com/">LIVE SITE</a></h3><h3 class="bg"><a target="_blank" href="https://github.com/LagunaAfrika/movein-client">GITHUB</a></h3></span></v-col>
          <v-col md="4" xs="12" sm="12">
            <img src="./assets/img/movein.png" width="200" alt="">
          </v-col>
        </v-row>
        <v-row>
          <v-col md="4" xs="12" sm="12">
            <img src="./assets/img/sally.png" width="200" alt="">
          </v-col>
          <v-col md="8" xs="12" sm="12"><h1 class="bg">Movein</h1>
          <p class="bg">A web platform that enables user search for houses in given locations, book, and pay deposit if they like the house.</p>
          <h3 class="bg">Tech Used : VueJs, Flask, Postgres</h3>
          <span class="d-flex d-inline-flex"><h3 class="bg mr-4"><a target="_blank" href="https://bakery-web.netlify.app/">LIVE SITE</a></h3><h3 class="bg"><a target="_blank" href="https://bakery-web.netlify.app/">GITHUB</a></h3></span></v-col>
        </v-row>
            </v-card>
          </v-col>
         
        </v-row>
        <v-row  >
           
          <v-col md="12" xs="12" sm="12">
              <p class="text-h5  pin ">
          Experience
        </p>
            <v-card flat class="abt pa-8">
             
        
       
        <v-row class=" pa-2">
         <v-col cols="12" class="d-flex flex-column">
          <v-row  class="d-flex d-inline-flex "><v-icon color="#f2a278">mdi-account-hard-hat</v-icon><h3 class="pin">Freelance Software Developer</h3>
</v-row >
          <v-row  class="d-flex d-inline-flex"><v-icon color="#fff">mdi-clock</v-icon><h3 class="bg">September 2020 - Present</h3></v-row >
          <v-row  class="d-flex d-inline-flex"><v-icon color="#fff">mdi-stack-overflow</v-icon><h3 class="bg">VueJs, React, Flask, Postgresql</h3></v-row >
          <v-row  class="d-flex d-inline-flex">
             <ul>
              <li>
                <h3 class="bg">Developed progressive web applications with cross browser / cross device capabilities.</h3>
              </li>
              <li>
                <h3 class="bg">Designed and developed location based app using VueJs(Nuxt) , Vuetify for frontend and Flask, Postgres for the backend</h3>
              </li>
              <li>
                <h3 class="bg">Implemented push notification feature using Firebase Cloud Messaging</h3>
              </li>
              
            </ul></v-row >
          
         </v-col>
        </v-row>
        <v-row class=" pa-2">
         <v-col cols="12" class="d-flex flex-column">
          <v-row  class="d-flex d-inline-flex"><v-icon color="#f2a278">mdi-account-hard-hat</v-icon><h3 class="pin">FrontEnd Developer</h3>
</v-row >
          <v-row  class="d-flex d-inline-flex"><v-icon color="#fff">mdi-office-building</v-icon><h3 class="bg">Mest Africa , Ghana</h3></v-row >
                    <v-row  class="d-flex d-inline-flex"><v-icon color="#fff">mdi-clock</v-icon><h3 class="bg">August 2019 - August 2020</h3></v-row >
          <v-row  class="d-flex d-inline-flex"><v-icon color="#fff">mdi-stack-overflow</v-icon><h3 class="bg">VueJs, Flask, Postgresql</h3></v-row >
          <v-row  class="d-flex d-inline-flex">
            <ul>
              <li>
                <h3 class="bg">Designed and developed a user friendly mobile-first rental platform built with VueJs for the frontend, Python(Flask) for the backend and Postgres as the database.</h3>
              </li>
              <li>
                <h3 class="bg">Worked in a team to create a sales automation software for fmcg companies using Vue Js and MongoDB.</h3>
              </li>
            </ul>
              </v-row >
              <v-row  class="d-flex d-inline-flex"><v-icon color="#f2a278">mdi-account-hard-hat</v-icon><h3 class="pin">Intern Developer</h3>
</v-row >
          <v-row  class="d-flex d-inline-flex"><v-icon color="#fff">mdi-office-building</v-icon><h3 class="bg">Edgetech Consults Ltd , Kenya</h3></v-row >
                    <v-row  class="d-flex d-inline-flex"><v-icon color="#fff">mdi-clock</v-icon><h3 class="bg">October 2018 - March 2020</h3></v-row >
          <v-row  class="d-flex d-inline-flex"><v-icon color="#fff">mdi-stack-overflow</v-icon><h3 class="bg">Python, Flask, Mysql</h3></v-row >
          <v-row  class="d-flex d-inline-flex">
            <ul>
              <li>
                <h3 class="bg"> Customized an ERP system for the Company</h3>
              </li>
              <li>
                <h3 class="bg"> Used Python to visualize system performance for an SMS </h3>
              </li>
            </ul>
              </v-row >
          
         </v-col>
        </v-row>
        
       
            </v-card>
          </v-col>
         
        </v-row>
        
        <v-row >
          
        </v-row>
        
         </v-card>
      </v-container>
    </v-main>
    <template>
  <v-footer color="#142E4D" padless>
    <v-col
      class="text-center white--text"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>SMK</strong>
    </v-col>
  </v-footer>
</template>
  </v-app>

</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      errors: [],
      valid: false,
      userInfo: {
        fname: '',
        lname: '',
        email: '',
        phone: null,
        password: '',
        age: '',
      },
      number: 0,
      emailrules: {
        required: (value) => !!value || 'Required.',
        counter: (value) => value.length <= 20 || 'Max 20 characters',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid e-mail.';
        },
      },
      show1: false,
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
        // emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
};
</script>
<style scoped>
.btn{
    background-color: #f07b61;
    border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px #142E4D;
}
.abt{
 border: 4px solid #142E4D !important;
 background: transparent !important;
}
.projects{
  background: transparent !important;
  border: 2px solid #f2a278 !important;
}
.bg {
  background-color: #153956;
  color: #f5f2e8;
  font-family: 'Sen', sans-serif;
}
.pin {
  color: #f2a278 !important;
}
.signup {
  background: transparent;
}
.avt {
  position: relative;
  width: 300px;
  height: 300px;
  border: 2px solid #fff;
  border-radius: 50%;
}

.avt::after {
  content: '';
  width: 300px;
  height: 300px;
  border: 1px solid #fff;
  border-radius: 50%;
  display: block;
  margin: -4px 2px;
}

</style>
