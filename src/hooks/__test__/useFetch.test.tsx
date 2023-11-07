import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-test-renderer";
import useFetch from "../useFetch"; // adjust the import according to your file structure

// Mocking the global fetch function
global.fetch = jest.fn();

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  (global.fetch as jest.Mock).mockClear();
});

const mockJsonResponse = (data: any) => {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve(data),
  });
};

const mockJsonResponseError = (error: any) => {
  return Promise.resolve({
    ok: false,
    status: error.status,
    json: () => Promise.reject(error),
  });
};

describe("useFetch", () => {
  it("gives back data on success", async () => {
    const mockData = { message: "success" };
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      mockJsonResponse(mockData)
    );

    const { result, waitForNextUpdate } = renderHook(() => useFetch("/test"));

    await act(async () => {
      await waitForNextUpdate();
    });

    expect(result.current.data).toEqual(mockData);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  it("sets error when fetch fails", async () => {
    const error = new Error("failed to fetch");
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(error)
    );

    const { result, waitForNextUpdate } = renderHook(() => useFetch("/test"));

    await act(async () => {
      await waitForNextUpdate();
    });

    expect(result.current.data).toBe(null);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(error.message);
  });

  it("sets error when response is not ok", async () => {
    const error = { status: 404 };
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      mockJsonResponseError(error)
    );

    const { result, waitForNextUpdate } = renderHook(() => useFetch("/test"));

    await act(async () => {
      await waitForNextUpdate();
    });

    expect(result.current.data).toBe(null);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toContain("Error:");
  });
});
