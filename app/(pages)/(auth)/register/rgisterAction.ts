"use server";
export async function registerAction(Datas: FormData) {
  "use server";
  const username = Datas.get("username") as string;
  const email = Datas.get("email") as string;
  const password = Datas.get("password") as string;

  // Perform server-side validation and registration logic here
  // For example, you can call an API to register the user

  // Example response
  console.log({ username, email, password });
}
