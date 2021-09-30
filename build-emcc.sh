emcc -s EXIT_RUNTIME=1 -s NODERAWFS=1 -o lemon-js.js lemon-js.c
node ./lemon-js.js examples/calculator-js.y
