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
  SectionTitle 
} from '@/components/ui/typography';

export default function TypographyDemo() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Hero Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-muted-foreground mb-4">Hero & Page Titles</h2>
          <div className="space-y-4">
            <HeroHeading>Mother Bird's Traditional Taste</HeroHeading>
            <H1>Discover Authentic Flavors</H1>
          </div>
        </section>

        {/* Taglines */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-muted-foreground mb-4">Taglines</h2>
          <div className="space-y-4">
            <Tagline>Traditional Taste, Trusted Quality</Tagline>
            <Tagline>Crafted with Love and Tradition</Tagline>
          </div>
        </section>

        {/* Section Titles */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-muted-foreground mb-4">Section Titles</h2>
          <div className="space-y-4">
            <SectionTitle>Our Products</SectionTitle>
            <SectionTitle>About Mother Bird's</SectionTitle>
            <SectionTitle>Contact Us</SectionTitle>
          </div>
        </section>

        {/* Product Titles */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-muted-foreground mb-4">Product Titles</h2>
          <div className="space-y-4">
            <ProductTitle>Mango Pickle</ProductTitle>
            <ProductTitle>Tomato Ketchup</ProductTitle>
            <ProductTitle>Mixed Fruit Jam</ProductTitle>
          </div>
        </section>

        {/* Subheadings */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-muted-foreground mb-4">Subheadings (H3)</h2>
          <div className="space-y-4">
            <H3>Premium Quality Ingredients</H3>
            <H3>Family Recipe</H3>
            <H3>Natural Preservatives</H3>
          </div>
        </section>

        {/* Body Text */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-muted-foreground mb-4">Body Text</h2>
          <div className="space-y-4">
            <BodyText>
              Discover authentic flavors crafted with love and tradition. From pickles to preserves, 
              we bring you the finest food products trusted by families across India. Our recipes 
              have been passed down through generations, ensuring every bite carries the warmth of 
              home cooking.
            </BodyText>
            <BodyMedium>
              This is medium weight body text, perfect for highlighting important information 
              or creating visual hierarchy within your content.
            </BodyMedium>
          </div>
        </section>

        {/* Small Text */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-muted-foreground mb-4">Small Text & Captions</h2>
          <div className="space-y-4">
            <SmallText>Best before: 12 months from date of manufacture</SmallText>
            <SmallText>Net weight: 500g | Ingredients: See packaging</SmallText>
            <SmallText>Storage: Store in a cool, dry place</SmallText>
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-muted-foreground mb-4">Button Text</h2>
          <div className="space-y-4">
            <button className="bg-mother-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
              <ButtonText>Shop Now</ButtonText>
            </button>
            <button className="bg-mother-green text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              <ButtonText>Learn More</ButtonText>
            </button>
            <button className="bg-mother-yellow text-mother-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors">
              <ButtonText>Contact Us</ButtonText>
            </button>
          </div>
        </section>

        {/* Font Family Examples */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-muted-foreground mb-4">Font Family Examples</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <p className="font-serif text-xl mb-2">Playfair Display (Serif)</p>
              <p className="font-serif text-lg">Perfect for headings and brand elements</p>
            </div>
            <div className="p-4 border rounded-lg">
              <p className="font-sans text-xl mb-2">Poppins (Sans-serif)</p>
              <p className="font-sans text-lg">Ideal for body text and navigation</p>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-muted-foreground mb-4">Real Usage Examples</h2>
          
          {/* Product Card Example */}
          <div className="border rounded-lg p-6 max-w-md">
            <ProductTitle>Mango Pickle</ProductTitle>
            <BodyText className="mt-2">
              Traditional spicy mango pickle made with authentic spices and premium mangoes. 
              Perfect accompaniment to any meal.
            </BodyText>
            <div className="mt-4 flex items-center justify-between">
              <span className="font-sans text-lg font-medium">₹120</span>
              <button className="bg-mother-red text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
                <ButtonText>Add to Cart</ButtonText>
              </button>
            </div>
            <SmallText className="mt-2">Available in 500g jars</SmallText>
          </div>

          {/* Hero Section Example */}
          <div className="border rounded-lg p-8 bg-gradient-to-r from-mother-yellow/10 to-mother-red/10">
            <HeroHeading>Mother Bird's</HeroHeading>
            <Tagline className="mt-4">Traditional Taste, Trusted Quality</Tagline>
            <BodyText className="mt-6 max-w-2xl">
              For over three decades, we've been crafting authentic Indian food products 
              that bring the taste of home to your table. From our signature pickles to 
              our handcrafted preserves, every product tells a story of tradition and love.
            </BodyText>
            <div className="mt-8 space-x-4">
              <button className="bg-mother-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
                <ButtonText>Explore Products</ButtonText>
              </button>
              <button className="border border-mother-red text-mother-red px-6 py-3 rounded-lg hover:bg-mother-red hover:text-white transition-colors">
                <ButtonText>Our Story</ButtonText>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 