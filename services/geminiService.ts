
import { JumpStory } from "../types";

// NOTE: Using a mock implementation to avoid API keys and ensure stability.
// The original Gemini implementation is commented out or removed.

const MOCK_LORE: JumpStory = {
  title: "The Legend of Tzvi Reiter",
  biography: "Tzvi Reiter didn't learn to walk; he learned to bounce. Born on a trampoline during a minor earthquake, Tzvi's first words were 'UP!'. Scientists believe his legs contain specialized springs instead of bones. He once jumped so high he had to pay a toll at the International Space Station.",
  jumpingStyle: "The Stratosphere Launch",
  funFacts: [
    "Tzvi's shoes must be replaced every 4 hours due to extreme friction.",
    "He is the only person to have successfully high-fived a cloud.",
    "Seismologists use his morning exercise routine to calibrate their instruments.",
    "Gravity has filed a restraining order against him, but he keeps going over its head."
  ]
};

export const generateJumpLore = async (): Promise<JumpStory> => {
  // Simulate network delay for realism
  await new Promise(resolve => setTimeout(resolve, 800));
  return MOCK_LORE;
};

// Mock images for demonstration purposes
const MOCK_IMAGES: Record<string, string> = {
  "Moon Surface": "https://images.unsplash.com/photo-1532003885409-4180aa9eb171?w=800&auto=format&fit=crop&q=60",
  "Top of the Eiffel Tower": "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=800&auto=format&fit=crop&q=60",
  "Deep Space Nebula": "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&auto=format&fit=crop&q=60",
  "The Great Wall of China": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop&q=60",
  "A Volcano Rim": "https://images.unsplash.com/photo-1619266465172-02a857c3556d?w=800&auto=format&fit=crop&q=60",
  "New York Times Square": "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&auto=format&fit=crop&q=60"
};

export const generateJumpImage = async (location: string): Promise<string | undefined> => {
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Return a relevant Unsplash image based on the location
  // In a real app with more locations, we might want a default fallback
  return MOCK_IMAGES[location] || "https://images.unsplash.com/photo-1517482590740-4c3dd2c8f041?w=800&auto=format&fit=crop&q=60"; // Default jumping image
};
