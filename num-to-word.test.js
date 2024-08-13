import { test, expect } from "bun:test";
import numToWord from "./num-to-word";

test("numToword(5) must return Five", () => {
  expect(numToWord(5)).toBe("Five");
});

test("numToword(20) must return Twenty", () => {
  expect(numToWord(20)).toBe("Twenty");
});

test("numToword(25) must return Twenty Five", () => {
  expect(numToWord(25)).toBe("Twenty Five");
});

test("numToword(87) must return Eighty Seven", () => {
  expect(numToWord(87)).toBe("Eighty Seven");
});

test("numToword(100) must return Hundred", () => {
  expect(numToWord(100)).toBe("Hundred");
});

test("numToword(200) must return Two Hundred", () => {
  expect(numToWord(200)).toBe("Two Hundred");
});

test("numToword(224) must return Two Hundred Twenty Four", () => {
  expect(numToWord(224)).toBe("Two Hundred Twenty Four");
});

test("numToword(578) must return Five Hundred Seventy Eight", () => {
  expect(numToWord(578)).toBe("Five Hundred Seventy Eight");
});

test("numToword(1000) must return One Thousand", () => {
  expect(numToWord(1000)).toBe("One Thousand");
});

test("numToword(3000) must return Three Thousand", () => {
  expect(numToWord(3000)).toBe("Three Thousand");
});

test("numToword(3524) must return Three Thousand Five Hundred Twenty Four", () => {
  expect(numToWord(3524)).toBe("Three Thousand Five Hundred Twenty Four");
});

test("numToword(35854) must return Thirty Five Thousand Eight Hundred Fifty Four", () => {
  expect(numToWord(35854)).toBe(
    "Thirty Five Thousand Eight Hundred Fifty Four"
  );
});

test("numToword(350000) must return Three Lakh Fifty Thousand ", () => {
  expect(numToWord(350000)).toBe("Three Lakh Fifty Thousand");
});

test("numToword(355576) must return Three Lakh Fifty Five Thousand Five Hundred Seventy Six", () => {
  expect(numToWord(355576)).toBe(
    "Three Lakh Fifty Five Thousand Five Hundred Seventy Six"
  );
});

test("numToword(305576) must return Three Lakh Five Thousand Five Hundred Seventy Six", () => {
  expect(numToWord(305576)).toBe(
    "Three Lakh Five Thousand Five Hundred Seventy Six"
  );
});

test("numToword(3500000) must return Thirty Five Lakh", () => {
  expect(numToWord(3500000)).toBe("Thirty Five Lakh");
});

test("numToword(3576878) must return Thirty Five Lakh Seventy Six Thousand Eight Hundred Seventy Eight ", () => {
  expect(numToWord(3576878)).toBe(
    "Thirty Five Lakh Seventy Six Thousand Eight Hundred Seventy Eight"
  );
});

test("numToword(3506878) must return Thirty Five Lakh  Six Thousand Eight Hundred Seventy Eight ", () => {
  expect(numToWord(3506878)).toBe(
    "Thirty Five Lakh Six Thousand Eight Hundred Seventy Eight"
  );
});

test("numToword(30000000) must return Three Crore ", () => {
  expect(numToWord(30000000)).toBe("Three Crore");
});

test("numToword(30506878) must return Three Crore Five Lakh  Six Thousand Eight Hundred Seventy Eight ", () => {
  expect(numToWord(30506878)).toBe(
    "Three Crore Five Lakh Six Thousand Eight Hundred Seventy Eight"
  );
});

test("numToword(39546878) must return Three Crore Ninety Five Lakh Forrty Six Thousand Eight Hundred Seventy Eight ", () => {
  expect(numToWord(39546878)).toBe(
    "Three Crore Ninety Five Lakh Forty Six Thousand Eight Hundred Seventy Eight"
  );
});

test("numToword(350,00,00,000) must return Three Hundred Fifty Crore ", () => {
  expect(numToWord(3500000000)).toBe("Three Hundred Fifty Crore");
});

test("numToword(358,96,53,214) must return Three Hundred Fifty Eight Crore Ninety Six Lakh Fifty Three Thousand Two Hundred Fourteen ", () => {
  expect(numToWord(3589653214)).toBe(
    "Three Hundred Fifty Eight Crore Ninety Six Lakh Fifty Three Thousand Two Hundred Fourteen"
  );
});

test("numToword(3548,96,53,214) must return Three Thousand Five Hundred Forty Eight Crore Ninety Six Lakh Fifty Three Thousand Two Hundred Fourteen ", () => {
  expect(numToWord(35489653214)).toBe(
    "Three Thousand Five Hundred Forty Eight Crore Ninety Six Lakh Fifty Three Thousand Two Hundred Fourteen"
  );
});
