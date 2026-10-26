import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [],
  framework: "@storybook/react-vite",
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractValuesFromUnion: true,
      shouldRemoveUndefinedFromOptional: true,
      EXPERIMENTAL_useProjectService: true,
    },
  },
};
export default config;
