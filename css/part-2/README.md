## CSS Selectors

CSS selectors are used to "find" (or select) the HTML elements you want to style.

### Simple selectors

Select elements based on name, id, class

- **Universal Selector**

  ```css
  /* Selects EVERY element on page */

  * {
    property: value;
  }
  ```

- **Element Selector**

  ```css
  /* Selects all elements with that tag name */

  h1 {
    property: value;
  }
  ```

- **ID Selector**

  ```css
  /* Selects ONE element with specific id (case sensitive!) */

  #my-id {
    property: value; /* #my-id and #MY-ID are different! */
  }
  ```

- **Class Selector**

  ```css
  /* Selects ALL elements with that class name (case sensitive!) */

  .my-class {
    property: value; /* .my-class & .MY-CLASS are not same */
  }
  ```

### Combinator Selectors

Select elements based on a specific relationship between them.

- **Descendant Selector (space)**

  It is used to select elements that are descendants of a specified element.

  ```css
  /* Selects ALL paragraphs inside ANY div */

  div p {
    property: value;
  }
  ```

- **Adjacent/Next Sibling Combinator (+)**

  The adjacent sibling selector selects an element that is immediately next to a specified element.

  ```css
  /* Selects h3 that comes RIGHT AFTER a paragraph */

  p + h3 {
    property: value;
  }
  ```

- **Child Combinator (>)**

  The child combinator selects all elements that are the children of a specified element.

  ```css
  /* Selects buttons that are DIRECT children of spans */

  span > button {
    property: value;
  }
  ```

### Attribute Selectors

Select elements based on an attribute or attribute value.

```css
/* Selects inputs with specific attribute/value */

input[attr="value"] {
  property: value;
}
```

Visit [MDN Attribute Selectors.](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

## Pseudo-class

A keyword added to a selector that specifies a special state of the selected element(s).

```css
:hover       /* When mouse hovers over element */
:active      /* When element is being clicked/tapped */
:checked     /* When checkbox or radio button is selected */
:nth-of-type /* Selects nth child of a specific type (e.g., 2nd paragraph) */
```

Visit [MDN Pseudo-classes.](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

## Pseudo-elements

A keyword added to a selector that lets you style a specific part of the selected element(s).

```css
::first-letter /* Styles only the first letter of text */
::first-line   /* Styles only the first line of text */
::selection    /* Styles text when user highlights/drags mouse over it */
```

Visit [MDN Pseudo-elements.](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)

## Cascading

**What is Cascade in CSS?**

The `CSS cascade algorithm's` job is to select CSS declarations in order to determine the correct values for CSS properties.

- When multiple styles apply, the last one (in order) wins if specificity is equal.
- When multiple CSS files linked, the last linked file overrides earlier ones.

```css
h2 {
    background-color: yellow;
}

h2 {
    background-color: blue; /* Final color is blue */
}
```

## Selector Specificity

**What is Specificity?**

Specificity is an algorithm that calculates the weight that is applied to a given CSS declaration.

**Specificity order:** `Inline > ID > Class > Tag`

## !important in CSS

To show the most specific thing in the document.

```css
h2 {
     background-color: black !important; /* !important - overrides ALL previous rules */
   }
```

The !important rule in CSS is used to add more importance to a property/value than normal.

In fact, if you use the !important rule, it will override ALL previous styling rules for that specific property on that element!

## CSS Inheritance

Inheritance means some CSS properties are automatically passed from a parent element to its children.

- **Common inherited properties** : `color`, `font-family`, `line-height`
- **Not all properties inherit** : Layout-related ones like `margin`, `padding`, `border` do not inherit by default.
- You can force inheritance using `inherit` keyword:

  ```css
  p {
    border: inherit; /* Force inheritance */
  }
  ```
