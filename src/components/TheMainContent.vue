<template>
  <div class="main-content px-5">
    <div class="columns is-multiline is-3">
      <BookCard v-for="book in books" :key="book.id" :book="book" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BookCard from "@/components/BookCard.vue";

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
  mounted() {
    this.renderBookCards();
  },
  methods: {
    renderBookCards() {
      let fakeData = [
        {
          id: 1,
          title: "Where rainbow ends.",
          coverImage: null,
          author: "Cecelina Ahern",
          description:
            "Eu consectetur velit Lorem id ipsum cillum sunt eiusmod nisi reprehenderit nostrud ipsum. Occaecat consequat magna irure cillum nostrud dolor quis laboris non ea. Ea adipisicing non ad cupidatat culpa ea proident officia dolor dolore minim aliquip id. Reprehenderit deserunt magna tempor aliqua adipisicing. Esse ipsum dolore cillum laboris adipisicing et reprehenderit eu elit dolore excepteur incididunt. "
        },
        {
          id: 2,
          title: "Where rainbow ends.",
          coverImage: null,
          author: "Cecelina Ahern",
          description:
            "Eu consectetur velit Lorem id ipsum cillum sunt eiusmod nisi reprehenderit nostrud ipsum. Occaecat consequat magna irure cillum nostrud dolor quis laboris non ea. Ea adipisicing non ad cupidatat culpa ea proident officia dolor dolore minim aliquip id. Reprehenderit deserunt magna tempor aliqua adipisicing. Esse ipsum dolore cillum laboris adipisicing et reprehenderit eu elit dolore excepteur incididunt. "
        },
        {
          id: 3,
          title: "Where rainbow ends.",
          coverImage: null,
          author: "Cecelina Ahern",
          description:
            "Eu consectetur velit Lorem id ipsum cillum sunt eiusmod nisi reprehenderit nostrud ipsum. Occaecat consequat magna irure cillum nostrud dolor quis laboris non ea. Ea adipisicing non ad cupidatat culpa ea proident officia dolor dolore minim aliquip id. Reprehenderit deserunt magna tempor aliqua adipisicing. Esse ipsum dolore cillum laboris adipisicing et reprehenderit eu elit dolore excepteur incididunt. "
        },
        {
          id: 4,
          title: "Where rainbow ends.",
          coverImage: null,
          author: "Cecelina Ahern",
          description:
            "Eu consectetur velit Lorem id ipsum cillum sunt eiusmod nisi reprehenderit nostrud ipsum. Occaecat consequat magna irure cillum nostrud dolor quis laboris non ea. Ea adipisicing non ad cupidatat culpa ea proident officia dolor dolore minim aliquip id. Reprehenderit deserunt magna tempor aliqua adipisicing. Esse ipsum dolore cillum laboris adipisicing et reprehenderit eu elit dolore excepteur incididunt. "
        },
        {
          id: 5,
          title: "Where rainbow ends.",
          coverImage: null,
          author: "Cecelina Ahern",
          description:
            "Eu consectetur velit Lorem id ipsum cillum sunt eiusmod nisi reprehenderit nostrud ipsum. Occaecat consequat magna irure cillum nostrud dolor quis laboris non ea. Ea adipisicing non ad cupidatat culpa ea proident officia dolor dolore minim aliquip id. Reprehenderit deserunt magna tempor aliqua adipisicing. Esse ipsum dolore cillum laboris adipisicing et reprehenderit eu elit dolore excepteur incididunt. Eu consectetur velit Lorem id ipsum cillum sunt eiusmod nisi reprehenderit nostrud ipsum. Occaecat consequat magna irure cillum nostrud dolor quis laboris non ea. Ea adipisicing non ad cupidatat culpa ea proident officia dolor dolore minim aliquip id. Reprehenderit deserunt magna tempor aliqua adipisicing. Esse ipsum dolore cillum laboris adipisicing et reprehenderit eu elit dolore excepteur incididunt. Eu consectetur velit Lorem id ipsum cillum sunt eiusmod nisi reprehenderit nostrud ipsum. Occaecat consequat magna irure cillum nostrud dolor quis laboris non ea. Ea adipisicing non ad cupidatat culpa ea proident officia dolor dolore minim aliquip id. Reprehenderit deserunt magna tempor aliqua adipisicing. Esse ipsum dolore cillum laboris adipisicing et reprehenderit eu elit dolore excepteur incididunt. Eu consectetur velit Lorem id ipsum cillum sunt eiusmod nisi reprehenderit nostrud ipsum. Occaecat consequat magna irure cillum nostrud dolor quis laboris non ea. Ea adipisicing non ad cupidatat culpa ea proident officia dolor dolore minim aliquip id. Reprehenderit deserunt magna tempor aliqua adipisicing. Esse ipsum dolore cillum laboris adipisicing et reprehenderit eu elit dolore excepteur incididunt. Eu consectetur velit Lorem id ipsum cillum sunt eiusmod nisi reprehenderit nostrud ipsum. Occaecat consequat magna irure cillum nostrud dolor quis laboris non ea. Ea adipisicing non ad cupidatat culpa ea proident officia dolor dolore minim aliquip id. Reprehenderit deserunt magna tempor aliqua adipisicing. Esse ipsum dolore cillum laboris adipisicing et reprehenderit eu elit dolore excepteur incididunt. "
        }
      ];
      this.books = fakeData;
    }
  }
};
</script>

<style scoped>
.main-content {
  padding-top: 90px;
}
</style>
