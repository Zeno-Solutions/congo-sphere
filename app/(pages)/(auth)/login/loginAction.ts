"use server";
export async function getLoginData(datas: FormData) {
  const email = datas.get("email");
  const pass = datas.get("password");
  console.log({ email: email, password: pass });
}
