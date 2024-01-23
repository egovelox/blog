---
title: "Intro to Go"
description: "traditional post"
date: "2024-01-21"
public: true
---

## Go packages

#### Links

[Article by Alex EdWards](https://www.alexedwards.net/blog/an-introduction-to-packages-imports-and-modules)

<br>

#### Memo

A package in Go is a named collection of one or more related .go files.


The ``main`` package name is special in Go : it indicates that the package is an executable application.  
It requires that one of the file of the package contains a ``func main()`` :  
it will be the entry point of the executable. 

> It's conventional for your main() function to live in a file with the filename main.go. Technically it doesn't have to, but following this convention makes the application entry point easier to find for anyone reading your code in the future.

##### Package imports and exports

Code in a package can access and use all types, constants, variables and functions within that package, even if they are declared in a different .go file :  
no need to export or import code within the scope of a single package !

Also, a package can import any other package (from a std package, or from a local or a remote package).  
Then the package can access all the code exported by this imported package.

Remember that something in Go is exported if its name starts with a ``capital letter``.

> Note that a main package should never normally be imported by anything, so it probably shouldn't have any exported things in it.

If you want to split your code in multiple Go packages, or import Go packages from outside the standard library, you'll have to turn your project repo into Go module.

<br>

## Go modules

#### Links

[Using Go modules](https://go.dev/blog/using-go-modules)  
[Go modules reference](https://go.dev/ref/mod)  

<br>

#### Memo

Note : a repository in Go traditionally contains a single Go module, which lends naturally to a polyrepo setup.

In a Go module 
  * you have a collection of Go packages stored in a file tree
  * you initialize the module with the ``go mod init`` command

    ```bash
    go mod init github.com/egovelox/gobasics
    ```
  * you find ``go.mod`` file located at its root, with the name aka ``module path``, the go version, the required dependencies

    ```golang
    module github.com/egovelox/gobasics

    go 1.21.1

    require rsc.io/quote v1.5.2
    
    require (
      golang.org/x/text v0.0.0-20170915032832-14c0d48ead0c // indirect
      rsc.io/sampler v1.3.0 // indirect
    )

    ```
  * the go command resolves imports based on the ``go.mod`` file.
  * if an import is missing, the go command will automatically add it as a dependency with latest version
  * use ``go mod tidy`` to add/remove any missing module requirements necessary to build the current module
  * monitor your dependencies with the ``go list -m all`` command

<br>

#### Example of a 'gobasics' module

Let's build a Go module composed of two packages: intro and main.

* run command ``go mod init 'github.com/egovelox/gobasics``

Let's follow this repo structure :
```sh

gobasics/
  intro/
    intro.go
    quote.go
  main.go
  go.mod
  go.sum

```

```go
// intro/intro.go
package intro

import "fmt"

const language string = "Go"
var favorite bool = true

func Intro(quote: bool) (int, error) {
  if !quote {
    const text = "Does %s rule ? %t!"
    output := fmt.Sprintf(text, language, favorite)

    return fmt.Println(output)
  }
  return quoteIntro()
}
```

```go
// intro/quote.go
package intro

import (
  "fmt"
  "rsc.io/quote"
)

func quoteIntro() (int, error) {
	return fmt.Println(quote.Hello())
}
```

```go
// intro/quote.go
package main

import "github.com/egovelox/gobasics/intro"

func main() {
  intro.Intro(false)
}
```

* run command ``go mod tidy``
* run command ``go run main.go``
* run command ``go build``
* run command ``./gobasics``


