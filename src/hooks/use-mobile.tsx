
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
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    // Default to true for server-side rendering
    if (typeof window === 'undefined') return true;
    return window.innerWidth < BREAKPOINTS.tablet;
  });

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < BREAKPOINTS.tablet)
    }
    
    // Add event listener for window resize
    window.addEventListener("resize", handleResize)
    
    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return isMobile;
}

export function useDeviceSize() {
  const [deviceSize, setDeviceSize] = React.useState<DeviceSize>(() => {
    // Default for SSR
    if (typeof window === 'undefined') return 'mobile';
    
    const width = window.innerWidth;
    if (width < BREAKPOINTS.mobile) return 'mobile';
    if (width < BREAKPOINTS.tablet) return 'tablet';
    if (width < BREAKPOINTS.laptop) return 'laptop';
    return 'desktop';
  });

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width < BREAKPOINTS.mobile) {
        setDeviceSize('mobile');
      } else if (width < BREAKPOINTS.tablet) {
        setDeviceSize('tablet');
      } else if (width < BREAKPOINTS.laptop) {
        setDeviceSize('laptop');
      } else {
        setDeviceSize('desktop');
      }
    }
    
    // Add event listener for window resize with debounce
    let timeoutId: ReturnType<typeof setTimeout>;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };
    
    window.addEventListener("resize", debouncedResize);
    
    // Clean up
    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(timeoutId);
    }
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
