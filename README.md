# Simple Slideshow
A very simple slideshow component in js and css.

## Getting Started
I made this repository to function as a simple slideshow with fadeIn/fadeOut effect that is scalabe in the number of pictures and easy to integrate in projects.

## Prerequisites
Jquery: to be added before slideshow.js.

## Setup

```
<link rel="stylesheet" type="text/css" media="screen" href="src/slideshow.css" />

```

```
...
...
<script
  src="https://code.jquery.com/jquery-3.3.1.js"
  integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
  crossorigin="anonymous"></script>
    <script src="src/slideshow.js"></script>
</body>
</html>
```

## Usage
  
```
    <div class="slideshow-container">    
        <img src="bg1.jpg" class="slide">
        <img src="bg2.jpg" class="slide">
        <img src="bg3.jpg" class="slide">
        <img src="bg4.jpg" class="slide">
        <img src="bg5.jpg" class="slide">
        <img src="bg6.jpg" class="slide">       
    </div>
```
Wrap your images in a div tag with class 'slideshow-container' and give your images class 'slide'.
Also copy the following buttons after the last image.
 ```
        <button class="btn-right"><img src="src/right.png"></button>
        <button class="btn-left"><img src="src/left.png"></button> 
</div>
```

## Additional Remarks
By default the slideshow is 800X600 and has a white 20px solid border but you can either change that in  slideshow.css or apply your own stylesheet by linking it after slideshow.css

## Licensing
It's under a GNU Licence.
