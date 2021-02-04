<template>
  <div class="container">
    <nav class="navbar is-fixed-top">
      <div class="navbar-brand">
        <router-link to="/">
          <img
            src="..\assets\images\logo-web.png"
            alt="Logo BooksIRead"
            width="250"
            height="30"
        /></router-link>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <p class="main-quote">Welcome to my world of books!</p>
          </div>
        </div>

        <div class="navbar-end">
          <!-- <div class="navbar-item"> 
            <a href="#" class="button is-info is-medium">
              Add a new book
            </a>
          </div> -->
          <div class="navbar-item">
            <a href="#" class="button is-primary is-medium">
              Log in
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Hanalei&family=Lobster&display=swap");
.main-quote {
  color: black;
  font-size: 2.2em;
  margin-left: 30px;
  font-family: "Lobster", cursive;
}
</style>
