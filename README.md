# Character Counter
Counts the character of any HTML text element.

# Usage

Include the following into your HTML `<body></body>` element:
```
<script src="./character-count-v1.0.0.js"></script>
```

Add `module-char-count` class to any HTML element you want the counter to count the text characters:
```
<p class="module-char-count">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet reprehenderit quisquam eaque voluptatum id sunt doloribus harum culpa corporis doloremque! Culpa nam animi eligendi doloribus eveniet! Repellendus quod officia eum?</p>
```

Add `paragraph-char-count` class to an HTML element just below the `module-char-count` element( this will display the character count):
```
<div class="paragraph-char-count paragraph-text-1">0</div>
```

The example HTML file includes following code:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Character counter</title>
    <link rel="stylesheet" href="./includes/stylesheets/character-count-v1.0.0.css">
</head>
<body>
    <h1>Character counter</h1>

    <!-- module starts here -->
    <div class="character-counter-module">
        <div class="module-row">
            <label for="comments">Enter comment:</label>
            <textarea name="comments" rows="10" cols="8" class="input-text module-char-count" placeholder="Your comments"></textarea>
            <div class="paragraph-char-count comments">0</div>
        </div>

        <div class="module-row">
            <label for="name">Name:</label>
            <input type="text" name="name" class="input-text module-char-count" placeholder="Your name">
            <div class="paragraph-char-count name">0</div>
        </div>

        <div class="module-row">
            <h3>Paragraph:</h3>
            <p class="paragraph-text-1 module-char-count">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet reprehenderit quisquam eaque voluptatum id sunt doloribus harum culpa corporis doloremque! Culpa nam animi eligendi doloribus eveniet! Repellendus quod officia eum?</p>
            <div class="paragraph-char-count paragraph-text-1">0</div>
        </div>
    </div>
    <!-- module ends here -->

    <script src="./character-count-v1.0.0.js"></script>
</body>
</html>
```

# Live URL
