# 🎨 Etch-a-Sketch

## 🚀 Features

- ✏️ **Interactive drawing:** Click and hold to color squares.  

- 🎨 **Random colors:** Each square fills with a random color when painted.  

- 🔢 **Custom grid sizes:** Choose any grid size (1×1 up to 100×100).  

- 🧹 **Clear button:** Reset the board instantly.  

- 🧱 **Pure JavaScript:** Everything — elements, styles, and events — is generated dynamically.  

---

## 🛠️ How It Works

1. The script dynamically creates:
   - A header  
   - A grid container  
   - Input and control buttons  
   - A footer  

2. Each grid square reacts to:
   - `mousedown` → starts painting  
   - `mouseenter` while mouse held → continues painting  

3. The grid’s size is determined by the user’s input (default is 16×16).  

4. Colors are generated randomly using RGB values each time a square is drawn.