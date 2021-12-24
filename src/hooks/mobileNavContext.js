import { createContext } from "react";

const MobileNavContext = createContext({
  // Decide open / close  mobile menu state and icon
  mobileNavOpen: false,
  toggleMobileNav: () => {},
  // Show the menu button in mobile viewports
  showMobileNavMenu: false,
  toggleMobileNavMenu: () => {},
});

export default MobileNavContext;
