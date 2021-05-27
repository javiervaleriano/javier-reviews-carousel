// Every person's review
const reviews = [
    {
        name: 'Haley Burrell',
        image: 'retrato-1.jpg',
        job: 'Lawyer',
        review: 'Best Portal for Files, Billing and Communication with clients.'
    },
    {
        name: 'Vincent Wilson',
        image: 'retrato-2.jpg',
        job: 'Entrepreneur',
        review: 'Excellent solution for files-sharing and eSignatures.'
    },
    {
        name: 'Clarence Donaldson',
        image: 'retrato-3.jpg',
        job: 'Engineer',
        review: 'By far the best designed client portal product.'
    },
    {
        name: 'Chloe Griffin',
        image: 'retrato-4.jpg',
        job: 'Graphic Designer',
        review: 'Messaging, file-sharing, and billing in one place!'
    },
    {
        name: 'Rose Miller',
        image: 'retrato-5.jpg',
        job: 'Front-end Developer',
        review: 'Amazing white label file sharing & eSignature solution.'
    }
];

// Variables to select the DOM elements
const person = document.getElementById('name');
const image = document.getElementById('image');
const job = document.getElementById('job');
const review = document.querySelector('#opinion p');
const btns = document.querySelectorAll('.btn');

// Variable of Index
let index = 0;

// Shows the review
function showReview() {
    const item = reviews[index];
    person.textContent = item.name;
    image.src = item.image;
    job.textContent = item.job;
    review.textContent = item.review;
}

// Load initial review
window.addEventListener('DOMContentLoaded', function () {
    showReview();
});

// Function of all the buttons
btns.forEach(btn => {
    btn.addEventListener('click', function () {
        const btnClass = btn.classList;

        if (btnClass.contains('prev')) {
            index--;
        } else if (btnClass.contains('next')) {
            index++;
        } else {
            index = Math.floor(Math.random() * reviews.length);
        }

        if (index < 0) {
            index = reviews.length - 1;
        } else if (index >= reviews.length) {
            index = 0;
        }

        showReview();
    })
});