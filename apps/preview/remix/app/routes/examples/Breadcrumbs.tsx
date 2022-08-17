import Breadcrumbs from "../../output/blocks/Breadcrumbs.lite";

function Icon() {
  return (
    <a
      href="/"
      className="leading-5 rounded-sm whitespace-nowrap hover:underline active:font-medium
          active:text-gray-900 active:no-underline outline-violet"
      style={{ outline: "none" }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-gray-500 hover:fill-primary-600 active:fill-gray-900"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.41083 1.91107C9.73626 1.58563 10.2639 1.58563 10.5893 1.91107L18.0893 9.41107C18.4148 9.73651 18.4148 10.2641 18.0893 10.5896C17.7639 10.915 17.2363 10.915 16.9108 10.5896L16.6667 10.3455V16.667C16.6667 17.5875 15.9206 18.3337 15.0001 18.3337H5.00008C4.07961 18.3337 3.33341 17.5875 3.33341 16.667V10.3455L3.08934 10.5896C2.7639 10.915 2.23626 10.915 1.91083 10.5896C1.58539 10.2641 1.58539 9.73651 1.91083 9.41107L9.41083 1.91107ZM5.00008 8.67884V16.667H7.50008V13.3337C7.50008 12.4132 8.24627 11.667 9.16675 11.667H10.8334C11.7539 11.667 12.5001 12.4132 12.5001 13.3337V16.667H15.0001V8.67884L10.0001 3.67884L5.00008 8.67884ZM10.8334 16.667V13.3337H9.16675V16.667H10.8334Z"
        ></path>
      </svg>
    </a>
  );
}

export default function ExampleBreadcrumbs() {
  return (
    <div className="ml-4 mt-4">
      <Breadcrumbs
        breadcrumbs={[
          { name: "Page 1", link: "/page1" },
          { name: "Page 2", link: "/page1" },
          { name: "Page 3", link: "/page1" },
          { name: "Page 4", link: "/page1" },
          { name: "Page 5", link: "/page1" },
          { name: "Page 6", link: "/page1" },
        ]}
      />
      <br />
      <Breadcrumbs
        withIcon={true}
        breadcrumbs={[
          { name: "Page 2", link: "/page1" },
          { name: "Page 3", link: "/page1" },
          { name: "Page 4", link: "/page1" },
          { name: "Page 5", link: "/page1" },
          { name: "Page 6", link: "/page1" },
        ]}
        slotIcon={<Icon />}
      />
    </div>
  );
}
