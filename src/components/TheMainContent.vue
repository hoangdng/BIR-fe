<template>
  <div class="main-content px-5">
    <div class="columns is-multiline is-3">
      <BookCard v-for="(book, index) in books" :key="index" :book="book" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BookCard from "@/components/BookCard.vue";
import { getAllBookApi } from "@/http/book.api";

export default {
  name: "TheMainContent",
  components: {
    BookCard
  },
  data: () => {
    return {
      books: []
    };
  },
  created: async function() {
    await getAllBookApi()
      .then(response => {
        this.books = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.main-content {
  padding-top: 90px;
}
</style>
