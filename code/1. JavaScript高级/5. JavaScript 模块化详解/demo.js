// namespace模式
let myModule = {
  data: '321',
  foo() {
    console.log(data)
  },
  BarProp() {
    console.log(233)
  }
}
myModule.data = 'other data'
myModule.foo()