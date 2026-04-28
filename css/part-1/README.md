#  CSS (Cascading Style Sheets)

It is a language that is used to style HTML elements. It contains **properties** that define the style rules.

## Basic Format of CSS

```css
h1 {
  color: blue; /* property: value */
}

/* Selector = h1, Property = color, Value = blue */
```

To explore more CSS properties, check out the [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference).

## How to Include Styles?

### Inline Style

Writing style directly inline on each element

```html
<!-- Inline style (not recommended for large use) -->

<h1 style="color: red;"> Hello World! </h1> <!-- Put directly inside any HTML tag -->
```

### Using Style Tag

Style is added using the `<style>` element in the same document

```html
<!-- Style tag (good for single-page demos) -->

<style>
    h1 {
        color:red;
    }
</style> <!-- Put inside <head> section -->
```

### External Style Sheet

Writing CSS in a separate document & linking it with HTML file

```html
<!-- External stylesheet (best for real projects) -->

<link rel="stylesheet" href="style.css"> <!-- Put inside <head> section -->
```

## Color Property

Used to set the color of foreground

```css
color: #ffffff; /* Sets text/foreground color to white */
```

## Background Color Property

Used to set the color of background

```css
background-color: purple; /* Sets background color to purple */
```

## Color Systems

| Color System         | Example              |
|----------------------|----------------------|
| `Named Colors` Each browser recognizes around 140 named colors. | `color: black;` |
| `RGB` Red Green Blue (0 - 255) | `color: rgb(255, 255, 255);` |
| `Hexadecimal or Hex` Letters: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F  Total 16 letters | `color: #ffffff;` |

## Text Properties

```css
text-align      /* HORIZONTAL alignment: left/right/center/justify */
text-decoration /* DECORATIVE lines: underline/overline/line-through */
line-height     /* VERTICAL spacing between lines */
letter-spacing  /* HORIZONTAL space between characters */
```

### text-align

```css
/* Relative to the parent element */

text-align: left/start; /* Aligns text to left edge */
text-align: right/end;  /* Aligns text to right edge */
text-align: center;     /* Centers text horizontally */
text-align: justify;    /* Stretches text to fill full width */
```

### text-decoration

Sets the appearance of decorative lines on text like underline

```css
text-decoration: underline;           /* Line BELOW text */
text-decoration: overline;            /* Line ABOVE text */
text-decoration: line-through;        /* Line THROUGH text (strikethrough) */
text-decoration: red underline;       /* Red line below text */
text-decoration: wavy overline;       /* Wavy line above text */
text-decoration: wavy blue underline; /* Wavy blue line below text */
text-decoration: dotted line-through; /* Dotted line through text */
text-decoration-color: red;           /* Changes ONLY the line color */
```

### line-height

Controls the height of the line of text

```css
line-height: normal;
line-height: 2.5; /* 2.5x normal line height (increases vertical gap) */
```

### letter-spacing

Controls the horizontal spacing behavior between text characters

```css
letter-spacing: normal;
letter-spacing: 10px; /* Adds 10px gap between each letter */
```

## Font Properties

```css
font-family /* Which font type/design to use */
font-size   /* How big or small the text appears */
font-weight /* How bold or light the text is (100-900) */
```

### font-family

Specifies a prioritized list of one or more font family names

```css
font-family: arial;             /* Use Arial font */
font-family: arial, sans-serif; /* Fallback to sans-serif if Arial missing */
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
font-weight: normal;  /* 400 - regular thickness */
font-weight: bold;    /* 700 - thick/bold */
font-weight: 100;     /* Very thin (range 100-900, 100=thinnest, 900=thickest) */
font-weight: bolder;  /* Bolder than parent element */
font-weight: lighter; /* Lighter than parent element */
```
