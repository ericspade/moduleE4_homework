const building = {

 type: "Concrete"

}

const apartment = Object.create(building);

apartment.stories = 9;

const attributecheck = (object, x) => {
let result = false;
let key = prompt("Введите название свойства:", x);
for (let each in object) {
  if (each === key) {
    result = true;
  }
}
return result;
}
let objectcheck = attributecheck(apartment);
console.log(objectcheck);