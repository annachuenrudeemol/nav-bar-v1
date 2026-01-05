# Navigation Bar with Design System

This project implements a navigation bar component based on the Koddi Design System from Figma. It features a left sidebar navigation, top header with tabs, and follows the design system's color tokens, spacing, and typography.

## Features

- **Left Sidebar Navigation**: Icon-based navigation with active states
- **Top Header with Tabs**: Tab navigation with badges and pin indicators
- **Design System Integration**: Uses CSS custom properties matching the Koddi Design System variables
- **Responsive Design**: Adapts to different screen sizes
- **Interactive Elements**: Tab switching, sidebar navigation, and hover states

## Design System Variables

The implementation uses CSS custom properties (variables) that match the Figma design system:

- **Colors**: Brand colors, neutrals, text colors, backgrounds, and borders
- **Spacing**: Consistent spacing scale (2px, 4px, 8px, 12px, 16px, 24px, 32px)
- **Typography**: Inter font family with consistent sizes and line heights
- **Border Radius**: Rounded corners following the design system
- **Shadows**: Subtle shadows for depth

## File Structure

```
nav-bar-with-system/
├── index.html      # Main HTML structure
├── styles.css      # CSS with design system variables
├── script.js       # JavaScript for interactivity
├── README.md       # This file
└── mcp.json        # MCP server configuration
```

## Getting Started

1. **Open the project**: Simply open `index.html` in a web browser
2. **No build step required**: This is a vanilla HTML/CSS/JavaScript implementation
3. **Font loading**: The project uses Google Fonts (Inter) which loads automatically

## Usage

### HTML Structure

The main structure consists of:
- `.app-container`: Main wrapper
- `.sidebar`: Left navigation sidebar
- `.main-content`: Main content area
  - `.header`: Top header with tabs
  - `.content-area`: Content section

### CSS Variables

All design tokens are available as CSS custom properties in `:root`. You can override them or use them in your own components:

```css
.my-component {
    background-color: var(--themes-brand-primary);
    padding: var(--spacing-4);
    border-radius: var(--rounded-xl);
}
```

### JavaScript Interactivity

The `script.js` file handles:
- Tab switching (click to activate)
- Sidebar navigation (click to toggle active state)
- Back button functionality
- User avatar interactions

## Design System Reference

### Colors

- **Primary Blue**: `#367dfe`
- **Primary Dark**: `#1d5bf3`
- **Primary Lighter**: `#dae9ff`
- **Neutral**: `#99a1af`
- **Text Medium**: `#6a7282`
- **Text Strong**: `#030712`
- **Background Default**: `#f8fafc`

### Typography

- **Font Family**: Inter
- **Sizes**: 12px (xs), 14px (sm), 16px (base), 24px (2xl)
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semi Bold)

### Spacing Scale

- `--spacing-0-5`: 2px
- `--spacing-1`: 4px
- `--spacing-2`: 8px
- `--spacing-3`: 12px
- `--spacing-4`: 16px
- `--spacing-8`: 32px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- The logo image uses a Figma asset URL that may expire after 7 days. Replace with your own logo asset.
- Icons are implemented as inline SVG for better control and customization.
- The design follows the exact specifications from the Figma design system.

## Customization

To customize the design:

1. **Colors**: Modify the CSS variables in `:root` in `styles.css`
2. **Spacing**: Adjust spacing variables as needed
3. **Typography**: Change font sizes and weights in CSS variables
4. **Icons**: Replace SVG icons in the HTML with your own

## License

This implementation is based on the Koddi Design System from Figma.
