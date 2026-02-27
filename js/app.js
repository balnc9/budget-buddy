const tabButtons = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.tab-panel');

function setActiveTab(tabId) {
  panels.forEach((panel) => panel.classList.toggle('active', panel.id === tabId));
  tabButtons.forEach((button) => button.classList.toggle('active', button.dataset.tab === tabId));
}

tabButtons.forEach((button) => {
  button.addEventListener('click', () => setActiveTab(button.dataset.tab));
});

const profileImageBtn = document.getElementById('profileImageBtn');
const profileNotice = document.getElementById('profileNotice');
const closeNotice = document.getElementById('closeNotice');

profileImageBtn.addEventListener('click', () => profileNotice.classList.remove('hidden'));
closeNotice.addEventListener('click', () => profileNotice.classList.add('hidden'));

const printChoicesBtn = document.getElementById('printChoices');
const choicesOutput = document.getElementById('choicesOutput');

printChoicesBtn.addEventListener('click', () => {
  const mode = document.querySelector('input[name="mode"]:checked').value;
  const focus = document.getElementById('focusSelect').value;
  choicesOutput.textContent = `You selected ${mode} mode with ${focus} focus.`;
});

const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');

function bindTodoActions(item) {
  item.querySelector('.toggle').addEventListener('click', () => item.classList.toggle('done'));
  item.querySelector('.delete').addEventListener('click', () => item.remove());
}

Array.from(todoList.querySelectorAll('li')).forEach(bindTodoActions);

function addTodoItem() {
  const text = todoInput.value.trim();
  if (!text) return;

  const item = document.createElement('li');
  item.innerHTML = `
    <button class="toggle" aria-label="toggle">✓</button>
    <span></span>
    <button class="delete" aria-label="delete">&times;</button>
  `;
  item.querySelector('span').textContent = text;

  todoList.prepend(item);
  bindTodoActions(item);
  todoInput.value = '';
}

addTodoBtn.addEventListener('click', addTodoItem);
todoInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') addTodoItem();
});

function drawPieChart() {
  const canvas = document.getElementById('budgetChart');
  const ctx = canvas.getContext('2d');

  const data = [300, 500, 100];
  const colors = ['#d87093', '#c39adf', '#e6d58a'];
  const labels = ['300', '500', '100'];

  const total = data.reduce((sum, value) => sum + value, 0);
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const r = 265;
  let start = -Math.PI / 2;

  data.forEach((value, index) => {
    const angle = (value / total) * Math.PI * 2;
    const end = start + angle;

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, start, end);
    ctx.closePath();
    ctx.fillStyle = colors[index];
    ctx.fill();

    ctx.lineWidth = 3;
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();

    const mid = start + angle / 2;
    const lx = cx + Math.cos(mid) * (r + 30);
    const ly = cy + Math.sin(mid) * (r + 30);
    ctx.fillStyle = '#000';
    ctx.font = '30px Georgia';
    ctx.fillText(labels[index], lx - 15, ly);

    start = end;
  });
}

drawPieChart();
