const textInput = document.getElementById('text-input');
const textOutput = document.getElementById('text-output');

// 初期テキストを設定（任意）
const defaultText = "行く春や鳥啼魚の目は涙\n五月雨を集めて早し最上川\n閑さや岩にしみ入る蝉の声";
textInput.value = defaultText;
textOutput.innerText = defaultText;

// 入力イベントでリアルタイム更新
textInput.addEventListener('input', () => {
  textOutput.innerText = textInput.value;
});
