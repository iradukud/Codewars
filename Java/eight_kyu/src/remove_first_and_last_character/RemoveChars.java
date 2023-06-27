package remove_first_and_last_character;

class RemoveChars {
	public static String remove(String str) {
		return str.substring(1, str.length() - 1);
	}
}