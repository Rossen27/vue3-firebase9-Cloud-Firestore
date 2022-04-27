<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <h2>增加文章</h2>
                    <form @submit.prevent="createBlog">
                        <div class="form-group">
                            <input type="text" class="form-control mb-2" placeholder="標題" v-model="title" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control mb-2" placeholder="副標題" v-model="text" />
                        </div>
                        <div class="form-group">
                            <input type="date" class="form-control mb-2" placeholder="內文" v-model="date" />
                        </div>
                        <button class="btn btn-primary">創建</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import blogsColRef from "../firebase";
import { addDoc } from "firebase/firestore";
export default {
    data() {
        return {
                title: null,
                text: null,
                date: null,
        };
    },
    methods: {
        async createBlog() {
            console.log("Creating Document");
            const addedDoc = await addDoc(blogsColRef, this.$data);
            alert("檔案創建成功!");
            console.log(addedDoc);
            this.$router.push("/");
        },
    },
};
</script>

<style>
</style>