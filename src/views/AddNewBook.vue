<template>
  <section class="add-new-book">
    <h1 class="is-size-2 has-text-weight-semibold is-family-primary">
      Add a new book
    </h1>
    <div class="columns is-variable is-6 has-text-left px-6">
      <div class="column">
        <div class="my-3" id="book-name">
          <b-field label="Book's name">
            <b-input v-model="bookName" />
          </b-field>
        </div>
        <div class="columns is-variable is-3 my-3">
          <div class="column" id="author">
            <b-field label="Author">
              <b-input v-model="author" />
            </b-field>
          </div>
          <div class="column" id="release-date">
            <b-field label="Release date">
              <b-datepicker
                v-model="releaseDate"
                placeholder="Click to select..."
                icon="calendar-today"
                locale="fr-FR"
                trap-focus
              />
            </b-field>
          </div>
        </div>
        <div class="my-3" id="author-image">
          <b-field label="Author's image">
            <b-field
              class="file is-secondary"
              :class="{ 'has-name': !!authorImageFile }"
            >
              <b-upload
                v-model="authorImageFile"
                class="file-label"
                @input="exposePreviewImage"
              >
                <span class="file-cta">
                  <b-icon class="file-icon" icon="upload" />
                  <span class="file-label">Click to upload</span>
                </span>
                <span class="file-name" v-if="authorImageFile">
                  {{ authorImageFile.name }}
                </span>
              </b-upload>
              <div class="mt-2 ml-1" v-show="authorImageFile">
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
            <b-input v-model="title" />
          </b-field>
        </div>
      </div>
      <div class="column">
        <div class="my-3" id="book-cover-image">
          <b-field label="Book's cover image" />
          <b-field class="file is-secondary">
            <b-upload v-model="bookCoverImageFile" expanded>
              <span class="file-cta">
                <b-icon class="file-icon" icon="upload"></b-icon>
                <span class="file-label">Click to upload</span>
              </span>
              <span class="file-name" v-if="bookCoverImageFile">
                {{ bookCoverImageFile.name }}
              </span>
            </b-upload>
          </b-field>
          <b-field>
            <b-upload v-model="dropFiles" multiple drag-drop expanded>
              <section class="section">
                <div class="content has-text-centered">
                  <p>
                    <b-icon icon="upload" size="is-large"> </b-icon>
                  </p>
                  <p>Drop your files here or click to upload</p>
                </div>
              </section>
            </b-upload>
          </b-field>
        </div>
      </div>
    </div>
    <div class="px-6 has-text-left" id="content">
      <b-field label="Content">
        <b-input maxlength="500" type="textarea" />
      </b-field>
    </div>
    <div class="has-text-right px-6">
      <b-button type="is-success" icon-right="check" class="mx-2 px-5"
        >Done</b-button
      >
      <b-button type="is-info" icon-right="reload" class="mx-2 px-5"
        >Reset</b-button
      >
      <b-button type="is-danger" icon-right="delete-outline" class="mx-2 px-5"
        >Delete</b-button
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "AddNewBook",
  data: function() {
    return {
      bookName: "",
      author: "",
      releaseDate: null,
      authorImageFile: null,
      authorImageFilePreview: null,
      bookCoverImageFile: null,
      bookCoverImageFilePreview: null,
      title: "",
      content: "",
      dropFiles: []
    };
  },
  methods: {
    exposePreviewImage: function() {
      if (this.authorImageFile) {
        this.authorImageFilePreview = URL.createObjectURL(this.authorImageFile);
      }
      if (this.bookCoverImageFile) {
        this.bookCoverImageFilePreview = URL.createObjectURL(
          this.bookCoverImageFile
        );
      }
    }
  }
};
</script>

<style>
.add-new-book {
  padding-top: 90px;
}
</style>
