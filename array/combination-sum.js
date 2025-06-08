/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  const results = [];

  function backtrack(remaining, combination, start) {
    if (remaining < 0) {
      return;
    }

    if (remaining === 0) {
      results.push([...combination]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      const candidate = candidates[i];

      combination.push(candidate);

      backtrack(remaining - candidate, combination, i);

      combination.pop();
    }
  }

  backtrack(target, [], 0);

  return results;
};

const candidates1 = [2, 3, 6, 7];
const target1 = 7;
console.log(combinationSum(candidates1, target1));

const candidates2 = [2, 3, 5];
const target2 = 8;
console.log(combinationSum(candidates2, target2));

// combinationSum([2,3], 5) is called.
// backtrack(5, [], 0) is called.
// i = 0 (candidate is 2).
// combination.push(2) -> combination is [2].
// Call backtrack(3, [2], 0).
// i = 0 (candidate is 2).
// combination.push(2) -> combination is [2, 2].
// Call backtrack(1, [2, 2], 0).
// i = 0 (candidate is 2).
// combination.push(2) -> combination is [2, 2, 2].
// Call backtrack(-1, [2, 2, 2], 0). It returns immediately (remaining < 0).
// combination.pop() -> combination is [2, 2].
// i = 1 (candidate is 3).
// combination.push(3) -> combination is [2, 2, 3].
// Call backtrack(-2, [2, 2, 3], 1). It returns.
// combination.pop() -> combination is [2, 2].
// Loop finishes. backtrack(1, ...) returns.
// combination.pop() -> combination is [2].
// i = 1 (candidate is 3).
// combination.push(3) -> combination is [2, 3].
// Call backtrack(0, [2, 3], 1).
// remaining === 0. SUCCESS! results.push([2, 3]). results is now [[2, 3]]. Returns.
// combination.pop() -> combination is [2].
// Loop finishes. backtrack(3, ...) returns.
// combination.pop() -> combination is [].
// i = 1 (candidate is 3).
// combination.push(3) -> combination is [3].
// Call backtrack(2, [3], 1).
// i = 1 (candidate is 3).
// combination.push(3) -> combination is [3, 3].
// Call backtrack(-1, [3, 3], 1). It returns.
// combination.pop() -> combination is [3].
// Loop finishes. backtrack(2, ...) returns.
// combination.pop() -> combination is [].
// Loop finishes.
// The final results array [[2, 3]] is returned. Wait, I missed one!
// Let's re-trace backtrack(3, [2], 0).
// ...after combination.pop() makes combination [2], the loop continues.
// i = 1, candidate 3.
// combination.push(3) -> [2, 3].
// backtrack(0, [2, 3], 1).
// Success! results.push([2, 3]). results is [[2, 2, 3]]. Oh, I see my manual trace error. The first success was [2, 2, 3] not [2, 3].
// Let's do the example from the prompt: candidates = [2, 3, 6, 7], target = 7.
// backtrack(7, [], 0)
// Try 2: backtrack(5, [2], 0)
// Try 2: backtrack(3, [2, 2], 0)
// Try 2: backtrack(1, [2, 2, 2], 0) -> leads to dead ends.
// Try 3: backtrack(0, [2, 2, 3], 1) -> SUCCESS! results is [[2, 2, 3]].
// Try 3: backtrack(2, [2, 3], 1) -> leads to dead ends.
// Try 6: backtrack(-1, ...) -> returns.
// Try 3: backtrack(4, [3], 1) -> leads to dead ends.
// Try 6: backtrack(1, [6], 2) -> leads to dead ends.
// Try 7: backtrack(0, [7], 3) -> SUCCESS! results is [[2, 2, 3], [7]].
// Final result: [[2, 2, 3], [7]]. The logic is correct.
