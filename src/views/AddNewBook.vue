<template>
  <section class="add-new-book">
    <h1 class="is-size-2 has-text-weight-semibold is-family-primary mt-3">
      Add a new book
    </h1>
    <hr class="mx-6" />
    <div class="columns is-variable is-6 has-text-left px-6">
      <div class="column">
        <div class="my-3" id="book-name">
          <b-field label="Book's name">
            <b-input v-model="book.bookName" />
          </b-field>
        </div>
        <div class="columns is-variable is-3 my-3">
          <div class="column" id="author">
            <b-field label="Author">
              <b-input v-model="book.author" />
            </b-field>
          </div>
          <div class="column" id="release-year">
            <b-field label="Release year ">
              <b-numberinput
                controls-alignment="right"
                controls-position="compact"
                type="is-black"
                min="1900"
                :max="new Date().getFullYear()"
                expanded
                v-model="book.releaseYear"
              />
            </b-field>
          </div>
        </div>
        <div class="my-3" id="author-image">
          <b-field label="Author's image">
            <b-field
              class="file is-secondary"
              :class="{ 'has-name': !!book.images[0] }"
            >
              <b-upload
                v-model="book.images[0]"
                class="file-label"
                accept="image/*"
              >
                <span class="file-cta">
                  <b-icon class="file-icon" icon="upload" />
                  <span class="file-label">Click to upload</span>
                </span>
                <span class="file-name" v-if="book.images[0]">
                  {{ book.images[0].name }}
                </span>
              </b-upload>
              <div
                class="mt-2 ml-1"
                v-show="authorImageFilePreview"
                @click="removeImage('author image')"
              >
                <b-icon type="is-danger" icon="close-thick" />
              </div>
            </b-field>
          </b-field>
          <b-image
            :src="authorImageFilePreview"
            ratio="1by1"
            v-show="authorImageFilePreview"
          />
        </div>
        <div class="my-3" id="title">
          <b-field label="Title">
            <b-input v-model="book.title" />
          </b-field>
        </div>
        <div class="my-3" id="categories">
          <b-field label="Categories">
            <b-autocomplete
              v-model="autocompleteInput"
              :data="filteredDefaultCategoryArray"
              placeholder="e.g. Romance"
              icon="magnify"
              clearable
              @blur="addCategory"
              @keyup.enter.native="addCategory"
            >
              <template #empty
                >Press enter to add "{{ autocompleteInput }}" category</template
              >
            </b-autocomplete>
          </b-field>
          <b-taglist>
            <b-tag
              v-for="(category, index) in book.categories"
              :key="index"
              type="is-info"
              closable
              aria-close-label="Close tag"
              @close="removeCategory(index)"
              >{{ category }}</b-tag
            >
          </b-taglist>
        </div>
      </div>
      <div class="column">
        <div class="my-3" id="book-cover-image">
          <b-field label="Book's cover image" />
          <b-field class="file is-secondary">
            <b-upload v-model="book.images[1]" accept="image/*">
              <span class="file-cta">
                <b-icon class="file-icon" icon="upload"></b-icon>
                <span class="file-label">Click to upload</span>
              </span>
              <span class="file-name" v-if="book.images[1]">
                {{ book.images[1].name }}
              </span>
            </b-upload>
            <div
              class="mt-2 ml-1"
              v-show="book.images[1]"
              @click="removeImage('book cover image')"
            >
              <b-icon type="is-danger" icon="close-thick" />
            </div>
          </b-field>

          <b-image
            :src="bookCoverImageFilePreview"
            ratio="1by1"
            v-show="book.images[1]"
          />
          <b-field>
            <b-upload
              v-model="book.images[1]"
              drag-drop
              expanded
              accept="image/*"
            >
              <section class="section">
                <div class="content has-text-centered">
                  <p>
                    <b-icon icon="upload" size="is-large" />
                  </p>
                  <p>Drop file here or click to upload</p>
                </div>
              </section>
            </b-upload>
          </b-field>
        </div>
      </div>
    </div>
    <div class="px-6 has-text-left" id="my-review">
      <b-field label="My review">
        <b-input v-model="book.myReview" maxlength="500" type="textarea" />
      </b-field>
    </div>
    <div class="has-text-right px-6 mb-5">
      <b-button
        type="is-success"
        icon-right="check"
        class="mx-2 px-5"
        @click="saveBook"
        >Done</b-button
      >
      <b-button
        type="is-info"
        icon-right="reload"
        class="mx-2 px-5"
        @click="resetInputData"
        >Reset</b-button
      >
      <b-button
        type="is-danger"
        icon-right="close-outline"
        class="mx-2 px-5"
        @click="backToHomePage"
        >Cancel</b-button
      >
    </div>
  </section>
</template>

<script>
import { postBookApi } from "@/http/book.api";

export default {
  name: "AddNewBook",
  data: function() {
    return {
      book: {
        bookName: "",
        author: "",
        releaseYear: null,
        images: [],
        title: "",
        myReview: "",
        categories: []
      },
      autocompleteInput: "",
      defaultCategory: [
        "Adventure",
        "Art",
        "Children’s",
        "Cooking",
        "History",
        "Humor",
        "Health",
        "Horror",
        "Fantasy",
        "Romance",
        "Science Fiction",
        "Memoir",
        "Self-help",
        "Travel",
        "Technical"
      ]
    };
  },
  methods: {
    removeImage: function(image) {
      switch (image) {
        case "author image":
          this.$set(this.book.images, 0, null);
          break;
        case "book cover image":
          this.$set(this.book.images, 1, null);
          break;
        default:
          break;
      }
    },
    removeCategory: function(index) {
      this.book.categories.splice(index, 1);
    },
    addCategory: function() {
      setTimeout(() => {
        if (
          this.autocompleteInput.trim() !== "" &&
          this.book.categories.indexOf(this.autocompleteInput) === -1
        ) {
          this.book.categories.splice(0, 0, this.autocompleteInput);
          this.autocompleteInput = "";
        }
      }, 80);
    },
    saveBook: function() {
      const formData = new FormData();
      formData.append("bookName", this.book.bookName);
      formData.append("author", this.book.author);
      formData.append("releaseYear", this.book.releaseYear);
      formData.append("title", this.book.title);
      formData.append("myReview", this.book.myReview);
      formData.append("categories", JSON.stringify(this.book.categories));
      formData.append("images", this.book.images[0]);
      formData.append("images", this.book.images[1]);

      postBookApi(formData);
    },
    resetInputData: function() {
      this.book.bookName = "";
      this.book.author = "";
      this.book.releaseYear = null;
      this.book.images = [];
      this.book.title = "";
      this.book.myReview = "";
      this.book.categories = [];
    },
    backToHomePage: function() {
      this.$router.push("/");
    }
  },
  computed: {
    authorImageFilePreview: function() {
      if (this.book.images[0]) {
        return URL.createObjectURL(this.book.images[0]);
      }
      return null;
    },
    bookCoverImageFilePreview: function() {
      if (this.book.images[1]) {
        return URL.createObjectURL(this.book.images[1]);
      }
      return null;
    },
    filteredDefaultCategoryArray: function() {
      return this.defaultCategory.filter(option => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(this.autocompleteInput.toLowerCase()) >= 0
        );
      });
    }
  }
};
</script>

<style>
.add-new-book {
  padding-top: 90px;
}
i:hover {
  transform: scale(1.35);
  cursor: pointer;
}
button:hover i {
  transform: scale(1.35);
  cursor: pointer;
}
</style>
