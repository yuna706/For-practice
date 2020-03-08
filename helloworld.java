package org.opentutorials.java.test.bbu;

public class helloworld {

	public static void main(String[] args) {
		
//		System.out.println(a)
		//구구단 출력
		
		for (int i = 1; i < 10; i++) {
			for (int j = 2; j < 10; j++) {
				System.out.print(j + " * " + i + " = " + i*j + "     ");
			}
			System.out.println();
		}
	}
}
