---
title: "Intro to Rust"
description: "traditional post"
date: "2021-03-22"
public: true
---

## Install on Linux

The recommanded way is to use **Rustup Toolchain Manager** - so you can update or uninstall rust more easily.

A bunch of new files will be added
1. $HOME/.cargo
2. $HOME/.rustup

If you want to change this location, first export following variables in your .bashrc
```bash
# set up Rust toolchain
export RUSTUP_HOME="/your_custom_path/.rustup"
export CARGO_HOME="/your_custom_path/.cargo"
```

And your bash config files will be modified (essentially for updating the PATH).

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

```
You can then logout, and come back see what is your current installation :

```bash
rustup show
rustc --version
cargo --version
ls $SHOME/.cargo/bin
```

If at any point, you would like to update or uninstall
```bash
rustup update
rustup self uninstall
```

## Hello Rust !

```bash
mkdir rust-projects && cd rust-projects
cargo new hello-rust
cd hello-rust
cargo build
```
Our rust entry point is ``./src/main.rs``, containing our main function.

Running ``cargo build``, by default our project will build in **debug mode**. In fact, our new binary file is located in the generated directory ``./target/debug/hello-rust``. It now can be executed as it is.

If you want a single command to compile and run, simply use ``cargo run``.

## Install on MacOS

The recommanded way is to use **Rustup Toolchain Manager** - so you can update or uninstall rust more easily.

A bunch of new files will be added
1. ``$HOME/.cargo``
2. ``$HOME/.rustup``

If you want to change this location, first export following variables in your .bashrc
```bash
# set up Rust toolchain
export RUSTUP_HOME="/your_custom_path/.rustup"
export CARGO_HOME="/your_custom_path/.cargo"
```

And your bash config files will be modified (essentially for updating the PATH).

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

```
You can then logout, and coming back see what is your current installation :

```bash
rustup show
rustc --version
cargo --version
ls $SHOME/.cargo/bin
```

If at any point, you would like to update or uninstall
```bash
rustup update
rustup self uninstall
```
