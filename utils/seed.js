const connection = require('../config/connection');
const { User, Thought, reactionSchema } = require('../models');

// const firstNames = [
//     'Wei',
//     'Xiao',
//     'Ming',
//     'Ling',
//     'Yan',
//     'Jing',
//     'Jun',
//     'Hui',
//     'Li',
//     'Chen',
//     'Fang',
//     'Xuan',
//     'Yu',
//     'Qiang',
//     'Yi',
//     'Shan',
//     'Hao',
//     'Rui',
//     'Jia',
//     'Zhen',
//     'Xin',
//     'Yuan',
//     'Hua',
//     'Ying',
//     'Nan',
//     'Han',
//     'Xiang',
//     'Lei',
//     'Mei',
//     'Yang',
//     'Wen'
// ];

// const lastNames = [
//     'Li',
//     'Wang',
//     'Zhang',
//     'Liu',
//     'Chen',
//     'Yang',
//     'Zhao',
//     'Huang',
//     'Zhou',
//     'Wu',
//     'Xu',
//     'Sun',
//     'Ma',
//     'Zhu',
//     'Hu',
//     'Guo',
//     'Lin',
//     'He',
//     'Gao',
//     'Li',
//     'Wei',
//     'Xie',
//     'Wu',
//     'Cheng',
//     'Jiang',
//     'Qian',
//     'Tang',
//     'Yu',
//     'Shi',
//     'Cao',
//     'Tian'
// ];
  
// const thoughtContent = [
//     'I really enjoy eating ice cream.',
//     'The weather is quite nice recently.',
//     'I love spending time with my friends and family.',
//     'Learning something new always excites me.',
//     'Nature has a way of calming my mind.',
//     'Listening to music uplifts my mood.',
//     'The smell of freshly brewed coffee is so comforting.',
//     'Random acts of kindness can make a big difference.',
//     'I feel grateful for the little things in life.',
//     'Reading a good book takes me on an adventure.',
//     'Exploring new places and cultures broadens my perspective.',
//     'Laughter is contagious and brings people together.',
//     'Taking a walk in nature helps me clear my thoughts.',
//     'Trying new recipes in the kitchen is a fun experiment.',
//     'I appreciate the beauty of a colorful sunset.',
//     'Writing down my thoughts helps me reflect and grow.',
//     'A smile can brighten someone\'s day.',
//     'Spending time in solitude allows me to recharge.',
//     'Acts of generosity create a ripple effect of kindness.',
//     'Challenges are opportunities for growth and learning.',
//     'The sound of raindrops is soothing to my soul.',
//     'I believe in the power of positive thinking.',
//     'Helping others brings me joy and fulfillment.',
//     'I find inspiration in the beauty of art and creativity.',
//     'Taking deep breaths helps me find inner peace.',
//     'I am capable of achieving great things.',
//     'Taking time for self-care is essential for my well-being.',
//     'Embracing change leads to personal growth.',
//     'I am grateful for the lessons life has taught me.',
//     'Spending time in nature rejuvenates my spirit.',
//     'Happiness is a choice, and I choose to be happy.'
// ];

// const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // *** Taken from 18-NoSQL Mini-project, modified by myself ***
// // Get a random item given an array
// const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
// // Gets a random full name
// const getRandomName = () => `${getRandomArrItem(firstNames)} ${getRandomArrItem(lastNames)}`;

// // function to generate random users in DB
// const generateUsers = (count) => {
//     const users = [];
//     for (let i = 0; i < count; i++) {
//       const fullName = getRandomName();
//       const first = fullName.split(' ')[0];
//       const last = fullName.split(' ')[1];
//       const thoughts = generateThoughts(3);
//       users.push({ first, last, thoughts });
//     }
//     return users;
//   };

// // Function to generate thoughts in DB
// const generateThoughts = (count) => {
//     const thoughts = [];
//     for (let i = 0; i < count; i++) {
//       thoughts.push({
//         content: getRandomArrItem(thoughtContent),
//       });
//     }
//     return thoughts;
// };

// connection.on('error', (err) => err);

// connection.once('open', async () => {
//     console.log('connected');

//     await User.deleteMany({});
//     await Thought.deleteMany({});

//     const users = generateUsers(20);
//     const friends = getRandomArrItem(users);
//     const thoughts = [];

//     for (let i = 0; i < 40; i++) {
//         // const user = getRandomArrItem(users);
//         // console.log(user);
//         const userThoughts = generateThoughts(1);
//         thoughts.push(...userThoughts);
//     };

//     await User.collection.insertMany(users);
//     console.table(users);
//     await Thought.collection.insertMany(thoughts);
//     console.table(thoughts);

//     console.info('Seeding complete! 🌱');
//     process.exit(0);
// });

connection.once('open', async () => {
    console.log('connected');

    await User.deleteMany({});
    await Thought.deleteMany({});
    process.exit(0);
});