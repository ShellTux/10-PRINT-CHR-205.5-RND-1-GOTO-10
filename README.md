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

## Contributing

If you would like to contribute to this project,
please fork the repository and submit a pull request.

## License

This project is licensed under the
Creative Commons License Zero Universal License -
see the LICENSE file for details.
