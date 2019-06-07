workflow "Test & Release" {
  on = "push"
  resolves = ["npx semantic-release"]
}

action "npm ci" {
  uses = "docker://node:alpine"
  runs = "npm"
  args = "ci"
}

action "npm test" {
  needs = "npm ci"
  uses = "docker://node:alpine"
  runs = "npm"
  args = "test"
}

action "filter: master branch" {
  needs = "npm test"
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "npx semantic-release" {
  needs = "filter: master branch"
  uses = "docker://timbru31/node-alpine-git"
  runs = "npx"
  args = "semantic-release"
  secrets = ["GH_TOKEN", "NPM_TOKEN"]
}
