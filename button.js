<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Example</title>
</head>
<body>
    <p id="demo">Click the button to change this text.</p>
    <button id="myButton">Click Me</button>

    <script>
        // Get references to the paragraph and button elements by their IDs
        var paragraph = document.getElementById("demo");
        var button = document.getElementById("myButton");

        // Add a click event listener to the button
        button.addEventListener("click", function() {
            // Change the text of the paragraph when the button is clicked
            paragraph.innerHTML = "Text changed by JavaScript!";
        });
    </script>
</body>
</html>
