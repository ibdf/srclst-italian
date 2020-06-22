<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              :src="cardInfo.icon"
              :alt="cardInfo.name"
            >
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">
            {{ cardInfo.name }}
          </p>
          <p class="subtitle is-6">
            <a
              :href="cardInfo.src"
              target="_blank"
            ><span>Visit website</span> <span class="icon is-size-7"><i class="fas fa-external-link-alt" /></span></a>
          </p>
        </div>
      </div>
      <div class="content">
        {{ cardInfo.desc }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    cardInfo: {
      type: Object,
      default () {
        return {};
      },
    },
  },
};
</script>