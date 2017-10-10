let menu = {
  _courses: {
  	appetizers: ['mozzarella sticks', 'potato skins', 'fried zuchinni'],
    mains: ['spicy wings', 'peparroni pizza', 'double bacon burger'],
    desserts: ['cheesecake', 'apple pie', 'banana split']
  },
  get courses() {
    return {
    	appetizers: this._courses.appetizers,
    	mains: this._courses.mains,
      desserts: this._courses.desserts
    };
  },

  get appetizers() {

  },
  set appetizers(appertizerIn) {

  },

  get mains() {

  },
  set mains(mainIn) {

  },

 	get desserts() {

  },
  set desserts(dessertIn) {

  },

  addDishToCourse(courseName, dishName, dishPrice) {
    let dish = {
      name: dishName,
      price: dishPrice
    };

    this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];
    let randomIndex = Math.floor(Math.random() * dishes.length);
  },

  generateRandomMeal(){
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let mains = this.getRandomDishFromCourse('mains');
    let desserts = this.getRandomDishFromCourse('desserts');
    let totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The price is $${totalPrice}.`;

  }
};

let meal = menu.generateRandomMeal();
console.log(meal);
