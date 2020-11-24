<template>
  <div>
    <h3>Add new transaction</h3>
    <form @submit.prevent="addTransaction">
      <div class="form-control">
        <label htmlFor="text">Text</label>
        <input type="text" v-model="text" placeholder="Enter text..." />
      </div>
      <div class="form-control">
        <label htmlFor="amount">
          Amount <br />
          (negative - expense, positive - income)
        </label>
        <input type="number" v-model="amount" placeholder="Enter amount..." />
      </div>
      <button class="btn">Add transaction</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    text: '',
    amount: 0
  }),
  methods: {
    ...mapActions({
      onSubmit: 'addTransaction'
    }),
    addTransaction () {
      const newTransaction = {
        transactionText: this.text,
        transactionAmount: +this.amount
      };

      this.onSubmit(newTransaction);
      this.text = '';
      this.amount = 0;
    }
  }
}
</script>
