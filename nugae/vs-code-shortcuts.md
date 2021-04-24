---
title: "VS code shortcuts"
description: "traditional post"
date: "2021-03-15"
public: false
---

### launch shortcuts editor
Ctrl+K Ctrl+S

### install vscodevim
Ctrl+P and launch **ext install vscodevim.vim**

### switch tab
Ctrl + PageUp/Down
Use vim gt/gT
### Basic settings.json
```js
{
    "workbench.editor.enablePreview": false,
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
]
```

