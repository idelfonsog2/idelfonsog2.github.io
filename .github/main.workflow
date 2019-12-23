name: CI
on: [push]

jobs:
    build:
        strategy:
            matrix:
            os: [unbuntu-latest, macos-latest]

        runs-on: ${{ matrix.os }}
        steps:
            - name: Checkout
            uses: actions/checkout@v1
            - name: Build
            run: echo "hello"