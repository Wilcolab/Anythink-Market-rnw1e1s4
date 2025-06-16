/**
 * Converts a given string to camelCase format.
 *
 * Non-alphanumeric characters are replaced with spaces, and the resulting words are joined:
 * - The first word is lowercased.
 * - All subsequent words are capitalized.
 * - If the input is not a string, a TypeError is thrown.
 * - If the input is an empty string or contains no alphanumeric characters, an empty string is returned.
 *
 * @param {string} text - The input string to convert to camelCase.
 * @returns {string} The camelCase formatted string.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * to_camel_case('hello world'); // returns 'helloWorld'
 * to_camel_case('Hello_world-test'); // returns 'helloWorldTest'
 * to_camel_case(''); // returns ''
 */
  def to_camel_case(text):
        import re
        if not isinstance(text, str):
            raise TypeError("Input must be a string")
        # Replace non-alphanumeric characters with spaces
        text = re.sub(r'[^a-zA-Z0-9]+', ' ', text)
        # Split into words
        words = text.strip().split()
        if not words:
            return ''
        # First word lowercase, rest capitalized
        first = words[0].lower()
        rest = [w.capitalize() for w in words[1:]]
        return first + ''.join(rest)

