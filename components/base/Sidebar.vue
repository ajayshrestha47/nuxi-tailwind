<template>
  <nav class="flex flex-1 flex-col">
    <ul role="list" class="flex flex-1 flex-col gap-y-7">
      <li>
        <ul role="list" class="-mx-2 space-y-1">

          <li v-for="item in navigation" :key="item.name">
            <a v-if="!item.children" :href="item.href" :class="[item.current ? 'bg-gray-50 border-l-4 border-slate-600' : 'hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-700']">
              <Icon :name="item.icon" class="h-6 w-6 shrink-0 text-gray-400"/>
              <span v-if="!props.showIconOnly">{{ item.name }}</span>
            </a>
            <span v-else>
              <Disclosure as="div" v-if="!props.showIconOnly" v-slot="{ open }">
                <DisclosureButton :class="[item.current ? 'bg-gray-50 border-l-4 border-slate-600' : 'hover:bg-gray-50', 'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700']">
                  <Icon :name="item.icon" class="h-6 w-6 shrink-0 text-gray-400"/>
                  <span>
                    {{ item.name }}
                    <Icon name="ri:arrow-right-s-line" :class="[open ? 'rotate-90 text-gray-500' : 'text-gray-400', 'ml-auto h-5 w-5 shrink-0']"/>
                  </span>
                </DisclosureButton>
                <DisclosurePanel as="ul" class="mt-1 px-2">
                  <li v-for="subItem in item.children" :key="subItem.name">
                    <!-- 44px -->
                    <DisclosureButton as="a" :href="subItem.href" :class="[subItem.current ? 'bg-gray-50 border-l-4 border-slate-600' : 'hover:bg-gray-50', 'block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700']">
                      <Icon :name="subItem.icon" class="h-5 w-5 shrink-0 text-gray-400"/>
                      {{ subItem.name }}
                    </DisclosureButton>
                  </li>
                </DisclosurePanel>
              </Disclosure>

              <Popover class="relative" v-else>
                <PopoverButton :class="[item.current ? 'bg-gray-50 border-l-4 border-slate-600' : 'hover:bg-gray-50', 'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700']">
                  <Icon :name="item.icon" class="h-6 w-6 shrink-0 text-gray-400"/>
                </PopoverButton>

                <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                  <PopoverPanel class="absolute left-[120px] z-10 mt-1 flex w-screen max-w-min -translate-x-1/2 px-4">
                    <div class="w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
                      <a v-for="subItem in item.children" :key="subItem.name" :href="subItem.href" class="block p-2 rounded-md" :class="[subItem.current ? 'bg-gray-50 border-l-4 border-slate-600' : 'hover:bg-gray-50']">
                        <Icon :name="subItem.icon" class="h-5 w-5 shrink-0 text-gray-400"/>
                        {{ subItem.name }}
                      </a>
                    </div>
                  </PopoverPanel>
                </transition>
              </Popover>
            </span>
          </li>
        </ul>
      </li>
      <li class="mt-auto">
        <a href="#" class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600">
          <Icon name="ri:settings-2-line" class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"/>
          <span v-if="!props.showIconOnly">Settings</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

const navigation = [
  { name: 'Overview', href: '#', icon: 'ri:pie-chart-line', current: true },
  {
    name: 'Users Management',
    icon: 'ri:group-line',
    current: false,
    children: [
      { name: 'Add User', icon: 'ri:group-line', href: '#', current: false },
      { name: 'Assign Permission', icon: 'ri:group-line', href: '#', current: false },
    ],
  },
  { name: 'Product Management', href: '#', icon: 'ri:barcode-fill', current: false },
  { name: 'Inventory Tracking', href: '#', icon: 'ri:list-check-3', current: false },
  { name: 'Order Management', href: '#', icon: 'ri:shopping-cart-fill', current: false },
  { name: 'Reports', href: '#', icon: 'ri:line-chart-line', current: false },
]
const props =  defineProps({
  showIconOnly: { type: Boolean, default: false },
})


</script>
