let menu = {
  _courses: {
  	_appetizers: [],
    _mains: [],
    _desserts: [],

    get appetizers() {
			return this._appetizers;
    },
    set appetizers(appertizerIn) {
			this._appetizers = appertizinIn;
    },

    get mains() {
			return this._mains;
    },
    set mains(mainIn) {
			this._mains = mainIn;
    },

    get desserts() {
			return this._desserts;
    },
    set desserts(dessertIn) {
			this._desserts = desseretIn;
    }
  },

  get courses() {
    return {
    	appetizers: this._courses.appetizers,
    	mains: this._courses.mains,
      desserts: this._courses.desserts
    };
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
    return dishes[randomIndex];
  },

  generateRandomMeal(){
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    let totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The price is $${totalPrice}.`;

  }
};

menu.addDishToCourse('appetizers', 'mozzarella sticks', 4.50);
menu.addDishToCourse('appetizers', 'fried zuchinni', 3.50);
menu.addDishToCourse('appetizers', 'garlic knots', 2.50);
menu.addDishToCourse('mains', 'pepparoni pizza', 6.50);
menu.addDishToCourse('mains', 'chicken parm', 5.50);
menu.addDishToCourse('mains', 'calzone', 6.25);
menu.addDishToCourse('desserts', 'cheesecake', 3.00);
menu.addDishToCourse('desserts', 'apple pie ice cream', 4.00);
menu.addDishToCourse('desserts', 'tiramisu', 3.75);

let meal = menu.generateRandomMeal();
console.log(meal);
