import { beforeEach, describe, expect, should, test } from "vitest";
import { HashTable } from "./hashTable";

let table;
beforeEach(() => {
  table = new HashTable();
});

describe("HashTable - set method", () => {
  test("should return true after adding a new key-value pair", () => {
    expect(table.set("name", 50)).toBe(true);
  });

  test("should update the value if key already exists", () => {
    table.set("name", 50);
    table.set("name", 100);
    expect(table.get("name")).toBe(100);
  });
  test("should handle hash collisions correctly", () => {
    const key1 = "apple";
    const key2 = "ant"; // Same first character => same index

    table.set(key1, 10);
    table.set(key2, 20);

    expect(table.get(key1)).toBe(10); // Triggers the for loop and line 42
    expect(table.get(key2)).toBe(20);
  });
  test("should update the value for an existing key", () => {
    table.set("fruit", "apple");
    table.set("fruit", "banana"); // triggers `if (pair[0] === key)`
    expect(table.get("fruit")).toBe("banana");
  });
});

describe("HashTable - get method", () => {
  test("should retrieve the value for an existing key", () => {
    table.set("age", 30);
    expect(table.get("age")).toBe(30);
  });

  test("should return false for a non-existing key", () => {
    expect(table.get("unknown")).toBe(false);
  });
  test("should return false if the key is not found, even if the generated hashed key is present in the tabl", () => {
    table.set("106", 50);
    expect(table.get("115")).toBe(false);
  });
});
