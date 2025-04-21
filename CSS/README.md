#  CSS (Cascading Style Sheets)
CSS (Cascading Style Sheets) is a language that is used to style HTML elements. It contains **properties** that define the style rules.

## CSS Properties with Examples
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
- **Inline Style**: Writing style directly inline on each element
  ```html
     <h1 style="color:red;"> Hello World! </h1>
  ```
- **Using <style> tag**: Style is added using the `<style>` element in the same documnet
  ```html
    <style>
        h1 {
            color:red;
        }
    </style>
  ```
- **External Style Sheet**: Writing CSS in a separate document & linking it with HTML file
  ```html
  <head>
      <link rel="stylesheet" href="style.css">  <!-- Linking HTML with CSS File -->
  </head>
  ```
  
## Table of Contents
- [CSS - Getting Started](./CSS(GettingStarted))
