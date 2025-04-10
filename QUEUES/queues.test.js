import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { Queue } from "./queues";

let queue;

beforeEach(() => {
  queue = new Queue();
});

describe("queue -- enqueue", () => {
  test("should add new node at the tail of the queue", () => {
    queue.enqueue(15);
    queue.enqueue(25);
    queue.enqueue(35);
    expect(queue.front.data).toBe(15);
    expect(queue.rear.data).toBe(35);
    expect(queue.front.next.data).toBe(25);
  });
});
describe("queue -- dequeue", () => {
  test("should return false if the queue is empty", () => {
    expect(queue.dequeue()).toBe(false);
  });
  test("should remove node from the front of the queue", () => {
    queue.enqueue(15);
    queue.enqueue(25);
    queue.enqueue(35);
    expect(queue.dequeue()).toBe(15);
    expect(queue.length).toBe(2);
    expect(queue.front.data).toBe(25);
    expect(queue.rear.data).toBe(35);
  });
});
describe("queue -- peek", () => {
  test("should return the front node from the queue", () => {
    queue.enqueue(15);
    queue.enqueue(25);
    queue.enqueue(35);
    expect(queue.peek()).toBe(15);
  });
  test("should return false if the queue is empty", () => {
    expect(queue.peek()).toBe(false);
  });
});
describe("queue -- is empty", () => {
  test("should return true if the queue is empty", () => {
    expect(queue.isempty()).toBe(true);
  });
  test("should return false if the queue is not empty", () => {
    queue.enqueue(15);
    queue.enqueue(25);
    queue.enqueue(35);
    expect(queue.isempty()).toBe(false);
  });
});

describe("queue -- size", () => {
  test("should the size of the queue", () => {
    queue.enqueue(15);
    queue.enqueue(25);
    queue.enqueue(35);
    expect(queue.size()).toBe(3);
  });
});
