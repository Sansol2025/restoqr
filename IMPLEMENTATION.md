# RestoQR - Implementation Plan

## Technical Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4 (CSS-first config)
- **Components**: Shadcn/UI (Custom implementation for premium feel)
- **Animations**: Framer Motion
- **Feedback**: Sonner (Premium toasts)
- **Icons**: Lucide React

## Design System (Premium Dark Mode)
- **Core Palette**: 
  - Background: `#0a0a0a` (Deep Slate)
  - Surface: `#171717` (Slate Card)
  - Accent: `#D4AF37` (Metallic Gold)
  - Primary Text: `#fafafa`
  - Secondary Text: `#94a3b8`
- **Typography**: Inter (System default) with high-density hierarchy.
- **Micro-interactions**: 
  - Spring-based staggered entrance for menu categories.
  - Scale effects on button press.
  - Floating bottom cart with entrance animation.

## Key Features
1. **Interactive Menu**: Categories with smooth horizontal scroll and active state sync.
2. **Persistence**: `useCart` hook utilizing `localStorage` to preserve selection across reloads.
3. **Waiter Service**: Dedicated "Call Waiter" action with immediate visual and tactile feedback mock.
4. **Checkout Experience**: Bottom-sheet style modal simulating the payment process.
5. **Edge Ready**: API route configured for Vercel Edge Runtime for maximum performance.

## File Structure
- `src/data/menu.ts`: Centralized mock data.
- `src/hooks/use-cart.ts`: Cart logic.
- `src/components/menu/`: Layout and item components.
- `src/components/cart/`: Checkout and cart summaries.
- `src/app/api/menu/`: Edge API endpoint.
