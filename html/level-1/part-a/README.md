# HTML

**HTML (HyperText Markup Language)** is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (<a href="../../../css">CSS</a>) or functionality/behaviour (<a href="../../../javascript">JavaScript</a>).

## HTML Boilerplate

This is the standard format or skeleton of writing HTML code.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
    <p>Hello World!</p>
</body>
</html>
```

## HTML Elements, Tags, and Attributes

- **HTML Elements:** The standard elements that browsers recognize.
- **HTML tags:** Components used to structure web pages; they act as containers for content or other tags.
- **Attributes:** Used to add more information to the tag.

### Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example Page</title>
</head>
<body>
    <p>This is a paragraph.</p>
</body>
</html>
```

- `<p>` is the opening tag
- "This is a paragraph." is the content
- `</p>` is the closing tag
- The entire structure `<p>This is a paragraph.</p>` is an HTML element
- `lang="en"` is an attribute where lang is the attribute name and "en" is its value.

> [!NOTE]
> Attributes work with either double quotes `lang="en"` or single quotes `lang='en'`. Both are valid in HTML.
