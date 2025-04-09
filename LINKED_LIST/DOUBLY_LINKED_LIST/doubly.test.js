import { beforeEach, describe, expect, test } from "vitest";
import DoublyList from "./doublyLinkedList";

let list;

beforeEach(() => {
  list = new DoublyList();
});

describe("DoublyList - append()", () => {
  test("should correctly append the first node when list is empty", () => {
    // Act
    list.append(5);

    // Assert
    expect(list.head).not.toBeNull();
    expect(list.tail).not.toBeNull();
    expect(list.head.data).toBe(5);
    expect(list.tail.data).toBe(5);
    expect(list.head.next).toBeNull();
    expect(list.head.prev).toBeNull();
    expect(list.length).toBe(1);
  });

  test("should correctly append multiple nodes and maintain proper links", () => {
    // Act
    list.append(10);
    list.append(20);
    list.append(30);

    // Assert
    expect(list.length).toBe(3);

    // Check head and tail
    expect(list.head.data).toBe(10);
    expect(list.tail.data).toBe(30);

    // Check links between nodes
    const second = list.head.next;
    const third = second?.next;

    expect(second?.data).toBe(20);
    expect(second?.prev?.data).toBe(10);
    expect(third?.data).toBe(30);
    expect(third?.prev?.data).toBe(20);
    expect(third?.next).toBeNull();
  });
});

describe("doubly linked list -- prepend", () => {
  test("should add nodes at the begining ", () => {
    list.prepend(78);
    list.prepend(478);
    list.prepend(5);

    expect(list.head.data).toBe(5);
    expect(list.head.next.next.data).toBe(78);
  });
});
