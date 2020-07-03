# notes-app

This simple app makes use of command line arguments that you pass while running the main app.js file, which it will handle and then do certain operations.

<h3>Format: node app.js args1 --title or --body</h3>

<b> The value of args1 can be : </b>
<ul>
    <li>add</li>
    <li>remove</li>
    <li>list</li>
    <li>read</li>
</ul>

<b>Example:</b>

<p>node app.js add --title="Book of love" --body="This is some serious sh**"</p>

<pre>
    What it will do is basically add a new JSON in the notes.json file as we used the add argument and there will be two key-value pairs, one is title : Book of love and the other is body : This is some serious sh**.
</pre>
