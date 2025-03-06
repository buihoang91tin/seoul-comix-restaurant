import React from "react";
import { render, screen, act, waitFor, fireEvent } from "@testing-library/react";
import Home from "@/app/page";

// Mock the fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        result: { data: [{
          rating: 4.2,
          rating_count: 139,
          category: 'YAKITORI',
          desc: 'Lorem Ipsum passage',
          id: '4dc2e1d1-fe89-4a29-b86a-f8bb0ce1395d',
          images: [
            "https://images.unsplash.com/photo-1593357871477-00fd350cc0f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1593357871477-00fd350cc0f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1593357871477-00fd350cc0f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ],
          name: 'The standard Lorem Ipsum passage, used since the 1500s',
          featured: {
              text: 'Lorem Ipsum passage',
              icon: 'stars-02',
          },
          isFavorite: true
      }] },
      }),
  })
) as jest.Mock;

// ✅ Mock the TRPC hooks
// Mock the TRPC mutation
jest.mock("@/utils/trpc", () => ({
  trpc: {
    toggleFavoriteRestaurant: {
      useMutation: jest.fn().mockReturnValue({
        mutateAsync: jest.fn().mockResolvedValue({ isFavorite: true }),
      }),
    },
  },
}));

test("renders skeletons initially", async () => {
  render(<Home />);

  // Wait for skeletons to be displayed
  await waitFor(() => expect(screen.getAllByTestId("post-skeleton")).toHaveLength(8));
});

test("renders the Home page without crashing", async () => {
  await act(async () => {
    render(<Home />);
  });

  // Ensure the search bar is present
  expect(screen.getByRole("searchbox")).toBeInTheDocument();

  // Ensure the filter bar is present
  expect(screen.getByTestId('filter-bar')).toBeInTheDocument();
});

test("renders restaurants after fetch", async () => {
  await act(async () => {
    render(<Home />);
    // Wait a moment to allow async updates
    await new Promise((resolve) => setTimeout(resolve, 2000));
  });

  await waitFor(() =>
    expect(screen.getAllByTestId("restaurant-post")).toHaveLength(1)
  );

  expect(screen.getAllByTestId("restaurant-post")).toHaveLength(1)
});

test("can toggle favorite", async () => {

  // Wait for the restaurant to be displayed
  await act(async () => {
    render(<Home />);
    await new Promise((resolve) => setTimeout(resolve, 2000));
  });

  await waitFor(() =>
    expect(screen.getAllByTestId("restaurant-post")).toHaveLength(1)
  );

  const favoriteButtons = screen.getAllByRole("button");

  const targetButton = favoriteButtons.find(
    (btn) => btn.getAttribute("name") === "favorite-4dc2e1d1-fe89-4a29-b86a-f8bb0ce1395d"
  );
  expect(targetButton).toBeDefined();

  await act(async () => {
    fireEvent.click(targetButton!);
  });

  // Wait for the favorite status update. This will wait until the target button gets the "favorite" class.
  await waitFor(() => {
    expect(targetButton).toHaveClass("favorite");
  });
  
});