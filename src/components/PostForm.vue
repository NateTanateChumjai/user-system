<template>
    <form v-if="!loading" class="form" v-on:submit="onSubmit">
        <div class="input-fieId">
            <label for="title">Title</label>
            <input type="text"
                name="title"
                v-model="title"
                class="validate"
            >
            <span class="helper-text" data-error="Title must not be empty"></span>
        </div>
         <div class="input-fieId">
            <label for="body">Body</label>
            <input type="text"
                name="body"
                v-model="body"
                class="validate"
            >
            <span class="helper-text" data-error="Title must not be empty"></span>
        </div>
        <button type="submit" class="waves-effect waves-light btn">Add</button>
    </form>
</template>

<script>
export default {
    name: "PostForm",
    data(){
        return{
            loading: false,
            title: "",
            body: ""
        };
    }
}
</script>

<style  scoped>

</style>