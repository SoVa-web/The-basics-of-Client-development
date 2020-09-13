 button = document.getElementById('button'),input = document.getElementById('input'), target = document.getElementById('done')
button.addEventListener("click", e=> target.textContent = input.value)