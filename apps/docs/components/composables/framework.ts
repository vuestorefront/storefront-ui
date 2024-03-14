type Framework = {
  name: 'vue' | 'react' | 'qwik';
  icon: string;
  link?: string;
};

export function useFramework() {
  const frameworks: Framework[] = [
    {
      name: 'vue',
      icon: 'logos:vue',
    },
    {
      name: 'react',
      icon: 'logos:react',
    },
    {
      name: 'qwik',
      icon: 'logos:qwik-icon',
      link: 'https://qwik-storefront-ui.pages.dev',
    },
  ];

  const framework = useState('framework', () => 'vue');

  const route = useRoute();
  const router = useRouter();
  const setFramework = (name: string) => {
    const previous = framework.value;
    if (name !== 'qwik') {
      framework.value = name;
      if (route.path.includes(previous)) {
        router.push(route.path.replace(previous, framework.value));
      }
    }
  };

  const selectedFramework = computed(() => frameworks.find((f) => f.name === framework.value) ?? frameworks[0]);

  watch(
    () => route.fullPath,
    (path) => {
      const foundFramework = frameworks.find((f) => route.path.includes(f.name.toLowerCase()));
      if (foundFramework) {
        framework.value = foundFramework.name;
      }
    },
    {
      immediate: true,
    },
  );

  return {
    framework,
    frameworks,
    setFramework,
    selectedFramework,
  };
}
