# Tictactoe

Tic Tac Toe is my first project built in JavaScript, this is a simple Web app built with HTML and Vanilla JavaScript. The app is made for two players to play side by side, I will add AI, chat and online multiplayer functionality in near future.


The function closeProjects() hides the projectContainer and tictactoeContainer elements and sets the visibility of the quizWindow to hidden.

The function tictac() sets the display property of the projectContainer and tictactoeContainer to flex and grid, respectively, and sets the visibility of xoxoWindow and tictacRestart to visible. It then defines variables for the player, gameMessage, boxNo, box, and boxId. It also defines a function clickOn() to add event listeners for each of the boxes in the Tic Tac Toe game, and an array winGames with the possible winning combinations of boxes in the game. It then sets up two arrays to save the progress of each player.

The function restartBut() resets the gameMessage, sets the player to "X", clears all boxes, adds click listeners to the boxes again, and clears the playedBoxX and playedBox0 arrays.

The function boxClicked(e) is called when a box is clicked. It sets boxNo to the clicked box, sets the boxId variable to the clicked box's ID, and adds the ID to either the playedBoxX or playedBox0 array depending on which player played the box. It then calls changePlayer() and gameCheck().

The function gameCheck() checks to see if any of the winGames combinations match the playedBoxX or playedBox0 arrays, and if so, declares the respective player as the winner. If there is a draw, it declares a draw. It also removes the event listeners from the boxes.

The function changePlayer() switches the player after each turn by setting the player variable to either "X" or "0".
