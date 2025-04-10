import { test, expect, describe, beforeEach, should } from "vitest";
import { Stacks } from "./stacks";

let stack;
beforeEach(() => {
  stack = new Stacks();
});

describe("stacks --push data", () => {
  test("should return true when adding data to the stack", () => {
    expect(stack.push(5)).toBe(true);
  });
  test("should return the correct length", () => {
    stack.push(25);
    stack.push(154);
    expect(stack.length).toBe(2);
  });
  test("should return false when stack is full", () => {
    stack.push(25);
    stack.push(154);
    stack.push(4654);
    stack.push(141);
    stack.push(52);
    expect(stack.push(5)).toBe(false);
  });
});

describe("stacks -- pop data", () => {
  test("should return false when the stack is empty", () => {
    expect(stack.pop()).toBe(false);
  });
  test("should remove and return  the last item and point the head to the second last node", () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    stack.push(40);
    stack.pop();
    expect(stack.head.data).toBe(30);
    expect(stack.pop()).toBe(30);
  });
  test("should return null for the head  if the last node is removed", () => {
    stack.push(10);
    stack.pop();
    expect(stack.head).toBe(null);
  });
});
describe("stacks -- peek ", () => {
  test("should return the value of  last node from the list", () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    stack.push(40);
    expect(stack.peek()).toBe(40);
  });
  test("should return null if the stack is empty", () => {
    expect(stack.peek()).toBe(null);
  });
});

describe("stacks -- is empty ", () => {
  test("should return false if the stack is not empty", () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    stack.push(40);
    expect(stack.isempty()).toBe(false);
  });
  test("should return true if the stack is empty", () => {
    expect(stack.isempty()).toBe(true);
  });
});

describe("stacks -- size ", () => {
  test("should return the size of  the stack", () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    stack.push(40);
    expect(stack.size()).toBe(4);
  });
  test("should return 0 if the stack is empty", () => {
    expect(stack.size()).toBe(0);
  });
});
