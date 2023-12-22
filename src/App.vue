<script setup>
import { ref } from 'vue'

const initialEmpty = new Array(7).fill('mt')
const slots = ref([
  [...initialEmpty],
  [...initialEmpty],
  [...initialEmpty],
  [...initialEmpty],
  [...initialEmpty],
  [...initialEmpty]
])

const colorTurn = ref('blue')

function columnClicked(col) {
  let nextFreeRow = 5
  while (slots.value[nextFreeRow][col] !== 'mt' && nextFreeRow > 0) {
    nextFreeRow--
  }
  if (slots.value[nextFreeRow][col] !== 'mt') {
    return
  }
  slots.value[nextFreeRow][col] = colorTurn.value

  if (colorTurn.value == 'red') {
    colorTurn.value = 'blue'
  } else {
    colorTurn.value = 'red'
  }

  const winner = checkWinner()
  if (winner !== undefined) {
    // Do something crazy
  }
}

/**
 * Think about which slots could be the start of winning four. Loop through all possible starts.
 *
 * @returns name of winner if there is one. Otherwise, undefined.
 */
function checkWinner() {
  // Horizontal
  // Vertical
  // Diagonal

  // No winner :(
  return undefined
}
</script>

<template>
  <div class="wrapper">
    <div class="grid">
      <template v-for="row in 6">
        <div
          v-for="col in 7"
          :key="`row${row}-col${col}`"
          class="slot"
          :class="slots[row - 1][col - 1]"
          @click="columnClicked(col - 1)"
        ></div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding: 60px;
  box-sizing: border-box;
}
.grid {
  display: grid;
  grid-template-columns: repeat(7, 100px);
  grid-template-rows: repeat(6, 100px);
  gap: 10px;
  padding: 10px;
  padding-top: 0;
  background-color: gray;
  margin: 0 auto;
}
.slot {
  background-color: aquamarine;
  border-radius: 50%;
  border: 10px solid darkgray;
  cursor: pointer;
}

.slot.red {
  background-color: red;
}
.slot.blue {
  background-color: blue;
}
</style>

<style>
body {
  margin: 0;
}
</style>
