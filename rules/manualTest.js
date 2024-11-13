/*
async function good() {
  return promise();
}
*/

/*
const good = async () => {
  return promise();
};
*/

/*
async function multipleStatements() {
  const a = await promise1();
  const b = await promise2();
  return a + b;
}
*/

/************ BAD ************/
/*
async function bad() {
  const a = await promise();
  return a;
}
*/

/*
const bad = async () => {
  const result = await asyncOperation();
  return result;
};
*/

/*
async function badWithComments() {
  // This is a comment
  const data = await fetchData();
  // Another comment
  return data;
}
*/

/*
class A {
  async method () {
  // This is a comment
  const data = await fetchData();
  // Another comment
  return data;
  }
}
*/
