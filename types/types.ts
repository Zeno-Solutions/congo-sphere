interface User {
  id: string;
  name: string;
  username: string;
  avatarUrl: string;
  email: string;
  password: string;
  role: "admin" | "user";
  createdAt: Date;
  updatedAt: Date;
  eventUsers: [string];
}
