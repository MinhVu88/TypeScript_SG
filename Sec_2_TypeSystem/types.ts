const today = new Date();
console.log('\nToday:',today.getDate(),' | Date type? ->', today instanceof Date);

const person = {age: 20};
console.log('\nperson:', person,' | Object type? ->', person instanceof Object);

class Color {};
const red = new Color();
console.log('\nred:',red,' | Color type? ->', red instanceof Color);