/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/main.ts
__export(exports, {
  default: () => CustomFramesPlugin
});
var import_obsidian4 = __toModule(require("obsidian"));

// src/frame.ts
var import_obsidian = __toModule(require("obsidian"));

// src/settings.ts
var defaultSettings = {
  frames: [],
  padding: 5
};
var presets = {
  "obsidian": {
    url: "https://forum.obsidian.md/",
    displayName: "Obsidian Forum",
    icon: "edit",
    hideOnMobile: true,
    addRibbonIcon: true,
    openInCenter: true,
    zoomLevel: 1,
    forceIframe: false,
    customCss: ""
  },
  "detexify": {
    url: "https://detexify.kirelabs.org/classify.html",
    displayName: "Detexify",
    icon: "type",
    hideOnMobile: true,
    addRibbonIcon: true,
    openInCenter: false,
    zoomLevel: 0.95,
    forceIframe: false,
    customCss: `/* hide info clutter and ad banner */
#classify--info-area,
.adsbygoogle {
	display: none !important
}`
  },
  "calendar": {
    url: "https://calendar.google.com/calendar",
    displayName: "Google Calendar",
    icon: "calendar",
    hideOnMobile: true,
    addRibbonIcon: true,
    openInCenter: true,
    zoomLevel: 1,
    forceIframe: false,
    customCss: `/* hide the menu bar, "Keep" text, and logo */
html > body > div:nth-child(2) > div:nth-child(2) > div:first-child[class*=" "],
html > body > div:first-child > header:first-child > div > div:first-child > div > div:first-child,
html > body > div:nth-child(2) > div:nth-child(2) > div:first-child > div:first-child {
display: none !important;
}`
  },
  "keep": {
    url: "https://keep.google.com",
    displayName: "Google Keep",
    icon: "files",
    hideOnMobile: true,
    addRibbonIcon: false,
    openInCenter: false,
    zoomLevel: 1,
    forceIframe: false,
    customCss: `/* hide the menu bar and the "Keep" text */
html > body > div:nth-child(2) > div:nth-child(2) > div:first-child,
html > body > div:first-child > header:first-child > div > div:first-child > div > div:first-child > a:first-child > span {
	display: none !important;
}`
  },
  "todoist": {
    url: "https://todoist.com",
    displayName: "Todoist",
    icon: "list-checks",
    hideOnMobile: true,
    addRibbonIcon: false,
    openInCenter: false,
    zoomLevel: 1,
    forceIframe: false,
    customCss: `/* hide the help, home, search, and productivity overview buttons, create extra space, and prevent toast pop-up from acting weird */
[aria-label="Go to Home view"], #quick_find, [aria-label="Productivity"], [aria-label="Help & Feedback"] {
	display: none !important;
}

.view_content {
	padding-left: 15px;
}

.view_header {
	padding-left: 15px;
	padding-top: 10px;
}

.undo_toast {
	width: 95%;
}`
  },
  "notion": {
    url: "https://www.notion.so/",
    displayName: "Notion",
    icon: "box",
    hideOnMobile: true,
    addRibbonIcon: true,
    openInCenter: true,
    zoomLevel: 1,
    forceIframe: false,
    customCss: ""
  },
  "twitter": {
    url: "https://twitter.com",
    displayName: "Twitter",
    icon: "twitter",
    hideOnMobile: true,
    addRibbonIcon: false,
    openInCenter: false,
    zoomLevel: 1,
    forceIframe: false,
    customCss: ""
  },
  "tasks": {
    url: "https://tasks.google.com/embed/?origin=https://calendar.google.com&fullWidth=1",
    displayName: "Google Tasks",
    icon: "list-checks",
    hideOnMobile: true,
    addRibbonIcon: false,
    openInCenter: false,
    zoomLevel: 1,
    forceIframe: false,
    customCss: ""
  }
};
function getIcon(settings) {
  return settings.icon ? `lucide-${settings.icon}` : "documents";
}
function getId(settings) {
  return settings.displayName.toLowerCase().replace(/\s/g, "-");
}

