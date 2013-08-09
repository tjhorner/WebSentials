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

    <link rel="stylesheet" href="css/websentials.css" type="text/css"></link>
    <script src="websentials.js"></script>

Features
=

Buttons
-

Buttons are useful for making links stand out, for example, a download or read more button.

Here is an example regular (gray) button:

    <button>Button text here</button>
    
Say we want to get fancy and add a little blue to it:

    <button class="btn-blue">Oooh! A pretty blue button!</button>
    
This is good for a sorta-non-important confirmation button.

To make any button larger than usual, to grab attention, just add the `btn-big` class to any button.

Example:

    <!-- Big confirm button -->
    <button class="btn-confirm btn-big">Here is a big confirm button</button>
    
    <!--Big regular button -->
    <button class="btn-big">Big button!</button>

If you want the button to look dangerous or a developer action, you can make it red with `btn-red` class. Again, you can use this class again with `btn-big`.

    <button class="btn-red">Oh crap, this might mess up something!</button>

A better confirmation button than `btn-confirm` is `btn-green` for a good action.

    <button class="btn-green">This is a green button</button>

Error messages
-

If you want to display an error to a user on your website, you can use the error messages (still under development, but work.)

    <div class="error" id="someError" desc="This is the name in listErrors()">
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

Wasn't that confusing? Here's the breakdown. For the main error box, put the class `error`. For your header, make another div with `error-header` after the main error div. Put the content inside of the `error-content` div and the buttons (or something else) inside of the `error-footer` div. To make the close button work, you have to put `onClick="hideError('#yourErrorId', 'method-here')"` inside of the exit button and whatever other button you want. The `method-here` is either `slide` or `fade` depending on which one you want. Simple once you have it down.

Success Messages
-

Success messages are good for indicating that you did something right or a request came through as it should. It's exactly like an error message, except with green:

    <div class="success" id="someGoodMessage" desc="This is the name in listSuccess()">
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

There is also another method of hiding the errors:

    hideError('#errorIdHere', 'fade');

Restoring errors/success messages
-

To restore an error or success message, do this function:

    restoreError('#idHere');

And if you want to see if an error/succes message has been restored (or just want to see them all), do this:

    listErrors();
    listSuccess();

Textboxes
-

We all know about textboxes, let's make one.

    <input id="textbox"></input>

Tada, just add `#textbox` to an input and you have a nice textbox :).

Notifications
-

To make a notification, type this code:

    <div class="notification">
    <div class="notification-header">
      Notification
    </div>
    <div class="notification-content">
      Content!
    </div>
    </div>

Progress bars
-

To create a download or anything progress bar, you have to create 2 `div`s.
The first `div` is the border. The second one is the inner progress bar.

    <div class="progressbar">
    <div class="progressbar-inner" id="progressbar1">
    </div>
    </div>

To use the progress bar, set the width class to `(integer)%`. For example, if I wanted it to be half full, I would set it to `50%`. You can change this with `progressBar('#idOfProgressbar', 'percentage', label);`. The `label` parameter is the ID of the label that shows the current percentage. If you don't have a label, just set it to `'none'`.

Accept buttons
-

To make an accept button (hit enter to click), just add `id="accept"` to a button and you're all set!

functionCreator!&trade;*
-

This is basically a noob-friendly JavaScript compiler. To use it, just use this function.

    functionCreator("create a variable test that is equal to 'pie' then create a variable arraything that is an array");

It compiles JavaScript in a noob-friendly way. Use `create a variable variablename` to create a variable. Use `that is equal to` to signify an equal sign. To make a semicolon, just type `then`. To create a variable equal to an array, type in `create a variable variablename that is an array`. It's JavaScript, in plain English!&trade;*

Todo:

 - Make a `success-close` and `error-close` for all screen sizes.
 - Add dialog boxes.

*Not actually trademarked lol.
