Tag	                         Purpose
<input>	                     Takes user input
<p>                          Creates a paragraph
<div>	                     Groups elements / container
<span>	                     Groups inline content
<img>	                     Displays an image
<title>	                     Sets browser page title
<a>	                         Creates a hyperlink
<select>	                 Creates a dropdown
<option>	                 Creates an item in dropdown
<label>   	                 Gives a label to a form control

Basic Attributes
1. id
2. name
3. class
4. text

<input class="inputLogin" type="text" id="username" name="USERNAME" size="50">

Example:

<!DOCTYPE html>
<html>

<head>
    <title>Student Form</title>
</head>

<body>

    <div>

        <p>Student Registration</p>

        <label for="name">Name:</label>
        <input
            type="text"
            id="name"
            placeholder="Enter your name"
        >

        <br><br>

        <label for="country">Country:</label>

        <select id="country">
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
        </select>

        <p>
            Welcome, <span>Student!</span>
        </p>

        <img
            src="student.jpg"
            alt="Student"
            width="200"
        >

        <br>

        <a href="https://example.com">
            Visit Website
        </a>

    </div>

</body>

</html>
