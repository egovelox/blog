---
title: "Intro to Rust"
description: "traditional post"
date: "2021-03-22"
public: true
---

## Install

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

## A Rust move

Rust compiler brings safety by enforcing the developer to write safe code.

Let's illustrate with a code sample :

```rust

fn main() {
    let s1 = String::from("hello");
    let s2 = s1; // s2 is a String, s1 is now moved into s2.

    println!("{s1} world !");
}

```

The compiler spits the following error :
```rust

error[E0382]: borrow of moved value: `s1`
 --> src/main.rs:5:15
  |
2 |     let s1 = String::from("hello");
  |         -- move occurs because `s1` has type `String`, which does not implement the `Copy` trait
3 |     let s2 = s1;
  |              -- value moved here
4 |
5 |     println!("{s1} world !");
  |               ^^^^ value borrowed here after move
  |

help: consider cloning the value if the performance cost is acceptable
  |
3 |     let s2 = s1.clone();
  |                ++++++++

```

We can illustrate this with a schema.

<img src='./images/rust_move_string.png'>


The s1 variable is created as a ``String`` located on the stack, with a ``ptr`` pointing on data located on the heap.

Then, when moving s1 into s2 :
- another ``String`` is created on the stack, pointing at the same data located on the heap.
- for the compiler, s1 becomes unusable : the ``ptr`` in s1 is invalidated.

Rust uses a pattern of deallocating resources at the end of an item's lifetime ( sometimes called ``Resource Acquisition is Initialization, RAII ).

To ensure memory safety, after the line ``let s2 = s1;``, Rust considers s1 as no longer valid (lifetime of s1 ends here).

So that, when s1 and s2 go out of scope, Rust will not free the heap memory behind the variable s1, but only the heap memory behind s2, preventing us from the ``double free`` error.

As the compiler told us, we could consider cloning the value of s1 into s2, if the performance cost (memory allocation and free) is acceptable.

<img src='./images/rust_clone_string.png'>


## A Rust borrow

There's another way though, let's introduce what is called ``references`` in Rust : 

Using the reference operator ``&``, we can create a reference to s1, and have s2 ``borrow`` s1 :
```rust

fn main() {
    let s1 = String::from("hello");
    let s2 = &s1; // s2 is a &String, a String reference, s1 is now borrowed into s2.

    println!("{s1} world !");
}

```

The compiler will now compile without error.

When s1 and s2 go out of scope, Rust will only free the heap memory behind the variable s1, because it knows s2 has only a reference to s1.

We can illustrate this with another schema.

<img src='./images/rust_borrow_string.png'>



