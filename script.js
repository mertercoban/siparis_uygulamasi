document.addEventListener("DOMContentLoaded", () => {
  loadOrders();
});

function loadOrders() {
  const preparingOrders = JSON.parse(localStorage.getItem('preparingOrders')) || [];
  const preparedOrders = JSON.parse(localStorage.getItem('preparedOrders')) || [];

  preparingOrders.forEach(order => addOrderToList(order, 'preparing'));
  preparedOrders.forEach(order => addOrderToList(order, 'prepared'));
}

function saveOrders() {
  const preparingOrders = Array.from(document.getElementById('preparing-list').children).map(li => li.querySelector('.order-number').textContent);
  const preparedOrders = Array.from(document.getElementById('prepared-list').children).map(li => li.textContent.trim());

  localStorage.setItem('preparingOrders', JSON.stringify(preparingOrders));
  localStorage.setItem('preparedOrders', JSON.stringify(preparedOrders));
}

function addOrder(listType) {
  const inputId = listType === 'preparing' ? 'preparing-input' : 'prepared-input';
  const listId = listType === 'preparing' ? 'preparing-list' : 'prepared-list';
  const input = document.getElementById(inputId);
  const list = document.getElementById(listId);

  if (input.value.trim() !== "") {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = input.value;
    span.classList.add('order-number');

    li.appendChild(span);

    if (listType === 'preparing') {
      const button = document.createElement('button');
      button.textContent = '+';
      button.onclick = () => moveOrderToPrepared(li);
      li.appendChild(button);
    }

    list.insertBefore(li, list.firstChild);
    input.value = "";
    manageListSize(listId);
    saveOrders();
  }
}

function addOrderToList(order, listType) {
  const listId = listType === 'preparing' ? 'preparing-list' : 'prepared-list';
  const list = document.getElementById(listId);

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = order;
  span.classList.add('order-number');

  li.appendChild(span);

  if (listType === 'preparing') {
    const button = document.createElement('button');
    button.textContent = '+';
    button.onclick = () => moveOrderToPrepared(li);
    li.appendChild(button);
  }

  list.appendChild(li);
  manageListSize(listId);
}

function moveOrderToPrepared(li) {
  const preparingList = document.getElementById('preparing-list');
  const preparedList = document.getElementById('prepared-list');

  preparingList.removeChild(li);

  const newLi = document.createElement('li');
  newLi.textContent = li.querySelector('.order-number').textContent.trim();
  preparedList.insertBefore(newLi, preparedList.firstChild);

  manageListSize('prepared-list');
  saveOrders();
}

function manageListSize(listId) {
  const list = document.getElementById(listId);
  while (list.children.length > 10) {
    list.removeChild(list.lastChild);
  }
}

function resetOrders() {
  document.getElementById('preparing-list').innerHTML = '';
  document.getElementById('prepared-list').innerHTML = '';

  localStorage.removeItem('preparingOrders');
  localStorage.removeItem('preparedOrders');
}
