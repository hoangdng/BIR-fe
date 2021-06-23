<template>
  <router-link
    :to="{
      name: 'BookDetail',
      params: { route: bookRoute }
    }"
    class="card column is-one-third"
  >
    <div class="card-image">
      <figure class="image is-4by3">
        <!-- <img
          src="https://bulma.io/images/placeholders/1280x960.png"
          alt="Placeholder image"
        />-->
        <img :src="bookCoverImageSource" alt="Book cover" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <!-- <img
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder image"
            /> -->
            <img :src="authorImageSource" alt="Author portrait" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ book.bookName }}</p>
          <p class="subtitle is-6">@{{ book.author }}</p>
        </div>
      </div>

      <div class="content ellipsis">
        <div>
          <p>{{ book.myReview }}</p>
        </div>
        <br />
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "BookCard",
  props: {
    book: {
      type: Object,
      required: true
    },
    bookId: {
      type: String,
      required: true
    }
  },
  computed: {
    authorImageSource: function() {
      return `https://firebasestorage.googleapis.com/v0/b/booksiread-14052021.appspot.com/o/images%2F${this.bookId}%2Fauthor?alt=media`;
    },
    bookCoverImageSource: function() {
      return `https://firebasestorage.googleapis.com/v0/b/booksiread-14052021.appspot.com/o/images%2F${this.bookId}%2Fcover?alt=media`;
    },
    bookRoute: function() {
      return (
        (this.book.bookName + this.book.title)
          .replace(/\W+/g, " ")
          .split(/ |\B(?=[A-Z])/)
          .map(word => word.toLowerCase())
          .join("-") + this.bookId
      );
    }
  }
};
</script>
<style scoped>
@import "../assets/css/block-overflow.css";
.card-image {
  background-image: url("../assets/images/cover/loverosie.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
