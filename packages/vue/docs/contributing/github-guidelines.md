# Working with Github

![The basic Github flow for StorefronUI contributors](https://res.cloudinary.com/mayashavin/image/upload/v1567367465/StorefrontUI/GihubFlow.png)

## 1. Set up Github account

StorefrontUI is a Github repository. You will need to [have Github account](https://github.com/signup/free) in order to start contributing to our project.

:::tip
If you already have an account, we recommend you to add [Two-Factor Authentication (2FA)](https://help.github.com/en/articles/configuring-two-factor-authentication) to enable security over your account. 
:::

## 2. Fork StorefrontUI Repository

Forking a repository will copy the current state (**at the moment of forking**) into your Github account's respository list. During contributing to StorefrontUI, this is **required** for you to keep track your issue branches and code.

::: warning
Forked repository is **not** updated automatically when the original one changes, you will need to [**keep it updated manually**](#keep-your- forked-repo-updated) once in a while.
:::

### Fork the repo

* Navigate to StorefrontUI repository: [https://github.com/DivanteLtd/storefront-ui](https://github.com/DivanteLtd/storefront-ui)
* Select `Fork` option in the top right corner.

![For your own copy of StorefrontUI](https://res.cloudinary.com/mayashavin/image/upload/v1567368134/StorefrontUI/Screen_Shot_2019-09-01_at_23.00.52.png)

* Upon completion, you can access your forked repository through your Github account. It will be listed under your repository list. Or you can go directly via URL: 

```
https://github.com/username/storefront-ui
```

in which `username` is your Github username.

### Clone it to your local machine

Once done with forking, it's time to set up your local environment in order to start working **locally**. You need to clone your forked repository on your local development machine. There are two ways to do it:

#### Using SSH 

This is the most common and secured way. You can copy the SSH link by clicking on the right green button `Clone or download`. The link will be in the format: 
```
git@github.com:username/storefront-ui.git
```

![Clone or download a repo](https://res.cloudinary.com/mayashavin/image/upload/v1567370120/StorefrontUI/Screen_Shot_2019-09-01_at_23.27.13.png)

Then in the terminal, simply use the following command:

```bash
git clone git@github.com:username/storefront-ui.git
```

:::tip
By default this will clone the repo into `storefront-ui` folder in the current directory. If you wish to define a different folder name, you can pass the desired name as an optional parameter in the clone command.

```bash
git clone git@github.com:username/storefront-ui.git <your-folder-name>
```
:::

#### Using HTTPS: 

In the same popover after clicking on the green button, click on `Use HTTPS` link on the top right corner. 

![Clone or Download repo using HTTPS](https://res.cloudinary.com/mayashavin/image/upload/v1567370711/StorefrontUI/Screen_Shot_2019-09-01_at_23.43.01.png)

The HTTPS link will be available for copying in the following format:

```
https://github.com/username/storefront-ui.git
```

The next steps to clone into local machine are **the same** as above, with the HTTPS link in place of the SSH one.

:::tip
More information: [https://help.github.com/en/articles/fork-a-repo](https://help.github.com/en/articles/fork-a-repo)
:::

### Keep your forked repo updated

All the code fixes and new features for StorefrontUI will be merged into the main repository. Hence, to keep your forked repo updated, you can:

#### Manual update with `fetch`

Simply run this command on the terminal within the folder containing the code of your forked repo:

```bash
git fetch git@github.com:DivanteLtd/storefront-ui.git 
```

This is simple solution without any setting required. However, in many cases, the second method is **preferable**.

#### Set the original repository as a second remote origin.

* **Remote origins:**

See what remote origins you currently have locally, run the following command in the terminal:

```bash
git remote -v
```

This should show your cloned repo as the original remote:

```bash
origin git@github.com:username/storefront-ui.git (fetch)
origin git@github.com:username/storefront-ui.git (push)
```

* **Adding upstream origin:**

We will add the original repository as another upstream remote by:

```bash
git remote add upstream git@github.com:DivanteLtd/storefront-ui.git
```

That's it! Running the command `git remote --v` will now yield:

```bash
origin git@github.com:username/storefront-ui.git (fetch)
origin git@github.com:username/storefront-ui.git (push)
upstream git@github.com:DivanteLtd/storefront-ui.git (fetch)
upstream git@github.com:DivanteLtd/storefront-ui.git (push)
```

* **Sync with the main repo:**

To fetch the latest from the main repo to your `master` branch, you can run:

```bash
git fetch upstream master
```

:::tip
More information: [https://help.github.com/en/articles/syncing-a-fork](https://help.github.com/en/articles/syncing-a-fork)
:::

## 3. Select a Github issue
### Select issue by its label

We know it's not easy to pick an issue that is most suitable to you to work with, especially when it comes to first-timer. Thus we came up with labelling system to help addressing this problem. Below are the main labels which are grouped by:

#### Difficulty level

<Labels groupByType="difficulty"/>

We recommend first-time contributor to select issues with label `Good first issue` to start. But it's entirely up to you.

::: tip ANY TROUBLE?
Feeling some issue's level **does not** match the label assigned? [Drop us a message in Discord](https://discord.gg/GS8hqFS) or leave a comment inside the issue.
:::

#### Type of the issue

<Labels groupByType="issue"/>

#### Status of the issue

<Labels groupByType="status"/>

::: tip 
You can review the **full list** of labels and the issues attached to them [on our Github labels](https://github.com/DivanteLtd/storefront-ui/labels) 
:::

**Notes**: 
* You can **filter** our Github issues according to a specific labels by clicking at column `Labels` and selecting the desired label from the dropdown list.

![Filter issues by click on column Labels](https://res.cloudinary.com/mayashavin/image/upload/v1567540808/StorefrontUI/filter_by_label.jpg)

* Make sure that issue is **not** assigned to any other contributor by checking the `Assignee` column is empty.

![Make sure it is not taken by anyone yet](https://res.cloudinary.com/mayashavin/image/upload/v1567541615/StorefrontUI/check_assignee.png)

or by checking the `Assignee section` on the right side inside the issue page.

![Check assignee inside issue page](https://res.cloudinary.com/mayashavin/image/upload/v1567542175/StorefrontUI/check_assignee_inside.png)


### Get assigned to selected issue

Once you found the issue you want to work and it's not yet assigned, let's get it assigned to you properly.

#### First time contribute to our codebase
If this is your first time in StorefrontUI codebase, you need to either:

* **make a comment** inside the issue page. In that comment, tag anyone in [our core team] by typing `@<select-a-core-team-member>` and ask to be assigned.

or

* **copy the link** to the issue and **drop it" inside [Discord server - #contributors](https://discord.gg/GS8hqFS) with a note that you'd like to take it. 

And we will make sure it happen.
*
#### Contributed to our codebase before

It'll be extremely easy. Inside the issue page, simply click on `assign yourself` in `Assignee section`, and 🎉you are assigned!

![Click on Assign to yourself link](https://res.cloudinary.com/mayashavin/image/upload/v1567543045/StorefrontUI/self_assign.jpg)

## 4. Create an issue branch



## 5. Create PR from branch

### Make a commit and push your branch

### Create Pull Request (PR)

### Code review

## Troubleshootings (FAQs and tips)

### Close issue through commit message

You can trigger closing the issue automatically once the PR (Pull Request) is merged to master. All you need to do is to ensure there will be a commit with message in the following format:

```
Fixes <issue number>
``` 

More information: [https://github.blog/2013-01-22-closing-issues-via-commit-messages/](https://github.blog/2013-01-22-closing-issues-via-commit-messages/)

### Rename a branch locally and remotely

To rename your branch and make sure your repo is synced, only two steps are required:

* **Rename locally** by using 

```bash
$ git branch -m <old-branch-name> <new-branch-name>
```
in which, `-m` flag stands for `--move` command.

:::warning BE CAREFUL!
A capitalized `-M` flag will indicate `--move` with `--force` flag enabled to "force" the change". This will allow you to rename **even if the name already exists in your repository**.
:::

If you want to rename the branch that is currently checked out, just omit the `<old-branch-name>` option, which looks like this:

```bash
$ git branch -m <new-branch-name>
```

* **Rename remotely**
Once the local branch has been renamed, just run the below command:

```bash
$ git push origin :<old-branch-name> <new-branch-name>
```

Behind the back, it actually does the followings:
* **Delete the remote branch** that is to be renamed
* **Push** the new branch to the remote repo
* **Switch** to the new branch
* **Reset the upstream** reference for the renamed branch

### FAQs
Blah blah