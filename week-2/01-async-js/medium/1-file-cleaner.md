## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
Code
```
const fs = require("fs");

fs.readFile("a.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const cleanedContent = data.replace(/\s+/g, ' ');

  fs.writeFile("a.txt", cleanedContent, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File cleaned successfully!');
  });
});
```