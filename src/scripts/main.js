'use strict';

const tableBody = document.querySelector('.field tbody');
const appendRow = document.querySelector('.append-row');
const appendCol = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeCol = document.querySelector('.remove-column');
const col = document.createElement('td');

appendRow.addEventListener('click', () => {
  tableBody.appendChild(tableBody.firstChild.cloneNode(true));

  if (tableBody.children.length === 10) {
    appendRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  tableBody.removeChild(tableBody.lastElementChild);

  if (tableBody.children.length === 2) {
    removeRow.disabled = true;
  } else {
    appendRow.disabled = false;
  }
});

appendCol.addEventListener('click', () => {
  Array.from(tableBody.children).forEach((tr) => {
    tr.appendChild(col.cloneNode(true));
  });

  if (tableBody.firstElementChild.children.length === 10) {
    appendCol.disabled = true;
  } else {
    removeCol.disabled = false;
  }
});

removeCol.addEventListener('click', () => {
  Array.from(tableBody.children).forEach((tr) => {
    tr.removeChild(tr.lastElementChild);
  });

  if (tableBody.firstElementChild.children.length === 2) {
    removeCol.disabled = true;
  } else {
    appendCol.disabled = false;
  }
});
