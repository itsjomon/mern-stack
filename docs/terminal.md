# Terminal

A text input and output environment used to interact with your computer's operating system.

## Different Terms

- **Command Line:** Any interface used by typing textual commands instead of clicking a GUI
- **Terminal:** The window or application that hosts the command line (e.g., Terminal, Windows Terminal, iTerm)
- **Console:** A command-line interface used to work with your computer
- **Shell:** A program running inside the terminal that interprets commands
- **Bash:** A popular shell on Linux/macOS (default on most Linux distros)
- **Z-Shell (Zsh):** Another popular shell (default on modern macOS)

## Basic Commands

| Command | Description |
| --- | --- |
| `ls` | List files (show my files) |
| `pwd` | Print working directory (where am I?) |
| `clear` | Clear screen |

- Up arrow: Browse previous commands
- Down arrow: Move forward in command history

## Navigation

Inside & Outside Directories

- `cd`: Change directory
- `cd Desktop`: Go to Desktop
- `cd ..`: Go back one directory
- `cd ../..`: Go back two directories
- `cd ~`: Go to the home directory
- `cd /`: Go to the root directory
- `code .`: Open current folder in VS Code (VS Code CLI required)

Pressing `Tab` **auto-completes** directory names.

If multiple matches exist, press `Tab` **twice** to see suggestions.

### Paths in Navigation

- `cd Desktop/Projects` : **Relative path** (relative to the current directory)
- `cd /Users/yourname/Desktop/Projects` : **Absolute path** (full path from the root directory)
- `/` : Root directory
- `~` : Home directory

## Making Directories

- `mkdir`: Make a directory
- `mkdir NewFolder`: Create a new folder in the current directory

### Using relative & absolute paths

- Relative: `mkdir Desktop/Projects/NewFolder`
- Absolute: `mkdir /Users/yourname/Desktop/Projects/NewFolder`

## Flags

Flags are characters that we pass with commands to modify their behaviour.

### Manual Command

- `man ls`: Give info about the `ls` command
- `man mkdir`: Give info about the `mkdir` command

Press `q` to exit the manual page view.

| Command | Description |
| --- | --- |
| `ls -l` | Lists files with detailed info (permissions, size, date, etc.) |
| `ls -a` | Lists all files including hidden ones (those starting with a dot `.`) |
| `ls -la` | Combines both `-l` and `-a` flags | 

## Touch Command

The touch command is used for changing file timestamps; however, one of the most common uses of the touch command is **creating a new empty file**.

### Example:

- `touch index.html`: Create an HTML file
- `touch app.js`: Create a JavaScript file
- `touch README.md`: Create a markdown file

## Deleting Files & Folders

- `rm`: Removes files (e.g., `rm fileName`)
- `rmdir`: Removes empty folders (e.g., `rmdir folderName`)
- `rm -rf`: Removes any folder (e.g., `rm -rf folderName`)

> [!WARNING]
> Deletions made through the terminal are permanent and cannot be undone.

## Handy Shortcuts

- `Tab`: Auto-complete file or folder names
- `Up/Down Arrows`: Scroll through previous commands
- `Ctrl` + `C`: Stop a running command
- `Ctrl` + `L`: Clear terminal screen (like `clear` command)
