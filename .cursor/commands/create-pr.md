# Open a PR

- Check that I'm in a branch other than `main`, `staging` or `dev`. If not, bail and explain.
- DO NOT create a new branch, use existing one
- Check the diff between my branch and the base branch (usually `dev`)
- If there's unstaged or staged work that hasn't been commited, commit all the relevant code first
(Use `gh` in case it's installed)
- Write up a quick PR description in the following format
<TLDR> (no more than 2 sentences)

<Description>
- 1~3 bullet points explaining what's changing

- Always use semantic convention as github title. For instance `docs(AT-737): multiple cms-es guide`, `feat(AT-712): add typedApiClient`. Ticket number should be present in the branch name, if not - skip it
- Always paste the link to the PR in your response so I can click it easily
- Prepend GIT_EDITOR=true to all git commands you run, so you can avoid getting blocked as you execute commands