<template>
  <div>
    <div class="col-md-4 offset-md-4 mt-5">
      <div class="box">
        <h1 class="title">Login</h1>
        <div class="notification is-danger" v-if="error">
          <p>{{error}}</p>
        </div>
        <form autocomplete="off" @submit.prevent="login" method="post">
          <div class="form-group">
            <input type="email" class="form-control" placeholder="user@example.com" v-model="email" />
          </div>
          <div class="form-group">
            <input type="password" class="form-control" v-model="password" />
          </div>
          <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      error: null,
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("retrieveToken", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          this.$router.push({ name: "articles" });
        })
        .catch((error) => {
          this.error = error.response.data;
        });
    },
  },
};
</script>