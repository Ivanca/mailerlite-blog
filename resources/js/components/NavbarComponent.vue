<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-info mb-2">
        <div class="container">
            <router-link  class="navbar-brand" to="/">MailerLite Blog</router-link>
            <router-link v-if="$store.getters.loggedIn" to="/logout" class="btn btn-primary">Logout</router-link>
            <router-link v-else class="btn btn-primary" to="/login">Login</router-link>
        </div>
    </nav>
</template>

<script>

export default {}
</script>