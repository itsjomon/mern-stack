#  CSS (Cascading Style Sheets)

It is a language that is used to style HTML elements. It contains **properties** that define the style rules.

## Basic Format of CSS

```css
h1 {
  color: blue;
}

/* h1 is Selector */
/* color is Property */
/* blue is Value */
```

To explore more CSS properties, check out the [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference).

## How to Include Styles?

### Inline Style

Writing style directly inline on each element

```html
<h1 style="color: red;"> Hello World! </h1>
```

### Using Style Tag

Style is added using the `<style>` element in the same document

```html
<style>
    h1 {
        color:red;
    }
</style>
```

### External Style Sheet

Writing CSS in a separate document & linking it with HTML file

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Linking HTML with CSS File -->
    <link rel="stylesheet" href="style.css">

    <title>Document</title>
</head>
<body>

</body>
</html>
```

## Color Property

Used to set the color of foreground

```css
color: purple;
color: #ffffff;
```

## Background Color Property

Used to set the color of background

```css
background-color: purple;
background-color: #ffffff;
```

## Color Systems

| Color System         | Example              |
|----------------------|----------------------|
| `Named Colors` Each browser recognizes around 140 named colors. | `color: black;` |
| `RGB` Red Green Blue (0 - 255) | `color: rgb(255, 255, 255);` |
| `Hexadecimal or Hex` Letters: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F  Total 16 letters | `color: #ffffff;` |

## Text Properties

```css
text-align
text-decoration
line-height
letter-spacing
```

### text-align

```css
text-align: left/start;
text-align: right/end;
text-align: center;
text-align: justify;

/* Relative to the parent element */
```

### text-decoration

Sets the appearance of decorative lines on text like underline

```css
text-decoration: underline;
text-decoration: overline;
text-decoration: line-through;
text-decoration: red underline;
text-decoration: wavy overline;
text-decoration: wavy blue underline;
text-decoration: dotted line-through;
text-decoration-color: red;
```

### line-height

Controls the height of the line of text

```css
line-height: normal;
line-height: 2.5; /* 2.5*Normal */
```

### letter-spacing

Controls the horizontal spacing behavior between text characters

```css
letter-spacing: normal;
letter-spacing: 10px;
```

## Font Properties

```css
font-family
font-size
font-weight
```

### font-family

Specifies a prioritized list of one or more font family names

```css
font-family: arial;
font-family: avant garde, didot, sans-serif; /* backup family of fonts */
```

To explore more CSS fonts, check out the [CSS Font Stack](https://www.cssfontstack.com/).

### font-size

| Absolute | Relative       |
|----------|----------------|
| px       | %              |
| pt       | em             |
| pc       | rem            |
| cm       | ch             |
| mm       | vh             |
| in       | vw + many more |

- **Pixels (px)**

  Most commonly used absolute unit

  96px = 1 inch

  Not suitable for responsive websites

  ```css
  font-size: 50px;
  ```

### font-weight

```css
font-weight: normal; /* 400 */
font-weight: bold;   /* 700 */
font-weight: 100;
font-weight: bolder;
font-weight: lighter;

/* 100 - 900 */
```