// src/frame.ts
var CustomFrame = class {
  constructor(settings, data) {
    this.settings = settings;
    this.data = data;
  }
  create(parent, additionalStyle = void 0, urlSuffix = void 0) {
    let style = `padding: ${this.settings.padding}px;`;
    if (additionalStyle)
      style += additionalStyle;
    if (import_obsidian.Platform.isDesktopApp && !this.data.forceIframe) {
      let frameDoc = parent.doc;
      this.frame = frameDoc.createElement("webview");
      parent.appendChild(this.frame);
      this.frame.setAttribute("allowpopups", "");
      this.frame.addEventListener("dom-ready", () => {
        this.frame.setZoomFactor(this.data.zoomLevel);
        this.frame.insertCSS(this.data.customCss);
      });
      this.frame.addEventListener("destroyed", () => {
        if (frameDoc != parent.doc) {
          this.frame.detach();
          this.create(parent, additionalStyle, urlSuffix);
        }
      });
    } else {
      this.frame = parent.doc.createElement("iframe");
      parent.appendChild(this.frame);
      this.frame.setAttribute("sandbox", "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation");
      this.frame.setAttribute("allow", "encrypted-media; fullscreen; oversized-images; picture-in-picture; sync-xhr; geolocation;");
      style += `transform: scale(${this.data.zoomLevel}); transform-origin: 0 0;`;
    }
    this.frame.addClass("custom-frames-frame");
    this.frame.addClass(`custom-frames-${getId(this.data)}`);
    this.frame.setAttribute("style", style);
    let src = this.data.url;
    if (urlSuffix) {
      if (!urlSuffix.startsWith("/"))
        src += "/";
      src += urlSuffix;
    }
    this.frame.setAttribute("src", src);
  }
  refresh() {
    if (this.frame instanceof HTMLIFrameElement) {
      this.frame.contentWindow.location.reload();
    } else {
      this.frame.reload();
    }
  }
  return() {
    if (this.frame instanceof HTMLIFrameElement) {
      this.frame.contentWindow.open(this.data.url);
    } else {
      this.frame.loadURL(this.data.url);
    }
  }
  goBack() {
    if (this.frame instanceof HTMLIFrameElement) {
      this.frame.contentWindow.history.back();
    } else {
      this.frame.goBack();
    }
  }
  goForward() {
    if (this.frame instanceof HTMLIFrameElement) {
      this.frame.contentWindow.history.forward();
    } else {
      this.frame.goForward();
    }
  }
  toggleDevTools() {
    if (!(this.frame instanceof HTMLIFrameElement)) {
      if (!this.frame.isDevToolsOpened()) {
        this.frame.openDevTools();
      } else {
        this.frame.closeDevTools();
      }
    }
  }
  getCurrentUrl() {
    return this.frame instanceof HTMLIFrameElement ? this.frame.contentWindow.location.href : this.frame.getURL();
  }
  focus() {
    if (this.frame instanceof HTMLIFrameElement) {
      this.frame.contentWindow.focus();
    } else {
      this.frame.focus();
    }
  }
};

