# HTML (Hyper Text Markup Language)
 Html (Hyper text markup language), for structure and formatting.

## HTML5
- HTML5 is the latest version of HTML and supports new markup language functionalities such as multimedia, new tags and elements as well as new APIs, some of them are not the part of HTML (JavaScript APIs).
- **How HTML works** : HTML Standard (Living standard) html standard is a document that tells to the browser how html works.

## HTML Boiler plate code

```html
<!DOCTYPE html> <!--html version (html5)-->
<html lang="en"> <!--html tag (root tag)-->
    <head> <!--stores metadata (data about data)-->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title> <!--title tag to display name of the website-->
    </head>
    <body> <!--body tag-->
        <p>Hello Word</p> <!--paragraph tag-->
    </body>
</html>
```

## Tags, Elements, etc...

- *HTML Elements* : The Standard elements that browser recognizes.
- *HTML tags* : The components used to design the structure of website are called HTML tags.
- *Attributes* : These are used to add more information to the tag.

example:
```html
<html lang="en">
<p>This is a paragraph.</p>
```

- `<p>` is Opening tag
- `This is a paragraph.` is the Content
- `</p>` clossing tag
- The entire Structure (`<p>....</p>`) ia an HTML element
- `lang="en"` is an attribute, it will also works with single quotes like `lang='en'`

## Case Sensitive
HTML is not Case Sensitive

example:
```html
<html> = <HTML>
<p> = <P>
<head> = <HEAD>
```

## Semantic Markup
It is the markup that relates to the content.
| Semantic tags        | Non-Semantic tags    |
|----------------------|----------------------|
| `<header></header>`  | `<div></div>`        |
| `<main></main>`      | `<span></span>`, etc |
| `<footer></footer>`  |                      |
| `<nav></nav>`, etc.  |                      |


## Entities

- An html entity is a piece of text ("string") that begins with an amersand(&) and ends with a semicolon(;).
- Used to display reserved characters (which would otherwise be interpreted as html code), and invisibile characters (like non-breaking spaces).
- Can also use in place of characters that are difficult to type with a standard keyboard.
- Browser interprets them & renders correct character.

example: Love symbol `&hearts;`

## Emmet
a set of plug-ins for text editors that allows for high-speed coding and editing in HTML, XML, XSLT, and other structured code formats via content assist.

`nav>ul>li`

 for this 
 
```html
    <nav>
        <ul>
            <li></li>
        </ul>
    </nav>
```

for more visit <a href="https://emmet.io">emmet.io</a>

## Table of Contents

- [HTML (Level 1) - Part A](./HTML(Level-1-Part-A))
- [HTML (Level 1) - Part B](./HTML(Level-1-Part-B))
- [HTML (Level 2)](./HTML(Level-2))
- [HTML (Level 3)](./HTML(Level-3))

  to know indepth about each topic go through  <a href="https://developer.mozilla.org/en-US/">MDN</a>.
