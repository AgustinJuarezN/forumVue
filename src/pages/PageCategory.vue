<template>
  <div class="forum-wrapper">
    <div class="col-full push-top">
      <div class="forum-header">
        <div class="forum-details">
          <h1>{{category.name}}</h1>
        </div>
      </div>
      <div class="col-full push-top">
         <ForumList :forums="forums"/>
      </div>
    </div>
  </div>
</template>

<script>
    import ForumList from '@/components/ForumList'
    import sourceData from '@/data'
    export default {
      components: {
        ForumList
      },
      props: {
        id: {
          required: true,
          type: String
        }
      },
      computed: {
        category () {
          return sourceData.categories[this.id]
        },
        forums () {
          return Object.values(sourceData.forums)
            .filter(forum => forum.categoryId === this.id)
        }
      }
    }
</script>

<style scoped>
  .forum-wrapper {
    width: 100%;
  }
</style>