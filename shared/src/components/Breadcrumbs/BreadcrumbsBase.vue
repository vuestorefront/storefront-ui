<template>
  <nav>
    <ol class="flex text-sm font-normal leading-none text-gray-500 font-body">
      <li class="leading-4">
        <span class="relative peer">
          <svg class="hover:fill-primary-600 fill-gray-500 active:font-medium active:text-gray-900 active:no-underline" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 14C10.8965 14 10 13.1035 10 12C10 10.8965 10.8965 10 12 10C13.1035 10 14 10.8965 14 12C14 13.1035 13.1035 14 12 14ZM16 12C16 13.1035 16.8965 14 18 14C19.1035 14 20 13.1035 20 12C20 10.8965 19.1035 10 18 10C16.8965 10 16 10.8965 16 12ZM8 12C8 10.8965 7.1035 10 6 10C4.8965 10 4 10.8965 4 12C4 13.1035 4.8965 14 6 14C7.1035 14 8 13.1035 8 12Z" />
          </svg>
        </span>
        <ul class="bg-white rounded-md shadow-md p-[16px] absolute top-100 left-0 flex-col hidden text-base text-gray-900 peer-hover:flex hover:flex">
          <li class="pb-3 leading-4 active:-mr-1 hover:text-primary-600 hover:underline active:font-medium active:text-gray-900 active:no-underline">Electronics</li>
          <li class="leading-4 hover:text-primary-600 hover:underline active:font-medium active:text-gray-900 active:no-underline">Home</li>
        </ul>
      </li>
      <li class="active:-mr-px leading-4 ml-6 before:content-['/'] before:hover:text-gray-500 before:active:text-gray-500 before:active:font-normal before:absolute before:-left-[16px] relative hover:text-primary-600 hover:underline active:font-medium active:text-gray-900 active:no-underline">icon</li>
      <li class="leading-4 ml-6 before:content-['/'] before:hover:text-gray-500 before:active:text-gray-500 before:active:font-normal before:absolute before:-left-[16px] relative hover:text-primary-600 hover:underline active:font-medium active:text-gray-900 active:no-underline">home</li>
    </ol>
  </nav>
</template>
<script>
export default {
  name: "BreadcrumbsBase",
}
</script>