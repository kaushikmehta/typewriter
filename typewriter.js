const sentence = "hello lighthouse labs";
let timeoutTime = 0;

for (const char of sentence) {
  setTimeout(() => process.stdout.write(char), timeoutTime)
  timeoutTime += 50
};

setTimeout(() => process.stdout.write("\n"), timeoutTime);