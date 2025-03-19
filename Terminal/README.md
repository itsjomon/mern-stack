# The Terminal
A text-based input and output environment used to interact with your computer's operating system.

## **Different Terms**

- **Command Line**: Any interface where users input text commands to perform tasks. (Common in Windows)
- **Terminal**: A type of command-line interface, often used on macOS and Linux systems.
- **Console**: Another term for a command-line interface used to interact with the system.
- **Shell**: The program that interprets and executes your commands inside the terminal (e.g., bash, zsh).
- **Bash**: A widely-used shell, especially on Linux and macOS.
- **Zsh (Z Shell)**: Another powerful shell; default on newer macOS versions.

## **Basic Commands**

| Command | Description |
|---------|-------------|
| `ls` | List files and directories in the current directory |
| `pwd` | Print working directory (shows your current location) |
| `clear` | Clear the terminal screen |

## **Navigation**

Move between directories:

- `cd` – Change directory
  - `cd Desktop` – Move into the Desktop directory
  - `cd ..` – Go back one directory
  - `cd ../..` – Go back two directories
  - `cd ~` – Go to the home directory
  - `cd /` – Go to the root directory

Open VS Code in current directory:

- `code .` – Opens Visual Studio Code from the terminal (requires VS Code CLI to be set up)

## **Paths in Navigation**

- **Relative Path**: Relative to the current directory  
  - `cd Desktop/Projects`
- **Absolute Path**: Full path from the root directory  
  - `cd /Users/yourname/Desktop/Projects`

## **Creating Directories**

- `mkdir FolderName` – Create a new directory
- Use absolute or relative paths:
  - `mkdir Desktop/Projects/NewFolder` (Relative)
  - `mkdir /Users/yourname/Desktop/Projects/NewFolder` (Absolute)

## **Touch Command (Creating Files)**

- `touch index.html` – Create an HTML file
- `touch app.js` – Create a JavaScript file
- `touch readme.md` – Create a markdown file

## **Deleting Files & Folders**

> **Warning**: These actions are irreversible from the terminal

- `rm filename` – Remove a file
- `rmdir foldername` – Remove an **empty** folder
- `rm -rf foldername` – Force remove folder and all contents inside

## **Flags in Commands**

Flags are options that modify command behavior:

| Command | Description |
|---------|-------------|
| `ls -l` | Lists files with detailed info (permissions, size, date, etc.) |
| `ls -a` | Lists all files including hidden ones (those starting with a dot `.`) |
| `ls -la` | Combines both `-l` and `-a` flags |

## **Manual Pages**

Use `man` (manual) to learn more about commands:

- `man ls`
- `man mkdir`
- `man rm`

Press `q` to exit the manual page view.

## **Handy Shortcuts**

- **Tab** – Auto-complete file or folder names
- **Up/Down Arrows** – Scroll through previous commands
- **Ctrl + C** – Cancel current command
- **Ctrl + L** – Clear terminal (like `clear` command)

## **Advanced (Optional)**

- `tree` – Visual directory tree (you may need to install it with `brew install tree` or `sudo apt install tree`)
- `cat filename` – Display contents of a file
- `nano filename` – Edit files directly in the terminal
- `echo "text" > file.txt` – Create a file with text
- `mv oldname newname` – Rename or move files
- `cp file1 file2` – Copy files
- `history` – Show command history
- `!number` – Re-run command by history number
