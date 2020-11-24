<template>
  <div>
    <h4>Your Balance</h4>
    <h1>${{ total }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    total () {
      const transactions = this.$store.getters.getTransactions

      const amounts = transactions.map(transaction => transaction.amount)
      const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
      return total
    }
  }
}
</script>
