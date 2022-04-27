<template>
  <div class="home">
    <h2>檔案名稱</h2>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <ul class="list-group">
            <li
              v-for="blog in blogs"
              :key="blog.id"
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-center
              "
            >
              {{ blog.title }}
              <span class="badge badge-primary badge-pill">
                <router-link
                  :to="{ path: `/blogs/${blog.id}` }"
                  class="btn btn-primary ml-2"
                  >修改</router-link
                >
                <a href="#" class="btn btn-danger" @click="deleteBlog(blog.id)"
                  >刪除</a
                >
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import blogsColRef from "../firebase";
import { getDocs, doc, deleteDoc } from "firebase/firestore";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      blogs: [],
      selectedDoc: null,
    };
  },
  methods: {
    async fetchBlogs() {
      let blogsSnapShot = await getDocs(blogsColRef);
      let blogs = [];
      blogsSnapShot.forEach((blog) => {
        let blogData = blog.data();
        blogData.id = blog.id;
        blogs.push(blogData);
      });
      console.log(blogs);
      this.blogs = blogs;
    },
    async deleteBlog(blogId) {
      let blogRef = doc(blogsColRef, blogId);
      await deleteDoc(blogRef);
      alert("Blog deleted successully!");
      this.$router.go();
    },
  },

  created() {
    this.fetchBlogs();
  },
};
</script>