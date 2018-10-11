<template>
  <div class="nav d-flex justify-content-center">
    <ul class="pagination flex-wrap">
      <li 
        v-for="n in numbers" 
        :class="{'active' : n == currentPage}" 
        :key="n.key"
        class="page-item">
        <a 
          class="page-link" 
          href="#" 
          @click.stop.prevent="update(n)">{{ n }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "../store"

var state = store.state

export default {
    name: "Pagination",

    props: {
        perPage: {
            type: Number,
            default: 12,
        },
    },

    data() {
        return {
            state,
        }
    },

    computed: {
        to() {
            return this.state.pagination.to
        },

        min() {
            return 1
        },

        max() {
            return this.state.pagination.lastPage
        },

        from() {
            return this.state.pagination.from
        },

        numbers() {
            var numbers = [], number
            for(number = this.min; number < this.max + 1; number++) {
                numbers.push(number)
            }
            return numbers
        },

        currentPage() {
            return this.state.pagination.currentPage
        }
    },

    methods: {
        update(n){
            store.$bus.$emit("pageChange", n)
        },
    }
}
</script>
