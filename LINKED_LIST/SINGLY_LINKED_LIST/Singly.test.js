import { describe, test, expect, beforeEach, vi, afterEach } from "vitest";
import LinkedList from "./SinglyLinkedList";
let list;

beforeEach(() => {
  list = new LinkedList();
});

afterEach(() => {
  vi.restoreAllMocks(); // Clean up any spies
});

describe("LinkedList - Append", () => {
  test("should append nodes to an empty list", () => {
    list.append(3);
    expect(list.head.data).toBe(3);
    expect(list.head.next).toBeNull();
  });

  test("should append multiple nodes correctly", () => {
    list.append(3);
    list.append(5);
    expect(list.head.data).toBe(3);
    expect(list.head.next.data).toBe(5);
  });
});

describe("LinkedList - Prepend", () => {
  test("should prepend node to the beginning", () => {
    list.append(25);
    list.prepend(5);
    expect(list.head.data).toBe(5);
    expect(list.head.next.data).toBe(25);
  });
});

describe("LinkedList - Delete", () => {
  test("should return false when deleting from an empty list", () => {
    const result = list.delete(5);
    expect(result).toBe(false);
  });

  test("should delete the only node in the list", () => {
    list.append(5);
    const result = list.delete(5);
    expect(result).toBe(true);
    expect(list.head).toBeNull();
  });

  test("should delete a node from a list with multiple nodes", () => {
    list.append(17);
    list.append(30);
    list.append(25);
    list.append(5);
    const result = list.delete(5);
    expect(result).toBe(true);
  });

  test("should return false when deleting a non-existent node", () => {
    list.append(10);
    const result = list.delete(5);
    expect(result).toBe(false);
  });
});

describe("LinkedList - Search", () => {
  test("should return false when searching an empty list", () => {
    const result = list.search(5);
    expect(result).toBe(false);
  });

  test("should return true when node is found", () => {
    list.append(5);
    const result = list.search(5);
    expect(result).toBe(true);
  });

  test("should return false when node is not found", () => {
    list.append(5);
    const result = list.search(6);
    expect(result).toBe(false);
  });
});

describe("LinkedList - Length", () => {
  test("should return correct length after operations", () => {
    list.append(5);
    list.append(5);
    list.append(5);
    list.delete(5); // deletes first 5
    list.append(5);
    expect(list.getLength()).toBe(3);
  });
});

describe("LinkedList - Print", () => {
  test("should print all node values", () => {
    const logSpy = vi.spyOn(console, "log");
    list.append(5);
    list.append(4);
    list.append(9);
    list.print();

    expect(logSpy).toHaveBeenCalledWith(5);
    expect(logSpy).toHaveBeenCalledWith(4);
    expect(logSpy).toHaveBeenCalledWith(9);
  });

  test("should print 'empty list' when list is empty", () => {
    const logSpy = vi.spyOn(console, "log");
    list.print();
    expect(logSpy).toHaveBeenCalledWith("empty list");
  });
});
