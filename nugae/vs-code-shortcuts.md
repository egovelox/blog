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

### Merge all windows (native tabs must be enabled)
CMD mw

### Switch between Windows
CMD + q

## Switch between editor tabs
CMD + w (next)
CMD + shift + w (previous)

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
          "key": "shift shift",
          "command": "workbench.action.findInFiles"
      },
      {
        "key": "cmd+q",
        "command": "workbench.action.showNextWindowTab"
      },
      {
        "key": "cmd+m cmd+w",
        "command": "workbench.action.mergeAllWindowTabs"
      },

      {
        "key": "cmd+w",
        "command": "workbench.action.nextEditor",
      },
      {
        "key": "shift+cmd+w",
        "command": "workbench.action.previousEditor",
      },
      { // DISABLES
        "key": "cmd+w",
        "command": "-workbench.action.closeActiveEditor"
      },
      { // DISABLES
        "key": "cmd+w",
        "command": "-workbench.action.closeWindow",
        "when": "!editorIsOpen && !multipleEditorGroups"
      },
      { // DISABLES
        "key": "shift+cmd+w",
        "command": "-workbench.action.closeWindow"
      },
      { // DISABLES
        "key": "cmd+q",
        "command": "-workbench.action.quit"
      },
      { // DISABLES
        "key": "ctrl+w",
        "command": "-workbench.action.switchWindow

]
```
 
