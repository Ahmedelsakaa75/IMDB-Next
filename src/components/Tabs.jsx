import React from 'react'
import TabsItem from './TabsItem'

export default function Tabs() {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-400 p-4 lg:text-lg justify-center items-center gap-6">
    <TabsItem title="Trending" param="fetchTrending" />
    <TabsItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}
