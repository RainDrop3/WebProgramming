/*
// JavaScript
console.log(1234567890n);
console.log(0xABCDEFn);

const bigIntResult = BigInt(Number.MAX_SAFE_INTEGER) + 2n === BigInt(Number.MAX_SAFE_INTEGER) + 2n;
console.log(bigIntResult); // false - 정확한 계산

////////////////////////////////////////////////////////////////////////////////
// JavaScript
const name = "Sally";
const greeting = `Hello. My name is ${name}.`;
const multiline = `<div>
백틱을 사용해 여러 줄을 적을 수 있습니다.
</div>`;

// 태그드 템플릿
function myTag(strings, name) {
  return `${strings[0]}${name.toUpperCase()}${strings[1]}`;
}

const result = myTag`Hello. My name is ${name}.`;
console.log(result); // "Hello. My name is SALLY."
////////////////////////////////////////////////////////////////////////////////

// TypeScript는 symbol과 unique symbol을 구분
const sym1: symbol = Symbol("key");
const sym2: symbol = Symbol("key");

// unique symbol - 컴파일 시점에 고유성 보장
const UNIQUE_KEY: unique symbol = Symbol("unique");

interface Cache {
  [UNIQUE_KEY]: string;
}

const cache: Cache = {
  [UNIQUE_KEY]: "cached value"
};

// 타입 안전한 Symbol 사용
const COLOR_KEY = Symbol("color");
const SIZE_KEY = Symbol("size");

interface Product {
  [COLOR_KEY]: string;
  [SIZE_KEY]: number;
}

function getProductColor(product: Product): string {
  return product[COLOR_KEY];
}

////////////////////////////////////////////////////////////////////////////////
// JavaScript - 문자열 연결 방식에 따른 차이
const obj = {
  valueOf() { return 7; },
  toString() { return "칠"; }
};

console.log("숫자: " + obj);  // "숫자: 7" (valueOf 우선)
console.log(`숫자: ${obj}`);  // "숫자: 칠" (toString 우선)

//////////////////////////////////////////////////////////////////////////////////
// TypeScript는 boolean과 truthy/falsy를 구분
function processValue(value: string | null | undefined) {
  // Truthy/Falsy 체크
  if (value) {
    // value는 string (null과 undefined 제외)
    console.log(value.toUpperCase());
  }
}

// 명시적 boolean 체크
function isValidString(value: string | null | undefined): value is string {
  return value !== null && value !== undefined && value !== "";
}

// 타입 가드로 안전하게 처리
function handleValue(value: string | null | undefined) {
  if (isValidString(value)) {
    // value는 확실히 string
    console.log(value.length);
  }
}

// strictNullChecks로 null/undefined 명시적 처리
function requireNonNull<T>(value: T | null | undefined): T {
  if (value === null || value === undefined) {
    throw new Error("값이 null 또는 undefined입니다");
  }
  return value;
}
*/

let aaa = null;
var bbb = undefined;
const ccc = undefined;

console.log(typeof aaa);
console.log(typeof bbb);
console.log(typeof ccc);
