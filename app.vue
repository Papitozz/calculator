<template>
  <div class="container">
    <div class="calculator">
      <Input @inputValue="inputFunc" :inputValue="inputValue"/>
      <!-- <Buttons @buttonClick="insertValue"></Buttons> -->
      <Buttons @buttonClick="insertValue" @add=""></Buttons>
    </div>
  </div>
</template>

<script setup lang="ts">

const inputValue = ref('');

const insertValue = (data: HTMLElement) => {
  if (data.getAttribute('class')?.includes('button-')) {
    let content: string = data.textContent!;
    inputValue.value += content;

    checker(content);
  }
};

const  checker = (val: string): string | null => {
  const operations = ['%', '+', '/', '*', '÷', '×', '-', '='];
  const switchContent = ['×', 'CE'];
  let counter = 0;

  if (switchContent.includes(val!)) {
    switch (val) {
      case 'CE':
        val = '';
        inputValue.value = '';
        break;
    }
  }

  let flag = false;
  for (let i = 1; i < inputValue.value.length; i++) {
    if (operations.includes(inputValue.value[i]) && inputValue.value[i] !== '=') {
      flag = true;
    };
  };
  if (!flag && val ==='=') {
    inputValue.value = inputValue.value.slice(0, inputValue.value.length - 1);
  };

  if (operations.includes(val!)) {
    if (inputValue.value.length == 1) {
      val != '=' ? inputValue.value = '0' + val : inputValue.value = '0';
    } else if (inputValue.value.length > 1) {
      if (operations.includes(inputValue.value[inputValue.value.length - 2]) && val !== '=') {
        inputValue.value = inputValue.value.replace(inputValue.value[inputValue.value.length - 2], val)
        inputValue.value = inputValue.value.slice(0, inputValue.value.length - 1);
      };
      for (let i = 0; i < inputValue.value.length; i++) {
        if (operations.includes(inputValue.value[i])) {
          counter += 1;
          if (counter > 1) {
            let indexItem = 0;
            let i = 0;
            if (inputValue.value[0] == '-') {
              i = 1;
            };
            for (i; i < inputValue.value.length; i++) {
              if (operations.includes(inputValue.value[i])) {
                indexItem = i;
                break;
              }
            };
            i = 0;
            const lastIndex = inputValue.value.indexOf(val);
            const lastItem = inputValue.value[lastIndex];
            const item = inputValue.value[indexItem];
            const prevItem = inputValue.value.slice(0, indexItem);
            const nextItem = inputValue.value.slice(indexItem + 1, inputValue.value.length - 1);
            calcResult(item, lastItem, prevItem, nextItem);
          }
        } else if (counter < 2) {
          if (val === '=') {
            inputValue.value = inputValue.value.slice(0, inputValue.value.length)
          }
        }
      }
      counter = 0;
    }
    return val
  } else if (operations.includes(inputValue.value[inputValue.value.length - 2]) && inputValue.value[inputValue.value.length - 1] === '.') {
    inputValue.value = inputValue.value.slice(0, inputValue.value.length - 1);
  } else if (inputValue.value[inputValue.value.length - 1] === inputValue.value[inputValue.value.length - 2]) {
    inputValue.value = inputValue.value.slice(0, inputValue.value.length - 1);
  }
  return null
}

const calcResult = (item: string, lastItem: string, prevItem: string, nextItem: string) => {
  switch (item) {
    case '%':
      lastItem !== '=' ? inputValue.value = (+prevItem % +nextItem).toString() + lastItem : inputValue.value = (+prevItem % +nextItem).toString();
      break;
    case '÷':
      lastItem !== '=' ? inputValue.value = (+prevItem / +nextItem).toString() + lastItem : inputValue.value = (+prevItem / +nextItem).toString();
      break;
    case '×':
      lastItem !== '=' ? inputValue.value = (+prevItem * +nextItem).toString() + lastItem : inputValue.value = (+prevItem * +nextItem).toString();
      break;
    case '-':
      lastItem !== '=' ? inputValue.value = (+prevItem - +nextItem).toString() + lastItem : inputValue.value = (+prevItem - +nextItem).toString();
      break;
    case '+':
      lastItem !== '=' ? inputValue.value = (+prevItem + +nextItem).toString() + lastItem : inputValue.value = (+prevItem + +nextItem).toString();
      break;
  }
}

const inputFunc = (data: HTMLInputElement) => {
  inputValue.value = data.value;
  checker(data.value[data.value.length - 1]);
  data.value = inputValue.value;
}

</script>

<style>
* {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  width: 100%;
}

input, button {
  border: none;
  outline: none;
  display: inline-block;
}

.container {
  display: flex;
  align-items: center;
  max-width: 400px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
}

.calculator {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  height: 600px;
  background-color: #c9c9c9;
  border-radius: 20px;
  padding: 20px;
}

</style>