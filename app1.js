const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
    
    get appetizers() {
      return this._appetizers;
    },
    set appetizers(appetizersIn) {
      this._appetizers = appetizersIn;
    },
    get mains() {
      return this._mains;
    },
    set mains(mainsIn) {
      this._mains = mainsIn;
    },
    get desserts() {
      return this._desserts;
    },
    set desserts(dessertsIn) {
      this._desserts = dessertsIn;
    },
  },
  
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    };
},
  
  
//Method which will be used to add a new dish to the specified course on the menu.  
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    
    this._courses[courseName].push(dish);
  },
  
//A function which will allow us to get a random dish from a course on the menu, 
//which will be necessary for generating a random meal.
  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
   
    const totalPrice = appetizer.price + main.price + dessert.price;
    
    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is ${totalPrice} lei.`;
  },
};

menu.addDishToCourse('appetizers', 'Greek Salad', 45);
menu.addDishToCourse('appetizers', 'Ceasar Salad', 50);
menu.addDishToCourse('appetizers', 'Garlic Bread', 20);

menu.addDishToCourse('mains', 'Chiken with potatoes', 75);
menu.addDishToCourse('mains', 'Beef Steak with rice', 80);
menu.addDishToCourse('mains', 'Lasagna', 70);

menu.addDishToCourse('desserts', 'Cheese Cake', 35);
menu.addDishToCourse('desserts', 'Cake', 30);
menu.addDishToCourse('desserts', 'Creme Brule', 25);

let meal = menu.generateRandomMeal();

console.log(meal);