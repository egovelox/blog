---
title: "VS code shortcuts"
description: "traditional post"
date: "2021-03-15"
public: false
---

## Export VSCode settings
Manually find your files in /Users/cunc/Library/Application Support/Code/User/

### launch shortcuts editor
Ctrl+K Ctrl+S

### Toggle sidebar
Cmd+B

### install vscodevim
Ctrl+P and launch **ext install vscodevim.vim**

### switch tab
Ctrl + PageUp/Down
Use vim gt/gT

### Tabout extension
Useful to "tab out" function braces or parenthesis. But see if you can manage it with Vim alone.

### Basic settings.json
```js
{
    "workbench.editor.enablePreview": false,
    "terminal.integrated.fontSize": 16,
    "window.nativeTabs": true,
    "update.mode": "manual",
    "telemetry.enableCrashReporter": false,
    "telemetry.enableTelemetry": false,
    "explorer.confirmDelete": true,
    "terminal.integrated.scrollback": 10000,
    "extensions.autoUpdate": false,
    "extensions.autoCheckUpdates": true,
    "extensions.ignoreRecommendations": false,
    "vim.insertModeKeyBindings": [
        {
            "before": ["k", "j"],
            "after": ["<Esc>"]
        }
    ],
    "vim.visualModeKeyBindings": [
        {
            "before": ["k", "j"],
            "after": ["<Esc>"]
        }
    ],
    "vim.normalModeKeyBindings": [
        {
            "before": ["leader", "w"],
            "commands": [
                "workbench.action.files.save",
            ]
        }
    ]
}
```

### Basic Keybindings.json
Search with shift-shift (like JetBrains)
Move between editor/sidebar with Cmd+0
Files Cmd+E
```js
// Place your key bindings in this file to override the defaults
[
    { // Unbind unconditional default
        "key": "cmd+0",
        "command": "-workbench.action.focusSideBar"
      },
      { // to ←
        "key": "cmd+0",
        "when": "!sideBarFocus",
        "command": "workbench.action.focusSideBar"
      },
      { // from →
        "key": "cmd+0",
        "when": "sideBarFocus",
        "command": "workbench.action.focusActiveEditorGroup"
      },
      {
        "key": "cmd+t",
        "command": "workbench.action.quickSwitchWindow"
      },
      {
          "key": "shift shift",
          "command": "workbench.action.findInFiles"
      }

]
```
 
