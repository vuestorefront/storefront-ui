export const createControlsOptions = <TConfig extends {}>(config: TConfig, defaultOption?: keyof TConfig) => {
  const controlsOptions = Object.keys(config) as (keyof TConfig)[];

  const getValue = <TLabel extends keyof TConfig>(label: TLabel) => config[label];

  return {
    controlsOptions,
    defaultOption: defaultOption || controlsOptions[0],
    getValue,
  };
};
