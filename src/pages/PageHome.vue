<template>
  <div class="col-full">
    <h1>Welcome to the Forum</h1>
     <Categories :categories="categories"/>
  </div>
</template>

<script>
import sourceData from '@/data'
import Categories from '@/components/CategoryList'
console.log(sourceData)

export default {
  components: {
    Categories
  },

  data () {
    return {
      categories: Object.values(sourceData.categories),
      posts: sourceData.posts,
      users: sourceData.users
    }
  }
}
</script>
