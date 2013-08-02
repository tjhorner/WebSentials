WebSentials
===

Welcome to WebSentials, here is a quick Getting Started guide on how to use it.

Getting Started
=

To get started, first you have to declare WebSentials into your HTML file, like so:

    <link rel="stylesheet" href="css/websentials.css" type="text/css"></link>
    <script src="websentials.js"></script>

Or, if you want to use the compressed version, change `websentials.css` and `websentials.js` to `websentials.min.css` and `websentials.min.js`.

Features
=

Buttons
-

Buttons are useful for making links stand out, for example, a download or read more button.

Here is an example regular (gray) button:

    <button>Button text here</button>
    
Say we want to get fancy and add a little blue to it:

    <button class="btn-confirm">Oooh! A pretty blue button!</button>
    
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

    <div class="error" id="someError">
    <div class="error-exit" onClick="hideError('#someError');">
      &times;
    </div>
    <div class="error-header">
      Crap, something went wrong with the code ._.
    </div>
    <div class="error-content">
      Blah blah blah replace <code>this</code> with <code>that</code> and make sure there are no errors next time, idiot.
    </div>
    <div class="error-footer">
      <button onClick="hideError('#someError');">I don't care, go on with it.</button>
      <button class="btn btn-green">Fix it</button>
    </div>
    </div>

Wasn't that confusing? Here's the breakdown. For the main error box, put the class `error`. If you want an exit sign, make another div with the class `error-exit` right after the error div. For your header, make another div with `error-header` after the exit sign (or the main error if you have no exit sign.) Put the content inside of the `error-content` div and the buttons (or something else) inside of the `error-footer` div. To make the close button work, you have to put `onClick="hideError('#yourErrorId')"` inside of the exit button and whatever other button you want. Simple once you have it down.

Success Messages
-

Success messages are good for indicating that you did something right or a request came through as it should. It's exactly like an error message, except with green:

    <div class="success" id="someGoodMessage">
    <div class="success-exit" onClick="hideError('#someGoodMessage');"> <!-- Yes, you still use hideError('#successIdHere'); -->
      &times;
    </div>
    <div class="success-header">
      Good job! Something went correctly!
    </div>
    <div class="success-content">
      For once, you did something right in your life! Oh wait, that was the server. Nevermind, go back to your non-right life.
    </div>
    <div class="success-footer">
      <button onClick="hideError('#someGoodMessage');">I don't care, go on with it.</button>
      <button class="btn btn-red">Delete the universe</button>
    </div>
    </div>

Simple, right?

Textboxes
-

We all know about textboxes, let's make one.

    <input id="textbox"></input>

Tada, just add `#textbox` to an input and you have a nice textbox :).
