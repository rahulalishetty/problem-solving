// add(1)(2)(3)(1, 2, 3)) = 12

function sum (...args) {
    return Object.assign(
        sum.bind(null, ...args),
        {valueOf: () => args.reduce((a,c) => a+c, 0)}
    );
}

console.log("evaluate infinite curry", +sum(1)(2)(3)(1, 2, 3));

const _sum3 = (x, y, z) => x + y + z;

const _sum4 = (p, q, r, s) => p + q + r + s;

function curry(fn) {
  const N = fn.length;
  function innerFn(n, args) {
    return function actualInnerFn(a) {
      if(n <= 1) {
        return fn(...args, a);
      }
     return innerFn(n - 1, [...args, a]);
    }
  }
  return innerFn(N, [])
}

const sum33 = curry(_sum3);
const sum4 = curry(_sum4);

console.log(sum3(1)(3)(2)); // 6
console.log(sum4(1)(3)(2)(4)); // 10

const curry = fn => {
    const innerFn = (N, args) => {
        return (...x) => {
        if (N <= x.length) {
            return fn(...args, ...x);
        }
        return innerFn(N - x.length, [...args, ...x]);
        };
    };
  
    return innerFn(fn.length, []);
};


const sum3 = curry(_sum3);

sum3(2, 3)(4) //9
sum3(2)(3, 4) //9