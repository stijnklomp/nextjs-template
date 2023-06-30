const reverseString = (
	originalString: string,
	reversedString: string = "",
	i: number = 1
): string =>
	originalString.length === reversedString.length
		? reversedString
		: reverseString(
				originalString,
				reversedString + originalString[originalString.length - i],
				i + 1
		  ) // Tail-recursive (Tail call optimized function)

// Is word a palindrome
// 1) Split word
// 2) Reverse second half
// 3) Compare halfs

// Example:
// word: level
// 1) 1st half: le(v) && 2nd half: (v)el
// 2) 2nd half: el => le
// 3) 1st half: le == 2nd half: le
export const palindrome = (word: string): boolean =>
	word.substring(0, Math.floor(word.length / 2)) ==
	reverseString(word.substring(Math.ceil(word.length / 2)))

const word: string = "level"
console.log(`Is ${word} a palindrome: ${palindrome(word)}`)
