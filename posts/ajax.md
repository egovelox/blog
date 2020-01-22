---
title: "Ajax basics"
description: "traditional post"
date: "2020-01-22"
public: true
---

XMLHttpRequest (aka AJAX) is a built-in browser object that allows to make HTTP requests in JavaScript. Here is the classic AJAX process: 

```javascript
    var req = new XMLHttpRequest();
    
    // onreadystatechange() will be invoked 
    // each time the event 'readystate has changed' occurs
    // i.e 4 times in most cases.
    req.onreadystatechange = function()
    {
        // N.B the 'this' keyword still represents the 'req' object
        // readyState 0: request not initialized
        // readyState 1: server connection established
        // readyState 2: request received 
        // readyState 3: processing request 
        // readyState 4: request finished and response is ready

        if(this.readyState == 4 && this.status == 200)
        {
            // Get Server Response Headers 
            // req.getAllResponseHeaders() returns all
            // req.getResponseHeader() returns only specific ones
            var header = this.getResponseHeader();


            // Get Server Response Data
            // req.responseText is STRING
            // req.responseXML is XML
            var response = this.responseText;

            // ... do whatever you want
        }
    }

    // choose GET or POST
    // choose true for asynchronous request & response
    // (i.e in JS: non-blocking)
    req.open('GET', "note.txt", true);

    // Optional: if I need to configure headers
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // for POST, pass your data here: 
    req.send();
}
```