// src/settings-tab.ts
var import_obsidian2 = __toModule(require("obsidian"));
var CustomFramesSettingTab = class extends import_obsidian2.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    this.containerEl.empty();
    this.containerEl.createEl("h2", { text: "Custom Frames Settings" });
    this.containerEl.createEl("p", { text: "Please note that Obsidian has to be restarted or reloaded for most of these settings to take effect.", cls: "mod-warning" });
    new import_obsidian2.Setting(this.containerEl).setName("Frame Padding").setDesc("The padding that should be left around the inside of custom frame panes, in pixels.").addText((t) => {
      t.inputEl.type = "number";
      t.setValue(String(this.plugin.settings.padding));
      t.onChange((v) => __async(this, null, function* () {
        this.plugin.settings.padding = v.length ? Number(v) : defaultSettings.padding;
        yield this.plugin.saveSettings();
      }));
    });
    for (let frame of this.plugin.settings.frames) {
      let heading = this.containerEl.createEl("h3", { text: frame.displayName || "Unnamed Frame" });
      let toggle = new import_obsidian2.ButtonComponent(this.containerEl).setButtonText("Show Settings").setClass("custom-frames-show").onClick(() => __async(this, null, function* () {
        content.hidden = !content.hidden;
        toggle.setButtonText(content.hidden ? "Show Settings" : "Hide Settings");
      }));
      let content = this.containerEl.createDiv();
      content.hidden = true;
      new import_obsidian2.Setting(content).setName("Display Name").setDesc("The display name that this frame should have.").addText((t) => {
        t.setValue(frame.displayName);
        t.onChange((v) => __async(this, null, function* () {
          frame.displayName = v;
          heading.setText(frame.displayName || "Unnamed Frame");
          yield this.plugin.saveSettings();
        }));
      });
      new import_obsidian2.Setting(content).setName("Icon").setDesc(createFragment((f) => {
        f.createSpan({ text: "The icon that this frame's pane should have. The names of any " });
        f.createEl("a", { text: "Lucide icons", href: "https://lucide.dev/" });
        f.createSpan({ text: " can be used." });
      })).addText((t) => {
        t.setValue(frame.icon);
        t.onChange((v) => __async(this, null, function* () {
          frame.icon = v;
          yield this.plugin.saveSettings();
        }));
      });
      new import_obsidian2.Setting(content).setName("URL").setDesc("The URL that should be opened in this frame.").addText((t) => {
        t.setValue(frame.url);
        t.onChange((v) => __async(this, null, function* () {
          frame.url = v;
          yield this.plugin.saveSettings();
        }));
      });
      new import_obsidian2.Setting(content).setName("Disable on Mobile").setDesc("Custom Frames is a lot more restricted on mobile devices and doesn't allow for the same types of content to be displayed. If a frame doesn't work as expected on mobile, it can be disabled.").addToggle((t) => {
        t.setValue(frame.hideOnMobile);
        t.onChange((v) => __async(this, null, function* () {
          frame.hideOnMobile = v;
          yield this.plugin.saveSettings();
        }));
      });
      new import_obsidian2.Setting(content).setName("Add Ribbon Icon").setDesc("Whether a button to open this frame should be added to the ribbon.").addToggle((t) => {
        t.setValue(frame.addRibbonIcon);
        t.onChange((v) => __async(this, null, function* () {
          frame.addRibbonIcon = v;
          yield this.plugin.saveSettings();
        }));
      });
      new import_obsidian2.Setting(content).setName("Open in Center").setDesc("Whether this frame should be opened in the unpinned center editor rather than one of the panes on the side. This is useful for sites that don't work well in a narrow view, or sites that don't require a note to be open when viewed.").addToggle((t) => {
        t.setValue(frame.openInCenter);
        t.onChange((v) => __async(this, null, function* () {
          frame.openInCenter = v;
          yield this.plugin.saveSettings();
        }));
      });
      new import_obsidian2.Setting(content).setName("Force iframe").setDesc(createFragment((f) => {
        f.createSpan({ text: "Whether this frame should use iframes on desktop as opposed to Electron webviews." });
        f.createEl("br");
        f.createEl("em", { text: "Only enable this setting if the frame is causing issues or frequent crashes. This setting causes all Desktop-only settings to be ignored." });
      })).addToggle((t) => {
        t.setValue(frame.forceIframe);
        t.onChange((v) => __async(this, null, function* () {
          frame.forceIframe = v;
          yield this.plugin.saveSettings();
        }));
      });
      new import_obsidian2.Setting(content).setName("Page Zoom").setDesc("The zoom that this frame's page should be displayed with, as a percentage.").addText((t) => {
        t.inputEl.type = "number";
        t.setValue(String(frame.zoomLevel * 100));
        t.onChange((v) => __async(this, null, function* () {
          frame.zoomLevel = v.length ? Number(v) / 100 : 1;
          yield this.plugin.saveSettings();
        }));
      });
      new import_obsidian2.Setting(content).setName("Additional CSS").setDesc(createFragment((f) => {
        f.createSpan({ text: "A snippet of additional CSS that should be applied to this frame." });
        f.createEl("br");
        f.createEl("em", { text: "Note that this is only applied on Desktop." });
      })).addTextArea((t) => {
        t.inputEl.rows = 5;
        t.inputEl.cols = 50;
        t.setValue(frame.customCss);
        t.onChange((v) => __async(this, null, function* () {
          frame.customCss = v;
          yield this.plugin.saveSettings();
        }));
      });
      new import_obsidian2.ButtonComponent(content).setButtonText("Remove Frame").onClick(() => __async(this, null, function* () {
        this.plugin.settings.frames.remove(frame);
        yield this.plugin.saveSettings();
        this.display();
      }));
    }
    this.containerEl.createEl("hr");
    this.containerEl.createEl("p", { text: `Create a new frame, either from a preset shipped with the plugin, or a custom one that you can edit yourself. Each frame's pane can be opened using the "Custom Frames: Open" command.` });
    let addDiv = this.containerEl.createDiv();
    let dropdown = new import_obsidian2.DropdownComponent(addDiv);
    dropdown.addOption("new", "Custom");
    for (let key of Object.keys(presets))
      dropdown.addOption(key, presets[key].displayName);
    new import_obsidian2.ButtonComponent(addDiv).setButtonText("Add Frame").setClass("custom-frames-add").onClick(() => __async(this, null, function* () {
      let option = dropdown.getValue();
      if (option == "new") {
        this.plugin.settings.frames.push({
          url: "",
          displayName: "New Frame",
          icon: "",
          hideOnMobile: true,
          addRibbonIcon: false,
          openInCenter: false,
          zoomLevel: 1,
          forceIframe: false,
          customCss: ""
        });
      } else {
        this.plugin.settings.frames.push(presets[option]);
      }
      yield this.plugin.saveSettings();
      this.display();
    }));
    var disclaimer = this.containerEl.createEl("p", { cls: "mod-warning" });
    disclaimer.createSpan({ text: "Please be advised that, when adding a site as a custom frame, you potentially expose personal information you enter to other plugins you have installed. For more information, see " });
    disclaimer.createEl("a", { text: "this discussion", href: "https://github.com/Ellpeck/ObsidianCustomFrames/issues/54#issuecomment-1210879685", cls: "mod-warning" });
    disclaimer.createSpan({ text: "." });
    this.containerEl.createEl("hr");
    this.containerEl.createEl("p", { text: "If you like this plugin and want to support its development, you can do so through my website by clicking this fancy image!" });
    this.containerEl.createEl("a", { href: "https://ellpeck.de/support" }).createEl("img", { attr: { src: "https://ellpeck.de/res/generalsupport.png" }, cls: "custom-frames-support" });
  }
};

