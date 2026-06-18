import { Promo } from "registry-starter";

export function Default() {
  return (
    <Promo
      title="Summer Sale"
      description="Up to 40% off on selected items. Limited time offer."
      buttonText="Shop Now"
      buttonLink="/sale"
      backgroundImage=""
    />
  );
}

export function Nature() {
  return (
    <Promo
      title="Explore the Outdoors"
      description="Discover our new collection of nature-inspired products."
      buttonText="Browse Collection"
      buttonLink="/collection"
      backgroundImage=""
    />
  );
}
