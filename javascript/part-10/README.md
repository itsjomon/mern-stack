## Dom Events

Events are actions or occurrences that happen in the browser, usually triggered by the user.

- `onclick` : When an element is clicked
- `onmouseenter` : When mouse enters an element

## Event Listener

`addEventListener` : It is a method that attaches an event handler to an element without overwriting existing event handlers.

```js
element.addEventListener(event, callback);
```

## this in Event Listeners

When `this` is used in a callback of event handler of something, it refers to that something.

## Keyboard Events

**Keyboard Events** trigger when keys are pressed (`keydown`) or released (`keyup`). `event.key` gives the key value, `event.code` gives physical key code, and `event.ctrlKey`/`event.shiftKey`/`event.altKey` check if modifier keys are held.

## Form Events

**Form Events** trigger on form interactions. `submit` fires on form submission, `change` fires when value changes, `input` fires on each keystroke, `focus` fires on element focus, and `blur` fires on focus loss. `event.preventDefault()` stops form submission.

## More Events

- change event : The change event occurs when the value of an element has been changed (only works on `<input>`, `<textarea>` and `<select>` elements).
- input event : The input event fires when the value of an `<input>`, `<select>` or `<textarea>` element has been changed.