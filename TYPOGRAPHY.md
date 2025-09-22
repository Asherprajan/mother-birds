# Mother Birds Typography System

This document outlines the typography system for the Mother Birds website, designed to create a consistent and professional visual hierarchy.

## Font Families

### Playfair Display (Serif)

- **Usage**: Headings, brand elements, hero titles
- **Weights**: 600 (Semi-Bold), 700 (Bold)
- **Purpose**: Creates elegance and authority for main headings

### Poppins (Sans-serif)

- **Usage**: Body text, navigation, buttons, small text
- **Weights**: 400 (Regular), 500 (Medium)
- **Purpose**: Ensures excellent readability for content

## Typography Scale

| Element     | Font Family      | Size | Weight          | Line Height | Usage                       |
| ----------- | ---------------- | ---- | --------------- | ----------- | --------------------------- |
| H1/Hero     | Playfair Display | 48px | 700 (Bold)      | 120%        | Hero titles, page titles    |
| H2          | Playfair Display | 32px | 600 (Semi-Bold) | 125%        | Section titles, taglines    |
| H3          | Playfair Display | 24px | 600 (Semi-Bold) | 130%        | Subheadings, product titles |
| Body        | Poppins          | 16px | 400 (Regular)   | 150%        | Main content, descriptions  |
| Body Medium | Poppins          | 16px | 500 (Medium)    | 150%        | Highlights, emphasis        |
| Small       | Poppins          | 14px | 400 (Regular)   | 140%        | Captions, metadata          |
| Button      | Poppins          | 16px | 500 (Medium)    | 150%        | CTA buttons, navigation     |

## Component Usage

### Import Typography Components

```tsx
import {
  HeroHeading,
  H1,
  H2,
  H3,
  Tagline,
  BodyText,
  BodyMedium,
  SmallText,
  ButtonText,
  ProductTitle,
  SectionTitle,
} from "@/components/ui/typography";
```

### Basic Usage Examples

#### Hero Section

```tsx
<HeroHeading>Mother Bird's Traditional Taste</HeroHeading>
<Tagline>Traditional Taste, Trusted Quality</Tagline>
<BodyText>
  Discover authentic flavors crafted with love and tradition...
</BodyText>
```

#### Product Cards

```tsx
<ProductTitle>Mango Pickle</ProductTitle>
<BodyText>
  Traditional spicy mango pickle made with authentic spices...
</BodyText>
<SmallText>Available in 500g jars</SmallText>
```

#### Section Headers

```tsx
<SectionTitle>Our Products</SectionTitle>
<H3>Premium Quality Ingredients</H3>
<BodyText>Learn about our sourcing process...</BodyText>
```

#### Buttons

```tsx
<button className="bg-mother-red text-white px-6 py-3 rounded-lg">
  <ButtonText>Shop Now</ButtonText>
</button>
```

## CSS Classes

### Utility Classes

You can also use these utility classes directly:

```tsx
// Headings
<h1 className="heading-hero">Hero Title</h1>
<h2 className="heading-h2">Section Title</h2>
<h3 className="heading-h3">Subheading</h3>

// Text
<p className="body-text">Body content</p>
<p className="body-medium">Emphasized content</p>
<p className="small-text">Small text</p>
<span className="button-text">Button</span>

// Special
<p className="tagline">Tagline text</p>
```

### Font Family Classes

```tsx
<p className="font-serif">Playfair Display text</p>
<p className="font-sans">Poppins text</p>
<p className="font-playfair">Playfair Display (alternative)</p>
<p className="font-poppins">Poppins (alternative)</p>
```

## Tailwind Extensions

### Custom Font Sizes

```tsx
// Available sizes
text - hero; // 48px
text - h1; // 48px
text - h2; // 32px
text - h3; // 24px
text - body; // 16px
text - small; // 14px
```

### Custom Font Weights

```tsx
font - semi - bold; // 600
```

## Best Practices

### 1. Hierarchy

- Use H1 only once per page (hero or main title)
- Use H2 for major sections
- Use H3 for subsections and product titles
- Maintain consistent spacing between heading levels

### 2. Content

- Keep headings concise and descriptive
- Use taglines for brand messaging
- Ensure body text is readable (16px minimum)
- Use small text sparingly for metadata only

### 3. Consistency

- Always use the typography components instead of raw HTML
- Maintain consistent spacing patterns
- Use the established color palette for text hierarchy

### 4. Accessibility

- Ensure sufficient color contrast
- Maintain readable line heights
- Use semantic HTML structure
- Test with screen readers

## Examples by Page Type

### Homepage

```tsx
<HeroHeading>Mother Bird's</HeroHeading>
<Tagline>Traditional Taste, Trusted Quality</Tagline>
<BodyText>Welcome message...</BodyText>
<SectionTitle>Featured Products</SectionTitle>
```

### Product Page

```tsx
<H1>Mango Pickle</H1>
<H3>Product Description</H3>
<BodyText>Detailed product information...</BodyText>
<H3>Ingredients</H3>
<SmallText>Nutritional information...</SmallText>
```

### About Page

```tsx
<H1>Our Story</H1>
<SectionTitle>Three Generations of Tradition</SectionTitle>
<BodyText>Company history...</BodyText>
<H3>Our Values</H3>
<BodyText>Company values...</BodyText>
```

## Demo Page

Visit `/typography-demo` to see all typography components in action with real examples and usage patterns.

## Troubleshooting

### Font Not Loading

- Check that fonts are properly imported in `app/layout.tsx`
- Verify CSS variables are set correctly
- Ensure Tailwind config includes font families

### Styling Not Applied

- Verify component imports are correct
- Check that CSS classes are properly defined
- Ensure Tailwind is processing the custom classes

### Inconsistent Spacing

- Use the established spacing scale (space-y-6, space-y-4, etc.)
- Maintain consistent margins between typography elements
- Follow the component spacing patterns in the demo

## Future Enhancements

- Responsive typography scaling
- Dark mode typography variants
- Additional font weights if needed
- Typography animation utilities
- Print-friendly typography styles
