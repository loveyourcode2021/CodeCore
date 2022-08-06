![](https://i.imgur.com/1QgrNNw.png)

# JS | Hangman

## Learning Goals

This hangman has node js version and just no backend version

## Introduction

This is just to test out my simple logic.


## Game logic

### Get random word

The first thing we need to play the game is the word that the player will have to discern. We need to choose a random word and assign it to the `secretWord` variable we declared in the constructor.



### Insert a letter


We use capital letters to compare the player's selection with the secret word. **Use capital (or lower) case letter to compare strings is a good practice.**

### Show the current word

The following method we need will be used to show the current status of the word. In other words, how many letters have to figure out the player. This method will be called `getWordStatus`, and it will be as it follows:

```javscript
Hangman.prototype.getWordStatus = function () {
  var that        = this;
  var wordStatus  = [];
  var splitedWord = this.secretWord.split("");

  splitedWord.forEach(function (letter) {
    if (that.letters.indexOf(letter) > -1) {
      wordStatus.push(letter);
    } else {
      wordStatus.push("_");
    }
  });

  return wordStatus;
};
```

We iterate over all the letters of the secret word. If a letter hasn't been selected by the player, it will be represented as an underscore. By doing this, we will get a result similiar to: "IRON_ACK".

### Game status

To finish up the game logic, we will need to create a method to get its status. We will have three different status:

- Completed.
- Game over.
- Ongoing game.

We will create three different functions:

```javascript
Hangman.prototype._isFinished = function () {
  return this.getWordStatus().indexOf("_") < 0;
};
```

If the current word doesn't have any underscore, the word will be completed. So this function will help us to determine if the player has won the game. We also need a function to figure out if the game is over:

```javascript
Hangman.prototype._gameOver = function () {
  return this.errorsLeft === 0;
};
```

With the variable we defined in the constructor it's very easy to know if the game is over or not. Note that both functions are private, so we have to create a public method to check out those possible status:

```javascript
Hangman.prototype.gameStatus = function () {
  if (this._isFinished()) {
    return "You Win";
  } else if (this._gameOver()) {
    return "Game Over";
  }
};
```

This function will return three possible values: "You Win", if the player has won, "Game Over" if the player has lost, and finally, undefined if the game has to go on.

We already have all what we need to play our game. The next step is to create the layout and put them all together.

## Game Layout

### HTML & CSS

First of all, we are going to create the layout with HTML and CSS. After that, we will create the JavaScript that will join the game logic with its layout. Let's do a list of all the things we need to do the layout:

- New game. We will add a button to start a new game. It will be always available to allow the user restart a game if the word is too complicated.
- Hangman. We need, of course, to draw the man to let the player know how much life left he has.
- Word. We need some kind of container to show the user the current status of the word.
- Letters. We also need another container to let the user know which letter have been already inserted.
- Win/Lose. Last, but not least, we need some kind of container to let the user know if he has won or not.

#### New game

First of all we will create the new button game. It will be in the top part of the page. We will add customized styles, without using any kind of library like Bootstrap. The HTML, CSS, and result of this button is the following:

**HTML**

```htmlmixed
<button id="new-game">
  New game
</button>
```

**CSS**
```css
#new-game {
  background: #43a3e6;
  border: 1px solid #43a3e6;
  border-radius: 6px;
  box-shadow: 1px 1px 2px #999;
  color: #fff;
  padding: 6px 14px;
  outline: 0;
}
```

**Layout**

![](https://i.imgur.com/cZ3SJPH.png)

Note that the font is not the default browser's font. We have imported the 'Open Sans' font from [Google Fonts](https://fonts.google.com/). You can find several font types in this directory :)

#### Hangman

We will draw the hangman with HTML and CSS. A lot of people is usually afraid of doing something similar to that in HTML and CSS. Let's prove that it's easier than it seems:

**HTML**

```htmlmixed
<div id="hangman">
  <div class="right-bar"></div>
  <div class="top-bar"></div>
  <div class="left-bar"></div>
  <div class="base"></div>

  <div class="head"></div>
  <div class="body"></div>
  <div class="left-arm"></div>
  <div class="right-arm"></div>
  <div class="left-leg"></div>
  <div class="right-leg"></div>

  <div class="clearfix"></div>
</div>
```

You can see how we have created a `<div>` for each part of the hangman. Each of these parts represent a life, so we will have to find a good way to show them all, depending on the status of the game. Let's take a look at the CSS and the layout:

```css
#hangman div {
  background: #000;
}

#hangman .base {
  height: 2px;
  width: 300px;
}

#hangman .left-bar {
  height: 400px;
  width: 2px;
}

#hangman .top-bar {
  height: 2px;
  width: 200px;
}

#hangman .right-bar {
  float: left;
  height: 30px;
  margin-left: 200px;
  width: 2px;
}

#hangman .head {
  background: none;
  border-radius: 100%;
  float: left;
  margin-left: 175px;
  margin-top: -375px;
  height: 50px;
  width: 50px;
}

#hangman .body {
  float: left;
  height: 140px;
  margin-top: -321px;
  margin-left: 200px;
  width: 2px;
}

#hangman .left-arm,
#hangman .right-arm,
#hangman .left-leg,
#hangman .right-leg {
  float: left;
  height: 90px;
  margin-top: -321px;
  margin-left: 173px;
  transform: rotate(35deg);
  width: 2px;
}

#hangman .right-arm,
#hangman .right-leg {
  margin-left: 230px;
  margin-top: -324px;
  transform: rotate(140deg);
}

#hangman .left-leg,
#hangman .right-leg {
  margin-top: -192px;
}
```

As you can see, we are using the div background color to draw it. To show the arms and legs, we are rotating the containers, and we play a lot with the margins to allocate all the pieces on their correct position. The result will is the following:

**Layout**

![](https://i.imgur.com/V4xwngn.png)

As we said, we will have to show each part depending on how many lifes does the player have. We will solve that by doing setting up the default background color as white. We will also create classes for each life, and depending on how many lifes he has, we are going to change the background color and set it up to black:

```css
#hangman div { background: #fff; }

/* ... */

#hangman.lifes-10 .base     { background: #000; }
#hangman.lifes-9 .left-bar  { background: #000; }
#hangman.lifes-8 .top-bar   { background: #000; }
#hangman.lifes-7 .right-bar { background: #000; }
#hangman.lifes-6 .head      { border: 2px solid #000; }
#hangman.lifes-5 .body      { background: #000; }
#hangman.lifes-4 .left-arm  { background: #000; }
#hangman.lifes-3 .right-arm { background: #000; }
#hangman.lifes-2 .left-leg  { background: #000; }
#hangman.lifes-1 .right-leg { background: #000; }
```

The only class that is not changing tha background color is the `.head` class, that will change the border-color, because we are using a borde-radius to make it circular. We will have to add the classes to the `#hangman` container through JavaScript during the game. We will see this later.

#### Word container

The following step is to add the container where we will place the word that has to be discerned. We have to think in the usability of this container: we have to separate the letters between them to let the player know how many letters compose the word:

**HTML**

```htmlmixed
<div id="currentWord">
  <span>I</span>
  <span>R</span>
  <span>O</span>
  <span>N</span>
  <span>H</span>
  <span>A</span>
  <span>C</span>
  <span>K</span>
</div>
```

We will use an `<span>` for each letter in the word. The CSS for this section is the following:

**CSS**

```css
#currentWord span {
  display: inline-block;
  margin: 0 10px;
}
```

The container by itself doesn't have an specific style, but we add some spacing between `<span>` through margin property.

**Layout**

The resulting layout is the following:

![](https://i.imgur.com/5GnF5Su.png)

#### Letters container

We also need another container to indicate which letters have already been used. It will be very similar to the current word container, but the font color will be different to distingish between the word and the letters.

