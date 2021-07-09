/**
 * This is a convenience function that wraps the story in a function.
 * It can be used to set aditional parameters in CSF stories.
 * For MDX stories, params much be set in the params() function.
 */
export const story = (StoryComponent) => {
  const storyExport = () => StoryComponent;

  return storyExport();
};

export const params = (StoryComponent) => {
  const storyParams = {
		source: StoryComponent.source,
		docs: {
			inlineStories: true,
			source: {
				code: StoryComponent.source,
			},
		},
		controls: {
			disable: true,
		},
		actions: {
			disable: true,
		},
		a11y: {
			disable: true,
		},
		storysource: {
			disable: true,
		},
	};

  return storyParams;
};
