import { join } from "path";

export default function () {
  this.nuxt.hook("components:dirs", (dirs) => {
    dirs.push({
      path: join(__dirname, "src/components"),
    });
  });
}
