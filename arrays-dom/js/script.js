const list = document.querySelector('ul');
console.log(list);

console.log(list.clientHeight);

const list_items = document.querySelectorAll('li');

console.log(list_items);

const list_items_as_array = Array.from(list_items);

console.log(list_items_as_array);

list_items.forEach(

    (list_item, index) => {
        console.log(list_item.innerHTML);
    })
