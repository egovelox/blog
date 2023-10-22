---
title: "Remapping firefox keys on MacOS"
description: "traditional post"
date: "2023-07-21"
public: true
---

Tested with firefox version 114.0.1 on MacOS Ventura 13.5

## Create two files

```bash
touch /Applications/Firefox.app/Contents/Resources/defaults/pref/config-prefs.js

touch /Applications/Firefox.app/Contents/Resources/config.js
```

```javascript

// config-prefs.js

pref("general.config.filename", "config.js");    
pref("general.config.obscure_value", 0);  
pref("general.config.sandbox_enabled", false);

```

```javascript

// config.js
// Add Ctrl-J and Ctrl-K as nextTab and PrevTab

const Services = globalThis.Services;
function ConfigJS() { Services.obs.addObserver(this, 'chrome-document-global-created', false); }

try {
  ConfigJS.prototype = {
    observe: function (aSubject) { aSubject.addEventListener('DOMContentLoaded', this, {once: true}); },
    handleEvent: function (aEvent) {
      let document = aEvent.originalTarget; 
      let window = document.defaultView; 
      let location = window.location;
      if (
        /^(chrome:(?!\/\/(global\/content\/commonDialog|browser\/content\/webext-panels)\.x?html)|about:(?!blank))/i
        .test(location.href)
      ) {
        if (window._gBrowser) {

          let nextTabKey = window.document
            .createElementNS('http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul', 'key');
          nextTabKey.setAttribute("id", "key_nextTabCustom");
          nextTabKey.setAttribute("modifiers", "control");
          nextTabKey.setAttribute("key", "J");
          nextTabKey.setAttribute("command", "Browser:NextTab");

          let previousTabKey = window.document
            .createElementNS('http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul', 'key');
          previousTabKey.setAttribute("id", "key_previousTabCustom");
          previousTabKey.setAttribute("modifiers", "control");
          previousTabKey.setAttribute("key", "K");
          previousTabKey.setAttribute("command", "Browser:PrevTab");

          let mainKeyset = window.document.getElementById('mainKeyset');
          mainKeyset.appendChild(nextTabKey);
          mainKeyset.appendChild(previousTabKey);

        }
      }
    }
  };
  if (!Services.appinfo.inSafeMode) { new ConfigJS(); }
} catch(ex) {};

```

## Tips

To find all key or command names, activate the Browser Toolbox : 
In developer tools > ... > Settings > Advanced Settings
activate both :

```text
Enable browser chrome and add-on debugging tools
Enable remote debugging
```

then search the DOM for

```text
#mainKeyset
#mainCommandset
```

## Sources

- [https://superuser.com/questions/1271147/change-key-bindings-keyboard-shortcuts-in-firefox-quantum](https://superuser.com/questions/1271147/change-key-bindings-keyboard-shortcuts-in-firefox-quantum)
