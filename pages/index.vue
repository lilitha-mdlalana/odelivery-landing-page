<template>
<main>
  <sections-hero/>
  <sections-about/>
  <sections-services/>
  <sections-footer/>
</main>
  
</template>

<script>
import About from '~/components/Sections/about.vue';
export default {
    name: "IndexPage",
    components: { About }
};
</script>
