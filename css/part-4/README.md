## Alpha Channel

Sets the opacity for a color

Ranges from 0 to 1

```css
rgba(255, 255, 255, 0.3); /* White with 30% opacity */
```

## opacity

Sets the opacity for the element

Ranges from 0 to 1

```css
opacity: 0.5; /* Element is 50% transparent */
```

## transition

Transition enable you to define the transition between two states of an element

### Transition Shorthand

property name | duration | timing-function | delay

```css
transition: margin-top 2s ease-in-out 0.2;
```

## transform

This property lets you rotate, scale, skew, or translate an element

```css
/* Rotate */
transform: rotate(45deg);         /* Rotates 45 degrees */

/* Scale */
transform: scale(0.5);            /* Shrinks to 50% size */
transform: scale(0.5, 2);         /* Width 50%, Height 200% */
transform: scaleX(0.5);           /* Width 50% */
transform: scaleY(0.5);           /* Height 50% */

/* Translate */
transform: translate(50px, 50px); /* Moves right 50px, down 50px */
transform: translateX(10px);      /* Moves right 10px */
transform: translateY(10px);      /* Moves down 10px */

/* Skew */
transform: skew(45deg);           /* Slants element 45 degrees horizontally (X-axis) */

```

## box-shadow

It adds shadow effects around an element's frame

```css
box-shadow: 2px 2px 10px green; /* offset-x | offset-y | blur | color */
```

## background-image

Lets you set an image as a background

```css
background-image: url("image.jpg");

background-size: contain; /* No crop, No scale, Only repeat image to fill the area */
background-size: cover;   /* Crop but not scale */
background-size: auto;    /* Stretch the image to fit */
```

## position

The position CSS property sets how an element is positioned in a document.

The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.

- static
- relative
- absolute
- fixed

### Position - Static

The top, right, bottom, left, and z-index properties have no effect.

This is the `default` value.

```css
position: static;
```

### Position - Relative

The offset is relative to itself based on the values of top, right, bottom, and left.

```css
position: relative;
```

### Position - Absolute

The element is removed from the normal document flow, and no space is created for the element in the page layout.

It is positioned `relative to its closest positioned ancestor`, if any; otherwise, it is placed relative to the initial containing block.

```css
position: absolute;
```

### Position - Fixed

The element is removed from the normal document flow, and no space is created for the element in the page layout.

It is positioned `relative to the initial containing block` established by the viewport.

```css
position: fixed;
```
