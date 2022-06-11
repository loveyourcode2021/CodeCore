//You are given a complex object that has many deeply nested variables.
//Create a prototype method on Object,  Object#getByPath, that takes a period separated string and traverses the nested object. 
//It returns undefined if it encounters and undefined value at any time.

const obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  },
  printThis:function(){
    console.log(this.person.name)
  },
  getByPath:function(input){
    const paths = input.split(".");
    const location = paths.reduce((object, path) => {
      return (object || {})[path]; 
    }, this)
    console.log(location)
  }
};
obj.printThis.bind(obj)
// gets value of `name` in value of `person` in `obj`

obj.getByPath('person.name'); // 'joe'
// gets value of `bio` in value of `history` in value of `person` in `obj`

obj.getByPath('person.history.bio'); // { funFact: 'I like fishing.' }
//  `homeStreet` doesn't exist, then return `undefined`

//obj.getByPath('person.history.homeStreet'); // undefined
// `animal` doesn't exist, then return `undefined`

//obj.getByPath('person.animal.pet.needNoseAntEater'); // undefined

const macAyres = {
  tours: {
    nearMe: {
      sanFrancisco: {
        date: 'Sun Oct 27',
        location: 'The Regency Ballroom',
        cost: '30.00',
      },
    },
  }
}
const paths = ['tours', 'nearMe', 'sanFrancisco', 'location'];
const location = paths.reduce((object, path) => {
    return (object || {})[path]; // Oliver Steele's pattern
}, macAyres)

console.log(location)


const obj1 = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};

Object.prototype.getByPath = function (string) {
    let arr = string.split(".");
    if (arr.length == 0) {
        return undefined;
    }
    let obj = this;
    console.log(this)
    for (str of arr) {
        if (Object.hasOwn(obj1, str)) {
            obj = obj[str];
        } else {
            return undefined;
        }
    }
    return obj;
}

obj1.getByPath('person.history.bio.funFact');