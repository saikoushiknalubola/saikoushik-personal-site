
import * as React from "react"

// Define breakpoints for different device sizes
export const BREAKPOINTS = {
  mobile: 640,   // sm
  tablet: 768,   // md
  laptop: 1024,  // lg
  desktop: 1280, // xl
}

type DeviceSize = 'mobile' | 'tablet' | 'laptop' | 'desktop'

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < BREAKPOINTS.tablet)
    }
    
    // Set initial value
    handleResize()
    
    // Add event listener for window resize
    window.addEventListener("resize", handleResize)
    
    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return !!isMobile
}

export function useDeviceSize() {
  const [deviceSize, setDeviceSize] = React.useState<DeviceSize>('desktop')

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      
      if (width < BREAKPOINTS.mobile) {
        setDeviceSize('mobile')
      } else if (width < BREAKPOINTS.tablet) {
        setDeviceSize('tablet')
      } else if (width < BREAKPOINTS.laptop) {
        setDeviceSize('laptop')
      } else {
        setDeviceSize('desktop')
      }
    }
    
    // Set initial value
    handleResize()
    
    // Add event listener for window resize
    window.addEventListener("resize", handleResize)
    
    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return {
    deviceSize,
    isMobile: deviceSize === 'mobile',
    isTablet: deviceSize === 'tablet',
    isLaptop: deviceSize === 'laptop',
    isDesktop: deviceSize === 'desktop',
    isTabletOrSmaller: ['mobile', 'tablet'].includes(deviceSize),
    isLaptopOrSmaller: ['mobile', 'tablet', 'laptop'].includes(deviceSize),
  }
}
