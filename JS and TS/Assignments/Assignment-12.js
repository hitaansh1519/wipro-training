//Question 1

//Another example - We want to group the books into another object and we want
//to group them by rating. Example: Inside the final object, we will have keys
//like 2, 3 and so on. The value of these
//keys will be an array which can have one or more objects.
//All the 2 star rating books will go inside 2 key and so on.
// {
//     2: [




//     ],
//     3: [




//     ]
// }


const books1 = [
   {
       title: 'Good Omens',
       authors: ['Terry Pratchett', 'Neil Gaiman'],
       rating: 4.25,
       genres: ['fiction', 'fantasy']
   },
   {
       title: 'Changing My Mind',
       authors: ['Zadie Smith'],
       rating: 3.83,
       genres: ['nonfiction', 'essays']
   },
   {
       title: 'Bone: The Complete Edition',
       authors: ['Jeff Smith'],
       rating: 4.42,
       genres: ['fiction', 'graphic novel', 'fantasy']
   },
   {
       title: 'American Gods',
       authors: ['Neil Gaiman'],
       rating: 4.11,
       genres: ['fiction', 'fantasy']
   },
   {
       title: 'A Gentleman in Moscow',
       authors: ['Amor Towles'],
       rating: 4.36,
       genres: ['fiction', 'historical fiction']
   },
   {
       title: 'The Name of the Wind',
       authors: ['Patrick Rothfuss'],
       rating: 4.54,
       genres: ['fiction', 'fantasy']
   },
   {
       title: 'The Overstory',
       authors: ['Richard Powers'],
       rating: 4.19,
       genres: ['fiction', 'short stories']
   },
   {
       title: 'A Truly Horrible Book',
       authors: ['Xavier Time'],
       rating: 2.18,
       genres: ['fiction', 'garbage']
   },
   {
       title: 'The Way of Kings',
       authors: ['Brandon Sanderson'],
       rating: 4.65,
       genres: ['fantasy', 'epic']
   },
   {
       title: 'Lord of the flies',
       authors: ['William Golding'],
       rating: 3.67,
       genres: ['fiction']
   }
]


const result = books1.reduce((rate, pointer) => {

    if(rate[Math.floor(pointer.rating)] === undefined){
        rate[Math.floor(pointer.rating)] = [pointer];
    }  
    
    rate[Math.floor(pointer.rating)].push(pointer);

    return rate
}, {})

console.log(result);