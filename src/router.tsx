import { createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    // Automatically preload route JS and data when users hover over links
    defaultPreload: 'intent',
    // Keep preloaded data cached for 10 seconds before marking it stale
    defaultPreloadStaleTime: 10_000,
  })

  return router
}