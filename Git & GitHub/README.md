# Git & GitHub Documentation

## What is Git?
Git is a **free and open-source version control system** that helps track changes in code. It allows developers to:

- Track the history of changes made to files.
- Collaborate with others more effectively.
- Manage code revisions and maintain a clean project history.

### Key Features of Git:
- **Track history**: View past changes, revert to previous versions, and keep a detailed log of modifications.
- **Collaboration**: Work with multiple developers on the same project and merge changes easily.
- **Version control**: Keep track of every change made to your project.

To get started with Git, [download Git here](https://git-scm.com).

## What is GitHub?
[GitHub](https://github.com) is a **web-based platform** for hosting Git repositories online. It allows developers to:

- **Host repositories**: Share your code with others in the cloud.
- **Collaborate on projects**: Work with others using features like pull requests, issues, and discussions.
- **Showcase your work**: Share public repositories with the community and potential employers.

To create an account on GitHub, visit [GitHub.com](https://github.com).

## Using Git
You can interact with Git using several methods:

- **Command Line (CLI)**: The most common and powerful method for managing Git repositories.
- **IDE/Code Editors**: Tools like VSCode often integrate Git commands directly into the interface.
- **Graphical User Interface (GUI)**: Tools like GitKraken provide a visual representation of Git operations.

## Configuring Git

Before using Git, configure your Git user:

```bash
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```

## Basic Git Commands

- **Clone a repository**:  
```bash
git clone repositorylink
```
Clone a repository to your local machine.

- **Check the status**:  
```bash
git status
```
Displays the current state of the working directory.

- **View commit history**:  
```bash
git log
```
Shows the commit history of the repository.

- **Stage a file for commit**:  
```bash
git add filename
```
Adds a file to the staging area.

- **Stage all changes**:  
```bash
git add .
```
Stages all changes (new, modified, and deleted files) in the current directory.

- **Commit changes**:  
```bash
git commit -m "Your commit message"
```
Records the changes in the repository history.

- **Push changes to remote repository**:  
```bash
git push origin main
```
Uploads local changes to the remote repository.

- **Initialize a new repository**:  
```bash
git init
```
Creates a new Git repository.

- **Pull changes from remote repository**:  
```bash
git pull origin main
```
Fetches and merges changes from the remote repository to the local repository.

## Pushing a Local Repository

1. **Initialize a new Git repository**:  
```bash
git init
```

2. **Add a remote repository**:  
```bash
git remote add origin repository_link
```

3. **Verify remote repositories**:  
```bash
git remote -v
```

4. **Check the current branch**:  
```bash
git branch
```

5. **Rename the current branch**:  
```bash
git branch -M main
```

6. **Push to remote repository**:  
```bash
git push origin main
```

## Branch Commands

- **Check the current branch**:  
```bash
git branch
```

- **Rename a branch**:  
```bash
git branch -m new_name
```

- **Switch to another branch**:  
```bash
git checkout branch_name
```

- **Create a new branch**:  
```bash
git checkout -b new_branch_name
```

- **Delete a branch**:  
```bash
git branch -d branch_name
```

## Merging Branches

- **Compare changes between branches**:  
```bash
git diff branch_name
```

- **Merge branches**:  
```bash
git merge branch_name
```

**Alternatively**, create a Pull Request (PR) on GitHub to merge branches.

## Merge Conflicts

A merge conflict occurs when Git is unable to automatically resolve differences in code between two commits. This often happens when changes are made to the same line of code in different branches.

## Fixing Mistakes

### Case 1: Staged Changes
- **Unstage a specific file**:  
```bash
git reset filename
```

- **Unstage all changes**:  
```bash
git reset
```

### Case 2: Committed Changes (for one commit)
- **Undo the last commit**:  
```bash
git reset HEAD~1
```

### Case 3: Committed Changes (for multiple commits)
- **Undo multiple commits (soft reset)**:  
```bash
git reset commit_hash
```
Moves the branch pointer to the specified commit, keeping changes in your working directory and staging area.

- **Undo multiple commits (hard reset)**:  
```bash
git reset --hard commit_hash
```
Moves the branch pointer to the specified commit and discards all changes in the working directory and staging area.

- **Undo the last commit but keep changes in the working directory**:  
```bash
git reset --soft HEAD~1
```

- **Force push after a reset to update remote**:  
```bash
git push origin HEAD --force
```

## What is Forking?
Forking creates a **copy of a repository** under your GitHub account. It allows you to freely experiment with changes without affecting the original project.

- **Forking** is often used to contribute to open-source projects.
