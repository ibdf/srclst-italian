<template>
  <div>
    <pre>
      {{ files }}
    </pre>
    <button @click="changeType('tags')">Tags</button>
    <button @click="changeType('categories')">Categories</button>
    <pre>
    {{ filters[type] }}
    </pre>
  </div>
</template>
<script>
export default {
  async asyncData ({ $content, params }) {
    const filters = await $content('settings/filters').fetch();
    const files = await $content().only(['path']).fetch();
    return { filters, files };
  },
  data () {
    return {
      type: "categories",
    };
  },
  methods: {
    changeType (type) {
      this.type = type;
    },
  },
}
</script>