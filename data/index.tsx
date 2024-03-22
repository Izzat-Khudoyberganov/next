import { Icons } from '~/assets/icons';
import { brandDataI, navDataI, productDataI } from '~/types';

import img_1 from "~/assets/image/chair.png"
import img_2 from "~/assets/image/chair-2.png"
import img_3 from "~/assets/image/chair-3.png"
import img_4 from "~/assets/image/chair-4.png"

export const navData: navDataI[] = [
  {
    id: 0,
    text: 'Plant pots',
    href: '/about',
  },
  {
    id: 1,
    text: 'Ceramics',
    href: '/about',
  },
  {
    id: 2,
    text: 'Tables',
    href: '/about',
  },
  {
    id: 3,
    text: 'Chairs',
    href: '/about',
  },
  {
    id: 4,
    text: 'Crockery',
    href: '/about',
  },
  {
    id: 5,
    text: 'Tableware',
    href: '/about',
  },
  {
    id: 6,
    text: 'Cutlery',
    href: '/about',
  },
];

export const brandData: brandDataI[] = [
  {
    id: 0,
    icon: <Icons.deliveryIcon/>,
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard"
  },
  {
    id: 1,
    icon: <Icons.checkIcon/>,
    title: "Made by true artisans",
    description: "Handmade crafted goods made with real passion and craftmanship"
  },
  {
    id: 2,
    icon: <Icons.priceIcon/>,
    title: "Unbeatable prices",
    description: "For our materials and quality you won’t find better prices anywhere"
  },
  {
    id: 3,
    icon: <Icons.treeIcon/>,
    title: "Recycled packaging",
    description: "We use 100% recycled to ensure our footprint is more manageable"
  },
]

export const productData: productDataI[] = [
  {
    id: 0,
    image: img_1,
    title: "The Dandy chair",
    price: 250
  },
  {
    id: 1,
    image: img_2,
    title: "Rustic Vase Set",
    price: 155
  },
  {
    id: 2,
    image: img_3,
    title: "The Silky Vase",
    price: 125
  },
  {
    id: 3,
    image: img_4,
    title: "The Lucy Lamp",
    price: 399
  }
]