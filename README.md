(READ THIS FIRST) Feature requests
=

For feature requests, [create a new issue](https://github.com/GeekyGamer14/WebSentials/issues/new) and tag it as `feature-req`. I want to hear your feedback as well!

WebSentials
===

Welcome to WebSentials, here is a quick Getting Started guide on how to use it.

Getting Started
=

Getting the code
-

If you're new to Git, make sure you have [set up Git](https://help.github.com/articles/set-up-git). Once you have that done, execute this one simple line of code.

    git fetch https://github.com/GeekyGamer14/WebSentials.git

Git should now clone the code for WebSentials into a folder called WebSentials, and whenever an update comes along, just execute `git fetch https://github.com/GeekyGamer14/WebSentials.git` again and it will update!

Injecting WebSentials into your HTML.
-

To get started, first you have to declare WebSentials into your HTML file, like so:

```html
<link rel="stylesheet" href="css/websentials.css" type="text/css"></link>
<script src="websentials.js"></script>
```

Features
=

Buttons
-

Buttons are useful for making links stand out, for example, a download or read more button.

Here is an example regular (gray) button:

```html
<button>Button text here</button>
```

Say we want to get fancy and add a little blue to it:

```html
<button class="btn-blue">Oooh! A pretty blue button!</button>
```
    
This is good for a sorta-non-important confirmation button.

To make any button larger than usual, to grab attention, just add the `btn-big` class to any button.

Example:

```html
<!-- Big blue button -->
<button class="btn-blue btn-big">Here is a big confirm button</button>

<!--Big regular button -->
<button class="btn-big">Big button!</button>
```

If you want the button to look dangerous or a developer action (sort of like the repo DangerZone&trade;, you can make it red with `btn-red` class. Again, you can use this class again with `btn-big`.

```html
<button class="btn-red">Oh crap, this might mess up something!</button>
```

A better confirmation button than `btn-blue` is `btn-green` for a good action.

```html
<button class="btn-green">This is a green button</button>
```

Error messages
-

If you want to display an error to a user on your website, you can use the error messages.

```html
<div class="error" id="someError" desc="This is the name in listErrors()">
	<div class="error-close" onClick="hideError('#someError', 'slide')">
		&times;
	</div>
    <div class="error-header">
        Crap, something went wrong with the code ._.
    </div>
    <div class="error-content">
        Blah blah blah replace <code>this</code> with <code>that</code> and make sure there are no errors next time, idiot.
    </div>
    <div class="error-footer">
        <button onClick="hideError('#someError', 'slide');">I don't care, go on with it.</button>
        <button class="btn btn-green">Fix it</button>
    </div>
</div>
```

Wasn't that confusing? Here's the breakdown. For the main error box, put the class `error`. For your header, make another div with `error-header` after the main error div. Put the content inside of the `error-content` div and the buttons (or something else) inside of the `error-footer` div. To make the close button work, you have to put `onClick="hideError('#yourErrorId', 'method-here')"` inside of the exit button and whatever other button you want. The `method-here` is either `slide` or `fade` depending on which one you want. Simple once you have it down.

Success Messages
-

Success messages are good for indicating that you did something right or a request came through as it should. It's exactly like an error message, except with green:

```html
<div class="success" id="someGoodMessage" desc="This is the name in listSuccess()">
	<div class="success-close" onClick="hideError('#someGoodMessage', 'slide')">
		&times;
	</div>
    <div class="success-header">
        Good job! Something went correctly!
    </div>
    <div class="success-content">
        For once, you did something right in your life! Oh wait, that was the server. Nevermind, go back to your non-right life.
    </div>
    <div class="success-footer">
        <button onClick="hideError('#someGoodMessage', 'slide');">I don't care, go on with it.</button>
        <button class="btn btn-red">Delete the universe</button>
    </div>
</div>
```

There is also another method of hiding the errors:

```javascript
hideError('#errorIdHere', 'fade');
```

Restoring errors/success messages
-

To restore an error or success message, do this function:

```javascript
restoreError('#idHere');
```

And if you want to see if an error/success message has been restored (or just want to see them all), do this:

```javascript
listErrors();
listSuccess();
```

Textboxes
-

We all know about textboxes, let's make one.

```html
<input id="textbox"></input>
```

Tada, just add `#textbox` to an input and you have a nice textbox.

Notifications
-

To make a notification, type this code:

```html
<div class="notification">
    <div class="notification-header">
        Notification
    </div>
    <div class="notification-content">
        Content!
    </div>
</div>
```

Progress bars
-

To create a download or anything progress bar, you have to create 2 `div`s.
The first `div` is the border. The second one is the inner progress bar.

```html
<div class="progressbar">
    <div class="progressbar-inner" id="progressbar1">
    </div>
</div>
```

To use the progress bar, set the width class to `(integer)%`. For example, if I wanted it to be half full, I would set it to `50%`. You can change this with `progressBar('#idOfProgressbar', 'percentage', label);`. The `label` parameter is the ID of the label that shows the current percentage. If you don't have a label, just set it to `'none'`.

Accept buttons
-

To make an accept button (hit enter to click), just add `id="accept"` to a button and you're all set!

functionCreator!&trade;
-

The functionCreator&trade; takes the concept of coding to an entirely new level, making it easy for everybody to program. It takes simple phrases such as `create a variable`, `that is equal to` and `that is an array` and then returns JavaScript code, making JavaScript easier to learn for newbies. For example, this:

```javascript
functionCreator("create a variable test that is equal to 'pie' then create a variable arraything that is an array");
```

Would return this:

```javascript
var test = 'pie' ; var arraything = new Array()
```

Go ahead, try it!

Tooltips
-

To create a tooltip, add the attribute `onmouseover="createTooltip(this, 'Tooltip text')"`. You can do this from the console, too! This will also remove the tooltip automagically.

```html
<p>Blah blah blah <span onmouseover="createTooltip(this, 'More blah')">more info</span> blah.</p>
```

Dialogs
-

Dialogs are clean, popup boxes that appear with a simple command...

```javascript
createDialog('Dialog title', 'Dialog content', 'Green button text', 'Green button action', 'Close button text');
```

The close button automatically closes the dialog.

Including HTML in dialogs
-

It's tricky embedding HTML into dialogs if you are using `onClick`. Here is a simple function that creates a box with a bold element that has an `id` attribute.

```javascript
function newCreateDialog(){
	createDialog('Title', '<b id="theid">This is bold</b>', 'Accept', 'Exit');
}
```
Circular anything
-

To make anything circular, just add the class `circle` to it.

Todo:

 - ~~Make a `success-close` and `error-close` for all screen sizes.~~ Done
 - ~~Add dialog boxes.~~ Done! I really like dialog boxes :3
