// Central data file for Congo Sphere events
export const events = [
  {
    id: "neon-genesis-summit",
    title: "Neon Genesis Audio-Visual Summit",
    description:
      "Dive into a three-day immersive odyssey where the boundaries between code, sound, and visual architecture dissolve. Join world-renowned generative artists, neural network architects, and pioneer sound designers.",
    date: "2024-10-24",
    endDate: "2024-10-26",
    location: "Silicon Valley, CA",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCG_xH5NEnQ17YF8bmzenFsVr3TqE5FGf6uTrP246HbZEq4eNUAMUVEe46jZf9YJyxNW5qhVDSm2Qcngukjag2D-Cd-4hGyVXgTtiZi91GpJd66c_WSVD3EAbzu8gWNq9BZio23kE5FRJyoNzXFUa3ng8RW2pJ0kHWohY8fkO0nuRRueKIWYJUyo9KtqUHp0QI4jlPevMVYZ_3eNJtZHcyFaPU77-2fT4YR1rz1q1lIZIfyWsxx_Z2FlKHF7D8FC8k_NUsK6e1XMOpm",
    category: "Digital Arts",
    tags: ["Featured Experience", "Digital Arts"],
    price: 249,
    capacity: 500,
    availableTickets: 84,
    registrationDeadline: "2024-10-15",
    features: [
      "Immersive Stages",
      "Exclusive Drops",
      "Spatial Audio Mapping",
      "360° Holographic Projections",
    ],
  },
];

// Helper functions
export function getEventById(id: string) {
  return events.find((event) => event.id === id);
}

export function getEventsByCategory(category: string) {
  return events.filter((event) => event.category === category);
}

export function getUpcomingEvents() {
  const now = new Date();
  return events.filter((event) => new Date(event.date) >= now);
}

export function getFeaturedEvents() {
  return events.filter((event) => event.tags.includes("Featured Experience"));
}
