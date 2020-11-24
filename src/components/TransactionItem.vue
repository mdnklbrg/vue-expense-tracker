<template>
  <li :class="transaction.amount < 0 ? 'minus' : 'plus'">
    {{ transaction.text }}
    <span>{{ sign }}${{ Math.abs(transaction.amount) }}</span>
    <button class="delete-btn" @click="deleteTransaction">x</button>
    <!-- @click="onDelete(transaction.id)" -->
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    transaction: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions({
      onDelete: "deleteTransaction"
    }),
    deleteTransaction() {
      this.onDelete({ transactionId: this.transaction.id });
    }
  },
  computed: {
    sign () {
      return this.transaction.amount < 0 ? '-' : '+'
    }
  }
}
</script>
