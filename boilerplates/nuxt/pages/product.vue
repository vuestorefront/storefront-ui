<template>
  <div>
    <!-- <BreadcrumbsBase :breadcrumbs="breadcrumbs" class="px-4 my-4" /> -->
    <div class="large:grid large:grid-cols-[minmax(615px,_1fr)_minmax(315px,_613px)]">
      <GalleryBase :gallery-images="galleryImages" class="px-4" />
      <div class="p-4 bg-white border-gray-100 rounded-md justify-self-start medium:p-6 large:p-4 large:mx-4 extra-large:p-6 shadow-large large:sticky large:self-start large:top-0">
        <TagIconLeft class="hidden mb-4 large:inline-flex">
          {{ productSale }}
        </TagIconLeft>
        <h1 class="mb-1 text-lg font-bold leading-6 text-gray-900">
          {{ productName }}
        </h1>
        <span class="mr-2 text-3xl font-bold font-body text-secondary-700">{{ price.new }}</span>
        <span class="text-base font-normal text-gray-500 line-through font-body">{{ price.old }}</span>
        <div class="flex items-center mt-1">
          <RatingBase :value="productRating.score" :max="5" :reviews="productRating.reviews" />
          <a href="#customer-reviews" class="block ml-2 text-xs font-normal leading-4 text-gray-500 underline font-body">
            {{ productRating.reviews }} reviews
          </a>
        </div>
        <ul class="my-4">
          <li v-for="(option, key) in productOptions" :key="`${option}-${key}`">
            <span class="text-sm leading-5 text-gray-900 font-body">
              {{ option }}
            </span>
          </li>
        </ul>
        <DividerBase class="my-4" />
        <AddToCart
          :product-quantity="quantity"
          :quantity-in-stock="quantityInStock"
          :min-quantity="minQuantity"
          :disabled="quantityInStock === 0"
        />
        <div class="flex justify-center mt-4 2-extra-large:mt-9">
          <ButtonBase
            type="tertiary"
            size="small"
            class="mr-4"
          >
            <svg
              class="mr-2"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1673 3.33366H12.834C12.5007 2.33366 11.584 1.66699 10.5007 1.66699C9.41732 1.66699 8.50065 2.33366 8.16732 3.33366H3.83398C3.33398 3.33366 3.00065 3.66699 3.00065 4.16699C3.00065 4.66699 3.33398 5.00033 3.83398 5.00033H8.16732C8.50065 6.00033 9.41732 6.66699 10.5007 6.66699C11.584 6.66699 12.5007 6.00033 12.834 5.00033H17.1673C17.6673 5.00033 18.0006 4.66699 18.0006 4.16699C18.0006 3.66699 17.6673 3.33366 17.1673 3.33366ZM10.5007 5.00033C10.0006 5.00033 9.66732 4.66699 9.66732 4.16699C9.66732 3.66699 10.0006 3.33366 10.5007 3.33366C11.0007 3.33366 11.334 3.66699 11.334 4.16699C11.334 4.66699 11.0007 5.00033 10.5007 5.00033Z" fill="#02BB4D" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.53517 6.5276C6.36306 6.10782 5.95434 5.83366 5.50065 5.83366C5.04696 5.83366 4.63825 6.10782 4.46614 6.5276L1.33398 14.167C1.33398 16.5003 3.16732 18.3337 5.50065 18.3337C7.83398 18.3337 9.66732 16.5003 9.66732 14.167L6.53517 6.5276ZM3.00065 14.167L5.50065 7.50033L8.00065 14.167H3.00065Z" fill="#02BB4D" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3719 6.57211C14.5503 6.12611 14.9823 5.83366 15.4627 5.83366C15.9393 5.83366 16.3687 6.12171 16.5496 6.56275L19.6673 14.167C19.6673 16.5003 17.834 18.3337 15.5006 18.3337C13.1673 18.3337 11.334 16.5003 11.334 14.167L14.3719 6.57211ZM15.5006 7.50033L13.0007 14.167H18.0006L15.5006 7.50033Z" fill="#02BB4D" />
            </svg>

            Compare
          </ButtonBase>
          <ButtonBase
            type="tertiary"
            size="small"
          >
            <svg
              class="mr-2"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8861 4.15855C14.6861 2.65855 11.9694 3.35855 10.5028 5.07522C9.03612 3.35855 6.31945 2.65022 4.11945 4.15855C2.95278 4.95855 2.21945 6.30855 2.16945 7.73355C2.05278 10.9669 4.91945 13.5586 9.29445 17.5336L9.37778 17.6086C10.0111 18.1836 10.9861 18.1836 11.6194 17.6002L11.7111 17.5169C16.0861 13.5502 18.9445 10.9586 18.8361 7.72522C18.7861 6.30855 18.0528 4.95855 16.8861 4.15855ZM10.5861 16.2919L10.5028 16.3752L10.4194 16.2919C6.45278 12.7002 3.83612 10.3252 3.83612 7.91689C3.83612 6.25022 5.08612 5.00022 6.75278 5.00022C8.03612 5.00022 9.28612 5.82522 9.72778 6.96689H11.2861C11.7194 5.82522 12.9694 5.00022 14.2528 5.00022C15.9194 5.00022 17.1694 6.25022 17.1694 7.91689C17.1694 10.3252 14.5528 12.7002 10.5861 16.2919Z" fill="#02BB4D" />
            </svg>

            Add to list
          </ButtonBase>
        </div>
        <DividerBase class="my-4" />
        <ul>
          <li class="flex pb-4">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.99389 10.6607C3.77286 10.6607 3.56092 10.5729 3.40464 10.4167C3.24834 10.2604 3.16055 10.0484 3.16055 9.82739V3.7774C3.17024 3.28056 3.37008 2.80634 3.7189 2.4524C4.07239 2.10599 4.54898 1.91416 5.0439 1.91907H8.16218L8.16869 1.91904H11.502L11.5085 1.91907H14.6439C14.8853 1.91625 15.1247 1.96201 15.3481 2.05364C15.5714 2.14527 15.774 2.28087 15.9439 2.4524C16.2924 2.79975 16.4925 3.26877 16.5022 3.76073V8.17738C16.5022 8.39841 16.4144 8.61038 16.2581 8.76665C16.1019 8.92293 15.8899 9.01072 15.6689 9.01072C15.4479 9.01072 15.2359 8.92293 15.0796 8.76665C14.9234 8.61038 14.8356 8.39841 14.8356 8.17738V3.7774C14.831 3.72371 14.8074 3.67345 14.7689 3.63573C14.7633 3.62822 14.7569 3.62139 14.7498 3.61536C14.7441 3.61048 14.7379 3.60611 14.7314 3.60232C14.728 3.60038 14.7246 3.5986 14.7211 3.59698C14.7021 3.58824 14.6813 3.58437 14.6605 3.58573H12.3354V5.47738C12.3357 5.66783 12.2984 5.85647 12.2254 6.03241C12.1525 6.20834 12.0454 6.36807 11.9104 6.50238C11.7704 6.64332 11.6024 6.75323 11.4172 6.82502C11.232 6.89679 11.0337 6.92883 10.8354 6.91904H8.78535C8.40223 6.91904 8.03467 6.76742 7.76299 6.49729C7.4913 6.22716 7.33757 5.86049 7.33536 5.47738V3.58573H5.00221C4.97892 3.58375 4.9555 3.58724 4.9338 3.59592C4.92043 3.60127 4.90794 3.60851 4.8967 3.61736C4.88968 3.62288 4.88317 3.62902 4.87722 3.63573C4.83449 3.68147 4.80812 3.74008 4.80222 3.8024V9.82739C4.80232 10.0441 4.71797 10.2524 4.56706 10.408C4.41612 10.5636 4.21054 10.6542 3.99389 10.6607ZM9.00203 3.58571H10.6687V5.25238H9.00203V3.58571Z" fill="#71717A" />
              <path d="M13.3353 14.7941H9.41869C9.05045 14.7936 8.69176 14.6769 8.39368 14.4607C8.21772 14.3374 8.06753 14.183 7.9498 14.0062L3.63561 13.744C3.61369 13.7397 3.59146 13.7375 3.56924 13.7375C3.54681 13.7375 3.52437 13.7396 3.50227 13.744C3.46736 13.7597 3.43821 13.786 3.41894 13.819C3.40737 13.8571 3.40737 13.8977 3.41894 13.9357C3.41128 13.9714 3.41128 14.0083 3.41894 14.044C3.42934 14.0718 3.44602 14.0968 3.46771 14.1171C3.48941 14.1373 3.5155 14.1523 3.54396 14.1607L10.6689 16.8357C10.9389 16.929 11.2324 16.929 11.5023 16.8357L16.9606 15.0107C17.1706 14.9411 17.3996 14.9577 17.5973 15.057C17.795 15.1562 17.9452 15.3299 18.0148 15.5399C18.0844 15.7498 18.0678 15.9788 17.9685 16.1765C17.8693 16.3743 17.6956 16.5244 17.4856 16.594L12.0273 18.4107C11.71 18.5283 11.374 18.5876 11.0356 18.5857C10.6837 18.5956 10.3332 18.539 10.0023 18.419L2.90227 15.744C2.45227 15.5791 2.08252 15.2481 1.86895 14.819C1.71939 14.5197 1.65047 14.1865 1.66896 13.8524C1.69187 13.5178 1.8041 13.1955 1.99394 12.919C2.17583 12.6376 2.43271 12.4124 2.73562 12.269C3.03688 12.1174 3.37484 12.0538 3.71061 12.0857L7.83898 12.3302C7.85103 12.304 7.86372 12.2781 7.87702 12.2524C7.98894 12.0338 8.14502 11.8409 8.33534 11.6857C8.52135 11.536 8.73734 11.428 8.96869 11.3691L13.0104 10.2524C13.5535 10.1067 14.1211 10.0755 14.677 10.1607L17.0853 10.5691C17.3064 10.6055 17.5038 10.7283 17.6343 10.9104C17.7648 11.0924 17.8176 11.3189 17.7812 11.5399C17.7447 11.7609 17.6219 11.9584 17.4399 12.0889C17.2578 12.2194 17.0314 12.2722 16.8104 12.2357L14.402 11.8357C14.0828 11.7814 13.7555 11.7985 13.4437 11.8857L9.39369 12.9774L9.33535 13.0357L9.41869 13.1274H13.3353C13.5564 13.1274 13.7683 13.2152 13.9246 13.3715C14.0809 13.5278 14.1687 13.7397 14.1687 13.9607C14.1687 14.1817 14.0809 14.3937 13.9246 14.55C13.7683 14.7063 13.5564 14.7941 13.3353 14.7941Z" fill="#71717A" />
            </svg>
            <div class="ml-2 text-sm font-normal text-gray-900 font-body">
              <span class="block">
                Free shipping, arrives by Thu, Apr 7 Want it faster?
              </span>
              <a class="underline" href="/">Add an address</a>
              <span>to see options</span>
            </div>
          </li>
          <li class="flex pb-4">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99968 1.91895C9.69894 1.91895 9.40281 1.99293 9.1374 2.13438L2.63719 5.60116C2.34393 5.75743 2.09866 5.99047 1.92759 6.27536C1.75643 6.56041 1.66602 6.88664 1.66602 7.21912L1.66613 17.7523C1.66613 18.2125 2.03922 18.5856 2.49946 18.5856C2.9597 18.5856 3.33279 18.2125 3.33279 17.7523L3.33268 7.21912C3.33268 7.1889 3.3409 7.15924 3.35646 7.13333C3.37202 7.10741 3.39483 7.08596 3.42151 7.07175L9.92151 3.60508C9.94558 3.5923 9.97242 3.58561 9.99968 3.58561C10.027 3.58561 10.054 3.59235 10.0781 3.6052L16.5779 7.07175C16.6045 7.08597 16.6268 7.10716 16.6423 7.13305C16.6578 7.15896 16.666 7.18891 16.666 7.21912L16.6661 17.7523C16.6661 18.2125 17.0392 18.5856 17.4995 18.5856C17.9597 18.5856 18.3328 18.2125 18.3328 17.7523L18.3327 7.21912C18.3327 6.88686 18.2425 6.56083 18.0716 6.27587C17.9007 5.99084 17.6554 5.75759 17.3622 5.60116L10.862 2.13438C10.5966 1.99293 10.3004 1.91895 9.99968 1.91895Z" fill="#71717A" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.49945 8.58561C7.03921 8.58561 6.66611 8.95871 6.66611 9.41895V12.7523H5.83278C5.37254 12.7523 4.99945 13.1254 4.99945 13.5856V17.7523C4.99945 18.2125 5.37254 18.5856 5.83278 18.5856H14.1661C14.6264 18.5856 14.9995 18.2125 14.9995 17.7523V13.5856C14.9995 13.1254 14.6264 12.7523 14.1661 12.7523H13.3328V9.41895C13.3328 8.95871 12.9597 8.58561 12.4994 8.58561H7.49945ZM11.6661 12.7523V10.2523H8.33278V12.7523H11.6661ZM6.66611 14.4189V16.9189H9.16611V14.4189H6.66611ZM13.3328 16.9189H10.8328V14.4189H13.3328V16.9189Z" fill="#71717A" />
            </svg>
            <div class="ml-2 text-sm font-normal text-gray-900 font-body">
              <span class="block">
                Pickup not available at Supercenter.
              </span>
              <a class="underline" href="/">Check availability nearby</a>
            </div>
          </li>
          <li class="flex">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0008 13.585C10.9175 13.585 11.6675 12.835 11.6675 11.9183C11.6675 11.0016 10.9175 10.2516 10.0008 10.2516C9.08413 10.2516 8.33413 11.0016 8.33413 11.9183C8.33413 12.835 9.08413 13.585 10.0008 13.585ZM14.1675 7.75163V5.25163C14.1675 2.95163 12.3008 1.08496 10.0008 1.08496C7.70079 1.08496 5.83413 2.95163 5.83413 5.25163V7.75163C4.22699 7.75163 24.6037 7.75163 14.1675 7.75163ZM7.41746 5.25163C7.41746 3.82663 8.57579 2.66829 10.0008 2.66829C11.4258 2.66829 12.5841 3.82663 12.5841 5.25163V7.75163H7.41746V5.25163Z" fill="#71717A" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33398 8.58496C3.33398 7.66449 4.08018 6.91829 5.00065 6.91829H15.0007C15.9211 6.91829 16.6673 7.66449 16.6673 8.58496V14.7021C16.6673 15.3688 16.27 15.9714 15.6572 16.234L10.6572 18.3769C10.2379 18.5566 9.76337 18.5566 9.34412 18.3769L4.34412 16.234C3.73131 15.9714 3.33398 15.3688 3.33398 14.7021V8.58496ZM5.41732 8.58496C5.1872 8.58496 5.00065 8.77151 5.00065 9.00163V14.4274C5.00065 14.5941 5.09998 14.7447 5.25318 14.8104L9.83652 16.7746C9.94133 16.8196 10.06 16.8196 10.1648 16.7746L14.7481 14.8104C14.9013 14.7447 15.0007 14.5941 15.0007 14.4274V9.00163C15.0007 8.77151 14.8141 8.58496 14.584 8.58496H5.41732Z" fill="#71717A" />
              <path d="M10.0008 13.585C10.9175 13.585 11.6675 12.835 11.6675 11.9183C11.6675 11.0016 10.9175 10.2516 10.0008 10.2516C9.08413 10.2516 8.33413 11.0016 8.33413 11.9183C8.33413 12.835 9.08413 13.585 10.0008 13.585ZM14.1675 7.75163V5.25163C14.1675 2.95163 12.3008 1.08496 10.0008 1.08496C7.70079 1.08496 5.83413 2.95163 5.83413 5.25163V7.75163C4.22699 7.75163 24.6037 7.75163 14.1675 7.75163ZM7.41746 5.25163C7.41746 3.82663 8.57579 2.66829 10.0008 2.66829C11.4258 2.66829 12.5841 3.82663 12.5841 5.25163V7.75163H7.41746V5.25163Z" fill="#71717A" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33398 8.58496C3.33398 7.66449 4.08018 6.91829 5.00065 6.91829H15.0007C15.9211 6.91829 16.6673 7.66449 16.6673 8.58496V14.7021C16.6673 15.3688 16.27 15.9714 15.6572 16.234L10.6572 18.3769C10.2379 18.5566 9.76337 18.5566 9.34412 18.3769L4.34412 16.234C3.73131 15.9714 3.33398 15.3688 3.33398 14.7021V8.58496ZM5.41732 8.58496C5.1872 8.58496 5.00065 8.77151 5.00065 9.00163V14.4274C5.00065 14.5941 5.09998 14.7447 5.25318 14.8104L9.83652 16.7746C9.94133 16.8196 10.06 16.8196 10.1648 16.7746L14.7481 14.8104C14.9013 14.7447 15.0007 14.5941 15.0007 14.4274V9.00163C15.0007 8.77151 14.8141 8.58496 14.584 8.58496H5.41732Z" fill="#71717A" />
            </svg>
            <div class="ml-2 text-sm font-normal text-gray-900 font-body">
              <span>
                Free 30-Day returns.
              </span>
              <a class="underline" aria-label="Check details for returns" href="/">Details</a>
            </div>
          </li>
        </ul>
      </div>
      <div id="shopping-options" class="px-4">
        <DividerBase class="my-4" />
        <div class="flex justify-between">
          <span class="block mb-2 text-base font-medium leading-6 text-gray-900 font-body">Size</span>
          <a class="text-sm font-normal leading-5 text-gray-500 underline font-body" href="/">Size chart</a>
        </div>
        <ChipsBase v-for="(size, i) in sizes" :key="`${size}-${i}`" :value="size" class="mr-2" />
        <SelectBase
          :options="selectOptions"
          label="Feature with long descriptions"
          class="w-full my-4 medium:w-80 large:w-96"
        />
        <span class="block mb-2 text-base font-medium leading-6 text-gray-900 font-body">Color</span>
        <ChipsBase v-for="(color, i) in colors" :key="`${color}-${i}`" :value="color" class="mr-2" />
        <DividerBase class="my-4" />
        <AccordionBase
          :expanded="openedAccordions.acc1"
          button-text="Product details"
          class="!w-full"
          @toggle="openedAccordions.acc1 = !openedAccordions.acc1"
        >
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not only five centuries, but  also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the  1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with  desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </span>
          <span class="block my-6">
            Why do we use it?
          </span>
          <ul class="list-disc list-inside">
            <li>It is a long established fact that a reader</li>
            <li>will be distracted by the readable</li>
            <li>content of a page when looking at its layout.</li>
            <li>The point of using Lorem Ipsum is that it has</li>
            <li>a more-or-less normal distribution of letters,</li>
            <li>as opposed to using 'Content here, content here', making it look like readable English.</li>
          </ul>
          <span class="block mt-6">
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </span>
          <ButtonBase
            type="tertiary"
            size="small"
            class="mt-4"
          >
            <span class="mr-2">See more</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.81937 8.99844C7.42967 8.60959 6.79864 8.60994 6.40937 8.99921C6.01979 9.38878 6.01979 10.0204 6.40937 10.41L10.9969 14.9975C11.3874 15.388 12.0206 15.388 12.4111 14.9975L16.9986 10.41C17.3882 10.0204 17.3882 9.38878 16.9986 8.99921C16.6093 8.60994 15.9783 8.60959 15.5886 8.99844L11.704 12.8746L7.81937 8.99844Z" fill="#02BB4D" />
              <path d="M7.81937 8.99844C7.42967 8.60959 6.79864 8.60994 6.40937 8.99921C6.01979 9.38878 6.01979 10.0204 6.40937 10.41L10.9969 14.9975C11.3874 15.388 12.0206 15.388 12.4111 14.9975L16.9986 10.41C17.3882 10.0204 17.3882 9.38878 16.9986 8.99921C16.6093 8.60994 15.9783 8.60959 15.5886 8.99844L11.704 12.8746L7.81937 8.99844Z" fill="#02BB4D" />
            </svg>
          </ButtonBase>
        </AccordionBase>
        <DividerBase class="my-4" />
        <AccordionBase
          :expanded="openedAccordions.acc2"
          button-text="Delivery and returns"
          class="mb-2"
          @toggle="openedAccordions.acc2 = !openedAccordions.acc2"
        >
          <table class="w-full mb-4 mt-2 rounded-md table-fixed border-hidden shadow-[0_0_0_1px_rgb(228,228,231,1)]">
            <tbody>
              <tr>
                <td class="py-2 pl-4">
                  Return within
                </td>
                <td class="py-2 pl-4">
                  30 days after item is delivered
                </td>
              </tr>
              <tr class="border border-t-gray-200">
                <td class="py-2 pl-4">
                  Returnable to store?
                </td>
                <td class="py-2 pl-4">
                  Yes
                </td>
              </tr>
            </tbody>
          </table>
          <span class="block">
            Most items sold & shipped can be returned for free, either to a store or by mail. We handle the delivery, returns and customer service for these items. Items purchased in store or items picked up or delivered from a store can only be returned to a store.
          </span>
          <ButtonBase
            type="tertiary"
            size="small"
            class="block mt-4"
          >
            <span class="mr-2">
              Learn more about returns
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.7054 5.70527C15.3158 5.31569 14.6842 5.31569 14.2946 5.70527C13.9053 6.09454 13.905 6.72557 14.2938 7.11527L18.17 10.9999L3 10.9999C2.44772 10.9999 2 11.4476 2 11.9999C2 12.5522 2.44772 12.9999 3 12.9999L18.17 12.9999L14.29 16.8799C13.8983 17.2716 13.8994 17.907 14.2925 18.2974C14.6837 18.6858 15.3152 18.6846 15.705 18.2949L21.2929 12.707C21.6834 12.3165 21.6834 11.6833 21.2929 11.2928L15.7054 5.70527Z" fill="#02BB4D" />
              <path d="M15.7054 5.70527C15.3158 5.31569 14.6842 5.31569 14.2946 5.70527C13.9053 6.09454 13.905 6.72557 14.2938 7.11527L18.17 10.9999L3 10.9999C2.44772 10.9999 2 11.4476 2 11.9999C2 12.5522 2.44772 12.9999 3 12.9999L18.17 12.9999L14.29 16.8799C13.8983 17.2716 13.8994 17.907 14.2925 18.2974C14.6837 18.6858 15.3152 18.6846 15.705 18.2949L21.2929 12.707C21.6834 12.3165 21.6834 11.6833 21.2929 11.2928L15.7054 5.70527Z" fill="#02BB4D" />
            </svg>
          </ButtonBase>
        </AccordionBase>
        <DividerBase class="my-4" />
        <AccordionBase
          id="customer-reviews"
          :expanded="openedAccordions.acc3"
          button-text="Customer reviews"
          class="my-4"
          @toggle="openedAccordions.acc3 = !openedAccordions.acc3"
        >
          <CustomerReview
            v-for="({title, value, time, user, verified, text}, i) in customerReviews"
            :key="`${title}-${i}`"
            :title="title"
            :value="value"
            :time="time"
            :user="user"
            :verified="verified"
            :text="text"
            class="mt-2 mb-4"
          />
          <ButtonBase
            type="tertiary"
            size="small"
            class="mt-2"
          >
            <span class="mr-2">See all reviews</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.7054 5.70429C15.3158 5.31472 14.6842 5.31472 14.2946 5.70429C13.9053 6.09356 13.905 6.72459 14.2938 7.11429L18.17 10.9989L3 10.9989C2.44772 10.9989 2 11.4466 2 11.9989C2 12.5512 2.44772 12.9989 3 12.9989L18.17 12.9989L14.29 16.8789C13.8983 17.2706 13.8994 17.9061 14.2925 18.2964C14.6837 18.6848 15.3152 18.6837 15.705 18.2939L21.2929 12.706C21.6834 12.3155 21.6834 11.6823 21.2929 11.2918L15.7054 5.70429Z" fill="#02BB4D" />
              <path d="M15.7054 5.70429C15.3158 5.31472 14.6842 5.31472 14.2946 5.70429C13.9053 6.09356 13.905 6.72459 14.2938 7.11429L18.17 10.9989L3 10.9989C2.44772 10.9989 2 11.4466 2 11.9989C2 12.5512 2.44772 12.9989 3 12.9989L18.17 12.9989L14.29 16.8789C13.8983 17.2706 13.8994 17.9061 14.2925 18.2964C14.6837 18.6848 15.3152 18.6837 15.705 18.2939L21.2929 12.706C21.6834 12.3155 21.6834 11.6823 21.2929 11.2918L15.7054 5.70429Z" fill="#02BB4D" />
            </svg>
          </ButtonBase>
        </AccordionBase>
        <DividerBase />
      </div>
    </div>
    <div class="mx-4 my-20 large:mx-6">
      <span class="block p-4 text-lg font-medium leading-7 font-body">
        Recommended with this product
      </span>
      <RecommendedProducts :recommended-products="productCards" />
    </div>
    <a
      href="#shopping-options"
      class="medium:hidden mb-20 inline-flex items-center justify-center rounded-md cursor-pointer font-body disabled:cursor-not-allowed fixed bottom-0 left-[50%] translate-x-[-50%] py-3 pl-2 pr-4 font-medium text-white uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 disabled:bg-gray-200 disabled:text-gray-500 disabled:opacity-50 shadow-base hover:shadow-medium disabled:shadow-none"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.7002 22C16.5956 22 15.7002 21.1046 15.7002 20C15.7002 18.8954 16.5956 18 17.7002 18C18.8048 18 19.7002 18.8954 19.7002 20C19.7002 21.1046 18.8048 22 17.7002 22Z" fill="white" />
        <path d="M9.7002 22C8.59563 22 7.7002 21.1046 7.7002 20C7.7002 18.8954 8.59563 18 9.7002 18C10.8048 18 11.7002 18.8954 11.7002 20C11.7002 21.1046 10.8048 22 9.7002 22Z" fill="white" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 3C1 2.44772 1.44772 2 2 2H4.30673C5.47087 2 6.48094 2.80352 6.74271 3.93785L6.98782 5H19.5788C21.2053 5 22.3987 6.52847 22.0042 8.10634L20.2542 15.1063C19.976 16.2193 18.976 17 17.8288 17H9.69327C8.52913 17 7.51906 16.1965 7.25729 15.0621L4.79393 4.38757C4.74157 4.1607 4.53956 4 4.30673 4H2C1.44772 4 1 3.55228 1 3ZM7.44936 7L9.20607 14.6124C9.25843 14.8393 9.46044 15 9.69327 15H17.8288C18.0583 15 18.2583 14.8439 18.3139 14.6213L20.0639 7.62127C20.1428 7.30569 19.9041 7 19.5788 7H7.44936Z" fill="white" />
      </svg>
      <span class="mx-2 text-base font-medium leading-6 text-white font-body">
        {{ price.new }}
      </span>
      <span class="text-xs font-normal leading-4 text-white line-through font-body">
        {{ price.old }}
      </span>
    </a>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api';
