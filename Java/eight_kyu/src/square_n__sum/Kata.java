package square_n__sum;

class Kata {
	public static int squareSum(int[] n) {
		int sum = 0;

		for (int num : n) {
			sum += num * num;
		}
		return sum;
	}
}