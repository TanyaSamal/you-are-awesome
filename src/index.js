// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (pName) => {
    Object.defineProperty(this, pName, {configurable: true, enumerable: true});
    return pName;
};
const createNotEnumerableProperty = (propName) => {
    Object.defineProperty(Object.prototype, propName, {value: "value", enumerable: false});
    return propName;
};
const createProtoMagicObject = () => {
    let magic = function(){};
    magic.__proto__ = magic.prototype;
    return magic;
};

let current = 0;
const incrementor = () => {
    current++;

    function brackets() {
        current++;
        return brackets;
      }
    
    brackets.valueOf = function() {
        return current;
    };
    
    return brackets;
};

let count = 0;
const asyncIncrementor = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            count++;
            resolve(count);
        }, 1);
    });
};

const createIncrementer = () => {
    let inc = {
        first: 1,
        last: 10,
        [Symbol.iterator]() {
            return this;
        },

        next() {
            if (!this.current) {
                this.current = this.first;
            }

            if (this.current <= this.last) {
                return {
                    done: false,
                    value: this.current++
                };
            } else {
                return {
                    done: true
                };
            }
        }
    }
    return inc;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(param);
        }, 1000);
    })
    return promise;
};
const getDeepPropertiesCount = (someObj) => {
    let  count = 0;
    for (let key in someObj){
        if(someObj.hasOwnProperty(key)){
            count++;
            count += getDeepPropertiesCount(someObj[key]);
        }
    }

    return count;
};
const createSerializedObject = () => {

    return null;
};
const toBuffer = () => {};
const sortByProto = (arr) => {
    arr.sort((p1, p2) =>{
        p1.__proto__ - p2.__proto__;
    });
    return arr;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;