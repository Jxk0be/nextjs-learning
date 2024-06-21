'use client'

// If this is called "loading.tsx" this will implicitly be used
// by Next as the "loading" page when it is fetching data/or waiting
// on the components to render

export default function loading() {
  return (
    <span className="text-xl capitalize">loading tours...</span>
  )
}
