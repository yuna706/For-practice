package org.opentutorials.java.test.bbu;
/* java: long sum(int[] a); (클래스 이름: Test)
a: 합을 구해야 하는 정수 n개가 저장되어 있는 배열 (0 ≤ a[i] ≤ 1,000,000, 1 ≤ n ≤ 3,000,000)
리턴값: a에 포함되어 있는 정수 n개의 합*/
public class test {
	
	public static int arrsum(int[] a) {
		int sum=0;
		
		for (int i = 0; i < a.length; i++) {
			sum += a[i];
		}
		return sum;
	}
	public static void main(String[] args) {
		
		int s[] = {1515,5,45,21,2,8,4,5,13,54};
		
		int b;
		b = arrsum(s);
		
		System.out.println(b);
		

	}

}
