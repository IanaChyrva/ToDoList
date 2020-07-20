const checkList = document.getElementById('checkList');
const entryFieldElement = entryField();
const addElement = add();
const formElement = form();


setEntryFieldContent(addElement);


console.log('entryFieldElement', entryFieldElement);

document.body.insertBefore(
    entryFieldElement,
    document.body.children[document.body.children.length - 1]
);

function setEntryFieldContent(child) {
    entryFieldElement.innerHTML = '';
    entryFieldElement.appendChild(child)
}

function item(text) {
    const label = document.createElement('label');
    const input = document.createElement('input');
    const i = document.createElement('i');
    const span = document.createElement('span');

    label.appendChild(input);
    label.appendChild(i);
    label.appendChild(span);

    input.setAttribute('type', 'checkbox');
    input.setAttribute('hidden', 'hidden');
    input.classList.add('checkList__itemFlag');

    i.classList.add('checkList__itemFlagIcon');

    span.classList.add('checkList__itemText');
    span.innerHTML = text;

    return label;
}


function entryField() {

    const EntryField = document.createElement('div');

    EntryField.classList.add('EntryField');

    return EntryField;
}


function add() {
    const add = document.createElement('button');

    add.classList.add('EntryField__add');
    add.setAttribute('type', 'button');
    add.innerHTML = 'Добавить элемент';

    add.addEventListener('click', () => {
        setEntryFieldContent(formElement);

    });

    return add;
}

function form() {
    const form = document.createElement('form');
    const field = document.createElement('input');
    const submit = document.createElement('button');
    const close = document.createElement('button');

    form.appendChild(field);
    form.appendChild(submit);
    form.appendChild(close);

    form.classList.add('EntryField__form');
    field.classList.add('EntryField__field');
    submit.classList.add('EntryField__submit');
    close.classList.add('EntryField__close');


    field.setAttribute('type', 'text');
    form.setAttribute('action', '#');
    submit.setAttribute('type', 'submit');
    close.setAttribute('type', 'button');

    submit.innerHTML = 'Добавить';
    close.innerHTML = 'X';

    field.textContent = field.value;

    close.addEventListener('click', () => {
        setEntryFieldContent(addElement);
    })

    submit.addEventListener('click', () => {
        checkList.appendChild(item(field.value));
        field.value = '';
    })

    return form;
}