<script>
export default {
  data() {
    return {
      card_content: [
        {
          id: 1,
          card_title: "Payment Done",
          card_description:
            "Pay with a Visa or PayPal card and without much ado",
          card_image_path: "/wallet.svg",
        },
        {
          id: 2,
          card_title: "Find Your Product",
          card_description: "We offer sale of products through the internet",
          card_image_path: "/product_shopping.svg",
        },
        {
          id: 3,
          card_title: "Product Received",
          card_description:
            "In our app you can see the delay time of your order.",
          card_image_path: "/product_receival.svg",
        },
      ],
    };
  },
};
</script>

<template>
  <section id="services" class="mt-6">
    <h1 class="text-center font-bold text-3xl">Some Services We Offer</h1>
    <div class="flex flex-col md:flex-row justify-center">
      <card
        v-for="info in card_content"
        :key="info.id"
        :title="info.card_title"
        :description="info.card_description"
        :image-path="info.card_image_path"
        class="mx-auto md:m-2"
      />
    </div>
    <div class="hero-content flex-col lg:flex-row-reverse mt-12 mx-auto">
      <div>
        <h1 class="text-4xl font-bold max-w-[466px]">
          Watch Your Delivery At Any Time
        </h1>
        <p class="py-6 max-w-[394px]">
          With our app you can view the route of your order, from our local
          headquaters to the place where you are. Look for the app now!
        </p>
        <button class="btn btn-primary rounded-xl">Apple Store</button>
        <button class="btn btn-primary rounded-xl">Google Play</button>
      </div>
      <img src="/app_download.svg" class="w-full lg:max-w-[871px] rounded-lg" />
    </div>
  </section>
</template>
