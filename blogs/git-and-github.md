# Introduction to Git and GitHub

Imagine you are working on a large-scale project where you are testing different approaches to a problem. You solve the problem but you want to further improve it. You power off your system and again work on the project another day. You find that the problem can't be solved any other way and the only solution to that problem is the one you implemented previously. But there is no way to revert it back. **This is where Git comes in.**

---

## 📚 Introduction

**Git** is a distributed version control system created by **Linus Torvalds** in 2005. It is used to manage different versions of code for small to large-scale projects. It has been maintained by **Junio Hamano** since then.

### What is Version Control?

**Version control** is a way to track and manage changes made to a project's files over time. Using version control, we can move between different versions of the code.

### Local vs Distributed Version Control

- **Local Version Control:** The code versions are stored in a single machine
- **Distributed Version Control:** The code is saved at every developer's machine

### What is a Repository?

Think of a **repository** as the folder where you store your entire road project. Every map, every design, every version, every experiment, everything you create sits inside this one place.

If Git is the tool you use to save checkpoints, and branches are the different side paths you build to test ideas, then the repository is the container that holds all of it. It's the complete box that keeps your main road, your side paths, your history, your notes, and every change you've ever made.

Whether you keep this box on your computer or upload it to GitHub's storage garage, the **repository is the home of your whole project**.

---

## 💾 How Does Git Store Versions of Code?

Git just stores the **changes made each time**, so it is efficient to store the different versions. A **commit** in Git is a version of the code. In simple terms, it is a **snapshot of the code** with a message of what change has been made to the code in this version.

Git uses unique strings called **hashes** to identify every single commit or snapshot.

---

## 🔧 Installing Git

Here I will be explaining how to install Git on Linux. If you are using Ubuntu, you just need to run the following command to install Git:

```bash
sudo apt install git
```

After that, you need to configure your username and email on Git so that it can identify the person that made the commit:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

---

## 🚀 Using Git for a Project

Now that you have installed Git on your system, you will use it in a project. Let's say you are working on a project where you need version control.

1. Open terminal and navigate to the project directory
2. Initialize Git using the command:

```bash
git init
```

After initializing, you can create commits in the projects and make versions of your code.

---

## 🌿 Branches

### What are Branches in Git?

Think of your project as a long road you've been building. One day you come up with a new idea that might make the road better. You don't want to tear down the main road because you're not fully sure if this new idea will work. So instead of changing the main road, you build a separate side path.

On this side path, you test new designs, try different curves, change the surface, and experiment freely. If the path turns out great, you connect it back to the main road. But if it turns into a mess or leads nowhere, you simply remove it and the main road stays perfectly safe.

**That side path is a branch.**

---

## 🐙 GitHub

Continuing the road example, think of **GitHub** as a giant storage garage where you keep all your road designs safe. Your computer holds your project, but anything can happen to a local machine. If it crashes or gets lost, your work disappears.

So you upload your entire road project to this secure garage. Now your team members can also access it, look at the design, suggest improvements, or even build their own side paths and send them back to you.

- **Git** is the tool you use to build and manage the roads
- **GitHub** is the place where you store those roads, share them, and work with others

---

## 🔗 Using GitHub

You can host your local Git repository on GitHub so that you can collaborate and allow other developers to work on your project.

### Connecting Local Repository and GitHub Repo

1. Login to GitHub and create a new repository
2. Copy the URL of the repository and then run the command:

```bash
git remote add origin git@github.com:username/repository-name.git
```

3. Check the remote origin URL in local repository by command:

```bash
git remote -v
```

You should see something like:
```
origin  git@github.com:username/repository-name.git (fetch)
origin  git@github.com:username/repository-name.git (push)
```

4. Then push using the command:

```bash
git push -u origin main
```

---

## 📝 Most Commonly Used Git and GitHub Commands

Working with Git and GitHub requires remembering a few essential commands. Here's a practical list divided by category.

### 1. Setup and Configuration

| Command | Description |
|---------|-------------|
| `git config --global user.name "Your Name"` | Set your Git username |
| `git config --global user.email "you@example.com"` | Set your Git email |
| `git config --global core.editor nano` | Set default editor for commit messages |
| `git config --list` | Show current Git configuration |

### 2. Repository Management

| Command | Description |
|---------|-------------|
| `git init` | Initialize a new Git repository in the current folder |
| `git clone <repo-url>` | Download an existing GitHub repository to your machine |
| `git remote -v` | Show connected remote repositories |
| `git remote add origin <repo-url>` | Link your local repository to a GitHub repository |

### 3. Staging and Committing Changes

| Command | Description |
|---------|-------------|
| `git status` | Show the current status of files (modified, staged, untracked) |
| `git add <file>` | Stage specific files for commit |
| `git add .` | Stage all changes in the directory |
| `git commit -m "message"` | Commit staged changes with a message |
| `git commit --amend` | Modify the last commit (add changes or change message) |
| `git log` | View the commit history |
| `git log --oneline` | View commit history in a concise form |

### 4. Branching and Merging

| Command | Description |
|---------|-------------|
| `git branch` | List all branches in the repository |
| `git branch <branch-name>` | Create a new branch |
| `git checkout <branch-name>` | Switch to another branch |
| `git checkout -b <branch-name>` | Create a new branch and switch to it immediately |
| `git merge <branch>` | Merge a branch into the current branch |
| `git branch -d <branch>` | Delete a branch locally |
| `git branch -D <branch>` | Force delete a branch |

### 5. Undoing Changes

| Command | Description |
|---------|-------------|
| `git restore <file>` | Discard changes in the working directory |
| `git restore --staged <file>` | Unstage a file |
| `git reset --hard <commit>` | Reset repository to a specific commit (⚠️ warning: discards changes) |
| `git revert <commit>` | Create a new commit that undoes a previous commit |

### 6. Working with Remote Repositories

| Command | Description |
|---------|-------------|
| `git fetch` | Download changes from the remote repository (does not merge) |
| `git pull` | Fetch and merge changes from the remote repository |
| `git push` | Upload your commits to the remote repository |
| `git push -u origin <branch>` | Push the branch and set upstream tracking |
| `git pull --rebase` | Reapply your local commits on top of fetched changes |

---

## 🎯 Conclusion

Git and GitHub are essential tools for modern software development. Git helps you manage your code versions locally, while GitHub provides a platform to collaborate with others and keep your projects safe in the cloud.

Start by learning the basic commands, practice creating branches, and don't be afraid to experiment. Remember: with Git, you can always go back!

---

**Happy Coding! 🚀**