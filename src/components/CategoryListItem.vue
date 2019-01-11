<template>
  <div class="forum-listing">
    <div class="forum-details">
      <router-link
        class="text-xlarge"
        :to="{name: 'Category', params: {id: category['.key']}}"
      >
        {{category.name}}
      </router-link>
    </div>

    <div class="threads-count">
      <p class="count"></p>
      
    </div>

    <div class="last-thread">
      <!-- TODO: implement later -->
    </div>
  </div>
</template>

<script>
    export default {
      props: {
        category: {
          required: true,
          type: Object
        }
      },
      computed: {
        // threadsCount () {
        //   return this.categories.threads
        //     ? Object.values(this.forum.threads).length
        //     : 0
        // }
      }
    }
</script>