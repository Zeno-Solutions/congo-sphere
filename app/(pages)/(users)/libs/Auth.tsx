type User = {
  name: string;
  password: string;
};
export default function Auth() {
  const User: User = {
    name: "martial",
    password: "Azerty",
  };
  const User2: User = {
    name: "martial",
    password: "Azerty",
  };
  let Islogin: boolean = false;
  if (User) {
    Islogin = true;
    return Islogin;
    console.log(Islogin);
  } else {
    Islogin = false;
    return Islogin;
  }
}
