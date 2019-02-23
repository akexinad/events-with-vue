<template>
  <div>
    <h1>All The Lovely Things You Can Do!</h1>
    <EventCard />
    <BaseIcon />
  </div>
</template>

<script>
  import EventCard from '@/components/EventCard.vue';

  export default {
    components: {
      EventCard
    }
  }
</script>

<style>
  h1 {
    text-align: center;
  }
</style>
