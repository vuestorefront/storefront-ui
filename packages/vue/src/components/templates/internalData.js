export const countries = [
  "Austria",
  "Azerbaijan",
  "Belarus",
  "Belgium",
  "Bosnia and Herzegovina",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Georgia",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Kosovo",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Malta",
  "Moldova",
  "Monaco",
  "Montenegro",
  "The Netherlands",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "Russia",
  "San Marino",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Turkey",
  "Ukraine",
  "United Kingdom",
  "Vatican City",
]

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export const years = ["2020", "2021", "2022", "2025"]

export const paymentMethods = [
  {
    label: "Visa Debit",
    value: "debit",
  },
  {
    label: "MasterCard",
    value: "mastercard",
  },
  {
    label: "Visa Electron",
    value: "electron",
  },
  {
    label: "Cash on delivery",
    value: "cash",
  },
  {
    label: "Check",
    value: "check",
  },
]

export const shippingMethodsData = [
  {
    isOpen: false,
    price: "Free",
    delivery: "Delivery from 3 to 7 business days",
    label: "Pickup in the store",
    value: "store",
    description:
      "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
  },
  {
    isOpen: false,
    price: "$9.90",
    delivery: "Delivery from 4 to 6 business days",
    label: "Delivery to home",
    value: "home",
    description:
      "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
  },
  {
    isOpen: false,
    price: "$9.90",
    delivery: "Delivery from 4 to 6 business days",
    label: "Paczkomaty InPost",
    value: "inpost",
    description:
      "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
  },
  {
    isOpen: false,
    price: "$11.00",
    delivery: "Delivery within 48 hours",
    label: "48 hours coffee",
    value: "coffee",
    description:
      "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
  },
  {
    isOpen: false,
    price: "$14.00",
    delivery: "Delivery within 24 hours",
    label: "Urgent 24h",
    value: "urgent",
    description:
      "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
  },
]

export const accountData = {
  firstName: "John",
  lastName: "Dog",
  email: "johndog@email.com",
  password: "a*23Et",
  shipping: [
    {
      firstName: "John",
      lastName: "Dog",
      streetName: "Sezame Street",
      apartment: "24/193A",
      city: "Wroclaw",
      state: "Lower Silesia",
      zipCode: "53-540",
      country: "Poland",
      phoneNumber: "(00)560 123 456",
    },
    {
      firstName: "John",
      lastName: "Dog",
      streetName: "Sezame Street",
      apartment: "20/193A",
      city: "Wroclaw",
      state: "Lower Silesia",
      zipCode: "53-603",
      country: "Poland",
      phoneNumber: "(00)560 123 456",
    },
  ],
  orders: [
    ["#35765", "4th Nov, 2019", "Visa card", "$12.00", "In process"],
    ["#35766", "4th Nov, 2019", "Paypal", "$12.00", "Finalised"],
    ["#35768", "4th Nov, 2019", "Mastercard", "$12.00", "Finalised"],
    ["#35769", "4th Nov, 2019", "Paypal", "$12.00", "Finalised"],
  ],
}
