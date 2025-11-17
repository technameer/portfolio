# Getting Started with Linux: A Personal Guide to Installation and Core Commands

I recently started using Linux and found it to be an amazing and powerful system. If you are the kind of person who likes to get most things done from the keyboard without touching the mouse, you will find Linux to be the perfect system for you. In this article, I will guide you through Linux so that you will be comfortable starting to use it.

---

## 🐧 What is Linux?

Linux is an **open-source operating system**, meaning it is software that manages the hardware of a computer. It is freely available for anyone to use and modify. Linux is built around the **Linux kernel**, which is responsible for managing memory and system resources. Linux comes in different versions called **distributions (distros)**, such as **Fedora, Debian, and Ubuntu**. Each distribution has its own interface and features, but the underlying architecture is the same.

In this article I will be focusing on **Ubuntu** and how to install it.

---

## 💻 Installing Linux (Ubuntu)

There are different ways you can use Linux:

- **WSL (Windows Subsystem for Linux):** If you are running Windows, you can install WSL and start using Ubuntu without installing it separately.
- **Dual Boot:** Install Ubuntu alongside your current operating system.
- **Full Install:** Completely remove the current operating system and base your system entirely on Linux.

Here is a short overview of how you can install Linux through **dual-boot**:

### Step 1: Backing Up

First you need to backup all your data because dual booting requires shrinking your disk, which risks data loss.

### Step 2: Download Ubuntu ISO

1. Go to the [Ubuntu official website](https://ubuntu.com/download)
2. Click **Download** for the latest LTS (Long Term Support) version
3. Save the `.iso` file to a known location

### Step 3: Create a Bootable USB Using Rufus

**Requirements:** USB drive with at least 8 GB free

**Steps:**

1. Download and run **Rufus**
2. Insert your USB drive
3. Under **Device**, select your USB drive
4. Click **SELECT** and choose the Ubuntu `.iso` file you downloaded
5. Under **Partition scheme**, select:
   - **GPT** for UEFI systems (most modern PCs)
   - **MBR** for older BIOS systems
   - *(To check your system type: Press `Win + R`, type `msinfo32`, and look at BIOS Mode)*
6. **File System:** Leave as **FAT32**
7. Click **START**
8. A prompt will appear asking to write in **ISO Image mode** or **DD mode**. Choose **ISO Image mode**
9. Click **OK** to begin. Wait until Rufus finishes

✅ Your bootable USB is ready!

### Step 4: Shrink Your Windows Partition

You need free space for Ubuntu.

1. Press `Win + X` and select **Disk Management**
2. Find your main Windows drive (usually `C:`)
3. Right-click it and select **Shrink Volume**
4. Enter the amount of space to shrink (at least **25–50 GB** recommended for Ubuntu)
5. Click **Shrink**
6. You'll see **Unallocated space** on your drive. Leave it as is; Ubuntu will use it during installation

### Step 5: Boot from the USB

1. Insert the bootable USB and restart your PC
2. Press the **Boot Menu key** (commonly `F12`, `F10`, `Esc`, or `Del`) when the manufacturer logo appears
3. Select your USB drive from the list
4. The Ubuntu boot menu will appear. Choose **Install Ubuntu**

### Step 6: Choose Installation Type

- Select **Install Ubuntu alongside Windows Boot Manager** if this option appears
- If it doesn't, select **Something else** (manual partitioning)

**Manual steps for "Something else":**

1. Click the **unallocated space**
2. Click **+** to create a new partition:
   - **Size:** 25–50 GB (or more)
   - **Type:** Primary
   - **Location:** Beginning of this space
   - **Use as:** Ext4 journaling file system
   - **Mount point:** `/`

### Step 7: Select Bootloader Location

Usually, leave it as the default, which is the main drive (`/dev/sda`).

### Step 8: Install Ubuntu

1. The installer will copy files and install Ubuntu
2. Wait 10–20 minutes depending on your system and internet speed
3. Once complete, click **Restart Now**
4. Remove the USB when prompted

### Step 9: Booting Into Ubuntu or Windows

When the PC restarts, you'll see the **GRUB menu**.

Use arrow keys to select:
- **Ubuntu** to boot into Ubuntu
- **Windows Boot Manager** to boot into Windows

And by following these steps, you should have Ubuntu running on your system!

---

## ⚡ Core Commands

The main power of Linux lies in its **terminal commands**. Once you get familiar with these commands, you can get things done much faster compared to other operating systems.

### Working With Files and Directories

```bash
pwd                    # Show current working directory
ls                     # List files in current directory
touch hello.txt        # Create a file named hello.txt
head hello.csv         # Show first 10 lines of hello.csv
tail hello.csv         # Show last 10 lines of hello.csv
wc hello.txt           # Count words in hello.txt
grep setosa hello.txt  # Search for 'setosa' in hello.txt
```

### Combining Commands

You can combine different commands using the `|` (pipe) character.

**Example:**

```bash
cat iris.csv | grep Setosa | wc -l
```

This will give you the number of lines in the CSV containing the word "Setosa".

---

## 📦 Installing Software and Managing Packages

```bash
sudo apt update                    # Update all installed packages
sudo apt install <package-name>    # Install a specific package
wget <URL>                         # Download files from a URL
unzip <filename.zip>              # Unzip a compressed file
```

---

## 🔐 Connect to a Remote Server

```bash
ssh <username>@<server-ip>        # Connect to a remote server via SSH
sudo apt install openssh-server   # Install OpenSSH server to allow SSH access
```

---

## 🔍 Process Management

```bash
ps aux | grep <process-name>      # Search for a specific running process
```

---

## 🎯 Conclusion

Getting started with Linux may look very difficult at first, but as you get familiar with the Linux environment, you'll realize that it is a very powerful system which teaches you a lot as a developer and is really fast and secure.

---

**Happy Linux Journey! 🐧🚀**