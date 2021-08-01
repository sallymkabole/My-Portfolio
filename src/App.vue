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
          Hi, I’m Musanga Sally Kabole, a FrontEnd Developer
        </p>
        <p class="white--text">
          By day I design GitLab, an open-core DevOps platform. By night I do
          digital illustration. Creative expression is what lights me up, and
          I'm always open to learning about new opportunities.
        </p>
        <v-btn color="#fff" outlined> Get in Touch</v-btn>
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
          I'm a front-end web developer with a background in computer systems and network infrastructure. My 8 years of IT experience has given me a strong foundation for web development and building complex solutions. Recently, I graduated from the Juno College Immersive Web Development Bootcamp. I am passionate about coding and solving problems through code, and I am excited to work alongside other amazing programmers and learn so much more!
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
            <img src="./assets/img/sally.png" width="200" alt="">
          </v-col>
          <v-col md="8" xs="12" sm="12"><h1 class="bg">The Bakery</h1>
          <p class="bg">A web platform that enables user search for houses in given locations, book, and pay deposit if they like the house.</p>
          <h3 class="bg">Tech Used : VueJs, Flask, Postgres</h3>
          <span class="d-flex d-inline-flex"><h3 class="bg mr-4"><a href="https://bakery-web.netlify.app/">LIVE SITE</a></h3><h3 class="bg"><a href="https://bakery-web.netlify.app/">GITHUB</a></h3></span></v-col>
        </v-row>
        <v-row>
          <v-col md="8" xs="12" sm="12"><h1 class="bg">Movein</h1>
          <p class="bg">A web platform that enables user search for houses in given locations, book, and pay deposit if they like the house.</p>
          <h3 class="bg">Tech Used : VueJs, Flask, Postgres</h3>
          <span class="d-flex d-inline-flex"><h3 class="bg mr-4"><a href="https://bakery-web.netlify.app/">LIVE SITE</a></h3><h3 class="bg"><a href="https://bakery-web.netlify.app/">GITHUB</a></h3></span></v-col>
          <v-col md="4" xs="12" sm="12">
            <img src="./assets/img/sally.png" width="200" alt="">
          </v-col>
        </v-row>
        <v-row>
          <v-col md="4" xs="12" sm="12">
            <img src="./assets/img/sally.png" width="200" alt="">
          </v-col>
          <v-col md="8" xs="12" sm="12"><h1 class="bg">Movein</h1>
          <p class="bg">A web platform that enables user search for houses in given locations, book, and pay deposit if they like the house.</p>
          <h3 class="bg">Tech Used : VueJs, Flask, Postgres</h3>
          <span class="d-flex d-inline-flex"><h3 class="bg mr-4"><a href="https://bakery-web.netlify.app/">LIVE SITE</a></h3><h3 class="bg"><a href="https://bakery-web.netlify.app/">GITHUB</a></h3></span></v-col>
        </v-row>
            </v-card>
          </v-col>
         
        </v-row>
        
         </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style scoped>
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
  width: 250px;
  height: 250px;
  border: 2px solid #fff;
  border-radius: 50%;
}

.avt::after {
  content: '';
  width: 250px;
  height: 250px;
  border: 1px solid #fff;
  border-radius: 50%;
  display: block;
  margin: -4px 2px;
}

</style>
