<template>
  <div id="app">
    <h2>Expense Tracker</h2>
    <div class="container">
      <AppBalance/>
      <IncomeExpenses/>
      <TransactionList/>
      <TransactionAddForm/>
    </div>
  </div>
</template>

<script>
import AppBalance from './components/AppBalance.vue'
import IncomeExpenses from './components/IncomeExpenses.vue'
import TransactionAddForm from './components/TransactionAddForm.vue'
import TransactionList from './components/TransactionList.vue'

export default {
  name: 'App',
  components: {
    AppBalance,
    IncomeExpenses,
    TransactionAddForm,
    TransactionList
  }
}
</script>
