# The HTMX Clicker Game
a clicker game using HTMX and Django that is created to test the features of htmx, test the compatibility of htmx with Django, and to test the performance of htmx.

to start the game, you need to click on the button to increase the score. the score will be increased by 1 every time you click on the button.

## Features
- Increase the score by clicking on the button
- sound effect when clicking on the button
- display the score
- display high score
- display the number of clicks
- track score and clicks across sessions
- ajax request to save the score and clicks
- ajax requests to get template fragments

# How to run the project
1. Clone the repository
2. cd into the project directory
3. add a .env file with the following content:
```.env
DEBUG=on
SECRET_KEY=<create a secret key>
POSTGRES_USER=clicker-game
POSTGRES_DB=clicker-game
POSTGRES_PASSWORD=<create a password>
DATABASE_URL=postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@db:5432/${POSTGRES_DB}
INTERNAL_IPS=127.0.0.1,0.0.0.0,localhost
ALLOWED_HOSTS=127.0.0.1,0.0.0.0,localhost
```
4. run `just start` to start the server
5. open the browser and go to `http://localhost:8000/`


