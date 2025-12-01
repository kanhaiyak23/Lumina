import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Classic Oxford Shirt',
    price: 2499.00,
    description: 'A timeless staple for any wardrobe. Made from premium 100% organic cotton, this Oxford shirt features a comfortable regular fit and durable stitching. Perfect for both casual and formal occasions.',
    category: 'Shirts',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '2',
    name: 'Midnight Denim Jacket',
    price: 4999.00,
    description: 'Rugged yet sophisticated. Our Midnight Denim Jacket is crafted from heavyweight Japanese denim with a dark indigo wash that fades beautifully over time. Features vintage-inspired copper hardware.',
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1601333762716-448c51f6816e?auto=format&fit=crop&q=80&w=800',
    sizes: ['M', 'L', 'XL']
  },
  {
    id: '3',
    name: 'Urban Knit Hoodie',
    price: 1999.00,
    description: 'Designed for the modern city dweller. This heavyweight fleece hoodie offers superior warmth without the bulk. Includes a reinforced kangaroo pocket and an adjustable hood for unpredictable weather.',
    category: 'Activewear',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '4',
    name: 'Tailored Chino Trousers',
    price: 2299.00,
    description: 'The perfect balance of comfort and style. These tapered chinos are made from a stretch-cotton blend that moves with you. Wrinkle-resistant finish makes them ideal for travel.',
    category: 'Pants',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800',
    sizes: ['30', '32', '34', '36']
  },
  {
    id: '5',
    name: 'Artisan Leather Sneakers',
    price: 5999.00,
    description: 'Handcrafted minimalism. These low-top sneakers feature full-grain Italian leather and a durable rubber sole. The memory foam insole ensures all-day comfort.',
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800',
    sizes: ['8', '9', '10', '11', '12']
  }
];

export const POLICIES = {
  shipping: {
    title: "Shipping Policy",
    content: `
      ### Processing Time
      All orders are processed within **1-2 business days**. Orders are not shipped or delivered on weekends or holidays.

      ### Shipping Rates & Delivery Estimates
      *   **Standard Shipping:** 5-7 business days - Free for orders over ₹2,500, otherwise ₹150.
      *   **Express Shipping:** 2-3 business days - ₹300.
      *   **Overnight Shipping:** 1 business day - ₹500.

      ### Shipment Confirmation & Order Tracking
      You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.
    `
  },
  refund: {
    title: "Return & Refund Policy",
    content: `
      ### Returns
      Our policy lasts **30 days**. If 30 days have gone by since your purchase, unfortunately, we cannot offer you a refund or exchange.

      To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.

      ### Refunds
      Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
      If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within **5-10 business days**.

      ### Exchanges
      We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email.
    `
  },
  privacy: {
    title: "Privacy Policy",
    content: `
      ### Information Collection
      We collect information from you when you register on our site, place an order, subscribe to our newsletter, or fill out a form.

      ### Information Usage
      Any of the information we collect from you may be used to personalize your experience, improve our website, improve customer service, and process transactions.

      ### Data Protection
      We implement a variety of security measures to maintain the safety of your personal information when you place an order or access your personal information.
    `
  },
  terms: {
    title: "Terms and Conditions",
    content: `
      ### Introduction
      These Website Standard Terms and Conditions written on this webpage shall manage your use of our website.

      ### Intellectual Property Rights
      Other than the content you own, under these Terms, Lumina Apparel and/or its licensors own all the intellectual property rights and materials contained in this Website.

      ### Restrictions
      You are specifically restricted from publishing any Website material in any other media, selling, sublicensing and/or otherwise commercializing any Website material.
    `
  }
};