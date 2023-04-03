# 10 PRINT CHR$(205.5+RND(1)); : GOTO 10

`10 PRINT CHR$(205.5+RND(1)); : GOTO 10` is a one-liner BASIC program
that generates a maze-like pattern on the screen.
The program works by randomly selecting either a forward slash ("/")
or a backslash ("") character,
and printing it to the screen.
The CHR$ function converts a given ASCII code to a character,
and RND(1) generates a random number between 0 and 1.

The program then repeats itself by jumping to line 10 with the GOTO statement,
causing the screen to be filled with a seemingly random pattern of slashes and backslashes.

```BASIC
10 PRINT CHR$(205.5+RND(1)); : GOTO 10
```

## Inspiration

- [Book "10 PRINT CHR$(205.5+RND(1)); : GOTO 10"](https://10print.org/)
- [Coding Challenge #76: 10PRINT em p5.js](https://www.youtube.com/watch?v=bEyTZ5ZZxZs)

## Usage

You can change the behaviour of the animation passing some URL
Parameters

The available arguments are:

- intervalMiliseconds: `integer`

Interval between frames of animation in miliseconds. Default: 10

- spacing: `integer`

Width of every cell containing a diagonal line. Default: 50

- iterations: `integer`

Amount of lines drawned per frame. Default: 5

- probability: `float`

Probability between a forward and a backward slash. Default: 0.5

This project is deployed using [Github Pages](https://shelltux.github.io/10-PRINT-CHR-205.5-RND-1-GOTO-10/).

Example:

[https://shelltux.github.io/10-PRINT-CHR-205.5-RND-1-GOTO-10/?intervalMiliseconds=5&spacing=30&iterations=1&probability=0.4](https://shelltux.github.io/10-PRINT-CHR-205.5-RND-1-GOTO-10/?intervalMiliseconds=5&spacing=30&iterations=1&probability=0.4)

## Contributing

If you would like to contribute to this project,
please fork the repository and submit a pull request.

## License

This project is licensed under the
Creative Commons License Zero Universal License -
see the LICENSE file for details.
