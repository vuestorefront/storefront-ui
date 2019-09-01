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

That's it! Running the command `git remote --v` will yeild:

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

## 4. Create an issue branch

## 5. Create PR from branch