import "dotenv/config";

const backend = process.env.URL;

export function testFunct() {
  console.log(backend);
}
testFunct();
