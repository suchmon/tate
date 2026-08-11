const textInput = document.getElementById('text-input');
const textOutput = document.getElementById('text-output');

textInput.addEventListener('input', () => {
  // 改行を正しく反映させるために innerText を使用
  textOutput.innerText = textInput.value;
});