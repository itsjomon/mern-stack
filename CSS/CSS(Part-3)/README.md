# CSS Box Model

The **CSS Box Model** describes the rectangular boxes generated for elements in the document tree. Every HTML element is essentially a box with four areas: **content**, **padding**, **border**, and **margin**. Understanding this model is essential to control spacing, sizing, and layout of elements in your webpage.

## Box Model Structure
<img src="https://github.com/user-attachments/assets/d929eb15-171b-418a-8e63-60d6a00a436a" hight="150px" width="400px">

## Height
Defines the **height of the content area** of an element (excluding padding, border, or margin).
```css
div {
    height: 100px;
}
```
- Content area grows vertically based on this value.
- If content overflows, you may need to use `overflow` property.

## Width
Specifies the **width of the content area** of an element.
```css
div {
    width: 800px;
}
```
- Similar to height, this sets only the content box width.
- Use `max-width` or `min-width` to control responsiveness.

## Border
Adds a line around the padding and content.

### Components:
- `border-width`: thickness of the border
- `border-style`: style such as `solid`, `dashed`, `dotted`, etc.
- `border-color`: sets the border's color

### Shorthand Syntax
```css
div {
    border: 2px solid blue;
}
```
Format: `border: [width] [style] [color];`

### Individual Sides
Control borders individually:
```css
border-left
border-right
border-top
border-bottom
```

### Border Radius
Rounds the corners of the box:
```css
div {
    border-radius: 20px;
}

div {
    border-radius: 50%; /* Perfect circle for square elements */
}

div {
    border-top-right-radius: 10px;
}
```
🔗 [MDN Border Radius Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)

## Padding
**Padding** is the space between the content and the border. It pushes the border outward.
```css
div {
    padding: 50px;
}

div {
    padding-left: 50px;
}
```

### Padding Shorthand
1. All four sides:
   ```css
   padding: 10px;
   ```
2. Vertical | Horizontal:
   ```css
   padding: 10px 20px;
   ```
3. Top | Horizontal | Bottom:
   ```css
   padding: 10px 20px 30px;
   ```
4. Top | Right | Bottom | Left:
   ```css
   padding: 10px 20px 30px 40px;
   ```

## Margin
**Margin** is the space *outside* the element’s border. It creates space between elements.
```css
div {
    margin: 50px;
}

div {
    margin-left: 50px;
}
```

### Margin Shorthand
Same structure as padding:
1. All sides:
   ```css
   margin: 10px;
   ```
2. Top & Bottom | Left & Right:
   ```css
   margin: 10px 20px;
   ```
3. Top | Horizontal | Bottom:
   ```css
   margin: 10px 20px 30px;
   ```
4. Top | Right | Bottom | Left:
   ```css
   margin: 10px 20px 30px 40px;
   ```

## Display
Controls how elements are displayed in the flow of the document.
```css
display: block;       /* Takes full width, starts on a new line */
display: inline;      /* Fits in line with text */
display: inline-block;/* Behaves like inline, but allows width & height */
display: none;        /* Hides the element entirely */
```
[MDN Display Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/display)

### Inline vs Block
<img src="https://github.com/user-attachments/assets/af1fd121-a655-40a8-8f71-73925f54e470" hight="150px" width="400px">
<img src="https://github.com/user-attachments/assets/edfce78c-ef27-440a-834d-d8e3ff8d48bb" hight="150px" width="400px"> 

## Units in CSS

### Absolute Units
| Unit | Description     |
|------|-----------------|
| px   | Pixels          |
| pt   | Points          |
| pc   | Picas           |
| cm   | Centimeters     |
| mm   | Millimeters     |
| in   | Inches          |

### Relative Units
| Unit | Description                               |
|------|-------------------------------------------|
| %    | Relative to parent element                |
| em   | Relative to parent font size              |
| rem  | Relative to root (html) font size         |
| ch   | Relative to width of the "0" character    |
| vh   | Relative to 1% of the viewport height     |
| vw   | Relative to 1% of the viewport width      |

### Percentages (`%`)
Used to size elements relative to their parent.
```css
div {
    width: 50%;         /* 50% of parent's width */
    margin-left: 10%;   /* 10% of parent's width */
}
```

###  `em` (Relative to parent font size)
<img src="https://github.com/user-attachments/assets/8334add3-7ee9-42f3-9782-71927deff063" hight="150px" width="400px">

Used to size elements based on the font size of their **immediate parent**.
```css
/* If parent font-size is 20px */
.parent {
    font-size: 20px;
}

.child {
    font-size: 2em; /* 2 * 20px = 40px */
}
```

### `rem` (Relative to root `<html>` font size)
<img src="https://github.com/user-attachments/assets/00ee299a-610d-4bd7-9adf-041eceb403f7" hight="150px" width="400px">

Used to size elements based on the **root element’s** (`<html>`) font size — more predictable and consistent for scalable designs.
```css
html {
    font-size: 16px;
}

div {
    font-size: 2rem; /* 2 * 16px = 32px */
}
```
**Tip:** Use `rem` for global layout spacing and typography, and `em` for component-level scaling.

**Further Reading**
- [CSS Box Model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
