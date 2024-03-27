declare const name: string;
declare function getName(): string;
declare class Animal {
  constructor(name: string);
  sayHi(): string;
}

declare enum Directions {
  Up,
  Down,
  Left,
  Right
}

declare interface Options {
  data: any;
}



export { name, getName, Animal, Directions, Options };

export namespace foo {
  const name: string
  namespace bar {
    function baz(): string
  }
}

export default function FOO(): string


