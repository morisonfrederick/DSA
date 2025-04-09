import { describe, test, expect, beforeEach } from "vitest";
import { CircularSingly } from "./circularSinglyLinkedList";
let list;

beforeEach(() => {
  list = new CircularSingly();
});

describe("circular singly -- add nodes", () => {
  test("should add first node as head and point next to itself", () => {
    list.append(5);
    expect(list.head.data).toBe(5);
    expect(list.head.next).toBe(list.head);
  });
  test("should add second node next to head and link back to head", () => {
    list.append(25);
    list.append(12);
    expect(list.head.data).toBe(25);
    expect(list.head.next.data).toBe(12);
    expect(list.head.next.next).toBe(list.head);
  });
});
