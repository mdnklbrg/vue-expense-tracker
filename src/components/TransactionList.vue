<template>
  <div>
    <h3>History</h3>
    <p v-if="!transactions.length">You have no transactions!</p>
    <ul class="list">
      <TransactionItem v-for="transaction in transactions" :key="transaction.id" :transaction="transaction" />
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TransactionItem from './TransactionItem'

export default {
  components: {
    TransactionItem
  },
  computed: {
    ...mapGetters({ transactions: 'getTransactions' })
  }
}
</script>
