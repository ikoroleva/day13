const names = ['Martin', 'Jane', 'Eve', 'Artur'];

names[4] = 'Joe';

names[3] = 'Bruce';

//names[10] = 'Ricky';


names.push('Ricky');
names.unshift('Tom');
names.splice(2, 0, 'Lucas');


const removed = names.slice(4, 1);
//console.log(removed);
console.log(names);

//console.log(names[4]);


const last_name = names.pop();

console.log(last_name);
console.log(names);

const first_name = names.shift();

console.log(first_name);
console.log(names);

console.log(names[names.length - 1]);

// let one_element = null;

// do {
//     one_element = names.shift();
//     console.log(one_element);
// } while (one_element);

// console.log(names);



const fruits = ['apple', 'pear', 'banana', 'orange', 'mango'];

fruits.forEach(

    (fruit, key) => {

        if (fruit == 'pear') {
            return;
        }

        console.log(fruit);
    }
)

const new_array = fruits.map((fruit, index) => {

    return '<li>' + fruit + '<li>';
    return index;

})

console.log(new_array);

console.log(fruits.concat(['potatous', 'tomatoes', 'carrots']));

console.log(fruits.filter((fruit) => {

    if (fruit == 'pear' || fruit == 'banana') {
        return false;
    } else {
        return true;
    }

}))


console.log(fruits.indexOf('mango'));
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('plum'));

if (-1 === fruits.indexOf('plum')) {
    console.log('No plums in the array');
}

console.log(fruits.join(' and '));

const vegetables = [
    'potatoes',
    ['radishes', 'carrots']
];

console.log(vegetables);