// src/view.ts
var import_obsidian3 = __toModule(require("obsidian"));
var _CustomFrameView = class extends import_obsidian3.ItemView {
  constructor(leaf, settings, data, name) {
    super(leaf);
    this.data = data;
    this.name = name;
    this.frame = new CustomFrame(settings, data);
    for (let action of _CustomFrameView.actions)
      this.addAction(action.icon, action.name, () => action.action(this));
  }
  onload() {
    this.contentEl.empty();
    this.contentEl.addClass("custom-frames-view");
    this.frame.create(this.contentEl);
  }
  onPaneMenu(menu, source) {
    super.onPaneMenu(menu, source);
    for (let action of _CustomFrameView.actions) {
      menu.addItem((i) => {
        i.setTitle(action.name);
        i.setIcon(action.icon);
        i.onClick(() => action.action(this));
      });
    }
  }
  getViewType() {
    return this.name;
  }
  getDisplayText() {
    return this.data.displayName;
  }
  getIcon() {
    return getIcon(this.data);
  }
  focus() {
    this.frame.focus();
  }
};
var CustomFrameView = _CustomFrameView;
CustomFrameView.actions = [
  {
    name: "Return to original page",
    icon: "home",
    action: (v) => v.frame.return()
  },
  {
    name: "Open dev tools",
    icon: "binary",
    action: (v) => v.frame.toggleDevTools()
  },
  {
    name: "Copy link",
    icon: "link",
    action: (v) => navigator.clipboard.writeText(v.frame.getCurrentUrl())
  },
  {
    name: "Open in browser",
    icon: "globe",
    action: (v) => open(v.frame.getCurrentUrl())
  },
  {
    name: "Refresh",
    icon: "refresh-cw",
    action: (v) => v.frame.refresh()
  },
  {
    name: "Go back",
    icon: "arrow-left",
    action: (v) => v.frame.goBack()
  },
  {
    name: "Go forward",
    icon: "arrow-right",
    action: (v) => v.frame.goForward()
  }
];

