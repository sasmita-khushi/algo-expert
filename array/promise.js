const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("✅ Data received!");
    //  reject("❌ Something went wrong");
  }, 1000);
});

try {
  const result = await promise;
  console.log(result);
} catch (error) {
  console.log(error);
}
