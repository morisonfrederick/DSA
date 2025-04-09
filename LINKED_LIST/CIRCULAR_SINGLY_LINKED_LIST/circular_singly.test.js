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

describe("circular singly -- search node", () => {
  test("should return false if the list is empty", () => {
    expect(list.search(5)).toBe(false);
  });
  test("should return true if the node is at the head", () => {
    list.append(5);
    expect(list.search(5)).toBe(true);
  });
  test("should return true if the node is present in the list", () => {
    list.append(5);
    list.append(25);
    list.append(125);
    expect(list.search(125)).toBe(true);
  });
  test("should return false if the node is not present in the list", () => {
    list.append(5);
    list.append(25);
    list.append(125);
    expect(list.search(15)).toBe(false);
  });
});
describe("circular singly -- delete node", () => {
  test("should return false if the list is empty", () => {
    expect(list.delete(5)).toBe(false);
  });
  test("should return true if the node deleted from the head", () => {
    list.append(5);
    expect(list.delete(5)).toBe(true);
  });
  test("should return true if the node deleted from the middle of the list", () => {
    list.append(5);
    list.append(25);
    list.append(12);
    expect(list.delete(25)).toBe(true);
    expect(list.head.data).toBe(5);
    expect(list.head.next.data).toBe(12);
  });
  test("should return true if the node deleted from the end of the list", () => {
    list.append(5);
    list.append(25);
    list.append(12);
    expect(list.delete(12)).toBe(true);
    expect(list.length).toBe(2);
  });
  test("should return false if the node is not found in the list", () => {
    list.append(5);
    list.append(25);
    list.append(12);
    expect(list.delete(88)).toBe(false);
    expect(list.length).toBe(3);
  });
});
