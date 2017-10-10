let menu = {
  _courses: {
  	appetizers: [],
    mains: [],
    desserts: []
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

};
