<template>
  <section class="section is-medium">
    <div class="main-content">
      <div class="container margin-top limit-width">
        <h1 class="title font-title">
          <span class="text-red">{{ bookDetail.bookName }} </span>
          - {{ bookDetail.title }}
        </h1>
        <hr style="background-color: black;" />
      </div>

      <div class="container limit-width">
        <div class="columns">
          <div class="column is-narrow">
            <figure class="image is-96x96">
              <!-- <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              /> -->
              <img
                src="@/assets/images/author/cecelia-ahern.jpg"
                alt="Author portrait"
                class="is-rounded"
              />
            </figure>
          </div>
          <div class="column is-narrow">
            <p class="text-bold">
              <b>Author:</b> <i>{{ bookDetail.author }}</i>
            </p>
          </div>
        </div>
      </div>

      <div class="container limit-width">
        <p class="date">
          <b-icon icon="calendar-edit" size="is-small" class="mx-2" />{{
            bookDetail.releaseYear
          }}
        </p>
      </div>

      <div class="container limit-width">
        <p class="paragraph">
          {{ bookDetail.myReview }}
        </p>
        <p class="signature">--- Trần Nguyên Hoàng ---</p>
      </div>
    </div>
  </section>
</template>

<script>
import { getBookApi } from "@/http/book.api";

export default {
  name: "BookDetail",
  data: () => {
    return {
      bookDetail: null
    };
  },
  created: async function() {
    let bookId = this.$route.path.match(/-\w+$/)[0];
    await getBookApi(bookId)
      .then(response => {
        this.bookDetail = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap");

.margin-top {
  margin-top: 30px;
}

@media screen and (min-width: 1020px) {
  .limit-width {
    width: 50%;
  }
}

@media screen and (max-width: 1020px) {
  .margin-top {
    margin-top: 100px;
  }
}

.font-title {
  font-family: "Nanum Myeongjo", serif;
  font-size: 3em;
  font-style: italic;
}

.text-red {
  color: tomato;
  font-size: 1.2em;
  font-weight: 900;
  font-style: normal;
}

.text-bold {
  font-size: 1.8em;
  font-weight: 500;
}

.date {
  font-size: 1.2em;
  float: right;
  padding: 10px;
}

.paragraph {
  padding-top: 60px;
  text-align: left;
  font-family: "Raleway", sans-serif;
  font-size: 1.5em;
}

.signature {
  margin: 30px 50px 0 0;
  float: right;
  font-family: "Dancing Script", cursive;
  font-size: 1.5em;
}

section:before {
  content: " ";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  background-image: url("../assets/images/cover/loverosie.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.main-content {
  position: relative;
}
</style>