// import BreadcrumbsBase from '../components/Breadcrumbs/BreadcrumbsBase.vue';
import RatingBase from '../components/Rating/RatingBase.vue';
import DividerBase from '../components/Divider/DividerBase.vue';
import SelectBase from '../components/Select/SelectBase.vue';
import AccordionBase from '../components/Accordion/AccordionBase.vue';
import ButtonBase from '../components/Button/ButtonBase.vue';
import GalleryBase from '../components/GalleryBase.vue';
import RecommendedProducts from '../components/RecommendedProducts.vue';
import CustomerReview from '../components/CustomerReview.vue';
import TagIconLeft from '../components/Tag/TagIconLeft.vue';
import ChipsBase from '../components/Chips/ChipsBase.vue';
import AddToCart from '../components/AddToCart.vue';

export default {
  name: 'ProductPage',
  components: {
    // BreadcrumbsBase,
    RatingBase,
    DividerBase,
    SelectBase,
    AccordionBase,
    ButtonBase,
    GalleryBase,
    RecommendedProducts,
    AddToCart,
    CustomerReview,
    TagIconLeft,
    ChipsBase
  },
  setup() {
    const productName = 'Mini Foldable Drone with HD Camera FPV Wifi RC Quadcopter';
    const productSale = '-50%';
    const productRating = {
      score: 4.5,
      reviews: 123
    };
    const breadcrumbs = [
      { name: 'Home', link: '/' },
      { name: 'Electronics', link: '/' },
      { name: 'iPad & Tablets', link: '/' },
      { name: 'Apple iPad Accessories', link: '/' },
      { name: 'iPad Keyboards', link: '/' }
    ];
    const productOptions = [
      'HD Pictures & Videos and FPV Function',
      'Intelligent Voice Control',
      'Multiple Fun Flights',
      'Easy to Use',
      'Foldable Design & Double Flight Time'
    ];
    const selectOptions = [
      'option 1',
      'option 2',
      'option 3'
    ];
    const openedAccordions = ref({
      acc1: true,
      acc2: true,
      acc3: true
    });
    const price = {
      new: '$2,345.99',
      old: '$3,132.99'
    };
    const quantity = ref(0);
    const quantityInStock = ref(999);
    const minQuantity = ref(0);
    const colors = [
      'Navy',
      'Dark Blue',
      'Classic',
      'Light Blue',
      'Washed'
    ];
    const sizes = [
      'xs',
      's',
      'm',
      'l',
      'xl',
      '2xl',
      '3xl',
      '4xl'
    ];

    const productCards = [
      {
        image: 'product1',
        alt: 'product 1',
        reviews: 10,
        value: 3,
        label: 'The standard chunk of Lorem Ipsum',
        price: '$2,345.99'
      },
      {
        image: 'product2',
        alt: 'product 2',
        reviews: 10,
        value: 5,
        label: 'The standard chunk of Lorem Ipsum',
        price: '$2,345.99',
        oldPrice: '$3,545,89'
      },
      {
        image: 'product3',
        alt: 'product 3',
        reviews: 10,
        value: 3,
        label: 'The standard chunk of Lorem Ipsum',
        price: '$2,345.99'
      },
      {
        image: 'product4',
        alt: 'product 4',
        reviews: 10,
        value: 5,
        label: 'The standard chunk of Lorem Ipsum',
        price: '$2,345.99'
      },
      {
        image: 'product5',
        alt: 'product 5',
        reviews: 10,
        value: 5,
        label: 'The standard chunk of Lorem Ipsum',
        price: '$2,345.99',
        oldPrice: '$3,545,89'
      },
      {
        image: 'product1',
        alt: 'product 6',
        reviews: 10,
        value: 3,
        label: 'The standard chunk of Lorem Ipsum',
        price: '$2,345.99'
      },
      {
        image: 'product2',
        alt: 'product 7',
        reviews: 10,
        value: 5,
        label: 'The standard chunk of Lorem Ipsum',
        price: '$2,345.99',
        oldPrice: '$3,545,89'
      },
      {
        image: 'product3',
        alt: 'product 8',
        reviews: 10,
        value: 3,
        label: 'The standard chunk of Lorem Ipsum',
        price: '$2,345.99'
      },
      {
        image: 'product4',
        alt: 'product 9',
        reviews: 10,
        value: 5,
        label: 'The standard chunk of Lorem Ipsum',
        price: '$2,345.99'
      },
      {
        image: 'product5',
        alt: 'product 10',
        reviews: 10,
        value: 5,
        label: 'The standard chunk of Lorem Ipsum',
        price: '$2,345.99',
        oldPrice: '$3,545,89'
      }
    ];

    const galleryImages = [
      { src: 'thumb1', alt: 'Picture of sth 1' },
      { src: 'thumb2', alt: 'Picture of sth 2' },
      { src: 'thumb3', alt: 'Picture of sth 3' },
      { src: 'thumb4', alt: 'Picture of sth 4' }
    ];

    const customerReviews = [
      {
        title: 'A solid keyboard/trackpad combo, but expensive',
        value: 5,
        time: '16 hours ago',
        user: 'username',
        verified: true,
        text: "I originally got my iPad with the Smart Keyboard Folio, which was fine, but never really that useful. This Magic Keyboard is much better in pretty much every way. It has *much* better key switches that actually feel nice to type on, it's backlit making it much nicer to use in the dark, and the trackpad is really decent for its limited size. My only complaints are that it's quite heavy, and the material shows grime really easily (similar to the other Smart Keyboard Folio). I really wish Apple would make a version of this keyboard with either a leather or fabric exterior. If you pay the full $300 MSRP for this keyboard, it may not be worth that price, but at a discount this is a very useful and well-made accessory that has genuinely improve. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      },
      {
        title: 'Who knew a trackpad would be so...',
        value: 5,
        time: '16 days ago',
        user: 'username',
        verified: true,
        text: 'I never knew a trackpad on an iPad would be so useful. The typing experience and the backlit keys are an improvement from the older gen keyboard. The trackpad is smooth and it contains a lot of gestures that are used on the MacBooks. Overall this purchase was amazing and hopefully a newer version is released that allows for an easier writing experience for use with the Apple Pencil'
      },
      {
        title: 'Not worth the money',
        value: 5,
        time: '16 days ago',
        user: 'username',
        verified: true,
        text: "I have not even used it as it is too cumbersome. It seems to have been a waste of money for me since I am retired and can't go anywhere but home to use it. I don't need the keyboard at home as I have my Big Mac with the keyboard."
      },
      {
        value: 5,
        time: '16 days ago',
        user: 'username',
        verified: true,
        text: 'PERFECT!'
      },
      {
        title: 'Magic keyboard , Excellent',
        value: 5,
        time: '16 days ago',
        user: 'username',
        verified: true,
        text: 'Excellent'
      }
    ];

    return {
      productName,
      productSale,
      breadcrumbs,
      productOptions,
      selectOptions,
      openedAccordions,
      productCards,
      galleryImages,
      quantity,
      quantityInStock,
      minQuantity,
      customerReviews,
      colors,
      sizes,
      price,
      productRating
    };
  }
};
</script>
