---
title: "Styling firefox tabs"
description: "traditional post"
date: "2023-07-21"
public: true
---

First install Firefox extension ``Tree Style Tab``

Then access ``about:support`` > ``Profile Directory`` (Help > More TroubleShooting Information)


```bash
vim ${PROFILE_DIR}/chrome/userChrome.css
```

```css
/* hides the native tabs */
#TabsToolbar {
  visibility: collapse;
}

/* Hide sidebar header, when using Tree Style Tab. */
#sidebar-box[sidebarcommand="treestyletab_piro_sakura_ne_jp-sidebar-action"] #sidebar-header {
  visibility: collapse;
}

/* Shrink sidebar until hovered, when using Tree Style Tab. */
:root {
  --thin-tab-width: 50px;
  --wide-tab-width: 50px;
}

#sidebar-box[sidebarcommand="treestyletab_piro_sakura_ne_jp-sidebar-action"] {
  position: relative !important;
  /* transition: all 200ms !important; */
  min-width: var(--thin-tab-width) !important;
  max-width: var(--thin-tab-width) !important;
}

#sidebar-box[sidebarcommand="treestyletab_piro_sakura_ne_jp-sidebar-action"]:hover {
    /* transition: all 200ms !important; */
    min-width: var(--wide-tab-width) !important;
    max-width: var(--wide-tab-width) !important;
    margin-right: calc((var(--wide-tab-width) - var(--thin-tab-width)) * -1) !important;
    z-index:1;
}
```

Restart Firefox and you're done.

Source : 

[https://medium.com/@Aenon/firefox-hide-native-tabs-and-titlebar-f0b00bdbb88b](https://medium.com/@Aenon/firefox-hide-native-tabs-and-titlebar-f0b00bdbb88b)

[https://gist.github.com/olmstadfm/d6b4d37219e957d9cdcdb3ec88952c15](https://gist.github.com/olmstadfm/d6b4d37219e957d9cdcdb3ec88952c15)
