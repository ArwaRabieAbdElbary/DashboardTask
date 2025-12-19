import React from 'react'
import Header from '../components/Header'

const HomePage = () => {
  return (
    <div>
      <Header />
      
<div class="flex flex-col md:flex-row bg-gray-100 min-h-80 lg:h-80 md:items-stretch dark:bg-black  ">
    
    <div class="order-2 md:order-1 flex w-full md:basis-1/2 lg:basis-2/5 items-center">
        <div class="px-5 md:px-10 lg:px-16 xl:px-20">
            <img src="./images/logo-brand.svg" class="w-40 hidden md:block" />
            <h2 class="text-2xl mt-4 font-serif font-bold">You can work from anywhere.</h2>
            <h3 class="text-2xl mb-3 font-serif text-blue-600 dark:text-sky-500 font-bold">Take advantage of it.</h3>
            <p class="text-gray-600 mb-2.5 dark:text-gray-200">
                Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're not on vacation.
            </p>
            <button class="cursor-pointer bg-sky-500 w-40 h-10 text-white rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-blue-500"
            >Book Your Escape</button>
        </div>     
    </div>

    <div class="w-full md:basis-1/2 lg:basis-3/5 order-1 md:order-2">
        <img src="src\assets\images\beach-work.jpg" 
             class="object-cover w-full h-full rounded-lg shadow-md mx-auto" />
    </div>

</div>

<div class="max-w-5xl m-auto px-5 "> 
    <div class="mt-10">
        <h2 class="dark:text-gray-200 dark:text-shadow-2xs font-bold text-2xl">Popular destinations</h2>
        <p class="text-gray-500 my-3 dark:text-gray-200">A selection of great work-friendly with cities to work and explore</p>
    </div>
    
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <div class="card">
            <img src="./images/malibu.jpg" class="w-30 rounded-l-lg" />
            <div class="pt-5 pl-3 ">
                <h3 class="text-lg">Malibu</h3>
                <p class="text-gray-500 mb-2.5 text-sm">1000 LE / night average</p>
                <span class="text-sky-600 text-sm font-bold">Exploer 76 Properties</span>
            </div>
        </div>
        <div class="card">
            <img src="./images/chicago.jpg" class="w-30 rounded-l-lg" />
            <div class="pt-5 pl-3 ">
                <h3 class="text-lg">Chicago</h3>
                <p class="text-gray-500 mb-2.5 text-sm">1000 LE / night average</p>
                <span class="text-sky-600 text-sm font-bold">Exploer 76 Properties</span>
            </div>
        </div>
        <div class="card">
            <img src="./images/colorado.jpg" class="w-30 rounded-l-lg" />
            <div class="pt-5 pl-3 ">
                <h3 class="text-lg">Colorado</h3>
                <p class="text-gray-500 mb-2.5 text-sm">1000 LE / night average</p>
                <span class="text-sky-600 text-sm font-bold">Exploer 76 Properties</span>
            </div>
        </div>
        <div class="card">
            <img src="./images/miami.jpg" class="w-30 rounded-l-lg" />
            <div class="pt-5 pl-3 ">
                <h3 class="text-lg">Miami</h3>
                <p class="text-gray-500 mb-2.5 text-sm">1000 LE / night average</p>
                <span class="text-sky-600 text-sm font-bold">Exploer 76 Properties</span>
            </div>
        </div>
        <div class="card">
            <img src="./images/seattle.jpg" class="w-30 rounded-l-lg" />
            <div class="pt-5 pl-3 ">
                <h3 class="text-lg">Seattle</h3>
                <p class="text-gray-500 mb-2.5 text-sm">1000 LE / night average</p>
                <span class="text-sky-600 text-sm font-bold">Exploer 76 Properties</span>
            </div>
        </div>
        <div class="card">
            <img src="./images/toronto.jpg" class="w-30 rounded-l-lg" />
            <div class="pt-5 pl-3 ">
                <h3 class="text-lg">Toronto</h3>
                <p class="text-gray-500 mb-2.5 text-sm">1000 LE / night average</p>
                <span class="text-sky-600 text-sm font-bold">Exploer 76 Properties</span>
            </div>
        </div>
    </div>
</div>
      
    </div>
  )
}

export default HomePage
