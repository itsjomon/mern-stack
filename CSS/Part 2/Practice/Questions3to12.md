# Practice Questions
Write CSS for the following code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practice Qn-2</title>
    <link rel="stylesheet" href="style.css"/>
</head>
<body>
    <h1 id="maintopic">CSS Practice</h1>
    <h3>Let's learn about selector.</h3>
    <!--Paragraph 1-->
    <p class="content">There are multiple selectors in css.</p>
    <!--Paragraph 2-->
    <p class="content">Some of them include class selector, id selector etc </p>
    <!--Paragraph3-->
    <p class="content">And we can also combine these too.<p>
        <div>
            <h5> Did you like the practice set?</h5>
            <input type="checkbox" id="yes"/>
            <label for="yes">Yes</label>
            <br/>
            <button>Learn next!</button>
        </div>
</body>
</html>
```

## PART A (Selectors)
### Qs3.
Give the h1 header a unique id - “mainTopic” & set its color to blue using the id selector.
### Qs4.
Align all the text in the page to the center using a universal selector.
### Qs5.
Change the font style of all heading tags in the page to ‘Georgia’.
### Qs6.
Set the color of all the paragraphs to white & background color to cornflowerblue. (Without using the element selector - ‘p’)
### Qs7.
Select all buttons inside div and change their background color to purple & text color to azure.
## PART B (Pseduo class & elements)
### Qs6.
Change the button background color to yellow & text color to blue when we hover over it.
### Qs8.
Change the color of every odd numbered paragraph to yellow. (Paragraph 1 & 3)
### Qs9.
Change the color of the first letter of h1 heading to red.
### Qs10.
Set the text color of the check box label to dark green when the check box is ticked.
### Qs11.
Order these rules according to their specificity, from least specific to most specific. :
- h1
- #mainContent
- .main
- div .main