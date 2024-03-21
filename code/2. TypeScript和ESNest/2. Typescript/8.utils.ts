// Omit
// Pick
// Require
// 说实话，把我们介绍的这些东西弄明白之后，这些方法你完全可以自己写
interface Todo {
  title: string
  description: string
  completed: boolean
}

// 我现要你写一个 MyPick 实现 Pick 的功能

// 约束：K 必须是 T 的 key
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
