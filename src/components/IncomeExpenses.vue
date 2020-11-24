<template>
  <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p class="money plus">+${{ income }}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p class="money minus">-${{ expense }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    income () {
      const transactions = this.$store.getters.getTransactions;
      const amounts = transactions.map(transaction => transaction.amount);
      return amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    },
    expense () {
      const transactions = this.$store.getters.getTransactions;
      const amounts = transactions.map(transaction => transaction.amount);
      return (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
      ).toFixed(2);
    }
  }
}
</script>
