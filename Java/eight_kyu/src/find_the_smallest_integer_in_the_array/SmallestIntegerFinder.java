package find_the_smallest_integer_in_the_array;

class SmallestIntegerFinder {
	public static int findSmallestInt(int[] args) {
		int min = args[0];

		for (int num : args) {
			System.out.print(num);
			if (num < min) {
				min = num;
			}
		}

		return min;
	}
}