<script>
export default {
    props: {
        title: {
            type:String,
            required:true
        },
        imagePath: {
            type: String,
            required:true
        },
        description: {
            type: String,
            required:true,
        }
    }
}
</script>
<template>
  <div class="card w-96 bg-base-100 shadow-md">
    <div class="card-body items-center text-center">
      <h2 class="card-title">{{title}}</h2>
      <figure class="px-10 pt-10">
        <img
          :src="imagePath"
          :alt="title"
          class="rounded-xl"
        />
      </figure>
      <p>{{description}}</p>
      <div class="card-actions">
        <button class="font-bold">Learn More</button>
      </div>
    </div>
  </div>
</template>
