# Practice Questions

Complete the assignment according to the instructions in the CSS file.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="box1">This is box1</div>
  <div id="box2">This is box2</div>
  <div id="box3">This is box3</div>
  <div id="box4">This is box4</div>
  <div id="pic">This is a pic</div>
</body>
</html>
```

```css
/* Qn 1. Add a 2s transition on #box1 for width changes with an 'ease-in' timing curve and a 0.5s delay. */

#box1 {
  width: 100px;
  height: 100px;
  background: green;
}

#box1:hover {
  width: 600px;
}

/* Qn 2. Using transform, move #box2 200px to the right and 200px down, and rotate it 90deg. */

#box2 {
  width: 100px;
  height: 100px;
  background: red;
}

/* Qn 3. Using transform, skew #box3 20deg along the x-axis. */

#box3 {
  width: 100px;
  height: 100px;
  background: lightblue;
}

/* Qn 4. Set a 2px horizontal and 2px vertical green box shadow on #box4 with a 5px blur radius. */

#box4 {
  width: 100px;
  height: 100px;
  background: lightgreen;
}

/* Qn 5. Set a picture as the background of #pic and set its opacity to 50%. */

#pic {
  width: 200px;
  height: 200px;
  background: pink;
}
```
