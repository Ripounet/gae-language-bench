package equalsums;

import java.util.*;

/**
 * Solution for problem "Equal Sums" from Google Code Jam 2012
 * 
 * See https://code.google.com/codejam/contest/1836486/dashboard#s=p2
 */
class EqualSums{
	static final int Y=6;
	
	static String solve(long[] c){
		int N=c.length;
		Random r = new Random();
		Map<Long, Subset> memo = new HashMap<>();
		for(;;){
			long s=0L;
			Subset subset = new Subset();
			for(int i=0;i<Y;i++){
				int j = i + 1 + r.nextInt(N-i-1);
				long tmp = c[i];
				c[i] = c[j];
				c[j] = tmp;
				s+=c[i];
				subset.buf[i] = c[i];
			}
			Subset other = memo.get(s);
			if(other==null)
				memo.put(s, subset);
			else{
				Arrays.sort(subset.buf);
				Arrays.sort(other.buf);
				if(!other.equals(subset))
					return other.nice(s) + "\n" + subset.nice(s);
			}
		}
		//return ":(";
	}
	
	static class Subset{
		long[] buf = new long[Y];
		
		@Override
		public boolean equals(Object obj){
			Subset other = (Subset)obj;
			for(int i=0;i<Y;i++)
				if( other.buf[i] != this.buf[i] ){
					return false;
				}
			return true;
		}
		
		// just skip hashcode() because we don't care
		
		@Override
		public String toString(){
			return Arrays.toString(buf);
		}

		public String nice(long total){
			if(buf.length==0)
				return "";
			StringBuilder sb = new StringBuilder();
			sb.append(buf[0]);
			for(int i=1;i<buf.length;i++){
				sb.append(" + ");
				sb.append(buf[i]);
			}
			sb.append(" = ");
			sb.append(total);
			return sb.toString();
		}
	}
	
	static long[][] sample(){
		return new long[][]{
				{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20},
				{120, 266, 858, 1243, 1657, 1771, 2328, 2490, 2665, 2894, 3117, 4210, 4454, 4943, 5690, 6170, 7048, 7125, 9512, 9600},
		};
	}
	
	static long[][] randomCases(int T, int N, long supremum){
		long[][] x = new long[T][N];
		Random r = new Random();
		for(int t=0;t<T;t++)
			for(int i=0;i<N;i++)
				x[t][i] = Math.abs(r.nextLong())%supremum;
		return x;
	}
}