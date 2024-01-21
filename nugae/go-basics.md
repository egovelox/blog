---
title: "Intro to Go"
description: "traditional post"
date: "2024-01-21"
public: true
---

## Go Memos

#### Go module

[https://go.dev/blog/using-go-modules](go modules documentation)

Note : a repository in Go traditionally contains a single Go module, which lends naturally to a polyrepo setup.

* a Go module 
    * is a collection of Go packages stored in a file tree
    * has a ``go.mod`` file at its root.
    * ```golang
      module github.com/egovelox/basics

      go 1.21.1

      require rsc.io/quote v1.5.2
      ```

* a ``go.mod`` file appears in the root of the module.

#### Bootstrap a 'basic' go module

- run command ``go mod init 'github.com/egovelox/basic``
- write a ``main.go`` (or ``basic.go``) file : to have this source file specify the main package of your ``basic`` module, you must say 

```go
package basic

import "fmt"

const language string = "Go"
var favorite bool = true

func basic() {
    const text = "Does %s rule ? %t!"
    output := fmt.Sprintf(text, language, favorite)

    fmt.Println(output)
}
```
- run command ``go build``
- run command ``./basics``

#### Add a pkg as dependency

