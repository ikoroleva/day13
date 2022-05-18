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

const element = document.querySelector('div.main');
const class_name = element.getAttribute('class');

console.log(class_name);

//Find all the image elements and log them, one by one, into the console.

const imgs = document.querySelectorAll('img');



imgs.forEach((img, item) => {
    console.log(img);
})

//Extract the src attributes (URLs) of the images 
//and log them, one by one, into the console.


imgs.forEach((img, item) => {
    console.log(img.getAttribute('src'));

})

//Extract the alt attributes and log them, one by one, into the console.

imgs.forEach((img, item) => {
    console.log(img.getAttribute('alt'));

})

//Declare an empty array in a variable urls.
//As you are looping through the images, build an array of the images' URLs (push the URLs inside) 
//and log the new array into the console.

const urls = [];

imgs.forEach((img, item) => {

    urls[item] = img.getAttribute('src');
})

console.log(urls);

//Declare an empty array in a variable alts.
//As you are looping through the images, build an array of the images' alt tags 
//and log the new array into the console.

const alts = [];

imgs.forEach((img, item) => {

    alts[item] = img.getAttribute('alt');
})

console.log(alts);

//Count the number of images and log it into the console.

const imgs_arr = Array.from(imgs);

console.log(imgs_arr.length);

//Having the array of image URLs, use the array method .slice to make
//a new array of only the first 3 values and log it into the console.

const first3_urls = urls.slice(0, 3);
console.log(first3_urls);

//Do the same thing as in the previous exercise, but using a for loop and break

const first = [];

for (let i = 0; i < urls.length; i++) {

    first.push(urls[i]);

    if (i == 2) {
        break;
    }
}

console.log(first);

//Having the array of image URLs, 
//use the array method .slice to make a new array of only the last 3 values and log it into the console.

const last3_urls = urls.slice(urls.length - 3, urls.length);
console.log(last3_urls);

//Do the same thing as in the previous exercise, but using a for loop and continue:

const last = [];

for (let i = 0; i < urls.length; i++) {

    if (i < urls.length - 3) {
        continue;
    }

    last.push(urls[i]);

}
console.log(last);

//Having the array of alt tags, use the array method .filter to make 
//a new array of only the elements that contain the word cat

const altsFiltered = alts.filter(item => item.match(/cat/i));

console.log(altsFiltered);

//Using JavaScript, use innerHTML to create a list item in the <ul> there, 
//one for each image, with the alt tag as the contents of the <li>.

const empty_ul = document.querySelector('.list-of-photos__list');

alts.forEach((item) => {
    empty_ul.innerHTML += '<li>' + item + '</li>';
})



