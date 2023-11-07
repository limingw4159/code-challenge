import { renderHook } from "@testing-library/react-hooks";
import { rest } from "msw";
import { setupServer } from "msw/node";
import useFetch from "./path-to-your-hook/useFetch";

// Mocking an API endpoint for the tests
const server = setupServer(
  rest.get(
    `${process.env.REACT_APP_API_URL}/test-endpoint`,
    (req, res, ctx) => {
      return res(ctx.json({ data: "mocked data" }));
    }
  )
);

// // Enable API mocking before tests.
// beforeAll(() => server.listen());

// // Reset any runtime request handlers we may add during the tests.
// afterEach(() => server.resetHandlers());

// // Disable API mocking after the tests are done.
// afterAll(() => server.close());

// describe("useFetch", () => {
//   test("should initially set isLoading to true and data to null", async () => {
//     const { result, waitForNextUpdate } = renderHook(() =>
//       useFetch("/test-endpoint")
//     );

//     expect(result.current.isLoading).toBe(true);
//     expect(result.current.data).toBeNull();

//     await waitForNextUpdate();
//   });

//   test("should return data after successful fetch", async () => {
//     const { result, waitFor } = renderHook(() => useFetch("/test-endpoint"));

//     await waitFor(() => result.current.isLoading === false);

//     expect(result.current.data).toEqual({ data: "mocked data" });
//     expect(result.current.error).toBeNull();
//   });

//   test("should handle fetch error", async () => {
//     // Here we're setting up the server to return a 500 error for this test
//     server.use(
//       rest.get(
//         `${process.env.REACT_APP_API_URL}/test-endpoint`,
//         (req, res, ctx) => {
//           return res(ctx.status(500));
//         }
//       )
//     );

//     const { result, waitFor } = renderHook(() => useFetch("/test-endpoint"));

//     await waitFor(() => result.current.isLoading === false);

//     expect(result.current.error).not.toBeNull();
//     expect(result.current.data).toBeNull();
//   });
// });
