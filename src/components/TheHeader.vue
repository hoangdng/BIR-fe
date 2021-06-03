<template>
  <div class="container">
    <nav class="navbar is-fixed-top px-3">
      <div class="navbar-brand">
        <router-link to="/">
          <img
            src="..\assets\images\logo-web.png"
            alt="Logo BooksIRead"
            width="250"
            style="height: 100%"
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

      <div class="navbar-menu has-background-black">
        <div class="navbar-start">
          <div class="navbar-item">
            <p class="main-quote has-text-warning">
              Welcome to my world of books!
            </p>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <b-button
              tag="router-link"
              to="/add-new-book"
              type="is-warning"
              size="is-medium"
              outlined
            >
              Add new book
            </b-button>
          </div>
          <div class="navbar-item">
            <button class="button is-warning is-medium " disabled>
              Log in
            </button>
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
