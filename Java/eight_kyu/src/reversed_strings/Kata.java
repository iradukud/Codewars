package reversed_strings;

class Kata {

	public static String solution(String str) {
		String revStr = "";
		for (int i = str.length() - 1; i >= 0; i--) {
			revStr += str.charAt(i);
		}
		return revStr;
	}

}