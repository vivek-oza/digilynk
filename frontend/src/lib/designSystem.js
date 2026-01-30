/**
 * Design System — Centralized design tokens for consistent styling
 * Typography, spacing, colors, and component styles
 */

export const typography = {
  // Headings
  h1: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold",
  h2: "text-2xl md:text-4xl font-medium",
  h3: "text-xl md:text-2xl font-semibold",
  h4: "text-lg font-semibold",
  
  // Body text
  body: "text-base md:text-lg",
  bodySmall: "text-sm md:text-base",
  bodyLarge: "text-lg md:text-xl",
  
  // Font weights
  fontNormal: "font-normal",
  fontMedium: "font-medium",
  fontSemibold: "font-semibold",
  fontBold: "font-bold",
  
  // Line heights
  leadingTight: "leading-tight",
  leadingRelaxed: "leading-relaxed",
};

export const spacing = {
  // Section padding - increased for more white space
  sectionPadding: "py-32 md:py-40 lg:py-48",
  sectionPaddingSmall: "py-24 md:py-32",
  
  // Container padding
  containerPadding: "px-4 sm:px-6 lg:px-8",
  containerMaxWidth: "max-w-7xl mx-auto",
  containerMaxWidthNarrow: "max-w-4xl mx-auto",
  containerMaxWidthWide: "max-w-7xl mx-auto",
  
  // Gaps - increased for more white space
  gapSmall: "gap-6",
  gapMedium: "gap-8",
  gapLarge: "gap-12 md:gap-16",
  
  // Margins - increased for more white space
  marginBottom: "mb-16 md:mb-20 lg:mb-24",
  marginBottomSmall: "mb-8 md:mb-12",
  marginTop: "mt-16 md:mt-20",
};

export const colors = {
  // Text colors - use these as class names directly
  textPrimary: "text-foreground",
  textSecondary: "text-muted-foreground",
  textTertiary: "text-muted-foreground/70",
  
  // Background colors
  bgPrimary: "bg-background",
  bgCard: "bg-card",
  bgMuted: "bg-muted/50",
  
  // Border colors
  border: "border-border",
  borderMuted: "border-border/50",
};

// Helper function to combine class names properly
export const cn = (...classes) => classes.filter(Boolean).join(" ");

export const components = {
  // Section wrapper - removed border-t for clean layout
  section: "relative bg-background overflow-hidden font-roboto",
  
  // Section header - increased spacing
  sectionHeader: "text-center mb-16 md:mb-20 lg:mb-24",
  sectionTitle: "text-2xl md:text-4xl lg:text-5xl font-medium text-foreground font-roboto",
  sectionDescription: "mt-4 md:mt-5 text-muted-foreground max-w-2xl mx-auto font-roboto text-base md:text-lg",
  
  // Cards
  card: "services-v2-card",
  cardPadding: "p-5 md:p-6",
  
  // Buttons
  buttonPrimary: "px-6 py-3 text-base font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 font-roboto",
  buttonSecondary: "px-6 py-3 text-base font-semibold border border-border text-foreground hover:bg-muted transition-all duration-300 font-roboto",
  buttonLarge: "px-8 py-4 text-lg font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 font-roboto",
  
  // Input fields
  input: "w-full px-5 py-4 bg-muted/50 border border-border rounded-xl text-foreground text-base placeholder-muted-foreground focus:outline-none focus:border-foreground/30 focus:ring-1 focus:ring-foreground/20 transition-all",
  
  // Pattern overlay
  patternOverlay: "pointer-events-none absolute inset-0 opacity-[0.08] dark:opacity-[0.03]",
};

export const animations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  },
};
