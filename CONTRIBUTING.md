
# Contribution rules

### How to contribute

1. Read [component composition rules](./docs/component-rules.md) and [how to work with our Figma designs](https://github.com/DivanteLtd/storefront-ui/blob/master/docs/working-with-designs.md).
2. Pick an issue from "to-do" board [here](https://github.com/DivanteLtd/storefront-ui/projects/1) and read the [tutorial](https://github.com/DivanteLtd/storefront-ui/blob/master/docs/creating-new-component.md). Write in the issue comment that you want to pick it if you can't assign yourself. **Please stay assigned to one issue at a time to not block others**
3. Propose a Pull Request (see Git Flow paragraph below to best handle feature and hotfix branches) with **`Vue beta` set as project field** containing issue number and component name.
4. Wait for review and adjust your PR according to it.
5. Congrats! Your PR should now me merged in!


If you can't handle some parts of the issue feel free to ask in the comment. It's absolutely OK if you can only handle styling/tests/whatever. 

## Git Flow

The stable releases and tags are held by the master branch.  

The develop branch is always aligned with master and can be ahead due to new features released on 'staging' but yet not released on master (normally releases on master are scheduled for specific time intervals).

To work on a new task which is a feature implementation your branch must start from develop and your PR must ask to merge again on develop when the task is over. Please ensure that the correct branches are properly set while closing your PR.

## How to handle hotfix?