// src/main.ts
var CustomFramesPlugin = class extends import_obsidian4.Plugin {
  onload() {
    return __async(this, null, function* () {
      yield this.loadSettings();
      for (let frame of this.settings.frames) {
        if (!frame.url || !frame.displayName)
          continue;
        let name = `custom-frames-${getId(frame)}`;
        if (import_obsidian4.Platform.isMobileApp && frame.hideOnMobile) {
          console.log(`Skipping frame ${name} which is hidden on mobile`);
          continue;
        }
        try {
          console.log(`Registering frame ${name} for URL ${frame.url}`);
          this.registerView(name, (l) => new CustomFrameView(l, this.settings, frame, name));
          this.addCommand({
            id: `open-${name}`,
            name: `Open ${frame.displayName}`,
            callback: () => this.openLeaf(name, frame.openInCenter, false)
          });
          if (frame.addRibbonIcon)
            this.addRibbonIcon(getIcon(frame), `Open ${frame.displayName}`, (e) => this.openLeaf(name, frame.openInCenter, import_obsidian4.Platform.isMacOS ? e.metaKey : e.ctrlKey));
        } catch (e) {
          console.error(`Couldn't register frame ${name}, is there already one with the same name?`);
        }
      }
      this.addSettingTab(new CustomFramesSettingTab(this.app, this));
      this.registerMarkdownCodeBlockProcessor("custom-frames", (s, e) => {
        e.empty();
        e.addClass("custom-frames-view-file");
        let frameMatch = /frame:([^\n]+)/gi.exec(s);
        let frameName = frameMatch && frameMatch[1].trim();
        if (!frameName) {
          e.createSpan({ text: "Couldn't parse frame name" });
          return;
        }
        let data = this.settings.frames.find((f) => f.displayName == frameName);
        if (!data) {
          e.createSpan({ text: `Couldn't find a frame with name ${frameName}` });
          return;
        }
        if (import_obsidian4.Platform.isMobileApp && data.hideOnMobile) {
          e.createSpan({ text: `${frameName} is hidden on mobile` });
          return;
        }
        let styleMatch = /style:([^\n]+)/gi.exec(s);
        let style = styleMatch && styleMatch[1].trim();
        style || (style = "height: 600px;");
        let urlSuffixMatch = /urlsuffix:([^\n]+)/gi.exec(s);
        let urlSuffix = urlSuffixMatch && urlSuffixMatch[1].trim();
        urlSuffix || (urlSuffix = "");
        let frame = new CustomFrame(this.settings, data);
        frame.create(e, style, urlSuffix);
      });
    });
  }
  loadSettings() {
    return __async(this, null, function* () {
      this.settings = Object.assign({}, defaultSettings, yield this.loadData());
    });
  }
  saveSettings() {
    return __async(this, null, function* () {
      yield this.saveData(this.settings);
    });
  }
  openLeaf(name, center, split) {
    return __async(this, null, function* () {
      let leaf;
      if (center) {
        leaf = this.app.workspace.getLeaf(split);
        yield leaf.setViewState({ type: name, active: true });
      } else {
        if (!this.app.workspace.getLeavesOfType(name).length)
          yield this.app.workspace.getRightLeaf(false).setViewState({ type: name, active: true });
        leaf = this.app.workspace.getLeavesOfType(name)[0];
        this.app.workspace.revealLeaf(leaf);
      }
      if (leaf.view instanceof CustomFrameView)
        leaf.view.focus();
    });
  }
};