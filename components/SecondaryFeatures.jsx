import { useId } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '../components/Container'
import screenshotInventory from '../images/screenshots/inventory.png'
import screenshotProfitLoss from '../images/screenshots/profit-loss.png'

const features = [
  {
    name: 'Products',
    summary: 'Message Verse.',
    description:
      'MessageVerse is a software application or website that allows users to communicate with each other in real time through various means, such as text, voice, and video. These platforms provide a way for people to stay connected with friends, and family..',
    image: screenshotProfitLoss,
    icon: function ReportingIcon() {
      let id = useId()
      return (
        <>
          <defs>
            <linearGradient
              id={id}
              x1="11.5"
              y1={18}
              x2={36}
              y2="15.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".194" stopColor="#fff" />
              <stop offset={1} stopColor="#6692F1" />
            </linearGradient>
          </defs>
          <path
            d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
            stroke={`url(#${id})`}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )
    },
  },
  {
    name: 'Coming Soon',
    summary: 'My Resorts.',
    description:
      'Escape to paradise and indulge in luxury at our exclusive resorts. Unwind in style with breathtaking views, top-notch amenities, and unparalleled service. Perfect for romantic getaways, family vacations, and more.',
    image: screenshotInventory,
    icon: function InventoryIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            opacity=".3"
            d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
        </>
      )
    },
  },
]

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg',
          isActive ? 'bg-blue-600' : 'bg-slate-500'
        )}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-blue-600' : 'text-slate-600'
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col items-center justify-center gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.name}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </Tab.List>
        </>
      )}
    </Tab.Group>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="products"
      aria-label="Features for simplifying everyday business tasks"
      className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Simplify everyday life solutions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Elevate your business to new heights with our innovative and
            cutting-edge solutions, Unlock your potential and achieve success
            with our proven product line that are designed to transform your
            industry with our high-quality offerings.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
