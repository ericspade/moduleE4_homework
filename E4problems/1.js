const building = {

 type: "Concrete"

}

const apartment = Object.create(building);

apartment.stories = 9;

const list = (object) => {
for (let key in object) {
   if (object.hasOwnProperty(key)) {
        console.log(key);
        console.log(object[key]);
    }
  }
}
list(apartment);