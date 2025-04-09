import { expect, test, describe, beforeEach } from "vitest";
import { CircularDoubly } from "./circularDoublyLinkedList";

let list;

beforeEach(() => {
  list = new CircularDoubly();
});

describe("circular doubly -- append", () => {
  test("should return true if the node is added to the list", () => {
    list.append(5);
    expect(list.head.data).toBe(5);
    expect(list.head.next).toBe(list.head);
    expect(list.head.prev).toBe(list.head);
    expect(list.length).toBe(1);
  });
  test("shold point to next and prev correctly", () => {
    list.append(5);
    list.append(25);
    list.append(35);
    expect(list.head.data).toBe(5);
    expect(list.head.next.next.next).toBe(list.head);
    expect(list.head.prev.data).toBe(35);
  });
});
describe("circular doubly -- delete", () => {
  test("should return true if the node is deleted from the list with single node", () => {
    list.append(5);
    list.delete(5);
    expect(list.head).toBe(null);
    expect(list.length).toBe(0);
  });
  test("should return true if the node is deleted from the list with multiple nodes", () => {
    list.append(5);
    list.append(25);
    list.append(125);
    list.delete(25);
    expect(list.head.data).toBe(5);
    expect(list.length).toBe(2);
    expect(list.head.next.data).toBe(125);
    expect(list.head.prev.data).toBe(125);
  });
  test("should return true if the node in the head is deleted from a long list", () => {
    list.append(5);
    list.append(25);
    list.append(125);
    list.delete(5);
    expect(list.head.data).toBe(25);
    expect(list.length).toBe(2);
    expect(list.head.next.data).toBe(125);
    expect(list.head.prev.data).toBe(125);
  });
  test("should return false when deleting from an empty list", () => {
    list.delete(5);
    expect(list.head).toBe(null);
    expect(list.length).toBe(0);
    expect(list.delete(25)).toBe(false);
  });
});
