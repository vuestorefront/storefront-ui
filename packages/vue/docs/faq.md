
## FAQ [WIP]

Currently we are in the process of collecting your frequently asked questions so we can write all of them here for everyone that are interested. 

If you have some questions that someone would appreciate of its answer - please contact [with us](meet-the-team.md) :)


:::tip I decided to use deprecated features for now. Is it possible to turn off the warnings? 
Yes! Deprecation warning will show only in development mode and you may find some options to turn off this warnings also in development mode by passing your own environmental variable:
1. Create a file in the root folder `.env`
2. Add variable that we use to detect your decision about turning off deprecation warnings:
`VUE_APP_NO_DEPRECATED_WARNINGS=no-deprecated-warnings`
3. Don't forget to restart serve/dev mode if it is currently running
4. Clear cache if needed

Be sure you are using vue-cli version 3 or above

5. And it's done!
:::