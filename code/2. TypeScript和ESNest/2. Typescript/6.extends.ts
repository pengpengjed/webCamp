// 实战，定义响应参数类型
interface IData {
  name: string;
}

type ResponseDataType<T extends IData> = {
  code: number;
  message: string;
  success: boolean;

  data: T;
};

// 我如果要对泛型进行约束的话，可以使用 extends
const res: ResponseDataType<{ name: string; color: string }> = {
  code: 0,
  message: "success",
  success: true,
  data: {
    name: "heyi",
    color: "red",
  },
};
