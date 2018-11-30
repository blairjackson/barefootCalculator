<template>
  <v-container text-xs-center>
    <v-layout
      row
      wrap
      justify-center
    >
      <v-flex xs12>
        <h1 class="display-2 mb-4 font-weight-bold">Barefoot Calculator</h1>
        <v-text-field
          label="Pay"
          v-model="pay"
          outline
          class="mt-4"
        ></v-text-field>
        <h3
          class="warning-text"
          v-if="!valid"
        >Must be a number</h3>
        <v-btn
          class="mb-4"
          color="primary"
          v-on:click="checkInt"
        >Submit</v-btn>

        <v-layout
          row
          wrap
        >
          <v-flex
            xs12
            sm6
          >
            <v-card class="ma-2">
              <v-img
                src="https://images.unsplash.com/photo-1528031069244-0b780c7aeb52?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=300c43cc6fe3504b39d6a1a061d27290&auto=format&fit=crop&w=750&q=80"
                aspect-ratio="2.75"
              ></v-img>

              <v-card-title
                primary-title
                xs-6
              >

                <v-flex xs12>
                  <h3 class="headline mb-0">Blow</h3>
                  <h3>{{blow}}</h3>
                </v-flex>

              </v-card-title>
            </v-card>
          </v-flex>

          <v-flex
            xs12
            sm6
          >
            <v-card class="ma-2">
              <v-img
                src="https://images.unsplash.com/photo-1454255779048-55ecd78837d4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=25ef4ee76888ed93c733c51ae88dae30&auto=format&fit=crop&w=667&q=80"
                aspect-ratio="2.75"
              ></v-img>

              <v-card-title
                primary-title
                xs-6
              >
                <v-flex xs12>
                  <h3 class="headline mb-0">Splurge</h3>
                  <h3>{{splurge}}</h3>
                </v-flex>
              </v-card-title>
            </v-card>
          </v-flex>

          <v-flex
            xs12
            sm6
          >
            <v-card class="ma-2">
              <v-img
                src="https://images.unsplash.com/photo-1521799030593-f325bd2b36c2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8b68f81e05d9a7f17a3fb2057070d6f4&auto=format&fit=crop&w=750&q=80"
                aspect-ratio="2.75"
              ></v-img>

              <v-card-title primary-title>
                <v-flex xs12>
                  <h3 class="headline mb-0">Smile</h3>
                  <h3>{{smile}}</h3>
                </v-flex>
              </v-card-title>
            </v-card>
          </v-flex>

          <v-flex
            xs12
            sm6
          >
            <v-card class="ma-2">
              <v-img
                src="https://images.unsplash.com/photo-1496745109441-36ea45fed379?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=06c55491bc87eca81c4315f2aa359f1b&auto=format&fit=crop&w=749&q=80"
                aspect-ratio="2.75"
              ></v-img>

              <v-card-title primary-title>
                <v-flex xs12>
                  <h3 class="headline mb-0">Fire Extinguisher</h3>
                  <h3>{{fireExt}}</h3>
                </v-flex>
              </v-card-title>
            </v-card>
          </v-flex>

        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import 'vuetify/dist/vuetify.min.css';

export default {
  name: 'HelloWorld',
  data() {
    return {
      pay: '',
      blow: '',
      splurge: '',
      smile: '',
      fireExt: '',
      valid: true,
    };
  },
  methods: {
    checkInt() {
      const intPay = parseInt(this.pay, 10);
      if (Number.isNaN(intPay)) {
        this.valid = false;
      } else {
        this.valid = true;
        this.splurge = (intPay * 0.1);
        this.smile = (intPay * 0.1);
        this.fireExt = (intPay * 0.2);
        this.blow = (this.pay - (this.splurge + this.smile + this.fireExt));
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.main_container {
  /* background-color: aqua; */
  padding: 2em;
  margin: 2em;
  outline: 1px solid black;
  display: flex;
  flex-wrap: wrap;
}
.container_content {
  flex: 50%;
  background-color: antiquewhite;
  outline: 1px solid black;
  align-items: center;
}
.warning-text {
  color: red;
}
</style>
